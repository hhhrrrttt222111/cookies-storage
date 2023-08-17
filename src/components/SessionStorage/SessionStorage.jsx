import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import '../../styles/styles.css'

function SessionStorage() {

	const [name, setName] = useState('')
	const [username, setUsername] = useState('')

	const navigate = useNavigate()

	useEffect(() => {
		setName(sessionStorage.getItem('name') || '')
		setUsername(sessionStorage.getItem('username') || '')
	  }, []);

	const handleSubmit = (e) => {
		e.preventDefault()

		sessionStorage.setItem("name", name)
		sessionStorage.setItem("username", username)
	}

	const clearSessionStorage = (e) => {
		e.preventDefault()

		sessionStorage.clear();
	}

	return (
		<div className='storage'>
			<Helmet>
				<title>Session Storage</title>
			</Helmet>
			<IoIosArrowBack onClick={() => navigate('/')} className='backIcon'/>
			<div className='storage__header'>
				<h1>Session Storage Demo</h1>
			</div>
			<div className='storage__section'>
				<form className='storage__form'>
					<div className='storage__input_div'>
						<label className='storage__label'>Name</label>
						<input value={name} onChange={(e) => setName(e.target.value)} type='text' className='storage__input' />
					</div>
					<div className='storage__input_div'>
						<label className='storage__label'>Username</label>
						<input value={username} onChange={(e) => setUsername(e.target.value)} type='text' className='storage__input' />
					</div>
					<div className='button__group'>
						<button type='text' onClick={clearSessionStorage} className='form__btn_clear'>Clear</button>
						<button type='submit' onClick={handleSubmit} className='form__btn_submit'>Submit</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SessionStorage