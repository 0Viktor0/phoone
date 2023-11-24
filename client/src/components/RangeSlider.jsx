import React, { useState, useEffect } from 'react';

const MIN = 150
const MAX = 2500

const RangeSlider = () => {

	const [values, setValues] = useState([MIN, MAX])

	return (
		<div className="range_container">
			<h1>Price range</h1>


		</div>
	);
};

export default RangeSlider;
