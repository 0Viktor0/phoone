import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'


const Navbar = () => {
	return (
		<nav className="nav" role="navigation">
			<div className="navbar">
				<h1 className='gradient-text'>Ph8ne</h1>


				<div className="user">
					<Link to="/admin">dashboard</Link>
					<Link to="/login">login</Link>
					<Link to="/signup">sign-up</Link>
				</div>
			</div>

		</nav>
	)
}

export default Navbar