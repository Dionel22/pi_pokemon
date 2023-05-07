import style from "./LandingPage.module.css"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <div>
        <Link to="/home" className={style.link}>
            <button className={style.boton}>home</button>
        </Link>
    </div>
  )
}
