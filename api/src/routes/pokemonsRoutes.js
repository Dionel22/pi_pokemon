const { Router } = require("express")
const { handlesApi, handleById, handlePost } = require("../handles/pokemonHandle")

const routerPokemons = Router()


  routerPokemons.get("/", handlesApi)
  routerPokemons.get("/:id", handleById)
  routerPokemons.post("/", handlePost)


module.exports = routerPokemons;