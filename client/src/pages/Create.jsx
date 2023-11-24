import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RangeSlider from '../components/RangeSlider';
import '../App.css';

const Create = () => {
	const [formData, setFormData] = useState({
		question1: '',
		question2: '',
		question3: '',
		question4: '',
	});

	const handleInputChange = (question, answer) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[question]: answer,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form Data:', formData);
	};

	return (
		<div className="container">
			{/* <Link to="/" className="back-home">
				back
			</Link> */}

			<form onSubmit={handleSubmit}>
				<div>
					{/* <p>What is your budget?</p>
					<label className="range-container">
						<input
							type="range"
							name="question1"
							min={250}
							max={2500}
							step={50}
							value={formData.question1}
							onChange={(e) => handleInputChange('question1', parseInt(e.target.value))}
						/>
						<h4>${formData.question1}</h4>
					</label> */}
					<RangeSlider />
				</div>

				<div>
					<p>Condition</p>
					<div className="radio-toolbar">
						<label className={formData.question2 === 'New' ? 'checked' : ''}>
							<input
								type="radio"
								name="question2"
								value="New"
								onChange={(e) => handleInputChange('question2', e.target.value)}
								checked={formData.question2 === 'New'}
							/>
							New
						</label>
						<label className={formData.question2 === 'Used' ? 'checked' : ''}>
							<input
								type="radio"
								name="question2"
								value="Used"
								onChange={(e) => handleInputChange('question2', e.target.value)}
								checked={formData.question2 === 'Used'}
							/>
							Used
						</label>

					</div>
				</div>


				<div>
					<p>OS</p>
					<div className="radio-toolbar">
						<label className={formData.question3 === 'Apple' ? 'checked' : ''}>
							<input
								type="radio"
								name="question3"
								value="Apple"
								onChange={(e) => handleInputChange('question3', e.target.value)}
								checked={formData.question3 === 'Apple'}
							/>
							Apple
						</label>
						<label className={formData.question3 === 'Android' ? 'checked' : ''}>
							<input
								type="radio"
								name="question3"
								value="Android"
								onChange={(e) => handleInputChange('question3', e.target.value)}
								checked={formData.question3 === 'Android'}
							/>
							Android
						</label>
					</div>
				</div>

				<div>
					<p>Preference</p>
					<div className="radio-toolbar">
						<label className={formData.question4 === 'Gaming' ? 'checked' : ''}>
							<input
								type="radio"
								name="question4"
								value="Gaming"
								onChange={(e) => handleInputChange('question4', e.target.value)}
								checked={formData.question4 === 'Gaming'}
							/>
							Gaming
						</label>
						<label className={formData.question4 === 'Personal Use' ? 'checked' : ''}>
							<input
								type="radio"
								name="question4"
								value="Personal Use"
								onChange={(e) => handleInputChange('question4', e.target.value)}
								checked={formData.question4 === 'Personal Use'}
							/>
							Personal Use
						</label>
					</div>
				</div>


				<button type="submit" className='submit-btn'>Submit</button>
			</form>
		</div>
	);
};

export default Create;
