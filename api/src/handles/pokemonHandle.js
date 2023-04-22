const { allPokemons, getPokemonByIdApi, getPokemonByBD, postPokemon } = require("../controllers/getAllPokemons")

//trae todo los pokemons y busca por nombre
const handlesApi = async (req, res) => {
  const { name } = req.query;
  try {
    const response = await allPokemons()
    if(name){
      let responseByName = response.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
      return res.status(200).json(responseByName)
    }
   // const response = await allPokemons()
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//traer por id
const handleById = async (req, res) => {
  const { id } = req.params;
  try {
    if (isNaN(id)) {
      let response = await getPokemonByBD(id);
      return res.status(200).json(response)
    }
    let response = await getPokemonByIdApi(id);
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//crea post
const handlePost = async (req, res) => {
  const {name, image, hp, attack, defense, speed, weight, height, types} = req.body;
  try {
      const response = await postPokemon(name, image, hp, attack, defense, speed, weight, height, types);
      return res.status(200).json(response)
   
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
    handlesApi,
    handleById,
    handlePost,
};