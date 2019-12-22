import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {favoritecolor:"red"};
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({favoritecolor:'yellow'})
        }, timeout);
    }
    
    componentDidUpdate(){
        document.getElementById("componentDidUpdate").innerHTML = 
        "The updated favorite is " + this.state.favoritecolor;
    }

    render() {
        return (
            <div>
                <h1>My favorite Color is {this.state.favoritecolor}</h1>
                <div id="componentDidUpdate"></div>
            </div>
        )
    }
}

ReactDOM.render(<Header />, document.getElementById("root"));