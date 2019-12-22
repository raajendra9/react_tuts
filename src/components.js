import React from 'react';
import ReactDOM from 'react-dom';


class Car extends React.Component{
    render(){
        return <h2> hi iam a car </h2>;
    }
}

ReactDOM.render(<Car/>, document.getElementById('root'));