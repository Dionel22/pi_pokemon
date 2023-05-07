/*Paginado: el listado de pokemones se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 12 pokemones por página.*/

export default function Paginado(props) {

  
  let array = [];
  for (let i = 0; i <= Math.ceil(props.videoGames/ props.currentPagina -1); i++) {
      array.push(i+1);
      //console.log(i)
  }
 
  const handlePag = (event) => {
      //el numero del boton
      const {value} =event.target;
      props.paginas(value)
     
  }
  return (
    <div>
       {array && array.map((e, i)=> <button  key={i} onClick={handlePag} value={e}>{e}</button>)}
    </div>
  )
}
