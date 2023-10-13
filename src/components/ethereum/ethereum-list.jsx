import { useEffect, useState } from 'react'
import Loader from '../../UI/loader/loader.jsx'
import EthereumChart from './ethereum-chart.jsx'


const EthereumList = () => {

	const [ethereumList,setEthereumList] = useState([])
	const [isLoading, setIsLoading] = useState(false)


	useEffect(() => {
		const func = async() => {
			try {
				setIsLoading(true)
				const response = await fetch('https://api.coinstats.app/public/v1/charts?period=1m&coinId=ethereum')
				const { chart } = await response.json()
				setEthereumList(chart.map(([dateNumber,currency]) => {
					return {
						date: new Date(dateNumber),
						currency
					}
				}))
			}
			catch {
				console.log('Error')
			}
			finally {
				setIsLoading(false)
			}
		}
		func()
	},[])


	return (
		<>
			{
				isLoading
				? <Loader/>
				: (
					<>
						<EthereumChart ethereumList={ethereumList} />
					</>
				)
			}
		</>
	)
}

export default EthereumList