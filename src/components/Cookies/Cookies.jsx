import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { Helmet } from 'react-helmet'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

import '../../styles/styles.css'

function Cookies() {

  	const [name, setName] = useState('')
	const [username, setUsername] = useState('')	
	const navigate = useNavigate()

	const [cookies, setCookie, removeCookie] = useCookies(['user']);

	useEffect(() => {
		setName(cookies.name || '')
		setUsername(cookies.username || '')
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault()

		setCookie('name', name, { path: '/' });
		setCookie('username', username, { path: '/' });

	}

	const clearCookies = (e) => {
		e.preventDefault()

		removeCookie("name");
		removeCookie("username");
	}


  return (
    <div className='storage'>
		<Helmet>
			<title>Cookies</title>
		</Helmet>
		<IoIosArrowBack onClick={() => navigate('/')} className='backIcon'/>
		<div className='storage__header'>
			<h1>Cookies Demo</h1>
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
					<button type='text' onClick={clearCookies} className='form__btn_clear'>Clear</button>
					<button type='submit' onClick={handleSubmit} className='form__btn_submit'>Submit</button>
				</div>
			</form>
		</div>
    </div>
  )
}

export default Cookies