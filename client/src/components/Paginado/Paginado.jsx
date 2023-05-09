import style from "./Paginado.module.css"

export default function Paginado(props) {

  
  let array = [];
  for (let i = 0; i <= Math.ceil(props.pokemons / props.currentPagina -1); i++) {
      array.push(i+1);
  }
 
  const handlePag = (event) => {
      //el numero del boton
      const {value} = event.target;
      props.paginas(value)
     
  }
  return (
    <div>
       {array && array.map((e, i) => <button className={style.boton} key={i} onClick={handlePag} value={e}>{e}</button>)}
    </div>
  )
}
