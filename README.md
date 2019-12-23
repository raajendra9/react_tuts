React is a javascript library created by facebook
React is a tool for building components

How does react work?
    React creates a virtual DOM in memory  

    Instead of manipulating the browsers DOM directly, react creates a virtual DOM in memory, where it does all the neccessary manipulating, before making the changes in the browsers DOM

    React only changes what needs to be changed 
    React finds out what changes have been made and changes only what needs to be changed

What is ECMAScript6 
    ECMAScript was created to standartize JavaScript, and ES6 is the 6th version of ECMAScript published in 2015

    React uses ES6 and you should be familiar with some of the features like 
    classes 
    arrow functions
    variables

ES6 introduces classes 
    A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class
    and properties are assigned inside a constructor method

    class Car {
        constructor(name) {
            this.brand = name;            
        }
    }

    now create new object here 
    mycar = new Car("Ford");

Note: the constructor function is automatically called when the object initialized

 
Method in classes 
    you can add your own methods in your classes 
        class Car {
            constructor(name){
                this.brand = name;
            }

            present(){
                return "i have a" + this.brand;
            }
        }

mycar = new Car("Ford);
mycar.present();

class inheritance 
 To extends a class inheritance, use the extends keyword
    
    A class created with class inheritance inherits all methods from another class

        class Car{
            constructor(name){
                this.brand = name
            }
            present(){
                return " i have a" + this.brand
            }
        }

        class Model extends Car{
            constructor(name, mod){
                super(name);
                this.model = mod
            }
            show(){
                this.present() + ', It's a ' + this.model
            }
        }

        mycar = new Model("Ford", "Mustang");
        mycar.show()


The super() method refers to parent class 
By calling the super() method in the constructor method, we call the parents constructor method and gets the access 
to the parents properties and methods 


Arrow Functions
 Arrow functions were introduced in ES6
 Arrow functions allow us to write shorter function syntax

 hello = function(){
     return "hello world"
 }

 with arrow function

 hello = () => {
     return "Helloworld"
 }

It gets shorter if the function has only one statement, and the statement returns a value you can remove the brackets
and return keyword


Arrow functions returns value by default
hello = () => "Hello world"

note: this works only if the function has only one statement

if you have parameters passthem inside paranthesis

Arrow functions with parameters
hello = (val) => "hello + val;

infact if you have one parameter you can skip paranthesis

hello = val => "hello" + val

what about this?
The handling of this is also different in arrow functions compared to regular functions
inshort, with arrow functions there is no binding of this 

In regular functions the this keyword represented the object that called the function, which could be thw window 
the document, the button or whatever

with arrow functions this keyword always represents the objects that defined the arrow function 
let us look at two examples to understand the difference

both examples call a method twise, first when the page loads, and once when the user clicks the button 
the first example uses a function and second example uses a arrow function 

the results shows that the first example return two different objects and the second example returns the header object twice

with a regular function, this represents the object that callled the function 

class Header{
    constructor(){
        this.color = "Red";
    }

    //regular function
    changeColor = function() {
         document.getElementById("demo").innerHTML += this;
    }
}

myheader = new Header();


//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object that calls the function 
document.getElementById("btn").addEventLIstener("click", myheader.changeColor);


The arrow function this represent the header object no matter who is called the function

class Header{
    constructor(){
        this.color = "Red";
    }
    changeColor= () => {
        document.getElementById("Demo").innerHTML += this
    }
}

myheader = new Header()


//The window object calls the function 
window.addEventLister("load", myheader.changeColor);

//The button object calls the function 
document.getElementById("btn").addEventListener("click", myheader.changeColor)

Remember these differences when you are working with functions. sometimes the behavour of regular function is what you want if not, use arrow arrow functions

Variables
Before ES6 there is only one way of defining your variables: with the var keyword. if you did not define them, they would be assigned to the global object. Unless you were in strict mode then you would get an error if your variables undefined 

now ES6 there are three ways of defining your variables: var, let and const

var
 

var x = 5;
if you use var outside of a function, it belongs to the global scope
if you use var inside of function, it belongs to that function 
if you use var inside of a block, i.e for loop, the variable is still available ouside of that block 
var has a function scope not block scope


let 
let x = 5;
let has a block scope

let is a block scoped version of var, and is limited to the block where it is defined 
if you use inside of a block, i.e for loop the variable only available inside of the loop


const 
const = 5;

const is a variable that once it has been created, it's can never change
const has a block scope


React goal is in many ways to render HTML in a webpage
React renders HTML to the webpage by using the function called ReactDOM.render().

The Render() function 
The ReactDOM.render() function takes two arguments, HTML code and HTML Element 
The purpose of the function is to display the specified HTML code inside the specified HTML element 


Display the paragraph inside the root element

import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<p>hello</p>, document.getElementById('root))


The HTML code
The HTML Code in this tutorial uses JSX which allows you to write html tags inside the javascript code
Do not worry if the syntax is unfamiliar

Example 
create a variable that contains HTML Code and display it in the root node
const myelement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <th>John</th>
        </tr>
        <tr>
            <th>Elsa</th>
        </tr>
);

ReactDOM.render(myelement, document.getElementById("root"))

The root node is the HTML element where you want to display the result 
It is like a container for content managed by react

It will be any element

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<p>hallo</p>, document.getElementById('sandy'))

JSX?
JSX stands for javascript XML
JSX allows us to write HTML in react
JSX makes it easier to write and add HTML in React

