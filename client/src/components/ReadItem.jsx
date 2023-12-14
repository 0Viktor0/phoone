import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const ReadItem = () => {
	const { id } = useParams()
	const [item, setItem] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const day = date.getDate().toString().padStart(2, '0'); // Add leading 0 if day is a single digit
		const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading 0 if month is a single digit, +1 because getMonth() returns 0-11
		const year = date.getFullYear();

		return `${day}/${month}/${year}`; // Format as dd/mm/yyyy
	};

	useEffect(() => {
		setLoading(true)
		axios.get(`http://localhost:8080/read/${id}`)
			.then(res => {
				setItem(res.data[0])
				setError(null)
			})
			.catch(err => {
				console.error(err)
				setError('An error occurred while fetching data')
			})
			.finally(() => {
				setLoading(false)
			})
	}, [id])

	if (loading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>Error: {error}</p>
	}

	if (!item || item.length === 0) {
		return <p>No data found for this item</p>
	}

	return (
		<div>
			<div className='details-container'>
				<Link to='/admin'>back</Link>

				<h1> {item.model}</h1>
				<table className="details-table">
					<tbody>
						<tr>
							<th>Brand</th>
							<td>{item.brand_name}</td>
						</tr>
						<tr>
							<th>Model</th>
							<td>{item.model}</td>
						</tr>
						<tr>
							<th>OS</th>
							<td>{item.os_name}</td>
						</tr>
						<tr>
							<th>Display</th>
							<td>{item.display_size}''</td>
						</tr>
						<tr>
							<th>Release date</th>
							<td>{formatDate(item.release_date)}</td>
						</tr>
						<tr>
							<th>Processor</th>
							<td>{item.processor}</td>
						</tr>
						<tr>
							<th>RAM / Capacity</th>
							<td>{item.ram}/{item.scapacity_name}</td>
						</tr>
						<tr>
							<th>Battery Capacity</th>
							<td>{item.battery_capacity}</td>
						</tr>
						<tr>
							<th>Camera</th>
							<td>{item.camera}</td>
						</tr>
						<tr>
							<th>Price</th>
							<td>{item.price}$</td>
						</tr>
					</tbody>
				</table>

				<Link className='btn-update' style={{ margin: '10px 0' }} to={`/edit/${id}`}>Edit</Link>
			</div>


		</div>
	)
}

export default ReadItem
