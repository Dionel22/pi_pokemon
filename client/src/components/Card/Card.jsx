import style from "./Card.module.css"
import { Link } from "react-router-dom"

export default function Card(props) {
  return (
<div>
   {props.name ? <Link to={`/detail/${props.id}`} className={style.link}>
      <div className={style.content}>

      <div className={style.front}>
      <img className={style.imagen} src={props.image} alt={props.name} />
      </div>

      <div className={style.back}>
      <h2 className={style.name}>{props.name}</h2>
      {props.type.map((types, i) => {
        return <h3 key={i} className={style.types}>{types?.name}</h3>
      })}
      </div>
    </div>
    </Link>: <p className={style.p}>{props.msg}</p>}
    </div>
  )
}
