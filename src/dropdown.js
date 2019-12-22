import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {mycar: "Volvo"};
    }

    render(){
        return(
            <form action="">
                <select name="" id="" value={this.state.mycar}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById("dropdown"));


