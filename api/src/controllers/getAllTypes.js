const axios = require("axios");
const { Type } = require("../db");

const getAllType = async () => {
  let types = [];
  const response = (await axios.get(`https://pokeapi.co/api/v2/type`)).data
  const allTypes = response.results.map((type) => {
    return { name: type.name }
  })
    allTypes.forEach(element => {
      Type.findOrCreate({where:{name: `${element.name}`}});
    });
 return types = [...types, ...allTypes]
}

module.exports = getAllType;