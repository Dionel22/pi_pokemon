import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import rootReducer from "../reducer/reducer" 

 
const store = createStore(
    rootReducer,
    //El middleware thunk permite que los creadores de acciones devuelvan funciones en lugar de objetos, lo que permite acciones asíncronas y acciones que despachan múltiples acciones.
    applyMiddleware(thunk))

export default store;