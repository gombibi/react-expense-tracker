import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
	const { items } = props;
	const [filteredYear, setfilteredYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setfilteredYear(selectedYear);
	};

	const filteredItems = items.filter((item) => item.date.getFullYear().toString() === filteredYear);

	return (
		<>
			<Card className='expenses'>
				<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
				<ExpensesChart expenses={filteredItems} />
				<ExpensesList items={filteredItems} />
			</Card>
		</>
	);
};

export default Expenses;
