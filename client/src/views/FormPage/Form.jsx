//import style from './Form.module.css'
import { useState } from "react"

export default function Form() {
  const [data, setData] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    heigth: 0,
    weigth: 0
  })

  return (
    <div>
        <form >
            <label>Name</label>
            <input type="text" />
            <br />
            <label>Image</label>
            <input type="text" />
            <br />
            <label>Hp</label>
            <input type="number" />
            <br />
            <label>Attack</label>
            <input type="number" />
            <br />
            <label>Defense</label>
            <input type="number" />
            <br />
            <label>Speed</label>
            <input type="number" />
            <br />
            <label>Heigth</label>
            <input type="number" />
            <br />
            <label>Weigth</label>
            <input type="number" />
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