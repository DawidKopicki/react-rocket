import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <div>
        <h1 className="mainHeader">Hello world</h1>
        <h2 className="secondaryHeader">Hello world?</h2>
    </div>
);

ReactDOM.render(
    //rendered element
    <App />,
    //target
    document.getElementById('root')
);