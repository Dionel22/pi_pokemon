import style from "./Home.module.css"
import { useEffect, useState } from "react"
import { getAllPokemons, getOrdenAscODes, getOrdenByAttack, getOredenOrigenOfCreaye } from "../../redux/actions/actions"
import { useDispatch, useSelector } from "react-redux"
import Cards from "../../components/Cards/Cards"
//import Paginado from "../../components/Paginado/Paginado"

export default function Home() {
  const dispatch = useDispatch()
  
  const allPokemon = useSelector(state => state.allPokemons)
  
  // Codigo //////////////////////////////////////////77//
  const [page, setPage] = useState(1)
  const [pokemonPage, setPokemonPage] = useState([])
    
  useEffect(()=>{
    setPage(1)
    setPokemonPage(allPokemon.slice(0, 12)) 
   }, [allPokemon])

   const changePage = (page) => {
      if (page === 1) {
        setPage(1)
        setPokemonPage(allPokemon.slice(0, 12)) 
      } else {
        setPage(page)
        setPokemonPage(allPokemon.slice(
          12 * (page - 1),
          12 * page
        )) ;
      }
    }
  const totalPaginas = Math.floor(allPokemon.length / 12)
  // Fin de Codigo ///////////////////////////////////
  
  useEffect(()=>{
      dispatch(getAllPokemons())

   },[dispatch])



   const handleOrdenCreate = (e)=>{
     const { value } = e.target;
     dispatch(getOredenOrigenOfCreaye(value))
   }
   const handleOrdenAscODes = (e)=>{
     const { value } = e.target;
     dispatch(getOrdenAscODes(value))
   }
   const handleOrdenAttack = (e)=>{
     const { value } = e.target;
     dispatch(getOrdenByAttack(value))
   }

   
///////////Funcion que crea los botones del paginado ///////////////////////////////////7
  const buttons = [];
  for (let i = 1; i <= totalPaginas; i++) {
    buttons.push(
      <button className="" key={i} onClick={() => changePage(i)}>{i}</button>
    );
  }
/////////////////////////////////////////////////////7

   
  return (
    <div>
      {/*ORDEN POR API O BD */}
      <select className={style.boton} onChange={handleOrdenCreate}>
        <option value="Origen">Original</option>
        <option value="Creado">Creado</option>
      </select>

      {/*ORDEN POR ASC O DEC */}
      <select className={style.boton} onChange={handleOrdenAscODes} >
        <option value="ascendente">ascendente</option>
        <option value="descendente">descendente</option>
      </select>
      {/*ORDEN POR ATTACK */}
      <select className={style.boton} onChange={handleOrdenAttack} >
        <option value="ataqueFuerte">Fuerte</option>
        <option value="ataqueDebil">Debil</option>
      </select>

{/*cuando ahi anidado sienpre piense en recurcion */}
      

      {/* <Cards allPokemon={allPokemon}/> */}
      
      
      {/*Renderiza los botones*/}
      {buttons}
      {/*Renderiza los botones*/}
      
      
      <Cards allPokemon={pokemonPage}/>
     
    </div>
  )
}
