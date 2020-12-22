import React from 'react';
import classes from './CardValue.module.css';

const CardValue = ({value}) => {
    return (
        <div className={classes.CardValue}>
            <h2>R$ {value}</h2>
        </div>
    )
};

export default CardValue;