Coding JSX 
 JSX Allows us to write HTML elements in JavaScript and place them in DOM without any createElement and/or append child
 JSX converts HTML tags into react elements

 you are not required to use JSX but JSX makes it easier to write react applications
 
 let us see two examples
 first uses JSX and the second does not

 JSX
 const = myelement = <h1> I Love JSX </h1>
 ReactDOM.render(myelement, document.getElementById('root));

 without JSX
 const myelement = React.createElement('h1', {}, "i do not use JSX");
 ReactDOM.render(myelement, document.getElementById('root'))

 As you can see in the first example, jSX allows us to write HTML directly within the javascript code
 JSX is an extension javascript language based on ES6 and is translated into regular javascript at runtime

 Expressions in JSX
 with JSX you can write expressions inside curly braces { }.
 the expression can be react variable or property, or any other valid javascript expression. jsx will execute the expression and return the result

 example
 exexute the expression 
 const myelement = <h1> react is { 5 + 5} times better with JSX </h1>

 Inserting a large block of HTML
 To HTML on multiplelines, put the HTML inside paranthesis 
 
 import React from 'react';
 import ReactDOM from 'react-dom';

 create a list with threee list items 
 const myelement = (
     <ul>
     <li>raj</li>
     <li>anji</li>
     <li>ram</li>
     </ul>
 );

 One top level element
 The HTML Code must be wrapped in one top level element
 so if you like to write two headers you must put them inside a parent element, like a div element


 Wrap two headers inside one DIV element
 const myelement = (
     <div>
     <h1>I am header</h1>
     <h1>I am a header too</h1>
     </div>
 );

 JSX will throw an error if HTML is not correct, or if the HTML misses a parent element

 Elements must be closed

 JSX follows XML rules, and therefore HTML elements must be properly closed 

 Example 
 close empty elements with />
 const myelement = <input type='text' />;


 JSX will throw an error if the HTML is not properly not closed

 
COMPONENTS

components are like functions that return HTML elements

React components

components are independent and reusable bits of code.the serve the same purpose as javascript functions, but work in isolation and return HTML via a render function

Components come in two types 
class components and function components
in this tutorial we will concentrate on class components


create a class component
when creating a react component the component's name must start with Uppercase letter

the component has to include the extends React.Component statement, this statement 
creates an inheritance to react.component, and gives your component access to react.component function 

the component also requires a render() method this method returns HTML

Class Car extends React.Component{
    render(){
        return <h2> Iam a car </h2>
    }
}
Now your react application has a component called car, whcih returns h2 element

To use this component in your application, use similar syntax as normal HTML: <Car/>

Display the car component in the root element

ReactDOM.render(<Car/>, document.getElementById('root));


Create a function component

Here is the same example as above, but created using a function component instead

The Function component also returns HTML, and behaves pretty much same way as a class component, 
but class components have some additions, and will preferred in this tutorial 

create a function component called car 

function(){
    return <h2>Hi, iam a car</h2>;
}

once again your react application has a car component 
Refer to the car component as normal HTML 

Display the car componet in the root element 

ReactDOM.render(<Car />, document.getElementById('root));

Component constructor 
    If there is a constructor() function in your component, this function will be called when the component gets initiated
    The constructor function where you initiate the componets properties 
    In React, Component properties should be kept in an object called state 
    
    the constructor function is also where you honor the inheritance of the parent compnent by including the super()
    statement which executes the parent component construction function and your componet has access to all the functions of parent component(React.Component)
    
    Create a constructor function in the Car component, and add a colour property 

    class Car extends React.Component {
        constructor(){
            super();
            this.state = {color: "red"}
        }
        render(){
            return <h2> Hi iam a car <h2>
        }
    }

    Use the color property in the render() function

    class Car extends React.Component {
        constuctor(){
            super();
            this.state = {color: "red"}
        }
        render() {
            return <h2> I am a {this.state.color} Car! <h2>
        }
    }

    Another way of handling component properties is by using props
    props are like functions arguments, and you send them into the component as attributes
    you will learn more about props in down the road of this tutorial

    Use an attribute to pass color to the Car component, and use it in the render() function 

    class Car extendes React.Component {
    render(){
        return <h2> I am a {this.props.color} Car! </h2>
    }
    }
    ReactDOM.render(<Car  color="red"/>, document.getElementById("root"));

    
    Components inside the Component
    
    We can refer the components inside othercomponents

    Use the car component inside the Garage component

    class Car extends React.Component {
        render(){
            return <h2>I am a car</h2>;
        }
    }
    class Garage extends React.Component {
        render(){
            return (
                <div>
                <h1>Who lives in my Garange?</h1>
                <Car />
                </div>
            );
        }
    }

    ReactDOM.render(<Garage />, document.getElementById("root"));


    Components in Files

    React is all about re-using code, and it can be smart to insert some of your components in sepate files.
    To add that create new file with .js file extension and put the code inside it:
    Note that the file must be start by importing React, and it has to end with statement 
    export default Car;

    This is new file we named it "App.js"

    import React from "react";
    import ReactDOM from "react-dom";


    class Car exrends React.Component {
        render(){
            return <h2> Iam a Car <h2>
        }
    }

    export default Car;

    To be able to use the car component, you have to import the file in your application

    Example
    Now we import the "App.js" file in the application, and we can use Car Component as if it was created here 


    React props
     props are arguments passed into React Components
     props are passed to components via HMTL attributes 

    React Props

    React props are like function arguments in javascript and attributes in HTML
    To send props into a component, use the same syntax as HTML attributes

    Example 
    Add a Brand attribute to the Car element

    const myelement = <Car brand='ford' />;

    the component receives the argument as a props object

    class Car extends React.component {
        render(){
            return <h2> I am a {this.props.brand} </h2>
        }
    }
  ReactDOM.render(myelement, document.getElementById('root'));

  Pass Data
  props are also how you pass the data from one component to another component as parameters
  Send the "brand" property from Garage component to the car component

  class Car extends React.Component{
      render(){
          return <h2> I am a {this.props.brand}! </h2>;
      }
  }

  class Garage extends React.Component {
      render(){
          return <h2> I am a {this.props.brand}! </h2>
        }
  }

  class Garage extends React.Component {
      render(){
          return (
              <div>
              <h1> who lives in my garage</h1>
              <Car brand='Ford' />
              </div>
          )
      }
  }

  ReactDOM.render(<Garage />, document.getElementById('root'));

  If you have a variable to send and not string as in the example above, you just put variable name inside 
  curly brackets

  Create a variable named 'carname' and send it to the car Component 

  class Car extends React.Component{
      render(){
          return <h2>I am a {this.props.brand} </h2>
      }
  }

  class Garage extends React.Component {
      render(){
          const carname = "Ford";
          return (
              <div>
              <h1>Who lives in my Garage ?</h1>
              <Car brand={carname} />
              </div>
          );
      }
  }

  ReactDOM.render(<Garage/>, document.getElementById("propvariable"))

  Or if it was an object

  create an object named "carinfo" and send it to the car component
  
  class Car extends React.Component {
      render(){
          return <h2>I am a {this.props.brand.model} Car </h2>
      }
  }

  class Garage extends React.Component {
      render(){
          carinfo = {name:'Ford', model:'mustang'};
          return (
              <div>
              <h1>Who lives in Garage?</h1>
              <Car brand={carinfo} />
              </div>
          );
      }
  }

  props in the constructor

  if your component has a constructor function the props should always be passed to the constructor also to the 
  React.component via super() method


class Car extend React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <h2>Iam a car!<h2>
    }
}

ReactDOM.render(<Car model='Mustang' />, document.getElementId("propinconstructor "));

Note:ReactProps are read only you will get an error if try to change their value 


React State 
React components has built in State object.
The state object is where you store your property values that belongs to the components.
Wheb the state object changes, the component re-renders.

Creating state object
The state object initilised in the constructor
Example

Specifying the state object in the constructor.

class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {brand: "Ford"63}
    }
    
    render(){
        return (
            <div>
            <h2> My Car </div>
            </div>
        );
    }
}

the state object contains as many proprties you like

specify all the properties your component need:

class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "Red",
            year: 1964
        };
    }
    render() {
        return (
            <div>
            <h1> My Car </h1>
            </div>
        );
    }
}


