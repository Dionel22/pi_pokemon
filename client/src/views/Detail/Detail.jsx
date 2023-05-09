import style from "./Detail.module.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getById } from "../../redux/actions/actions"
import { Link } from "react-router-dom"
 
export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const detail = useSelector(state=> state.detail)

  useEffect(()=>{
    dispatch(getById(id))
  },[dispatch])

  return (
    <div className={style.div} >
        <h2 className={style.id}>ID: {detail[0]?.id}</h2>
        <Link to="/home"><button className={style.boton}>X</button></Link>
        <h2 className={style.name}>{detail[0]?.name}</h2>
        <p className={style.hp}>HP: {detail[0]?.hp}</p>
     
        <img className={style.image} src={detail[0]?.image} alt={detail[0]?.name} />
      
        <p className={style.attack}>ATTACK: {detail[0]?.attack}</p>
        <p className={style.defense}>DEFENSE: {detail[0]?.defense}</p>
        <p className={style.speed}>SPEED: {detail[0]?.speed}</p>
        <p className={style.heigth}>HEIGHT: {detail[0]?.height}m</p>
        <p className={style.weigth}>WEIGHT: {detail[0]?.weight}kg</p>
        {detail[0]?.types.map((e, i)=>{
            return <p key={i} className={style.types}>{e.name}</p>
        }) }
    </div>
  )
}
