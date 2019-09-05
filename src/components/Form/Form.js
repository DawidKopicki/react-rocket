import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';

const Form = ({submitFn}) => (
    <div className={styles.wrapper}>
        <h2>Add new twitter account</h2>
        <form 
            autoComplete="off"
            className={styles.form} 
            onSubmit={submitFn}
        >
            <Input
                name='name'
                label="Name"
                maxLength={30}    
            />
            <Input
                name='link'
                label="Twitter link"  
            />
            <Input
                name='image'
                label="Image"   
            />
            <Input
                tag="textarea"
                name='description'
                label="Description"
            />
            <Title>add new item</Title>
        </form>
    </div>
);

export default Form;