using the state object

Refer to the state object anywhere in the component by using the this.state.propertyname

Refer to the state object in the render method()

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "Blue",
            year: 1964
        }
        render() {
            return (
                <div>
                <h1>My {this.state.brand}</h1>
                <p>
                It is a {this.state.color}
                {this.state.model}
                from {this.state.year}
                </p>
                </div>
            );
        }
    }
}

ReactDOM.render(<Car />, document.getElementById("stateobj"));

Changing the state object
To change the value in the state object use this.setState() method.
When a value in the state object changes, the component will re-render meaning that the output will change
according to the new value

Add a button with an onclick event that will change the color property

class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "Red",
            year: 1964
        }
    
    }
    
    changeColor = () => this.setState({color:"Blue"});

    render(){
        reutrn (
        <div>
             <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}> Change Color </button>
        </div>
        );
    }
    }
}
 
Always use setState() method to change state object, It will ensure that the component knows its been
updated and calls the render() method (and all the lifecycle methods)


React Life cycle

Life cycle of Components

Each Component in React has a lifecycle which you can monitor and manipulte during its three main 
phases.
The three phases are Mouting updating and unmounting

Mounting
mouting means putting elements into the DOM
React has four built in methods that gets called, in order when mounting a component:

1.constructor()
2.getDerivedStateFromProps()
3.render()
4.componentDidMount()

The render() method is required and will always be called, the others are optional and will be called if you define them

constructor

the constructor method is called before anything else, when the component is initiated and it is the natural place to setup the initial state and other initial values

the constructor() method is called with the props, as arguments, and you should always start by calling the 
super(props) before anything else, this will initiate the parents constructor method and allows component
to inherit the methods from its parent(React.Component)
 
the constructor method is called, by react, every should make a component

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {favoritecolor:'Blue'};
    }
    render() {
        return (
            <h1> My favorite color is {this.state.color}</h1>
        );
    }
}

ReactDOM.render(<Header />, document.getElementByid('root'));

getDerivedStateFromProps

The getDerivedStateFromProps() method is called right before rendering the elements in the DOM
this is the natural place to set the state object based on the initial props.

It takes state as an argument, and return an object with changes to the state.

The example below starts with the favorie color being "red", but the getDerivedStateFromProps() method
updates the favorite color based on the favcol attribute

Example:
The getDerivedStateFromProps method is called right before the render method:

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {favoritecolor: "Red"}
    }
    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol};
    }
    render(){
        return (
            <h1>My favorite color is {this.state.favoritecolor}</h1>
        );
    } 
}

ReactDOM.render(<Header favcol=""Yellow/>, document.getElementById("getDerivedStateFromProps"));

render()
the render() method is required, and is the method that actual outputs HTML to the DOM

A Simple component with simple render() method 

class Header extends React.Component {
    render(){
        return (
            <h1>this is the content</h1>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('render'));


ComponentDidMount()
The componentDidMount() method is called after the component rendered.
This is where you run statements that requires that Component is already placed in the DOM

At first favorite color is red, but give me a second and it yellow instead.

class Header extends React.Coponent {
    constructor(props) {
        super(props);
        this.state = {favoritecolor:"Red"};
    }
    componentDidMount(){
        setTimeOut(()=> this.setState({favoritecolor: "yellow"}), 1000)
    }
    render() {
        return (
            <h1> My favorite color is {this.state.favoritecolor}</h1>
        )
    }
}

ReactDOM.render(<Header/>, document.getElementById('componentDidMount'));

The next phase in the life cycle is when component updated
A component is updated whenever there is change in the components state or props
react has five built in methods that gets called, in this order, when a component is updated 

1.getDerivedStateFromprops()
2.shouldComponentUpdate()
3.render()
4.getSnapshotBeforeUpdate()
5.componentDidUpdate()

The render() method is required and will always be called, the others are optional and will be called if you 
define them

also at updates the getDerivedStateFromProps method is called. this is the first method that is called when 
component gets updated 

this is still the natural place to set the state object based on the initial props

The example below has a button that changes the favorite color to blue, but since the getDerivedStateFromProps()
method is called, which updates the state with the color from the favcol attribute, the favorite color is still rendered as yellow

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps() {
        return {favaritecolor: props.favcol};
    }
    changeColor = () => this.setState({favoritecolor:'blue'});

    render() {
        reutrn (
            <div>
            <h1>My favorite color is {this.state.favoritecolor}</h1>
            <button type="button" onClick={this.changeColor}> Change color </button>
            </div>
        )
    }
}

ReactDOM.render(<Header  favcol='yellow'/>, document.getElementById('root));



shouldComponentUpdate()
In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should 
continue with the rendering or not 

The default value is true

The example below shows that happens when the shouldComponentUpdate() method returns false:

Stop the component from rendering at any update:

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor:'red'};
    }

    shouldComponentUpdate(){
        return false;
    }
    
    changeColor = () => this.setState({favoritecolor:'blue'});
    render(){
        return (
            <div>
            <h1>My favorite color is {this.state.favoritecolor}</h1>
            <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}

ReactDOM.render(<Header/>, document.getElementById("shouldComponentUpdate"));

same example as above, but this time the shouldComponentUpdate() method returns true instead:

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor:"Red"};
    }
    shouldComponentUpdate() {
        return true;
    }
    changeColor = () => this.setState({favoritecolor: "blue"});

    render() {
        return (
            <div>
            <h1> My favorite color is {this.state.favoritecolor}</h1>
            <button type="button" onClick={this.changeColor}> Change color </button>
            </div>
        );
    }
}

ReactDOM.render(<Header/>, document.getElementById("shouldComponent"));


