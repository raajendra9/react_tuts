import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            age: null,
            errormessage: ""
        };
    }
    myChangeHanadler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = "";

        if (nam == "age"){
            if(age != '' && !Number(age)){
                err = <strong>your age must be number</strong>
            }
        }
        this.setState({[nam]: val});
        this.setState({errormessage:err});
    }
    
    render(){
        return (
            <form action="">
            <h1>Hello {this.state.username} {this.state.age}</h1>
            <p>Enter Your name:</p>
            <input type="text" name="username" onChange={this.myChangeHanadler}/>
            <p>Enter your age:</p>
            <input type="text" name="age" onChange={this.myChangeHanadler}/>
            {this.state.errormessage}
            </form>
        );
    }
}
