//import style from "./SearchBar.module.css";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions/actions";
//SearchBar: un input de búsqueda para encontrar pokemon por nombre. La búsqueda debe ser exacta, por lo que sólo lo encontrará si se lo busca con su nombre completo.
export default function SearchBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch()

  const handlesInput = (e) =>{
    const { value } = e.target;
    setName(value)
  }

  const handlesSubmit = (e) => {
    e.preventDefault()
    dispatch(getByName(name))
    setName("")
  }

  return (
    <div>
        <input type="text" placeholder="busqueda..." value={name} onChange={handlesInput} />
        <button onClick={handlesSubmit}>Buscar</button>
    </div>
  )
}
