//import style from './Form.module.css'
import { useState } from "react"
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
    weight: 0
  })
  const [error, setError] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0
  })

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


  return (
    <div>
        <form >
            <label>Name</label>
            <input type="text" name="name"  onChange={handlesChange}/>
            <br />
            <label>Image</label>
            <input type="text" name="image"  onChange={handlesChange}/>
            <br />
            <label>Hp</label>
            <input type="number" name="hp"  onChange={handlesChange}/>
            <br />
            <label>Attack</label>
            <input type="number" name="attack"  onChange={handlesChange}/>
            <br />
            <label>Defense</label>
            <input type="number" name="defense"  onChange={handlesChange}/>
            <br />
            <label>Speed</label>
            <input type="number" name="speed"  onChange={handlesChange}/>
            <br />
            <label>Height</label>
            <input type="number" name="heigth"  onChange={handlesChange}/>
            <br />
            <label>Weight</label>
            <input type="number" name="weigth"  onChange={handlesChange}/>
            <br />
            <button>CREATE</button>
        </form>
    </div>
  )
}

/*
Este formulario debe ser controlado completamente con JavaScritp. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:
Posibilidad de seleccionar/agregar varios tipos en simultáneo.
 */