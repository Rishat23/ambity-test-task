import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	Filler
} from 'chart.js'
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	Filler
);


const AdviceChart = ({advice}) => {
	const vowelLetters = 'aeiouy'

	const letters = advice.toLowerCase().split('').reduce((accum,letter) => {
		if (vowelLetters.includes(letter)) {
			return {
				...accum,
				[letter]: accum[letter] ? accum[letter] + 1 : 1
			}
		}
		else {
			return accum
		}
	},{})
	const sortedLetters = Object.entries(letters).sort(([_,valueA],[__,valueB]) => valueB - valueA)
	const barChartData = {
		labels: sortedLetters.map(([key]) => key),
		datasets: [
			{
				data:  sortedLetters.map(([_,value]) => value),
				label: "Количество гласных в предложении",
				borderColor: "#3333ff",
				backgroundColor: "rgba(0, 0, 255, 0.5)",
				fill: true,
			},
		]
	};

	return <>
		<Bar
			width={260}
			height={100}
			data={barChartData}
			options={
				{
					plugins: {
						title: {
							display: true,
							text: "Рейтинг используемых гласных букв",
							font: {
								size: 30,
								weight: 'bold'
							}
						},
						legend: {
							display: true,
							position: "bottom"
						}
					}
				}
			}
		/>
	</>
};

export default AdviceChart;