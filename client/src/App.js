import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import Home from './views/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Detail from './views/Detail/Detail';
import Form from './views/FormPage/Form';

//export NODE_OPTIONS=--openssl-legacy-provider --> solucion para el npm start
function App() {
  const location = useLocation()
  return (
    <div className="App">
     { location.pathname !== "/" && <NavBar/>}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/home" component={Home} />
        <Route  path="/detail/:id" component={Detail} />
        <Route  path="/create" component={Form} />
      </Switch>
    </div>
  );
}

export default App;
