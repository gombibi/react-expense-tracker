import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
	const { items } = props;

	if (items.length === 0) {
		return <h2 className='expenses-list__fallback'>Found no expenses</h2>;
	} else {
		return (
			<ul className='expenses-list'>
				{items.map((item) => (
					<ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
				))}
			</ul>
		);
	}
};

export default ExpensesList;
