const { allPokemons, getPokemonByIdApi, getPokemonByBD, postPokemon } = require("../controllers/getAllPokemons")

//trae todo los pokemons y busca por nombre
const handlesApi = async (req, res) => {
  const { name } = req.query;
  
  try {
    const response = await allPokemons();
    
    if (name) {
      const responseByName = response.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
      
      if (responseByName.length === 0) {
        return res.status(200).json({ msg: `No se ha encontrado ningún pokémon con el nombre "${name}"` });
      } else {
        return res.status(200).json(responseByName);
      }
    }
    
    return res.status(200).json(response);
  } catch (error) {
    
    return res.status(400).json({ msg: error.message });
  }
}


//traer por id
const handleById = async (req, res) => {
  const { id } = req.params;
  try {
    if (isNaN(id)) {
      let responseByBD = await getPokemonByBD(id);
      return res.status(200).json(responseByBD)
    }
    let responseByIdApi = await getPokemonByIdApi(id);
    res.status(200).json(responseByIdApi)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//crea post
const handlePost = async (req, res) => {
  const {name, image, hp, attack, defense, speed, weight, height, types} = req.body;
  try {
      const response = await postPokemon(name, image, hp, attack, defense, speed, weight, height, types);
      res.status(200).json(response)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
    handlesApi,
    handleById,
    handlePost,
};