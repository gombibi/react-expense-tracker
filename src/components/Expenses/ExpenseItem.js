import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
	// 아무 상태를 가지지 않는 컴포넌트 = 프리젠테이셔널 or dumb 컴포넌트; 단지 출력을 위해 존재
	// const [title, setTitle] = useState(props.title);
	// const clickHnadler = () => {
	// 	setTitle('updated');
	// };
	return (
		<li>
			<Card className='expense-item'>
				<ExpenseDate date={props.date} />
				<div className='expense-item__description'>
					<h2>{props.title}</h2>
					<div className='expense-item__price'>${props.amount}</div>
				</div>
				{/* <button onClick={clickHnadler}>Change Title</button> */}
			</Card>
		</li>
	);
};

export default ExpenseItem;
