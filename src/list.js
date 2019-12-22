import React from 'react';
import ReactDOM from 'react-dom';

function NameLists(props){
    const myLists = props.myLists
    const listItems = myLists.map((myList)=>
    <li>{myList}</li>
    );

    return (
        <div>
            <h2>Rendering Lists inside component</h2>
            <ul>{listItems}</ul>
        </div>
    );
}

const myLists = ["peter", "sachin"];

ReactDOM.render(<NameLists myLists={myLists}/>, document.getElementById("list"));