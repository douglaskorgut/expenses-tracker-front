import React from 'react';
import classes from './Grid.module.css';
import Card from '../Card/Card';
import Main from '../Main/Main';

const Grid = (props) => {

    const dataArr = [{title: "Entrada", value: 12.23}, {title: "Gerenciador", value: 13.01} , {title: "Gastos", value: 25.04}];

    return (
        <div className={classes.Grid}>
            {dataArr.map((data) => data.title === "Gerenciador" ? <Main title={data.title} value={data.value} /> : <Card title={data.title} value={data.value} />)}
        </div>
    )
};

export default Grid;
