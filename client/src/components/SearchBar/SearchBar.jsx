import style from "./SearchBar.module.css";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions/actions";

export default function SearchBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch()

  const handlesInput = (e) =>{
    setName(e.target.value)
  }

  const handlesSubmit = (e) => {
    e.preventDefault()
    dispatch(getByName(name))
    setName("")
  }

  return (
    <div>
        <input className={style.input} type="text" placeholder="busqueda..." value={name} onChange={handlesInput} />
        <button className={style.boton} onClick={handlesSubmit}>Buscar</button>
    </div>
  )
}
