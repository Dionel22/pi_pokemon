import { ALL_POKEMON, GET_BY_ID, GET_BY_NAME, GET_BY_ORDEN_CREADO, GET_BY_ORDEN_ASC_O_DES, GET_BY_ORDEN_BY_ATTACK, CREATE, TYPES } from "./types";
import axios from "axios"

export const getAllPokemons = () => {
    return async (dispatch) =>{
    const response = (await axios.get(`http://localhost:3001/pokemons`)).data
    return dispatch({
        type: ALL_POKEMON,
        payload: response,
    })  
  }
}

export const getAllTypes = ()=>{
  return async function(dispatch){
    const response = (await axios(`http://localhost:3001/types`)).data
    return dispatch({
      type: TYPES,
      payload: response
    })
  }
}

export const getByName = (name) => {
   return async function (dispatch){
    const response = (await axios.get(`http://localhost:3001/pokemons?name=${name}`)).data
    return dispatch({
        type: GET_BY_NAME,
        payload: response,
    })
   }
}

export const getById = (id) =>{
    if (!isNaN(id)) {
      return async function (dispatch){
      const response = (await axios.get(`http://localhost:3001/pokemons/${id}`)).data
      return dispatch({
        type: GET_BY_ID,
        payload: response,
      })
    }
  }
  return{
    type: GET_BY_ID,
    payload: id,
  }
}

export const getOredenOrigenOfCreaye = (value)=>{
  return{
    type: GET_BY_ORDEN_CREADO,
    payload: value,
  }
}

export const getOrdenAscODes = (value) => {
  return{
    type: GET_BY_ORDEN_ASC_O_DES,
    payload: value,
  }
}

export const getOrdenByAttack = (value) => {
  return{
    type: GET_BY_ORDEN_BY_ATTACK,
    payload: value,
  }
}

export const createPokemons = (body) => {
  return async function(dispatch){
    await axios.post(`http://localhost:3001/pokemons`, body)
    return dispatch({
      type: CREATE,
    })
  }
}