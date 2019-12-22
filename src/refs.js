import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.callRef = React.createRef();
        this.addingRefInput = this.addingRefInput.bind(this);
    }

    addingRefInput(){
        this.callRef.current.focus();
    }

    render(){
        retrun (
            <div>
                <h2></h2>
                <input type="text" ref={this.callRef}/>
                <input type="button" value="add text input" onClick={this.addingRefInput}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('DOMeleRef'))