import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Accordion from '../components/Accordion';
import '../components/Categories.css'

const Categories = () => {
	const [data, setData] = useState([]);
	const [items, setItems] = useState([]);
	const [selectedBrand, setSelectedBrand] = useState(null);

	useEffect(() => {
		axios
			.get('http://localhost:8080/categories')
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		const brandName = selectedBrand ? selectedBrand.brand_name : null;

		axios
			.get(`http://localhost:8080/items?brand=${brandName}`)
			.then((res) => {
				setItems(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [selectedBrand]);

	const handleBrandClick = (brand) => {
		console.log(brand);
		setSelectedBrand(brand);
	};

	return (
		<div className="container">
			<Accordion data={data} handleBrandClick={handleBrandClick} />

			<div className="items-container">
				{items.map((item) => (
					<div
						key={item.phone_id}
						className="item-card"
						onClick={() => console.log(item)}
					>
						<div className="phone-header">
							<p>{item.brand_name} {item.model}</p>
						</div>

						<div className="item-characteristics">
							<p>Screen size: {item.display_size}</p>
							<p>Storage size: {item.scapacity_name}</p>
							<p>Processor: {item.processor}</p>
							<p>RAM: {item.ram}</p>
							<p>Battery capacity: {item.battery_capacity}</p>
							<p>Camera: {item.camera}</p>
							<p>{new Date(item.release_date).toLocaleDateString()}</p>
						</div>

						<div className='phone-price'>
							<p>{item.price}$</p>
							<button className='phone-price__btn'>Buy</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Categories;