class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }
    shouldCompentUpdate(){
        return true;
    }
    changeColor = () => this.setState({favoritecolor: "blue"});

    render() {
        return (
            <div>
            <h1> My favorite color is {this.state.favoritecolor}</h1>
            <button type="button onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}

ReactDOM.render(<Header />, document.getElementById("shouldComponetUpdate"));


render()

the render() method is of course called when a Component gets updated, it has to re-render the HTML to the
DOM, with the new changes.

Example

Click button to make a change in the component's state:

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"}
    }
    changeColor = () => this.setState({favoritecolor: "blue"});

    render() {
        return (
            <div>
            <h1> My favorite color is {this.state.favoritecolor}</h1>
            <button type="button" onClick={this.changeColor}>Change color </button>
            </div>
        )
    }
}

ReactDOM.render(<Header />, document.getElementById('render'));



getSnapshotBeforeUpdate()

In the getSnapshotBeforeUpdate() you have access to the props and state before the update,
meaning that even after the update, you can check what the values  were before the update.

if the getSnapshotBeforeupdate() method is present, you should also include the componentDidUpdate()
othewise you will get an error.

The example below might seem complicated, but all it does is this:

When the component is mounting it is rendered with favoritecolor "red"

when the component has been mounted, a timer changes the state, after one second, the favorite color becomes 
"yellow"

this action triggers the update phase and since this component has a getSnapshotBeforeUpdate() method,
this method is executed, and writes a message to the empty DIV1 element

then the componentDidUpdate() method is executed and writes a message in the empty DIV2 element

use the getSnapshotBeforeUpdate() method to find out what the state object looked like before the update:

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount(){
        setTimeOut(() => this.setState({favoritecolor:"yellow"}), 1000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML = 
        "Before  the update, the favorite was " + prevState.favoritecolor;
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML = 
        "The updated favorite is " + this.state.favoritecolor;
    }

    render() {
        return (
            <div>
            <h1> My favorite color is {this.state.favoritecolor}</h1>
            <div id="div1"></div>
            <div id="div2"></div>
            </div>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById("getSnapshotBeforeUpdate"));


componentDidupdate()

The componentDidUpdate method is called after the component is updated in the DOM

the example below might seem complicated, but all it does is this:
When the component has been mounted, a timer changes the state, and the color becomes "yellow"

this action triggers the update phase, and since this component has a componentDidUpdate method, this
method is executed and writes a message in the empty DIV element

the componentDidUpdate method is called after the updated has been rendered in the DOM:

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }

    componentDidMount(){
        setTimeOut(()=>{
            this.setState({favoritecolor:"yellow})
        }, 1000)
    }

    componentDidUpdate(){
        document.getElementById("componentDidupdate").innerHTML =
        "The updated favorite is + this.state.favoritecolor;
    }
    render(){
        return (
            <div>
            <h1> My favorite color is {this.state.favoritecolor}</h1>
            <div id="componentDidupdate"> </div>
            </div>
        )
    }
}

The next phase in the lifecycle when a component is removed from the DOM, or unmounting as react likes to 
call it.

React has only one built in method that gets called when component is unmounted:
componentWillUnmount()

componentWillUnmount() method is called when the component is about to be removed from the DOM.

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {show:true}
    }

    delHeader = () => {
        this.setState({show:false});
    }

    render() {
        let myheader;
        if (this.state.show){
            myHeader = <Child />
        };
        return (
            <div>
            {myheader}
            <button type="button" onClick={this.delHeader}>Delete header </button>
            </div>
        );
    }

    class Child extends React.Component{
        componentWillUnmount(){
            alert("The component named header is about to be unmounted);
        }
        render(){
            return (
            <h1>Hello world</h1>
            );
        }
    }
}

ReactDOM.render(<Container />, document.getElementById('root'));


React Events
Just like HTML, Reac can perform actions based on user events
React has the same events as HTML  : click, change, mouseover etc.

Adding events 
React events are written in camelcase syntax 
onClick instead of onclick

React event handlers written in curly braces
onClick={shoot} instead of onclick="shoot()"

React
<button onClick={shoot}>Take the shot!</button>

HTML 
<button onclick="shoot()"> Take the shot </button>

Event handlers 

A good practice is to set the event handlers as a method in component class

Put the shoot function inside Football Component.

class Footbal extends React.Component {
    shoot(){
        alert("Greate shot!");
    }
    render() {
        retutn (
            <button onClick={shoot}>Take a shot!</button>
        );
    }
}

ReactDOM.render(<Footbal />, document.getElementById("root"));


Bind this 

For methods in react, the this keyword should represent the component that owns the method.

That is why you should use arrow functions, with arrow functions this will always represent the object that
defined the arrow function.

class Football extends React.Component {
    shoot = () => {
        alert(this);
        /* the this refers to the component object */
    }

    render() {
        return (
            <button onClick={shoot}>Take a shot! </button>
        );
    }
}

ReactDOM.render(document.getElementById("root"));

Why arrow functions?

In class Components, the this keyword is not defined by default, so with regular functions the this keyword represent the object that called the method, which can be the global window objeca HTML button or whatever

if you must use regular functions instead of arrow functions you have to bind this to the component instance 
using the bind method

class Football extends React.Component {
    costructor(props){
        super(props);
        this.shoot = this.shoot.bind(this);
    }

    shoot() {
        alert(this);
        /* thanks to the binding in the constructor function,
        the 'this' keyword now refers to the component object
    }

    render() {
        return (
            <button onClick={this.shoot}>Take a shot</button>
        );
    }

}

ReactDOM.render(<Football />, document.getElementById('root'));


note: without binding, the this keyword would return undefined.

Passing arguments 
if you want to send parameters into event handler, you have two options

:Send "Goal" as a parameter to the shoot function, using arrow function 

class Football extends React.Component {
    shoot = (a) => {
        alert(a);
    }

    render() {
        return (
            <button onClick={() => this.shoot("Goal")}>Take the shot!</button>
        );
    }
}

ReactDOM.render(<Football />, document.getElementById('bindthis'));


or:
2.Bind the event handler to this.
note that the first argument has to be this


Send "Goal" parameter to the shoot function

class Football extends React.Component {
    shoot(a) {
        alert(a);
    }
    render() {
        return (
            <button onClick={this.shoot.bind(this, "Goal")}> Take  a shot </button>
        );
    }
}

ReactDOM.render(<Football />, document.getEle,emtById("bindthis"));

Note:   if you send arguments without using bind method, (this.shoot(this, "Gaol")) instead of  this.shoot.bind(this."Goal") the shoot function will be executed when the page is loaded instead of waiting
for the button to be clicked



React Event object
Event handlers have access to the react event that triggered the function.
In our example the event is the "click" event. Notice that once again the syntax is different when using arrow
functions or not 

with the arrow function you have to send the event argument manually

Arrow function send the event object manually

class Football extends React.Component {
    shoot = (a, b) => {
        alert(b.type);
        /* 'b' represents the react event that triggered the function,
           in this case the 'click' event */
    }
    render() {
        return (
            <button onClick={(ev) => this.shot("Goal", ev)}> Take a shot! </button>
        );
    }

}


ReactDOM.render(<Football />, document.getElementById('eventobject'));


without arrow function, the React event object is sent automatically as the argument when using the bind() 
method()

with bind() method, the event object is sent as the last argument

class Football extends React.Component {
    shoot = (a, b) =>   {
        alert(b.type);

        /* 'b' represents the Reactive event that triggered the function,
        in this case the 'click' event */
    }

    render() {
        return (
            <button onClick={this.shoot.bind(this, "goal")}> Take a shot!</button>
        );
    }
}

ReactDOM.render(<Football />, document.getElementById('eventobject'));

Just like html, react uses forms to allow users to interact with webpages
Adding forms in React

you add a form in react like any other element

add a form that allows users to enter their name

class MyForm extends React.Component {
    render() {
        return (
            <form>
            <h1>Hello</h1>
            <p> enter your name: </p>
            <input type="text"/>
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));


Handling forms 

Handling forms is about how you handle the data when it changes value or gets submitted.
In HTML, form data is usually handled by the DOM.
In React, form data is handled by the components.
when the data is handled by the components, all the data is stored in component state.
you can control changes by adding event handlers in the onChange attribute:

Add an event handler in the onChange attribute, and let the event handler update the state object

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: ' '};
    }
    myChangeaHandler = (event) => {
        this.setState({username:event.target.value});
    }
    render(){
        return (
            <form>
            <h1>Hello {this.state.username}</h1>
            <p>Enter your name: </p>
            <input type="text" onChange={this.myChangeHandler}/>
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('form'));

Note: you must initialize the state in the constructor method before you can use it.

Note: you can get access to the field value by using the event.target.value

Conditional Rendering 

If you do not want display the h1 element untill user has done any input, you can add an if statement

Look at the example below and note the following:

1. we can Create an empty variable, in this example we call it header 
2. we add an if statement to insert content to the header variable if the user has done any input.
3. we insert the header variable in the output, using curly brackets.

Display the header if only if username is defined

class Myform exends React.Component {
    constructor(props) {
        super(props);
    }

    myChangeHandler = (event) => {
        this.setState({username:event.target.value});
    }

    render(){
        let header = ' ';
        if (this.state.username){
            header = <h1> Hello {this.state.username}</h1>;
        } else {
            header = '';
        }
        return(
            <form>
            {header}
            <p> enter your name:</p>
            <input type="text' onChange={this.myChangeHandler} />
            </form>

        );
    }
}

ReactDOM.render(<MyForm/>, document.getElementById('condrender'));


submitting forms 

you can control the submit action by adding an event handler in the onSubmit attribute:

Add a submit button and an event handler in the onSubmit attribute:

Example:

Add a submit button and an event handler in the on submit attribute:

class MyForm extends React.Component {
    constructor(props){
        super(props);
    }
     mySubmitHandler = (event) => {
         event.preventDefault();
         alert("you are submitting" + this.state.username);
     }

     myChangeHandler = (event) => {
         this.setState({username:event.target.value});
     }
    render(){
        return(
            <form onSubmit={this.mySubmitHandler}>
            <h1> Hello {this.state.username}</h1>
            <p>Enter your name, and submit:</p>
            <input type="text" onChange={this.myChangeHandler} />
            <input type="submit" />
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('subform'));

Note that we use event.preventDefault() to prevent the form actually being submitted.


Multiple input fields 

you can control the values of more than one input field by adding a "name" attribute to each element.
When you initialise the state in the constructor, use the field names 
To access the fields in the event handler use the event.target.name and event.target.value  syntax.
To update the state in the this.setState method, use square brackets around the property name.


class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: ' ', age: null};
    }

    myChangeHandler= (event) => {
        let name = event.target.name;
        let val  = event.target.value;
        this.setState({[name]: val});
    }

    render(){
        return (
            <form>
            <h1> Hello {this.state.username} {this.state.age} </h1>
            <p> Enter your name </p>
            <input type="text" name="username" onChange={this.myChangeHandler}/>
            <p> Enter your age </>p
            <input type="text" name="age" onChange={this.myChangeHandler}/>
            </form>
        );
    }

}

