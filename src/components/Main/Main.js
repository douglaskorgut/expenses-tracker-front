import React from 'react';
import classes from './Main.module.css';
import CardHeader from "../Card/CardHeader/CardHeader";
import MainValue from "./MainValue/MainValue";
import MainControl from "./MainControl/MainControl";
import TransactionList from "./TransactionList/TransactionList";

const Main = ({title, value}) => {
    return (
        <div className={classes.Main}>
            <CardHeader title={title}/>
            <MainValue value={value}/>
            <MainControl/>
            <TransactionList/>
        </div>
    )
};

export default Main;
