import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: ''};
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("you are submitting "+ this.state.username);
    }

    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }

    render() {
        return (
            <form action="" onSubmit={this.mySubmitHandler}>
                <h1>hello {this.state.username}</h1>
                <p>Enter your name, and submit:</p>
                <input type="text" onChange={this.myChangeHandler}/>
                <input type="submit"/>
            </form>
        );
    }
}

ReactDOM.render(<MyForm/>, document.getElementById('formsub'));


