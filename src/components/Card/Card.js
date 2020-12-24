import React from 'react';
import classes from './Card.module.css';
import CardHeader from "./CardHeader/CardHeader";
import CardValue from './CardValue/CardValue';
import CardDetails from "./CardDetails/CardDetails";

const Card = ({title, value}) => {
    let attachedClasses = [classes.Card, classes.Green];

    if (title === "Gastos"){
        attachedClasses  = [classes.Card, classes.Red]
    }

    return (
        <div className={attachedClasses.join(' ')}>
            <CardHeader title={title}></CardHeader>
            <CardValue value={value}></CardValue>
            <CardDetails/>
        </div>
    )
};


export default Card;
