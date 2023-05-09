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
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: ""
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
    if (Object.keys(error).length === 0) {
      alert("sea creado tu pokemon!!")
      dispatch(createPokemons(data))
     return setData({
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
    }
    alert("falta datos que tiene que completar!!")
  }

//console.log(allTypes)
  return (
    <div className={style.div}>
        <form >
            <h2 className={style.create}>CREATE BY POKEMON</h2>
            {/*NAME */}
            <input className={style.name} type="text" name="name" value={data.name} onChange={handlesChange}/>
            <label className={style.labelName}>Name</label>
             {error.name &&<p className={style.pname}>{error.name}</p>}
            <br />
            {/*IMAGE */}
            <input className={style.image} type="text" name="image" value={data.image}  onChange={handlesChange}/>
            <label className={style.labelImage}>Image</label>
            {error.image &&<p className={style.pimage}>{error.image}</p>}
            <br />
            {/*HP */}
            <input className={style.hp} type="number" name="hp" value={data.hp}  onChange={handlesChange}/>
            <label className={style.labelHp}>Hp</label>
            {error.hp &&<p className={style.php}>{error.hp}</p>}
            <br />
            {/*ATTACK */}
            <input className={style.attack} type="number" name="attack" value={data.attack}  onChange={handlesChange}/>
            <label className={style.labelAttack}>Attack</label>
            {error.attack &&<p className={style.pattack}>{error.attack}</p>}
            <br />
            {/*DEFENSE */}
            <input className={style.defense} type="number" name="defense" value={data.defense} onChange={handlesChange}/>
            <label className={style.labelDefense}>Defense</label>
            {error.defense &&<p className={style.pdefense}>{error.defense}</p>}
            <br />
            {/*SPEED */}
            <input className={style.speed} type="number" name="speed" value={data.speed} onChange={handlesChange}/>
            <label className={style.labelSpeed}>Speed</label>
            {error.speed &&<p className={style.pspeed}>{error.speed}</p>}
            <br />
            {/*HEIGTH */}
            <input className={style.heigth} type="number" name="height" value={data.height} onChange={handlesChange}/>
            <label className={style.labelHeigth}>Height</label>
            {error.height &&<p className={style.pheigth}>{error.height}</p>}
            <br />
            {/*WEIGTH */}
            <input className={style.weigth} type="number" name="weight" value={data.weight} onChange={handlesChange}/>
            <label className={style.labelWeigth}>Weight</label>
            {error.weight &&<p className={style.pweigth}>{error.weight}</p>}
            {/*TYPES */}
            <select className={style.labelTypes} onChange={handleTypes } >
            {allTypes?.map((tipo, i)=>{
                return <option key={i} value={tipo.name}>{tipo.name}</option>
            })}
            </select>
            {error.types && <p className={style.ptypes}>{error.types}</p>}

            <br />
            <button className={style.boton} onClick={handleSubmit} >CREATE</button>
        </form>
      {data.types?.map((tipo, i)=>{
        return <button className={style.types} key={i} onClick={()=>deleteHandle(tipo)}>{tipo}</button>
      })}
    </div>
  )
}

/*
Este formulario debe ser controlado completamente con JavaScritp. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:
Posibilidad de seleccionar/agregar varios tipos en simultáneo.
 */