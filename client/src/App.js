import './App.css';
import LandingPage from './views/LandingPage/LandingPage';
import Home from './views/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Detail from './views/Detail/Detail';
import { Switch, Route } from 'react-router-dom';

//export NODE_OPTIONS=--openssl-legacy-provider --> solucion para el npm start
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/home" component={Home} />
        <Route  path="/detail/:id" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
