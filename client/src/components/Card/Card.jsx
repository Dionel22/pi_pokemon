import style from "./Card.module.css"
import { Link } from "react-router-dom"

export default function Card({id, name, image, type}) {
  return (
    <Link to={`/detail/${id}`} className={style.link}>
    <div className={style.divs}>
      <h2 className={style.name}>{name}</h2>
      <img className={style.imagen} src={image} alt={name} />
      {type.map((typ, i) => {
        return <h3 key={i} className={style.types}>{typ?.name}</h3>
      })}
    </div>
    </Link>
  )
}
