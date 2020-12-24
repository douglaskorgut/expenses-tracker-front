import React from 'react';
import classes from './MainValue.module.css';

const MainValue = ({value}) => {
    return (
        <div className={classes.MainValue}>
            <h2>Total: R$ {value}</h2>
        </div>
    )
};

export default MainValue;
