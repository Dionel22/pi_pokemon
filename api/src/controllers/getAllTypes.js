const axios = require("axios");
const { Type } = require("../db");

const getAllType = async () => {
  let types = [];
  const response = (await axios.get(`https://pokeapi.co/api/v2/type`)).data
  //console.log("type", response.results)
  const allTypes = response.results.map((type) => {
    return {
        name: type.name
    }
  })
    allTypes.forEach(element => {
      Type.findOrCreate({where:{name: `${element.name}`}});
    });
 return types = [...types, ...allTypes]
}

/*
GET | /types
Obtiene un arreglo con todos los tipos de pokemones.
En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los tipos que encuentres en la API.
Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
*/

module.exports = getAllType;