ReactDOM.render(<MyForm/>, document.getElementById("formfields"));


Note: we use the same event handler function for both input fields, we could write one event for each, 
but this gives us much cleaner code and is the preffered way React



Validating input

You can validate form input when the user is typing or you can wait untill form gets submitted 

When you fill your age, you will get an alert if the age field is not numeric:

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: '', age: null};
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam=="age"){
            if(!Number(val)){
                alert("your age must be a number);
            }
        }
        this.setState = {[nam]:val};
    }

    render(){
        return (
            <form>
            <h1>Hello {this.state.username} {this.state.age}</h1>
            <p>Enter your name: </p>
            <input type="text" name="username" onChange={myChangeHandler}/>
            <p>Enter your age: </p>
            <input type="text" name="age" onChange={myChangeHandler}/>
            </form>
        );
    }
}

ReactDOM.render(<MyForm/>, document.getElementById("formvalid"));


Below you will see the example as above, but the validation is done when the form gets submitted instead of 
when you write in the field

Same Example but with the validation at form submit:

class MyForm extends React.Component{
    constructor(props){
        super(porps);
        this.state = {username:"", age=null};
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]:val});
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        let age = this.state.age;
        if (!Number(age)){
            alert("your age must be a number");
        }
    }

    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
            <h1>Hello {this.state.username} {this.state.age} </h1>
            <p>Enter your name: </p>
            <input type="text" name="username" onChange={this.muChangeHandler}/>
            <p>Enter your age: </p>
            <input type="text" name="age" onChange={this.myChangeHandler}/>
            <br/>
            <br/>
            <input type="submit" />
            </form>
        );
    }
}


ReactDOM.render(<MyForm />, document.getElementById("formvalid"));


Adding error message 

Error messages in alert boxes can be annoying, so lets make an error message that is empty by default,
but displays the error when the user inputs anything invalid:

