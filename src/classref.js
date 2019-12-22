import React from 'react';
import ReactDOM from 'react-dom';

function CustomInput(props){
    let callRefInput = React.createRef();

function handleClick(){
    callRefInput.current.focus();
}

return(
    <div>
        <h2>adding ref to class component</h2>
        <input type="text" ref={this.callRefInput}/>
        <input type="button" value="focus Input" onClick={handleClick}/>
    </div>
);
}

class App extends React.Component{
 constructor(props){
     super(props);
     this.callRefInput = React.createRef();
 }

 foucsRefInput(){
     this.callRefInput.current.focus();
 }

 render(){
     return(
         <CustomInput ref={this.callRefInput}/>
     );
 }
}

ReactDOM.render(<App />, document.getElementById("classref"));