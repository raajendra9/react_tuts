import React from 'react';
import ReactDOM from 'react-dom';

class Football extends React.Component {
    shoot = (a, b) => {
        alert(b.type);

        /* b is the react event that triggered the function, 
        in this case click event */
    }

    render(){
        return (
            <button onClick={(ev)=> this.shoot("goal", ev)}>Take the shot! </button>
        )
    }
}

ReactDOM.render(<Football/>, document.getElementById('eventobjarrow'));