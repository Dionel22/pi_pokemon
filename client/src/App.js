import './App.css';
import LandingPage from './views/LandingPage/LandingPage';
import Home from './views/Home/Home';
import { Switch, Route } from 'react-router-dom';

//export NODE_OPTIONS=--openssl-legacy-provider --> solucion para el npm start
function App() {
  return (
    <div className="App">
        <h1>Henry Pokemon</h1>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
