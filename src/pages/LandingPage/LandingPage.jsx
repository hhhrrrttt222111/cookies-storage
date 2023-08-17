import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './LandingPage.css'

const storageTypes = [
  {
    id: 1,
    title: "Local Storage",
    url: "/local-storage"
  },
  {
    id: 2,
    title: "Session Storage",
    url: "/session-storage"
  },
  {
    id: 3,
    title: "Cookies",
    url: "/cookies"
  },
]

function LandingPage() {
  return (
    <div className='landingPage'>
      	<Helmet>
				<title>Browser Storage</title>
			</Helmet>
      <div className='lp__container'>
        {storageTypes.map((storage) => (
          <Link to={storage.url} className='lp__card' key={storage.id}>
            <span>{storage.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LandingPage