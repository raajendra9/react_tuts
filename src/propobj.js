import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    render(){
        return <h2> I am a {this.props.brand.model} Car </h2>
    }
}

class Garage extends React.Component {
    render(){
        const carinfo = {name:'Ford', model:'Mustang'}
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                < Car brand={carifo} />
            </div>
        );
    }
}

ReactDOM.render(<Garage />, document.getElementById('propobj'));