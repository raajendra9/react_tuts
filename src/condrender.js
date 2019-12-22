import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {username: ''};
    }

    myChangeHandler = (event) => {
        this.setState({username:event.target.value});
    }

    render(){
        let header = '';
        if (this.state.username){
            
        }
    }
}