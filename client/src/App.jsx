import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Categories from './pages/Categories'
import Find from './pages/Find'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ReadItem from './components/ReadItem'
import EditItem from './components/EditItem'
import Admin from './components/Admin'
import Create from './components/Create'

function App() {


	return (
		<>
			<Router>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/find" element={<Find />} />
					<Route path="/find/:id" element={<Find />} />
					<Route path="/items" element={<Categories />} />
					<Route path='/login' element={<Login />} end />
					<Route path='/signup' element={<SignUp />} end />
					<Route path='/admin' element={<Admin />} />
					<Route path='/create' element={<Create />} />
					<Route path='/read/:id' element={<ReadItem />} />
					<Route path='/edit/:id' element={<EditItem />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;


// git PAC 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