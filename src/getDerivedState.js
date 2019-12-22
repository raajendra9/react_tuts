import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor:'Red'};
    }
    static getDerivedStateFromProps(props,state) {
        return {favoritecolor:props.favcol};
    }
    render() {
        return <h2>This is my {this.state.favoritecolor} color</h2>
    }
}

ReactDOM.render(<Header favcolor='Yellow'/>, document.getElementById('getDerivedStateFromProps'));
