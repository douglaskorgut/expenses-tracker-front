import React from 'react';
import classes from './TransactionList.module.css';
import List from "@material-ui/core/List";
import Transaction from "./Transaction/Transaction";

const TransactionList = (props) => {

    const transactions = [
        {type: "Entrada", amount: 1000.00, date: '2020-12-22'},
        {type: "Gasto", amount: 15.51, date: '2020-12-22'},
        {type: "Gasto", amount: 12.11, date: '2020-12-22'},
        {type: "Gasto", amount: 45.40, date: '2020-12-22'},
        {type: "Entrada", amount: 100.50, date: '2020-12-22'},
        {type: "Gasto", amount: 150.13, date: '2020-12-22'},
        {type: "Entrada", amount: 64.99, date: '2020-12-22'}
    ];

    return (
        <div  className={classes.TransactionList}>
            <List>
            {/*<Slide direction="down" in={true} mountOnEnter unmountOnExit>*/}
            {transactions.map((transaction, index) => <Transaction id={`${index}-transaction`} transaction={transaction}/>)}
            {/*</Slide>*/}
            </List>
        </div>
    )
};

export default TransactionList;
