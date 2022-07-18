import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context';

import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  //console.log('Transactions : '+JSON.stringify(transactions));
  const rightTransactions = transactions.filter((t) => t.type === title);
  //console.log('Right Transactions : '+JSON.stringify(rightTransactions));
  const total = rightTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
  //console.log('Total : '+ total)
  const categories = title === 'Income' ? incomeCategories : expenseCategories;
  //console.log('Categories : '+JSON.stringify(categories));
  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });
  //console.log('Categories'+JSON.stringify(categories));

  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  console.log('Filtered Categories : '+JSON.stringify(filteredCategories));

  const chartData = {
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
    }],
    labels: filteredCategories.map((c) => c.type),
  };
console.log('Chart Data : '+JSON.stringify(chartData))
  return { filteredCategories, total, chartData };
};

export default useTransactions;