import React, { useState, useEffect } from 'react'
import './Create.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

const EditItem = () => {

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
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		axios.get(`http://localhost:8080/read/${id}`)
			.then(res => {
				const fetchedData = res.data[0];
				if (fetchedData.release_date) {
					// Format the release_date to YYYY-MM-DD format
					fetchedData.release_date = new Date(fetchedData.release_date).toISOString().split('T')[0];
				}
				setValues({ ...fetchedData }); // Populate form with formatted data
				setError(null);
			})
			.catch(err => {
				console.error(err);
				setError('An error occurred while fetching data');
			})
			.finally(() => {
				setLoading(false);
			});
	}, [id]);

	const handleSelect = (e) => {
		const { name, value } = e.target;

		setValues((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleInput = (e) => {
		const { name, value } = e.target;

		if (name === 'release_date') {
			// Convert the date to YYYY-MM-DD format
			const formattedDate = new Date(value).toISOString().split('T')[0];
			setValues((prev) => ({ ...prev, [name]: formattedDate }));
		} else if (e.target.type === 'text' || e.target.type === 'date') {
			setValues((prev) => ({ ...prev, [name]: value }));
		} else {
			// Handle other input types
			setValues((prev) => ({ ...prev, [name]: Number(value) }));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.put(`http://localhost:8080/edit/${id}`, values)
			.then(res => {
				console.log(res);
				navigate('/admin');
			})
			.catch(err => console.log(err));
	};

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	if (!values.brand_id || values.brand_id.length === 0) {
		return <p>No data found for this item</p>
	}

	return (
		<div className="align">
			<div className="grid">

				<Link to="/admin">back</Link>


				<h1 style={{ color: '#fff', margin: '25px 0' }}>Edit phone</h1>
				<form className="form" onSubmit={handleSubmit}>
					<div className="form__field">
						<select
							onChange={handleSelect}
							name="brand_id"
							id="brand"
							className="form__input"
							defaultValue={`${values.brand_id}`}
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
							value={values.model}
							placeholder="Model" />
					</div>
					<div className="form__field">

						<input
							onChange={handleInput}
							type="date"
							name="release_date"
							className="form__input"
							value={values.release_date}
							placeholder="Release Date"
						/>
					</div>

					<div className="form__field">
						<select
							onChange={handleSelect}
							name="os_id"
							id="os"
							className="form__input"
							defaultValue={`${values.os_id}`}
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
							defaultValue={`${values.display_id}`}
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
							value={values.processor}
							placeholder="Processor"
						/>
					</div>

					<div className="form__field">

						<input
							onChange={handleInput}
							type="text"
							name="ram"
							className="form__input"
							value={values.ram}
							placeholder="RAM"
						/>
					</div>

					<div className="form__field">

						<select
							onChange={handleSelect}
							name="scapacity_id"
							id="s_capacity"
							className="form__input"
							defaultValue={`${values.scapacity_id}`}
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
							value={values.battery_capacity}
						/>
					</div>

					<div className="form__field">

						<input
							onChange={handleInput}
							type="text"
							name="camera"
							className="form__input"
							value={values.camera}
							placeholder="Camera"
						/>
					</div>

					<div className="form__field">

						<input
							onChange={handleInput}
							type="text"
							name="price"
							className="form__input"
							value={values.price}
							placeholder="Price"
						/>
					</div>
					{/* <div className="form__field form__field--fullwidth">
						<input onChange={handleImage} type="file" className='form__input-submit' />
					</div> */}
					<div className="form__field form__field--fullwidth">
						<input type="submit" className='form__input-submit' value="Save" />
					</div>
				</form>
			</div>
		</div>
	)
}

export default EditItem