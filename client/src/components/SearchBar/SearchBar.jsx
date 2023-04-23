//import style from "./SearchBar.module.css";
//SearchBar: un input de búsqueda para encontrar pokemon por nombre. La búsqueda debe ser exacta, por lo que sólo lo encontrará si se lo busca con su nombre completo.
export default function SearchBar() {
  return (
    <div>
        <input type="text" placeholder="busqueda..." />
        <button>Buscar</button>
    </div>
  )
}
