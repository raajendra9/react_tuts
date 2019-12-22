import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

func = (props) => {
    return (
<Fragment>
    /* you need a key for mapping a collection to an array of fragments such as to create
    a description list. if you need to provide keys, you have to declare the fragments with the explicit tag */
    {props.data.map(item => (
        <React.Fragment key={item.id}>
    <h2>{item.title}</h2>
    <p>{item.url}</p>
    <p>{item.description}</p>

        </React.Fragment>
    ))}
</Fragment>
    )
}

ReactDOM.render(<func />, document.getElementById('fragments'));