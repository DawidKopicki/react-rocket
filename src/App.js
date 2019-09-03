import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css'
import './components/MyComponent/MyComponent'
import MyComponent from './components/MyComponent/MyComponent';


const App = () => (
    <div>
        <MyComponent />
        <ListWrapper />
    </div>
);

export default App;