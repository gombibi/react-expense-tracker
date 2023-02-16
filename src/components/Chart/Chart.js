import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
	const { dataPoints } = props;
	const values = dataPoints.map((point) => point.value); //배열
	const totalMax = Math.max(...values); //배열이 아닌 인자들의 목록을 전달하기 위해 ...(스프레드 연산자) 사용
	return (
		<>
			<div className='chart'>
				{dataPoints.map((point) => (
					<ChartBar key={point.label} value={point.value} maxValue={totalMax} label={point.label} />
				))}
			</div>
		</>
	);
};

export default Chart;
