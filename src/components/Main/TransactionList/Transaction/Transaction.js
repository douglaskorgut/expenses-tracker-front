import React from 'react';
import classes from './Transaction.module.css';
import {ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyles from "./styles";

const Transaction = ({transaction}) => {

    const customClasses = useStyles();


    return (
        <ListItem className={transaction.type === 'Entrada' ? classes.Income : classes.Expense}>
            <ListItemAvatar>
                <Avatar className={transaction.type === 'Entrada' ? customClasses.avatarIncome : customClasses.avatarExpense}>
                    <MoneyOff />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.type} secondary={`R$ ${transaction.amount} - ${transaction.date}`} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <Delete />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default Transaction;
