import style from "./Home.module.css"
import { useEffect, useState } from "react"
import { getAllPokemons, getOrdenAscODes, getOrdenByAttack, getOredenOrigenOfCreaye } from "../../redux/actions/actions"
import { useDispatch, useSelector } from "react-redux"
import Cards from "../../components/Cards/Cards"
import Paginado from "../../components/Paginado/Paginado"

export default function Home() {
  const dispatch = useDispatch()
  const allPokemon = useSelector(state => state.allPokemons)
  const [pagina, setPagina] = useState(1);
  const [currentPagina, setCurrentPagina] = useState(12);
  const nextPagina = pagina * currentPagina;
  const lastPagina = nextPagina - currentPagina;
  const currentGames = typeof allPokemon[0] === "object" ? allPokemon.slice(lastPagina,nextPagina): allPokemon

  const paginas = (num) => {
    setPagina(num)
  }
  
  // Codigo //////////////////////////////////////////77//
  //const [page, setPage] = useState(1)
 // const [pokemonPage, setPokemonPage] = useState([])
    
/*  useEffect(()=>{
    setPage(1)
    setPokemonPage(allPokemon.slice(0, 12)) 
   }, [allPokemon])*/

  /* const changePage = (page) => {
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
    }*/
  //const totalPaginas = Math.floor(allPokemon.length / 12)
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
   const handleReset = (e)=>{
     e.preventDefault()
     dispatch(getAllPokemons())
   }

   
///////////Funcion que crea los botones del paginado ///////////////////////////////////7
 /* const buttons = [];
  for (let i = 1; i <= totalPaginas; i++) {
    buttons.push(
      <button className="" key={i} onClick={() => changePage(i)}>{i}</button>
    );
  }*/
/////////////////////////////////////////////////////7

   
  return (
    <div>
      {/*ORDEN POR API O BD */}
      <select className={style.boton} defaultValue ='msg' onChange={handleOrdenCreate}>
        <option value="msg" disabled>Created In</option>
        <option value="Origen">Api</option>
        <option value="Creado">Data Base</option>
      </select>

      {/*ORDEN POR ASC O DEC */}
      <select className={style.boton} onChange={handleOrdenAscODes} >
        <option value="ascendente">A-Z</option>
        <option value="descendente">Z-A</option>
      </select>

      {/*ORDEN POR ATTACK */}
      <select className={style.boton} defaultValue ='attack' onChange={handleOrdenAttack}>
        <option  value="attack" disabled>Attack</option>
        <option value="ataqueFuerte">Top Attack</option>
        <option value="ataqueDebil">Low Attack</option>
      </select>
 
      <button className={style.boton} onClick={handleReset} >Reset</button>

{/*cuando ahi anidado sienpre piense en recurcion */}
      

      {/* <Cards allPokemon={allPokemon}/> */}
      
      
      {/*Renderiza los botones*/}
      {/*buttons*/}
      {/*Renderiza los botones*/}
      <Paginado currentPagina={currentPagina} pokemons={allPokemon.length} paginas={paginas}/>
      
      <Cards allPokemon={currentGames}/>
     
    </div>
  )
}
