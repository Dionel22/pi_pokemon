const axios = require("axios");
const { Pokemon, Type } = require("../db")
 /*const getAllPokemonApi = async () => {
  const array = [];
  let i = 1;
  while (true) {
  try {
  const responses = await Promise.all(
  Array.from({ length: 20 }, (_, j) => axios.get(`https://pokeapi.co/api/v2/pokemon/${i + j}`))
  )
  const infoApis = responses.map(({ data }) => ({
  id: data.id,
  name: data.name,
  image: data.sprites.front_default,
  hp: data.stats[0].base_stat,
  attack: data.stats[1].base_stat,
  defense: data.stats[2].base_stat,
  speed: data.stats[5].base_stat,
  weight: data.weight,
  height: data.height,
  types: data.types.map(e => e.type.name)
  }));
  array.push(...infoApis);
  i += 20;
  } catch (error) {
  break;
  }
  }
  return array;
  };
 */

const getAllPokemonApis = async () => {
 let array = [];
 //1281 pokemones
 // response.sprites.versions.generation-v.black-white.animated.front_default
 for (let i = 1; i <= 60; i++) {
    const response = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)).data
    const infoApi = {
        id: response.id,
        name: response.name,
        image: response.sprites.other.dream_world.front_default,
        hp: response.stats[0].base_stat,
        attack: response.stats[1].base_stat,
        defense: response.stats[2].base_stat,
        speed: response.stats[5].base_stat,
        weight: response.weight,
        height: response.height, 
        types: response.types.map(e => e.type)
    }
    array = [...array, infoApi]
 }
 return array
}

const getAllPokemonApi = async () =>{
  let allPokemons = []
  let primeraLlamada = (await axios(`https://pokeapi.co/api/v2/pokemon`)).data
  const all = primeraLlamada
  for (let i = 0; i < 2; i++) {
   // console.log(i)
      let segundaLlamada = (await axios(primeraLlamada.next)).data
      allPokemons = [...allPokemons,...segundaLlamada.results]
      primeraLlamada = segundaLlamada;
  }
  allPokemons = [...all.results, ...allPokemons]
  let results = await Promise.all(allPokemons.map(async(e)=> {
    const response = (await axios(e.url)).data
   // console.log(response)
    return{
        id: response.id,
        name: response.name,
        image: response.sprites.other.dream_world.front_default,
        hp: response.stats[0].base_stat,
        attack: response.stats[1].base_stat,
        defense: response.stats[2].base_stat,
        speed: response.stats[5].base_stat,
        weight: response.weight,
        height: response.height, 
        types: response.types?.map(e => e.type)
    }
  }))
  return results;
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

const allPokemons = async () => {
  const [infoApi, infoBD] = await Promise.all([getAllPokemonApi(), getAllPokemonBD()])
  return InfoPokemon = [...infoApi, ...infoBD]
}


/*
 GET | /pokemons/:idPokemon
Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
El pokemon es recibido por parámetro (ID).
Tiene que incluir los datos del tipo de pokemon al que está asociado.
Debe funcionar tanto para los pokemones de la API como para los de la base de datos.
*/

const getPokemonByIdApi = async (id) => {
   const response = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
   return {
    id: response.id,
    name: response.name,
    image: response.sprites.other.dream_world.front_default,
    hp: response.stats[0].base_stat,
    attack: response.stats[1].base_stat,
    defense: response.stats[2].base_stat,
    speed: response.stats[5].base_stat,
    weight: response.weight,
    height: response.height,
    types: response.types.map(e => e.type)
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
const resPokemon = await Pokemon.create({name, image, hp, attack, defense, speed, weight, height})
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