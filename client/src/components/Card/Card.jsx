import style from "./Card.module.css"
import { Link } from "react-router-dom"

export default function Card(props) {
  return (

    <Link to={`/detail/${props?.id}`} className={style.link}>
     {props.name ? <div className={style.content}>

     <div className={style.front}>
      <img className={style.imagen} src={props.image} alt={props.name} />
      </div>

      <div className={style.back}>
      <h2 className={style.name}>{props.name}</h2>
      {props.type.map((typ, i) => {
        return <h3 key={i} className={style.types}>{typ?.name}</h3>
      })}
      </div>
    </div>: <p>{props.msg}</p>}
    </Link>
  )
}
