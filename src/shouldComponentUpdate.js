import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    shouldComponentUpdate() {
        return false;
    }
    changeColor = () => this.setState({favoritecolor: "blue"});

    render() {
        return (
            <div>
                <h1> My favprite color is {this.state.favoritecolor}</h1>
            </div>
        )
    }
}

ReactDOM.render(document.getElementById("shouldComponentUpdate"));