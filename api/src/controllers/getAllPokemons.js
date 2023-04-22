const axios = require("axios");
const { Pokemon, Type } = require("../db")

const getAllPokemonApi = async () => {
 let array = [];
 //1281 pokemones
 for (let i = 1; i <= 20; i++) {
    const response = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)).data
    let infoApi = {
        id: response.id,
        name: response.name,
        image: response.sprites.front_default,
        hp: response.stats[0].base_stat,
        attack: response.stats[1].base_stat,
        defense: response.stats[2].base_stat,
        speed: response.stats[5].base_stat,
        weight: response.weight,
        height: response.height,
        types: response.types.map(e => e.type.name)
    }
    array = [...array, infoApi]
 }
 //console.log("res", array)
 return array
}
/*
GET | /pokemons/name?="..."
Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por query.
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el pokemon, debe mostrar un mensaje adecuado.
Debe buscar tanto los de la API como los de la base de datos.
 */
const getAllPokemonBD = async () => {
    const allPokemon = await Pokemon.findAll({include: Type})
    return allPokemon;
}

const allPokemons = async (name) => {
  const infoApi = await getAllPokemonApi();
  const infoBD = await getAllPokemonBD();
  const allPokemon = [...infoApi, ...infoBD]
  if(name){
    let pokefilter = allPokemon.filter((poke) => poke.name.toLowerCase() === name.toLowerCase());
    if (pokefilter.length) return pokefilter
  }else{
    return allPokemon;
  }
}

/*
 GET | /pokemons/:idPokemon
Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
El pokemon es recibido por parámetro (ID).
Tiene que incluir los datos del tipo de pokemon al que está asociado.
Debe funcionar tanto para los pokemones de la API como para los de la base de datos.
*/

const getPokemonByIdApi = async (id) => {
    console.log("hola")
   const response = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
   return {
    id: response.id,
    name: response.name,
    image: response.sprites.front_default,
    hp: response.stats[0].base_stat,
    attack: response.stats[1].base_stat,
    defense: response.stats[2].base_stat,
    speed: response.stats[5].base_stat,
    weight: response.weight,
    height: response.height,
    types: response.types.map(e => e.type.name)
   }
}

const getPokemonByBD = async (id) => {
    const response = await Pokemon.findByPk(id,{include: Type});
    return response;
}

/*
📍 POST | /pokemons
Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
Toda la información debe ser recibida por body.
Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados (debe poder relacionarse al menos con dos).
*/

const postPokemon = async (name, image, hp, attack, defense, speed, weight, height, types) => {
const resPokemon = await Pokemon.create({name, image, hp, attack, defense, speed, weight, height, types})
 const resType = await Type.findAll({
    where: {
        name: types
    }
 })
 await resPokemon.addType(resType)
 return resPokemon;
}

module.exports = {
    allPokemons,
    getPokemonByIdApi,
    getPokemonByBD,
    postPokemon,
}