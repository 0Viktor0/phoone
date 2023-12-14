import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

const Find = () => {

	const [selectedPhoneType, setSelectedPhoneType] = useState(null);

	const handlePhoneTypeChange = (event) => {
		setSelectedPhoneType(event.target.value);
	};


	return (
		<div className="pick-body">
			<div className="item-wrap">
				<form action="">
					<Link to='/'>back-home</Link>

					<h2>what-you-look-for?</h2>
					<div className="cards">
						<div className="content-card">
							<div className="content-card-inner">
								<header>
									<h3>1. Do you want a specific type of phone?</h3>
								</header>
								<div className="card-option">
									<input
										type="radio"
										id="apple"
										name="phoneType"
										value="Apple"
										checked={selectedPhoneType === "Apple"}
										onChange={handlePhoneTypeChange}
									/>
									<label htmlFor="apple">Apple</label>
								</div>
								<div className="card-option">
									<input
										type="radio"
										id="samsung"
										name="phoneType"
										value="Samsung"
										checked={selectedPhoneType === "Samsung"}
										onChange={handlePhoneTypeChange}
									/>
									<label htmlFor="samsung">Samsung</label>
								</div>
								<div className="card-option">
									<input
										type="radio"
										id="anyandroid"
										name="phoneType"
										value="anyAndroid"
										checked={selectedPhoneType === "anyAndroid"}
										onChange={handlePhoneTypeChange}
									/>
									<label htmlFor="anyandroid">Any Android</label>
								</div>
								<div className="card-option">
									<input
										type="radio"
										id="any"
										name="phoneType"
										value="any"
										checked={selectedPhoneType === "any"}
										onChange={handlePhoneTypeChange}
									/>
									<label htmlFor="any">Any is fine</label>
								</div>
							</div>
							<div className="content-card-inner">
								<header>
									<h3>2. What will you mainly use your phone for?</h3>
								</header>

								<div className="card-option">
									<input
										type="radio"
										id="samsung"
										name="phoneType"
										value="Samsung"
										checked={selectedPhoneType === "Samsung"}
										onChange={handlePhoneTypeChange}
									/>
									<label htmlFor="samsung">Samsung</label>
								</div>
								<div className="card-option">
									<input
										type="radio"
										id="anyandroid"
										name="phoneType"
										value="anyAndroid"
										checked={selectedPhoneType === "anyAndroid"}
										onChange={handlePhoneTypeChange}
									/>
									<label htmlFor="anyandroid">Any Android</label>
								</div>
								<div className="card-option">
									<input
										type="radio"
										id="any"
										name="phoneType"
										value="any"
										checked={selectedPhoneType === "any"}
										onChange={handlePhoneTypeChange}
									/>
									<label htmlFor="any">Any is fine</label>
								</div>
							</div>
							<div className="content-card-inner">
								<header>
									<h3>3. Do you need the most recent phone?</h3>
								</header>
								<div className="card-option">
									<input
										type="radio"
										id="apple"
										name="phoneType"
										value="Apple"
										checked={selectedPhoneType === "Apple"}
										onChange={handlePhoneTypeChange}
									/>
									<label htmlFor="apple">Apple</label>
								</div>
								<div className="card-option">
									<input
										type="radio"
										id="samsung"
										name="phoneType"
										value="Samsung"
										checked={selectedPhoneType === "Samsung"}
										onChange={handlePhoneTypeChange}
									/>
									<label htmlFor="samsung">Samsung</label>
								</div>
								<div className="card-option">
									<input
										type="radio"
										id="anyandroid"
										name="phoneType"
										value="anyAndroid"
										checked={selectedPhoneType === "anyAndroid"}
										onChange={handlePhoneTypeChange}
									/>
									<label htmlFor="anyandroid">Any Android</label>
								</div>

							</div>
							<div className="content-card-inner">
								<header>
									<h3>4. Do you want to include refurbished phones?</h3>
								</header>
								<div className="card-option">
									<input
										type="radio"
										id="apple"
										name="phoneType"
										value="Apple"
										checked={selectedPhoneType === "Apple"}
										onChange={handlePhoneTypeChange}
									/>
									<label htmlFor="apple">Apple</label>
								</div>
								<div className="card-option">
									<input
										type="radio"
										id="samsung"
										name="phoneType"
										value="Samsung"
										checked={selectedPhoneType === "Samsung"}
										onChange={handlePhoneTypeChange}
									/>
									<label htmlFor="samsung">Samsung</label>
								</div>

							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Find;
