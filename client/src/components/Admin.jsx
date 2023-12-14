import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'
import './Admin.css'
import Modal from '../components/Modal'

const Admin = () => {

	const [data, setData] = useState(null);
	const [nextId, setNextId] = useState(1); // Add nextId state variable
	const [showModal, setShowModal] = useState(false); // State to control modal visibility
	const [selectedPhone, setSelectedPhone] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get('http://localhost:8080/items')
			.then((res) => {
				setData(res.data);
				if (res.data.length > 0) {
					// Find the maximum ID and set nextId to the next available ID
					const maxId = Math.max(...res.data.map((phone) => phone.id));
					setNextId(maxId + 1);
				}
			})
			.catch((err) => {
				console.log(err);
			})
	}, [])

	const handleDelete = (phone) => {
		setSelectedPhone(phone);
		setShowModal(true); // Show the confirmation modal
	};

	const confirmDelete = (id) => {
		axios
			.delete(`http://localhost:8080/delete/${id}`)
			.then(() => {
				setData((prevData) => prevData.filter((phone) => phone.phone_id !== id));
				setShowModal(false)
			})
			.catch((err) => {
				console.log(err);
			});
	};


	return (
		<div className='admin'>

			<Link to="/create" className='btn-add'>Add Phone</Link>
			<Link to="/">back-home</Link>


			<div className="admin__phones">


				<table className='phones'>
					<thead>
						<tr>
							<th>№</th>
							{/* <th>Picture</th> */}
							<th>Brand</th>
							<th>Model</th>
							<th>OS</th>
							<th>Dispaly</th>
							<th>Processor</th>
							<th>RAM/Capacity</th>
							<th>Battery</th>
							<th>Camera</th>
							<th>Price</th>
							<th>Action</th>
						</tr>
					</thead>
					{data && (
						<tbody>
							{data.map((phone, i) => (
								<tr key={phone.phone_id}>
									<td>{i + 1}</td>
									<td>{phone.brand_name}</td>
									<td>{phone.model}</td>
									<td>{phone.os_name}</td>
									<td>{phone.display_size}''</td>
									<td>{phone.processor}</td>
									<td>{phone.ram}/{phone.scapacity_name}</td>
									<td>{phone.battery_capacity}</td>
									<td>{phone.camera}</td>
									<td>{phone.price}$</td>
									<td>
										<Link
											className='btn-read'
											to={`/read/${phone.phone_id}`}
										>
											Read
										</Link>
										<button
											className='btn-delete'
											onClick={() => handleDelete(phone)}
										>
											Delete
										</button>
										<Link
											className='btn-update'
											to={`/edit/${phone.phone_id}`}
										>
											Edit
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					)}
				</table>

				{showModal && (
					<Modal
						message={`Are you sure you want to delete ${selectedPhone?.model} from your table?`}
						onConfirm={() => confirmDelete(selectedPhone.phone_id)}
						onCancel={() => setShowModal(false)}
					/>
				)}
			</div>


		</div>
	)
}

export default Admin