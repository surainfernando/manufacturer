import logo from './logo.svg';
import './App.css';
import Home from './UIClass/Home.js'
import Home1 from './UIClass/Home1.js'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
  return (
    
    <div>
     
    <Router>
    <nav className="navbar">
    <Link className="navbar-brand" >MEET  YOUR  REPRESENTATIVE</Link>
    </nav>
        <div>
          
          <Route exact path='/' component={Home} />
          <Route exact path='/d' component={Home1} />
         
          


       
          
        </div>
      </Router>
      </div>

  );
}

export default App;
