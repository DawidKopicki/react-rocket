import React from 'react';

const Form = () => (
    <form>
        <input placeholder="name"/>
        <input placeholder="link"/>
        <input placeholder="image"/>
        <textarea placeholder="description" name="description"/>
        <button>add new item</button>
    </form>
);

export default Form;