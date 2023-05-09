import { ALL_POKEMON, CREATE, GET_BY_ID, GET_BY_NAME, GET_BY_ORDEN_ASC_O_DES, GET_BY_ORDEN_BY_ATTACK, GET_BY_ORDEN_CREADO, TYPES } from "../actions/types";

const inicialState = {
    allPokemons: [],
    allPokemonsCopy: [],
    detail: [],
    types: []
}

const reducer = (state = inicialState, action) => {
    switch (action.type) {
        case ALL_POKEMON:
            return{
                ...state,
                allPokemons: action.payload,
                allPokemonsCopy: action.payload,
            }
        case GET_BY_NAME:
            //console.log(action.payload)
            return{
                ...state,
                allPokemons: action.payload
            }
        case GET_BY_ID:
            const getById = action.payload.length >= 6 ? state.allPokemonsCopy.filter((e)=> e.id === action.payload) : [action.payload];
            //console.log("id", getById)
            return{
                ...state,
                detail: getById,
            }
        case GET_BY_ORDEN_CREADO:
            const filtrarOrigen = action.payload === "Origen" ? state.allPokemonsCopy.filter((poke)=> !isNaN(poke.id)? poke.id :null): state.allPokemonsCopy.filter((poke)=> isNaN(poke.id)? poke.id :null)
            //console.log("fillll", filtrarOrigen)
            return{
                ...state,
                allPokemons: filtrarOrigen,
            }
        case GET_BY_ORDEN_ASC_O_DES:
            const orderCopy =  [...state.allPokemonsCopy]
            const order = orderCopy.sort((a, b)=>{
               if (a.name < b.name) {
                 return action.payload === "ascendente" ? -1: 1
                }
                 if (a.name > b.name) {
                   if (action.payload === "descendente") {
                     return -1
                    }
                 return 1 
                }
                return 0
             }) 
            return{
            ...state,
            allPokemons: order
            }
        case GET_BY_ORDEN_BY_ATTACK:
            const attackCopy =  [...state.allPokemonsCopy]
            const attack = attackCopy.sort((a, b)=>{
               if (a.attack < b.attack) {
                 return action.payload === "ataqueDebil" ? -1: 1
                }
                 if (a.attack > b.attack) {
                   if (action.payload === "ataqueFuerte") {
                     return -1
                    }
                 return 1 
                }
                return 0
             })
             return{
                ...state,
                allPokemons: attack
             }
        case CREATE:
            return{
                ...state
            }
        case TYPES:
            return{
                ...state,
                types: action.payload,
            }
    
        default:
           return{...state}
    }
}

export default reducer;