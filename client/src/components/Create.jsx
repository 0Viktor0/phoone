import React, { useState } from 'react'
import './Create.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Create = () => {

	const [values, setValues] = useState({
		brand_id: '',
		model: '',
		release_date: '',
		os_id: '',
		display_id: '',
		processor: '',
		ram: '',
		scapacity_id: '',
		battery_capacity: '',
		camera: '',
		price: '',
		// image: ''
	})

	const handleSelect = (e) => {
		const { name, value } = e.target;

		setValues((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleInput = (e) => {
		const { name, value } = e.target;

		// Check if the input element is a text input or date input
		if (e.target.type === 'text' || e.target.type === 'date') {
			setValues((prev) => ({ ...prev, [name]: value }));
		} else {
			// Handle other input types
			setValues((prev) => ({ ...prev, [name]: Number(value) }));
		}
	};

	// const handleImage = (e) => {
	// 	setValues((prev) => ({ ...prev, image: e.target.value }));
	// }

	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()

		// const formData = new FormData()
		// formData.append('image', file)

		axios.post('http://localhost:8080/create', values)
			.then(res => {
				console.log(res)
				navigate('/admin')
			})
			.catch(err => console.log(err))

		// axios.post('http://localhost:8080/upload')
		// 	.then(res => console.log(res))
		// 	.catch(err => console.log(err))
	}

	return (
		<div className="align">
			<div className="grid">

				<Link to="/admin">back</Link>

				<form className="form" onSubmit={handleSubmit}>
					<div className="form__field">
						<select
							onChange={handleSelect}
							name="brand_id"
							id="brand"
							className="form__input"
							defaultValue=""
						>
							<option value="" disabled>Select Brand</option>
							<option value="1">Apple</option>
							<option value="2">Samsung</option>
							<option value="3">Xiaomi</option>
							<option value="4">Google</option>
							<option value="5">Asus</option>
							<option value="6">Black Shark</option>
							<option value="7">Sony</option>
						</select>

					</div>

					<div className="form__field">

						<input
							onChange={handleInput}
							type="text"
							name="model"
							className="form__input"
							placeholder="Model" />
					</div>
					<div className="form__field">

						<input
							onChange={handleInput}
							type="date"
							name="release_date"
							className="form__input"
							placeholder="Release Date"
						/>
					</div>

					<div className="form__field">
						<select
							onChange={handleSelect}
							name="os_id"
							id="os"
							className="form__input"
							defaultValue=""
						>
							<option value="" disabled>Select OS</option>
							<option value="1">iOS</option>
							<option value="2">Android</option>
						</select>
					</div>

					<div className="form__field">

						<select
							onChange={handleSelect}
							name="display_id"
							id="display"
							className="form__input"
							defaultValue=""
						>
							<option value="" disabled>Select Display</option>
							<option value="4">6.1''</option>
							<option value="5">6.2''</option>
							<option value="6">6.3''</option>
							<option value="7">6.4''</option>
							<option value="8">6.5''</option>
							<option value="9">6.6''</option>
							<option value="10">6.7''</option>
							<option value="11">6.8''</option>
						</select>
					</div>
					<div className="form__field">

						<input
							onChange={handleInput}
							type="text"
							name="processor"
							className="form__input"
							placeholder="Processor"
						/>
					</div>

					<div className="form__field">

						<input
							onChange={handleInput}
							type="text"
							name="ram"
							className="form__input"
							placeholder="RAM"
						/>
					</div>

					<div className="form__field">

						<select
							onChange={handleSelect}
							name="scapacity_id"
							id="s_capacity"
							className="form__input"
							defaultValue=""
						>
							<option value="" disabled>Select Capacity</option>
							<option value="1">64gb</option>
							<option value="2">128gb</option>
						</select>
					</div>

					<div className="form__field">

						<input
							onChange={handleInput}
							type="text"
							name="battery_capacity"
							className="form__input"
							placeholder="Battery Capacity"
						/>
					</div>

					<div className="form__field">

						<input
							onChange={handleInput}
							type="text"
							name="camera"
							className="form__input"
							placeholder="Camera"
						/>
					</div>

					<div className="form__field">

						<input
							onChange={handleInput}
							type="text"
							name="price"
							className="form__input"
							placeholder="Price"
						/>
					</div>
					{/* <div className="form__field form__field--fullwidth">
						<input onChange={handleImage} type="file" className='form__input-submit' />
					</div> */}
					<div className="form__field form__field--fullwidth">
						<input type="submit" className='form__input-submit' value="Add" />
					</div>
				</form>
			</div>
		</div>

	)
}

export default Create