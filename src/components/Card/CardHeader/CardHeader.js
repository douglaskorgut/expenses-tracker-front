import React from 'react';
import classes from './CardHeader.module.css';

const CardHeader = ({title}) => {
    let attachedClasses = [classes.CardHeader, classes.Info];

    if (title === "Gerenciador") {
        attachedClasses = [classes.CardHeader, classes.Main];
    }

    return (
        <div className={attachedClasses.join(' ')}>
            <h1>{title}</h1>
        </div>
    )
};

export default CardHeader;
