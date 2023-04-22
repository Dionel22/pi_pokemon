const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerPokemons = require("./pokemonsRoutes")
const routerTypes = require("./typesRoutes")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", routerPokemons)
router.use("/types", routerTypes)


module.exports = router;
