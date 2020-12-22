import React from 'react';
import classes from './CardHeader.module.css';

const CardHeader = ({title}) => {
    return (
        <div className={classes.CardHeader}>
            <h1>{title}</h1>
        </div>
    )
};

export default CardHeader;
