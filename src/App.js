import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './Components/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <div  style={{margin:"2em 0"}}>
          <Switch>
            <Route exact path="/" component={Login}/>
          </Switch>  
        </div>
        
      </div>
    </Router>
  );
}

export default App;
