import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createElement(
    'div',
    {
        className: 'wrapper'
    },
    [
        React.createElement(
            'h1',
            {
                className: 'mainHeader'
            },
            'Hello world'
        ),
        React.createElement(
            'h2',
            {
                className: 'secondaryHeader'
            },
            'Hello world?'
        ),
    ]
);

ReactDOM.render(
    //rendered element
    App,
    //target
    document.getElementById('root')
);