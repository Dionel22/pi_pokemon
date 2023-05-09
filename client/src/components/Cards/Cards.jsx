import style from "./Cards.module.css"
import Card from "../Card/Card"

export default function Cards(props) {
  console.log("props",props.allPokemon)
  return (
    <div className={style.card_list}>
       {typeof props.allPokemon[0] === "object" ? props.allPokemon.map((poke)=>{
        return  <Card key={poke?.id} id={poke?.id} name={poke?.name} image={poke?.image} type={poke?.types} />
       }):<Card msg={props.allPokemon} />}
    </div>
  )
}
