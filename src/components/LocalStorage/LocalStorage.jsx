import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

import '../../styles/styles.css'

function LocalStorage() {

	const [name, setName] = useState('')
	const [username, setUsername] = useState('')

	const navigate = useNavigate()

	useEffect(() => {
		setName(localStorage.getItem('name') || '')
		setUsername(localStorage.getItem('username') || '')
	  }, []);

	const handleSubmit = (e) => {
		e.preventDefault()

		localStorage.setItem("name", name)
		localStorage.setItem("username", username)
	}

	const clearLocalStorage = (e) => {
		e.preventDefault()
	
		localStorage.clear();
	}

	return (
		<div className='storage'>
			<Helmet>
				<title>Local Storage</title>
			</Helmet>
			<IoIosArrowBack  onClick={() => navigate('/')} className='backIcon'/>
			<div className='storage__header'>
				<h1>Local Storage Demo</h1>
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
						<button type='text' onClick={clearLocalStorage} className='form__btn_clear'>Clear</button>
						<button type='submit' onClick={handleSubmit} className='form__btn_submit'>Submit</button>
					</div>
				</form>
			</div>
		</div>
	)
	}

	export default LocalStorage