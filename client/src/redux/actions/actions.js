import { ALL_POKEMON, GET_BY_ID, GET_BY_NAME, GET_BY_ORDEN_CREADO, GET_BY_ORDEN_ASC_O_DES, GET_BY_ORDEN_BY_ATTACK } from "./types";
import axios from "axios"

export const getAllPokemons = () => {
    return async (dispatch) =>{
    //console.log("hola")
    const response = (await axios.get(`http://localhost:3001/pokemons`)).data
    return dispatch({
        type: ALL_POKEMON,
        payload: response,
    })  
  }
}

export const getByName = (name) => {
  //  console.log("--",name)
   return async function (dispatch){
    const response = (await axios.get(`http://localhost:3001/pokemons?name=${name}`)).data
   // console.log(response)
    return dispatch({
        type: GET_BY_NAME,
        payload: response,
    })
   }
}

export const getById = (id) =>{
    //console.log(id)
    if (!isNaN(id)) {
      return async function (dispatch){
      const response = (await axios.get(`http://localhost:3001/pokemons/${id}`)).data
    //  console.log("res", response)
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

export const getOredenOrigenOfCreaye = (origen)=>{
  return{
    type: GET_BY_ORDEN_CREADO,
    payload: origen
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