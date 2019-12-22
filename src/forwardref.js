import React from 'react';
import ReactDOM from 'react-dom';

const TextInput = React.forwardRef((props, ref) => (
<input type="text" ref={ref}/>
));

const inputRef = React.createRef();

class CustomTextInput extends React.Component{
    handleSubmit = e => {
        e.preventDefault();
        console.log(inputRef.current.value);
    };  

    render(){
        return(
            <div>
                <form action="" onSubmit={e=> this.handleSubmit(e)}>
                <TextInput ref={inputRef} />
                <button>Submit</button>
                </form>
            </div>

        );
    }
}


ReactDOM.render(<CustomTextInput />, document.getElementById('forwardrefs'));