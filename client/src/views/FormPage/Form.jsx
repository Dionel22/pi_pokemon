import style from './Form.module.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllTypes, createPokemons } from "../../redux/actions/actions"
import validate from "./validate"

export default function Form() {
  const [data, setData] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: []
  })
  const [error, setError] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: []
  })
  const dispatch = useDispatch()
  const allTypes = useSelector(state => state.types)

  useEffect(()=>{
    dispatch(getAllTypes())
  },[]);

  const handlesChange = (event) => {
    const { name, value } = event.target;
    setData({
        ...data,
        [name]: value
    })
    setError(validate({
        ...data,
        [name]: value
    }))
  }

  useEffect(()=>{
    handleTypes()
  },[data.types])

  const handleTypes = (event) => {
   // console.log(event.target.value)
   if (event) {
     const { value } = event.target;
     setData({
      ...data,
      types: [...data.types, value]
     })
     setError(validate({
      ...data,
      types: [...data.types, value]
     }))
   }
   setError(validate({
    ...data,
    types: [...data.types]
   }))
  }

  const deleteHandle = (value) => {
    setData({
      ...data,
      types: data.types.filter(e=>e !== value)
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
  }

//console.log(allTypes)
  return (
    <div className={style.div}>
        <form >
            <h2 className={style.create}>CREATE BY POKEMON</h2>
            <input className={style.name} type="text" name="name"  onChange={handlesChange}/>
            <label className={style.labelName}>Name</label>
             {error.name &&<p className={style.pname}>{error.name}</p>}
            <br />

            <input className={style.image} type="text" name="image"  onChange={handlesChange}/>
            <label className={style.labelImage}>Image</label>
            {error.image &&<p className={style.pimage}>{error.image}</p>}
            <br />
            <select onChange={handleTypes } >
            {allTypes?.map((tipo, i)=>{
                return <option key={i} value={tipo.name}>{tipo.name}</option>
            })}
            </select>
            {error.types && <p>{error.types}</p>}
            <br />
            <label>Hp</label>
            <input type="number" name="hp"  onChange={handlesChange}/>
            {error.hp &&<p>{error.hp}</p>}
            <br />
            <label>Attack</label>
            <input type="number" name="attack"  onChange={handlesChange}/>
            {error.attack &&<p>{error.attack}</p>}
            <br />
            <label>Defense</label>
            <input type="number" name="defense"  onChange={handlesChange}/>
            {error.defense &&<p>{error.defense}</p>}
            <br />
            <label>Speed</label>
            <input type="number" name="speed"  onChange={handlesChange}/>
            {error.speed &&<p>{error.speed}</p>}
            <br />
            <label>Height</label>
            <input type="number" name="height"  onChange={handlesChange}/>
            {error.height &&<p>{error.height}</p>}
            <br />
            <label>Weight</label>
            <input type="number" name="weight"  onChange={handlesChange}/>
            {error.weight &&<p>{error.weight}</p>}
            <br />
            <button onClick={handleSubmit} >CREATE</button>
        </form>
      {data.types?.map((tipo, i)=>{
        return <button key={i} onClick={()=>deleteHandle(tipo)}>{tipo}</button>
      })}
    </div>
  )
}

/*
Este formulario debe ser controlado completamente con JavaScritp. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:
Posibilidad de seleccionar/agregar varios tipos en simultáneo.
 */