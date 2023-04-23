//import style from "./LandingPage.module.css"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <div>
        <Link to="/home">
            <button>home</button>
        </Link>
    </div>
  )
}
