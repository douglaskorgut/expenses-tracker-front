import React from 'react';
import classes from './CardDetails.module.css';
import { Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import {chartColors} from "../../../constant/colors";

const CardDetails = (props) => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: "bottom"
        },
        elements: {
            arc: {
                borderWidth: 1
            }
        }
    };

    const data = {
        labels: ["a", "b", "c", "d"],
        datasets: [
            {
                data: [300, 50, 100, 50],
                backgroundColor: chartColors,
                hoverBackgroundColor: chartColors
            }
        ]
    };

    return (
        <div className={classes.CardDetails}>
            <Typography variant="h5"></Typography>
            <Doughnut data={data} options={options}/>
        </div>
    )
};

export default CardDetails;
