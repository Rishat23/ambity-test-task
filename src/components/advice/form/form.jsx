import { useState } from 'react'
import cl from './form.module.scss'

const Form = ({ onSubmit, disabled }) => {
	const [id, setId] = useState('')
	const handleChange = (event) => {
		const {value} = event.target
		setId(value)
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		onSubmit(id)
		setId('')
	}



	return (
		<form className={cl.form} onSubmit={ handleSubmit }>
			<input
				className={cl.input}
				type="number"
				disabled={disabled}
				placeholder="Ввести идентификатор совета"
				value={id}
				onChange={handleChange}
			/>
			<button className={cl.button} disabled={disabled}>Нажмите</button>
		</form>
	)
}

export default Form