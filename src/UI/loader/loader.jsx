import loaderSrc from '../../assets/loader.svg'

import cl from './loader.module.scss'


const Loader = () => {
	return (
		<div className={cl.loaderWrapper}>
			<img src={loaderSrc} alt="loading" />
		</div>
	)
}

export default Loader