when you fill in your age as not numeric, an error message is displayed:

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            username: ' ';
            age: null,
            errormessage: ''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.val;
        let err = "";

        if (nam=="age") {
            if (val != "" && !Number(val)){
                err = <strong> your age must be a number </strong>
            }
        }
        this.setState({[nam]: val});
        this.setState({errormessage:err});
    }
    render(){
        return(
            <form>
            <h1>Hello {this.state.username} {this.state.age} </h1>
            <p>Enter your name: <p>
            <input type="text" name="username" onChage={this.myChangeHandler}/>
            <p>Enter your age: </p>
            <input type="text" name="age" onChange={this.myChangeHandler}/>
            {this.state.errormessage}
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById("errormessage"));

The Textarea element in Reactjs is slightly different from ordinary HTML
in HTML the value of textarea was the text between start tag and the end tag
in React the value placed in value attribute

A simple textarea with some content initialised in the constructor:

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description: "The content of the textarea goes in the value attribute"
        };
    }

    render(){
        return (
            <form>
            <textarea value={this.state.description}/>
            </form>
        )
    }
}

ReactDOM.render(<MyForm/>, document.getElementById("textarea));

select

A drop down list, or a select box, in React also a bit different form HTML
in HTML, the selected value in the drop down list was defined with the select attribute

In react the selected attribute defined in value attribute

A simple select box, where the selected valei "Volvo" is initialize in the constructor

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {mycar: "Volvo"};
    }
    render(){
        return (
            <form>
            <select value={this.state.mycar}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
            </select>
            </form>
        );
    }
}

reactDOM.render(<MyForm />, document.getElementById('Dropdown"));


Lists are used to display data in an ordered format and mainly used to display menus on webiste
lists can be created in a similar way as we create lists in javascript

The map function is used for traversing the lists. in the below example, the map function takes an array of
numbers multiply their values with 5. we assign the new array returned by map() to the variable multiply nums and log it.

var numbers = [1, 2, 3, 4, 5];
const multiplynums = numbers.map((number)=>{
    return (number * 5);
});

console.log(multiplynums);

now let see how we create a list in React. To do this, we will use the map() function for traversing the list element, and for updates, we enclosed them between curly braces. finally, we assign the array elements to listItems. now, include this new list inside <ul></ul> elements and render it to the DOM.

Example 

import React from 'react';
import ReactDOM from 'react-dom';

const mylist = ['peter', 'sachin', 'kevin', 'dhoni'];

const listItems = myList.map((mylist)=>{
    return <li>{mylist}</li>
});

ReactDOM.render(<ul>{listitems}</ul>, document.getElementById("list"));



Rendering list inside components    
in previous example,we had directly rendered the list to DOMd. but it is not good practice to render list
in React we had seen that everything is built as individual components, hence we would need to render lists 
inside component

import React from 'react';
import ReactDOM from 'react-dom';

function NameLists(props){
    const myLists = props.myLists;
    const listItems = myLists.map((myList)=>
        <li>{mylist}</li>
    );
    return (
        <div>
        <h1> Rendering lists inside component</h2>
        <ul>{listItems}</ul>
        </div>
    );
    }

    const myLists = ["peter", "sachin"];
    ReactDOM.render(<NameLists mylists={myLists} />, document.getElementById("lists"));


React keys

A key is a unique identifier. In react, it is used to identify which items have changed, updated, or deleted
from lists. It is useful when we dynamically created components or when the users alter the lists. It is also helps to determine which components in a collection needs to be re-rendered instead of re-rerendering the entire set of components every time.

keys should be given inside the array to give the elements a stable identity. the best way to pick  a key as a string that uniquely identifies the items in the list. It can understood 


const stringLists = ["peter", "sachin"];

const updateLists = stringLists.map((strList)=>{
    <li key={strList.id}> {strList} </li>;
});



const stringLists = ['peter', 'scahin'];

const updatedLists = stringLists.map((strList, index)=>{
    <li key={index}>{strList} </li>
});
if there are no suitable IDs for rendered items, you can assign the item index as a key to the lists.


Note: It is not recommeded to use indexes for keys if the order of the item may change in future. 
It creates confusion for the developer and may cause issues with the component state


using keys with component

consider you have created a separate component for ListItem and extracting ListItem from that component.
In this case you should have to assign keys on the <ListItem /> elements in the array, not to the <li>
elements in the ListItem itself. To avoid mistakes, you have to keep in mind that keys only make sense in 
the context of the surrounding array. so, anything you are returning from map() function is recommeded to be assigned a key.

import React from "react";
import React from 'react-dom';

function ListItem(props){
    const item = props.item;
    return (
        <li>{item}</li>
    );
}

function NameList(props){
    const myLists = props.myLists;
    const listItems = myLists.map((strLists) =>
    <ListItem key={myLists.toString()} item={strLists} />
    );

    return(
        <div>
        <h2> correctkey usage<h2>
        <ol>{listItems}</ol>
        </div>
    );
}

const myLists = ["peter", "sachin"];

ReactDOM.render(<NameList myLists={myLists}/>, document.getElementById("root"));


uniqueness of keys among siblings

 we had discussed that keys assignment in arrays must be unique among their siblings. However It doesn't mean 
 that the keys should be globally unique.
 We can use the same set of keys in producing two different arrays. It can understood in below example

 import React DOM 'react';
 import ReactDOM from 'react-dom';

 function MenuBlog(props){
     const titlebar = (
         <ol>
         {props.data.map((show)=>
         <li key={show.id}>
         {show.title}
         </li>
         )}
     );
     const cotent = (
         props.data.map((show)=>
         <li key={show.id}>
         {show.title} {show.content}
         )
     );

     return (
         <div>
         {titlebar}
         <hr/>
         {content}
         </div>
     )
 }
 
 const data = [
     {id: 1, title: 'First', content: 'Welcome to JavaTpoint!!'},  
  {id: 2, title: 'Second', content: 'It is the best ReactJS Tutorial!!'},  
  {id: 3, title: 'Third', content: 'Here, you can learn all the ReactJS topics!!'}  
 ];

 ReactDOM.render(<MenuBlog data={data}/>, document.getElementById("root"));


React fragments 
In react whenever you want to something rendering on the screen, you need to use a render method inside a component
this render method return single elements or multiple elements. the render method will only render a single root node inside it at a time.
However, if you want to return multiple elements the render method require div element and put entire content or elements inside it. this extra node to the DOM sometimes results in the wrong formatting of your HTML and also not loved by the many developers


fragments allow you to group a list of children without adding extra nodes to the DOM.

Rendering with fragment tag 

class App extends React.Component{
    render(){
        return (
            <React.Fragment>
            <h2>Hello World!</h2>
            </React.Fragment>
        );
    }
}


why we use fragments?
the main reason we are using Fragment tag is:

1.It makes the execution of code faster as compared to div tag
2.It takes less memory


Fragment Shorthand

There is also another shorthand exists for declaring fragments for the above method. It look like empty tag
in which we can use of <> instead of the "React.Fragment"

class App extends React.Component{
    render(){
        return (
            <>
            <h2>Hello World!</h2>
            </>
        );
    }
}

keyed fragment

the shorthand syntax does not accept key attributes. you need a key for mapping a collection to an array 
of fragments such as to create a description list. if you need to provide keys you have to declare the fragments with the explicit <React.Fragment>

function = (props) {
    return  (
        <Fragment>
        {props.items.data.map(item =>(
            <React.Fragment key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.url}<p>
            <p>{item.description}<p>
            </React.Fragment>
        ))
        }
        </Fragment>
    )
}

Refs 
refs is the shorthand used for references in react.. similar to keys in react. It is an attribute which makes
it possible to store a reference to particular DOM nodes or React Elements. It provides a way to access ReactDOM or React elements and how to intearact with it. It is used when we want to change the value of child component. wothout making the use of props

when to use refs
refs can be used in the following cases:
1.when we need DOM measurements such as managing focus, text selection,or media playback
2.It is used in triggering imperative animations.
3.When intergrating third party DOM libraries
4.It can also use as in callbacks

when not to use refs

1.Its use should be avoided for anything that can be done declaratively 
for example instead of using open() close()  methods on a dialog component
you need to pass an isopen prop to it.

2.you should have avoid over use of refs

how to create refs 

Infact refs can be created by using React.createRef(). It can be assigned to react elements via the ref attribute. it commonly assigned to an instance proprty when a component is created, and then can be referenced throughout the component.


class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.callRef = React.createRef();
    }
    render() {
        return <div ref={this.callRef}/>;
    }
}


