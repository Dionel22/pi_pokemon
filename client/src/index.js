import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./redux/store/store"

ReactDOM.render(
  <React.StrictMode>
    {/*el componente Provider de Redux, pasando el store como prop. Esto permite que todos los componentes de la aplicación accedan al estado de Redux.*/}
    <Provider store={store} >
      {/*el componente BrowserRouter de React Router para habilitar el enrutamiento en la aplicación */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
