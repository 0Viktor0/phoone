import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import pngPhone from '../images/phone-1.png'
import Login from '../components/Login'
import Navbar from '../components/Navbar'


const Home = () => {


	return (
		<div className='container'>
			<Navbar />

			<div className='wrapper'>



				<div className="left">

					<div className="text-box">
						<h2 className='gradient-text'>Discover Your Ideal Smartphone with Ease</h2>

						<p className='paragraph-text'>Uncover the smartphone that perfectly suits your needs using our intuitive platform.
							Share your preferences and explore detailed specifications.
							Your personalized smartphone awaits.</p>
						<p className='paragraph-text'>Start your search now..</p>
						<Link to="/find" className='page-link'>find-smartphone</Link>
					</div>

					{/* <button className='page-link_disabled disabled'>smartphones-by-categories</button> */}
				</div>
				<div className="right">
					<img src={pngPhone} className='phone-pic' alt="Phone" />
				</div>


			</div>

		</div>
	)
}

export default Home