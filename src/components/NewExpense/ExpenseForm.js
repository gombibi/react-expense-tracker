import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	// const [enteredTitle, setEnteredTitle] = useState('');
	// const [enteredAmount, setEnteredAmount] = useState('');
	// const [enteredDate, setEnteredDate] = useState('');
	const [userInput, setUserInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: '',
	});

	// const titleChangeHandler = (e) => {
	// 	// setEnteredTitle(event.target.value);
	// 	// setUserInput({
	// 	// 	...setUserInput,
	// 	// 	enteredTitle: event.target.value,
	// 	// });
	// 	//항상 최신의 상태의 스냅샷에서 작업하도록 하는 좀더 안전한 방법
	// 	//이전 상태에 따라 상태를 업데이트할 때마다 아래 함수 구문을 사용해야 함
	// 	setUserInput((prevState) => {
	// 		return { ...prevState, enteredTitle: e.target.value };
	// 	});
	// };
	//객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key값으로 사용
	const onChangeHandler = (e) => {
		setUserInput((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	// const amountChangeHandler = (event) => {
	// 	// setEnteredAmount(event.target.value);
	// 	setUserInput({
	// 		...setUserInput,
	// 		enteredAmount: event.target.value,
	// 	});
	// }
	// const dateChangeHandler = (event) => {
	// 	// setEnteredDate(event.target.value);
	// 	setUserInput({
	// 		...setUserInput,
	// 		enteredDate: event.target.value,
	// 	});
	// };

	const submitHandler = (e) => {
		//form이 보내질 때마다 브라우저가 새로고침되는 기본동작 방지
		e.preventDefault();

		const expenseData = {
			title: userInput.enteredTitle,
			amount: +userInput.enteredAmount,
			date: new Date(userInput.enteredDate),
		};

		props.onSaveExpenseData(expenseData);

		setUserInput({
			enteredTitle: '',
			enteredAmount: 0,
			enteredDate: '',
		});

		props.isAdded();
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' name='enteredTitle' value={userInput.enteredTitle} onChange={onChangeHandler}></input>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' name='enteredAmount' value={userInput.enteredAmount} onChange={onChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min='2019-01-01' max='2022-12-31' name='enteredDate' value={userInput.enteredDate} onChange={onChangeHandler} />
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
