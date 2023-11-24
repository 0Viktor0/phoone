import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Categories from './pages/Categories'
import Create from './pages/Create'
import PersonalComputer from './pages/PersonalComputer'

function App() {
	const [userAnswers, setUserAnswers] = useState([]);

	const handleAnswer = (answer) => {
		setUserAnswers([...userAnswers, answer])
	}

	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create" element={<Create />} />
					<Route path="/create/:id" element={<Create onAnswer={handleAnswer} />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/personal" element={<PersonalComputer />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
