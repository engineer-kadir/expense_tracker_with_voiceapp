import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


import useStyles from './styles';
import useTransactions from '../../useTransactions';

const DetailsCard = ({ title, subheader }) => {
    ChartJS.register(ArcElement, Tooltip, Legend);
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard;