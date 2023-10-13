import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Advice from './components/advice/advice/advice.jsx'
import EthereumList from './components/ethereum/ethereum-list.jsx'
import Main from './components/main/main.jsx'


const Routes = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />
		},
		{
			path: "/words",
			element: <Advice />,
		},
		{
			path: "/eth",
			element: <EthereumList />,
		}
	]);

	return (
		<RouterProvider router={router} />
	)
}

export default Routes