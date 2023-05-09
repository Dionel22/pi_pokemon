import style from "./LandingPage.module.css"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <div>
      <p className={style.pas}>¡Atrápalos Todos!</p>
      <p className={style.paso}>Explora nuestra colección de Pokémon y encuentra tus favoritos.</p>
        <Link to="/home" className={style.link}>
            <button className={style.boton} >Explorar</button>
        </Link>
    </div>
  )
}
