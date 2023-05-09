import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div className={style.div}>
        <Link to="/home"><button className={style.favorito}>HOME</button></Link>
        <Link to="/create"><button className={style.favorito}>CREATE BY POKEMON</button></Link>
        <SearchBar/>
    </div>
  )
}
