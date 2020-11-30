import logo from './logo.svg';
import './App.css';
import Home from './UIClass/Home.js'
import Home1 from './UIClass/Home1.js'
import CreateBotlles from './UIClass/CreateBottles.js'
import Bottle from './UIClass/Bottle.js'
import QR from './UIClass/QR.js'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
  return (
    
    <div>
     
    <Router>
  
        <div>
          
          <Route exact path='/' component={Home} />
          <Route exact path='/d' component={Home1} />
          <Route exact path='/CreateBottles' component={CreateBotlles} />
          <Route exact path='/Bottle' component={Bottle} />
          <Route exact path='/QR' component={QR} />
         
          
        </div>
      </Router>
      </div>

  );
}

export default App;
