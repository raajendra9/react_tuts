import React from 'react';  
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'  
import './index.css';  
import Home from './home';  
import About from './about';
import Contact from './contact';
import Notfound from './notfound';
  
const routing = (  
  <Router>  
    <div>  
      <h1>React Router Example</h1>  
      <ul>  
        <li>  
          <NavLink to="/" exact activeStyle={  
             {color:'red'}  
          }>Home</NavLink>  
        </li>  
        <li>  
          <NavLink to="/about" exact activeStyle={  
             {color:'green'}  
          }>About</NavLink>  
        </li>  
        <li>  
          <NavLink to="/contact" exact activeStyle={  
             {color:'magenta'}  
          }>Contact</NavLink>  
        </li>  
      </ul> 
      <switch>
      <Route exact path="/" component={Home} />  
      <Route path="/about" component={About} />  
      <Route path="/contact" component={Contact} />
      <Route path={Notfound}/>
      </switch>
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root'));  