How to access refs 
In react when ref is passed to element inside render() method a reference to the node can be access via 
the current attribute of the ref

const node = this.callRef.current;


refs current property 

In React when a ref is passed to an element inside render method, a reference to the node can be accessed via 
the current attribute of the ref 

const node = this.callRef.current

Refs current property

the ref value differ depending on the type of node:

when the ref attribute is used in HTML element, the ref created with React.createRef() receives the underlying DOM element as its current property 

if the ref attribute used on a custom class component, then ref object receives the mounted instance of the
component as its current property 

the ref attribute can not be used on function components becuase they dont have instance


Add ref to DOM elements 

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.callRef = React.createRef();
        this.addingRefInput = this.addinRefInput.bind(this);
    }

    addingRefInput(){
        this.callRef.current.focus();
    }

    render(){
        return(
            <div>
            <h2>Adding ref to DOM element </h2>
            <input type="text" ref={this.callRef} />
            <input type="button" value="Add text input" onClick={this.addingRefInput}>
            </div>
        )
    }
}

Add ref to Class Component

import React from 'react';
import ReactDOM from 'react-dom';

function CustomInput(props){
    let callRefInput = React.createRef();
}

function handleclick(){
    callRefInput.current.focus();
}

return (
    <div>
    <h2>Adding refs to the class component</h2>
    <input type="text" ref={this.callRefInput}/>
    <input type="button" value="FocusInput" onClick={handleclick}/>
    </div>
);

class App extends React.Component{
    constructor(props){
        super(props);
        this.callRefInput = React.createRef();
    }

    focusRefInput(){
        this.callRefInput.current.focus();
    }

    render(){
        return(
            <CustomInput ref={this.callRefInput} />
        );
    }
}

Callback refs 

In react there is another way to use refs that is called "callback refs" and it gives more control when the 
refs are set and unset. instead of creating refs by createRef() method react allows to create refs by passing a callback function to the ref attribute of a component 

<input type="text" ref={element => this.callRefInput = element}>

the callback function is used to store a reference to the DOM node in an instance property and can be accessed else where. can be accessed below

this.callRefInput.value

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.callRefInput = null;
        
        this.setInputRef = element => {
            this.callRefInput = element;
        }

        this.focusRefInput = () => {
            //Focus the input using Raw DOM API
            if(this.callRefInput) this.callRefInput.focus();
        };
    }

    ComponentDidMount(){
        //autofocus of the input on mount
        this.focusRefInput();
    }

    render(){
        return(
            <div>
            <h2>Callbakc refs Example</h2>
            <input type="text" ref={this.setInputRef}/>
            <input type="button" value="focus input text" onClick={this.FocusRefInput}/>
            </div>
        )
    }

}

In the above example react will call the ref callback to store the reference to DOM element when the component mounts
and when the component unmounts, call it with null. Refs always up to date before the componentDidMount or 
ComponentDidupdate fires. the callback refs pass berween components is the same as you can work with object 
refs which is created with React.createRef()

forwarding ref from one component to another component

ref forwarding is a technique that is used for passing ref through a component to one of its child components
It can be performed by making use of React.forwardRef() method. this technique is particularlu useful with 
higher order components and specially used in reusable components 


import React from 'react';
import ReactDOM from 'react-dom';

const TextInput = React.forwardRef((props, ref)=>(
    <input type="text" placeholder="hello world" ref={ref}/>
)
);

const inputRef = React.createRef();

class CustomTextInput extends React.Component{
    handleSubmit = e => {
        e.prevent.Default();
        console.log(inputRef.current.value);
    };

    render(){
        return (
            <div>
            <form onSubmit={e => this.handleSubmit(e)}>
            <Textinput ref={inputRef}/>
            <button>submit</button>
            </form>
            </submit>
        );
    }
}

