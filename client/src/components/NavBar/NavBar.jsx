//import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div>
        <SearchBar/>
        <Link to="/home">
          <button>HOME</button>
        </Link>
        <Link to="/create">
          <button>CREATE BY POKEMON</button>
        </Link>
    </div>
  )
}
