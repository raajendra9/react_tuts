import React from 'react';
import ReactDOM from 'react-dom';

function ListItem(props){
    const item = props.item;
    return (
        // No need to specify key here
    <li>{item}</li>
    );

}


function NameList(props){
   const myLists = props.myLists;
   const listItems = myLists.map((strLists)=>

   <ListItem key={myLists.toString()} item={strLists}/>

   //It is good practice to assign key in  map function

   );

   return (
       <div>
           <h2>correct way of using keys</h2>
                <ol>{listItems}</ol>
       </div>
   )
}

const myLists = ["peter", "sachin", "kevin"]

ReactDOM.render(<NameList myLists={myLists}/>, document.getElementById('keys'));