in the above example there is a component Textinput that has a child as an input field,  now to pass or forward the ref down to input, first, you have to create ref and pass your ref down to <Textinput ref={inputref>
after that react forward the ref to the ForwardRef function as a second argument next we forward this ref argument down to <input ref={ref}>. now the value of the DOM can be accessed by inputRef.current.value


react with useRef()

it helps to get DOM node or element and then we can interact with that DOM node or element such as focussing the input element or accessing the input elelment value it returns the ref object whose .current property 
initialized to the passed argument  the returned object persist the lifetime of the component.

function useRefExample(){
    const inputRef = useRef(null);
    const onButtonClick = () => {
        inputRef.current.focus();
    };
    return(
        <>
        <input ref={inputRef} type="text"/>
        <button onClick={onButtonClick}>Submit</button>
        </>
    )
}



React Router

Routing is a process in which a user is directed to different pages based on their action or request
ReactJS router is mainly used for developing single page web applications. react router is used to define 
multiple routes in the application when a user types a specific url into browser, and if this url path matches any route inside the router file user will redirected to that perticular route 

React router is standard library system built on top of the react used to creating routing in the react application using react router package.It provides the syncronous url on the browser with data that will be displayed on the webpage it maintains the standard structure and behavior of the application and mainly used 
for developing single page web applications 

Need of react router 

React router plays an important role to displaty multiple views in a single page applications.
without react router is not possible to display multiple views in react applications.
most of the social media websites uses react router for rendering multiple views

react router installation 

It contains three different packages for routing these are:

react-router: provides core routing components and functions for the react router applications
react-router-native: It is used for mobile applications
react-router-dom: It is used for web application design 

It is not possible to install react-router directly in your applications.
To use react routing first you need to install react-router-dom 

there are two types of router components
1.<BrowserRouter>
2.<HashRouter>

Example

we will create three components 

import React from 'react';

class About extends React.Component{
    render(){
        return<h1>About</h1>
    }
}


export default About


import React from 'react';

class Contact extends React.Component{
    render(){
        return <h1>Contact</h1>
    }
}

export default Contact



import React from 'react';

class Home extends React.Component{
    render(){
        return <h1>Home</h1>
    }
}

export default Home


for routing open index.js file and import all the three component files in it. you need to import line
import {Route, Link, BrowserRouter as Router} from react-router-dom which help us to implement routing.
now our index.js

what is route?

It is used to define and render component based on the specified path. It will accept components and render to define what should
be rendered

index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowerRouter as Router} from 'react-router-dom';
import App from './App';
import About from './About';
import Contact from './Contact';

const routing = (
    <Router>
    <div>
    <h1>React Router Example</h1>
    <Route path="/" component={App}>
    <Route path="/about" component={About}>
    <Route Path="/contact" component={Contact}>
    </div>
    </Router>
)

reactDOM.render(routing, document.getElementById("root"));

In the above screen you can see that home component is still rendered. It is because the home path is '/' and about path
is '/about' so you can observe / is common is both paths which render both components. to stop the behavior you need to use exact prop it can seen in the below example

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowerRouter as Router} from 'react-router-dom';
import App from './App';
import About from './About';
import Contact from './Contact';

const routing = (
    <Router>
    <div>
    <h1>React Router Example</h1>
    <Route exact path="/" component={App}>
    <Route path="/about" component={About}>
    <Route Path="/contact" component={Contact}>
    </div>
    </Router>
)

reactDOM.render(routing, document.getElementById("root"));


Adding navigation using  link component

sometimes, we want to need multiple links on a single page. When we click any particular link ,
it should load that page which is associated with that path withour reloading the web page for that we need import link  component
in index.js file

what is link component?
used to create links which allow to navigate on differen urls and render its content without reloading the webpage

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowerRouter as Router} from 'react-router-dom';
import App from './App';
import About from './About';
import Contact from './Contact';

const routing = (
    <Router>
    <div>
    <h1>React Router Example</h1>
    <ul>
    <li><link to="/">Home</link></li>
    <li><link to="/about">About</link></li>
    <li><link to="/contact">Contact</link></li>
    </ul>
    <Route exact path="/" component={App}>
    <Route path="/about" component={About}>
    <Route Path="/contact" component={Contact}>
    </div>
    </Router>
)

reactDOM.render(routing, document.getElementById("root"));

now we need to add some styles to the link. so that when we click on any particular link it can be easily idetified 
which link is active to do this react router provides a new trick navlink  instead of link add properties activestyle
the activestyle properties mean when we click on the link it should have a specific style so that we can differentiate which 
link is in active state


import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowerRouter as Router} from 'react-router-dom';
import App from './App';
import About from './About';
import Contact from './Contact';

const routing = (  
  <Router>  
    <div>  
      <h1>React Router Example</h1>  
      <ul>  
        <li>  
          <NavLink to="/" exact activeStyle={  
             {color:'red'}  
          }>Home</NavLink>  
        </li>  
        <li>  
          <NavLink to="/about" exact activeStyle={  
             {color:'green'}  
          }>About</NavLink>  
        </li>  
        <li>  
          <NavLink to="/contact" exact activeStyle={  
             {color:'magenta'}  
          }>Contact</NavLink>  
        </li>  
      </ul>  
      <Route exact path="/" component={App} />  
      <Route path="/about" component={About} />  
      <Route path="/contact" component={Contact} />  
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root')); 

link vs navlink
the link component allows navigating the different routes on the website
whereas navlink is used to add styles to the active routes

React router switch

the switch component is used to render components only when the path will be matched. otherwise 
It returns not found component

notfound.js

import React from 'react';

const notfound = () => <h1>Not found<h1>

export default notfound



import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowerRouter as Router} from 'react-router-dom';
import App from './App';
import About from './About';
import Contact from './Contact';
import notfound from './notfound';


const routing = (  
  <Router>  
    <div>  
      <h1>React Router Example</h1>  
      <ul>  
        <li>  
          <NavLink to="/" exact activeStyle={  
             {color:'red'}  
          }>Home</NavLink>  
        </li>  
        <li>  
          <NavLink to="/about" exact activeStyle={  
             {color:'green'}  
          }>About</NavLink>  
        </li>  
        <li>  
          <NavLink to="/contact" exact activeStyle={  
             {color:'magenta'}  
          }>Contact</NavLink>  
        </li>  
      </ul>  
      <switch>
      <Route exact path="/" component={App} />  
      <Route path="/about" component={About} />  
      <Route path="/contact" component={Contact} />
      <Route path={notfound}/>
      </switch>
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root')); 


nested routing

Change contact.js file as below

import React from 'react'  
import { Route, Link } from 'react-router-dom'  
  
const Contacts = ({ match }) => <p>{match.params.id}</p>  
  
class Contact extends React.Component {  
  render() {  
    const { url } = this.props.match  
    return (  
      <div>  
        <h1>Welcome to Contact Page</h1>  
        <strong>Select contact Id</strong>  
        <ul>  
          <li>  
            <Link to="/contact/1">Contacts 1 </Link>  
          </li>  
          <li>  
            <Link to="/contact/2">Contacts 2 </Link>  
          </li>  
          <li>  
            <Link to="/contact/3">Contacts 3 </Link>  
          </li>  
          <li>  
            <Link to="/contact/4">Contacts 4 </Link>  
          </li>  
        </ul>  
        <Route path="/contact/:id" component={Contacts} />  
      </div>  
    )  
  }  
}  
export default Contact  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
