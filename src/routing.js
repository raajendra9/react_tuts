import React from 'react';
import ReactDOM from 'react-dom';
import Route, {Link, BrowerRouter as Router} from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

const routing = (
    <Router>
    <div>
    <h1>React Router Example</h1>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route Path="/contact" component={Contact}/>
    </div>
    </Router>
);

reactDOM.render(routing, document.getElementById("root"));