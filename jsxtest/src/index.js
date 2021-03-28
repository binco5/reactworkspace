import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttontext = {text : 'Click me!'};
    const labelText = 'Enter Name';

    return <div>
        <label className="label" htmlFor="name">
            {labelText}
        </label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color: 'white'}}>
            {buttontext.text}
        </button>
    </div>;
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);