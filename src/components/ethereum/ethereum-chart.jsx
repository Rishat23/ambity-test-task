import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const EthereumChart = ({ethereumList}) => {
	const labels = ethereumList.map(({date}) => date.toLocaleTimeString());

	const data = {
		labels,
		datasets: [
			{
				label: 'Стоимость криптовалюты',
				data: ethereumList.map(({currency}) => currency ),
				borderColor: '#3333ff',
				backgroundColor: 'rgba(0, 0, 255, 0.5)',
			}
		],
	};
	return (
		<Line
			options={{
				plugins: {
					legend: {
						position: 'bottom',
					},
					title: {
						display: true,
						text: 'Курс Ethereum',
						font: {
							size: 30,
							weight: 'bold'
						}
					},
				},
			}}
			data={data}
		/>

	)
}

export default EthereumChart