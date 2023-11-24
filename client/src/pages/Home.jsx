import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'

const Home = () => {


	return (
		<div className='container'>
			<h2 className='text-h2'>what-you-want-to-do?</h2>

			<Link to="/create" className='page-link'>to-get-best-smartphone</Link>
			<Link to="/categories" className='page-link'>smartphones-by-categories</Link>
			<Link to="/personal" className='page-link'>to-change</Link>
		</div>
	)
}

export default Home