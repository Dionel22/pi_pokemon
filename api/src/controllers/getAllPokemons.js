const axios = require("axios");
const { Pokemon, Type } = require("../db")

/*
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
}*/

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

const getAllPokemonBD = async () => {
    const allPokemon = await Pokemon.findAll({include: Type})
    return allPokemon;
}

//trae los pokemones
const allPokemons = async () => {
  const [infoApi, infoBD] = await Promise.all([getAllPokemonApi(), getAllPokemonBD()])
  return InfoPokemon = [...infoApi, ...infoBD]
}

//busca por id
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

//crea el pokemon
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