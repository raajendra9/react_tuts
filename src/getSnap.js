import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {favoritecolor:"red"};
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({favoritecolor:"yellow"})
        }, 1000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML =
        "before the update , the favorite color was " + prevState.favoritecolor;
    }

    componentDidUpdate(){
        document.getElementById("div2").innerHTML =
        "the updated favorite is "+ this.state.favoritecolor;
    }

    render() {
        return (
            <div>
                <h2>My favorite color is {this.state.favoritecolor}</h2>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }

}

ReactDOM.render(document.getElementById('getSnapshotBeforeUpdate'));