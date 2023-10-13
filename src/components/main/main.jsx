import {NavLink} from 'react-router-dom'
import cl from './main.module.scss'

const Main = () => {
	return (
		<div>
			<h1 className={cl.title}>Ambity Test Task</h1>
			<div className={cl.linksWrapper}>
				<NavLink className={cl.link} to="/words">Advice</NavLink>
				<NavLink className={cl.link} to="/eth">Ethereum</NavLink>
			</div>
		</div>
	)
}

export default Main