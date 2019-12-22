import React from 'react';
import ReactDOM from 'react-dom';

function useRefExample(){
    const inputRef = useRef();
    const onButtonCLick = () => {
        this.inputRef.current.focus();
    };

    return (
        <>
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.onButtonCLick}>submit</button>
        </>
    );
}