const axios = require("axios");
const { Pokemon, Type } = require("../db")

const getAllPokemonApi = async () =>{
  
  let allPokemons = [];
  let primeraLlamada = (await axios.get(`https://pokeapi.co/api/v2/pokemon`)).data
  const primaryApi = primeraLlamada;

  for (let i = 0; i < 2; i++) {
      let segundaLlamada = (await axios.get(primeraLlamada.next)).data
      allPokemons = [...allPokemons,...segundaLlamada.results]
      primeraLlamada = segundaLlamada;
  }
  allPokemons = [...primaryApi.results, ...allPokemons];
 
  let results = await Promise.all(allPokemons.map(async(data)=> {
    const response = (await axios.get(data.url)).data
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

const getAllPokemonBD = async () => {
    const allPokemon = await Pokemon.findAll({include: Type})
    return allPokemon;
}

//trae los pokemones
const allPokemons = async () => {
  const [infoApi, infoBD] = await Promise.all([getAllPokemonApi(), getAllPokemonBD()])
  return InfoPokemon = [...infoApi, ...infoBD]
}

//busca por id en la Api
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
//busca por id en la base de datos
const getPokemonByBD = async (id) => {
    const response = await Pokemon.findByPk(id,{include: Type});
    return response;
}

//crea el pokemon
const postPokemon = async (name, image, hp, attack, defense, speed, weight, height, types) => {
//Esta línea de código crea un nuevo registro en la base de datos utilizando el modelo 
const resPokemon = await Pokemon.create({name, image, hp, attack, defense, speed, weight, height})
//almacena el resultado de la consulta de tipos.
 const resType = await Type.findAll({
    where: {
        name: types
    }
 })
 //para asociar los tipos encontrados en la consulta anterior al Pokémon recién creado. Esto establece la relación entre el Pokémon y los tipos en la base de datos.
 await resPokemon.addType(resType)
 return resPokemon;
}

module.exports = {
    allPokemons,
    getPokemonByIdApi,
    getPokemonByBD,
    postPokemon,
}