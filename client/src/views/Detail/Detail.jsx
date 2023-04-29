//import style from "./Detail.module.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getById } from "../../redux/actions/actions"

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const detail = useSelector(state=> state.detail)

  useEffect(()=>{
    dispatch(getById(id))
  },[dispatch])

  console.log("de",detail)
  return (
    <div>
        <h2>{id}</h2>
        <h2>NAME: {detail[0]?.name}</h2>
        <p>HP: {detail[0]?.hp}</p>
        <img src={detail[0]?.image} alt={detail[0]?.name} />
        <p>ATTACK: {detail[0]?.attack}</p>
        <p>DEFENSE: {detail[0]?.defense}</p>
        <p>SPEED: {detail[0]?.speed}</p>
        <p>HEIGHT: {detail[0]?.height}</p>
        <p>WEIGHT: {detail[0]?.weight}</p>
        {detail[0]?.types.map((e, i)=>{
            return <p key={i}>{e}</p>
        })}
    </div>
  )
}
