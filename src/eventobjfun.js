import React from 'react';
import ReactDOM from 'react-dom';

class Football extends React.Component{
    shoot = (a, b) => {
        alert(b.type);
        /* b is the react event that triggers the function 
        here click event */
    }

    render(){
        return (
            <button onClick={this.shoot.bind(this, "goal")}> Take the shot!</button>
        )
    }
}

ReactDOM.render(<Football />, document.getElementById("eventobjfun"));