import React from 'react';
import ReactDOM from 'react-dom';

class MyFom extends React.Component{
    constructor(props){
        super(props);
        this.state ={username: ' ', age: null} ;
        }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.state = {[nam]: val};
    }

    render(){
        return (
            <form action="">
                <h1>Hello! {this.state.username} {this.state.age}</h1>
                <p>enter your name:</p>
                <input type="text" name="username" onChange={this.myChangeHandler}/>
                <p>enter your age:</p>
                <input type="text" name="age" onChange={this.myChangeHandler}/>
            </form>
        );
    }

}

ReactDOM.render(<MyForm/>, document.getElementById("MyForm"));