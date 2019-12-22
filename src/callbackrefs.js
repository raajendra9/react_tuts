import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.callRefInput = null;

        this.setInputRef = element =>{
            this.callRefInput = element;
        };

        this.focusRefInput = () => {
            //Focus the input using Raw DOM API
            if(this.callRefInput)  this.callRefInput.focus();
        };
    }

    componentDidMount(){
        this.focusRefInput.focus();
    }

    render(){
        return(
            <div>
                <h2>Callback refs example</h2>
                <input type="text" ref={this.setInputRef}/>
                <input type="button" value="focus Nput text" onClick={this.focusRefInput}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("callbackref"));