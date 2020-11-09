import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './Components/Login'
import Chat from './Components/Chat'
import Alert from './Components/Alert'

function App() {
  return (
    <Router>
      <div className="App">
        <div  style={{margin:"0em 0"}}>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/Chat" component={Chat}/>
            <Route exact path="/Alert" component={Login}/>
          </Switch>  
        </div>
        
      </div>
    </Router>
  );
}

export default App;
