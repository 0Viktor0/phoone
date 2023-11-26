import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../App.css';
import '../index.css';

const Categories = () => {
	const [data, setData] = useState([]);
	const [activeIndices, setActiveIndices] = useState([]);
	const [items, setItems] = useState([]);

	const handleLiClick = (index) => {
		setActiveIndices((prevIndices) =>
			prevIndices.includes(index)
				? prevIndices.filter((i) => i !== index)
				: [...prevIndices, index]
		);
		console.log(index);
	};

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
		axios
			.get('http://localhost:8080/items')
			.then((res) => {
				setItems(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="container">
			<div className="side-menu">
				{data &&
					data.map((category) => (
						<div key={category.categorie_id}>
							<ul>
								<li className="category-label">{category.categorie_name}</li>
								{category.subcategories.map((subcategory) => (
									<li
										key={subcategory.subcategory_id}
										className={`subcategory-button ${activeIndices.includes(subcategory.subcategory_id) ? 'active' : ''}`}
										onClick={() => handleLiClick(subcategory.subcategory_id)}
									>
										<input type="checkbox" style={{ display: 'none' }} />
										{subcategory.subcategory_name}
									</li>
								))}
							</ul>
						</div>
					))}
			</div>

			<div className="items-container">
				{items.map((item) => (
					<div
						key={item.item_id}
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



// const [selectedFilters, setSelectedFilters] = useState([]);
// const [selectedStorage, setSelectedStorage] = useState([]);
// const [filteredItems, setFilteredItems] = useState(items);

// const handleFilterToggle = (selectedCategory) => {
// 	setSelectedFilters((prevFilters) => {
// 		if (prevFilters.includes(selectedCategory)) {
// 			return prevFilters.filter((el) => el !== selectedCategory);
// 		} else {
// 			return [...prevFilters, selectedCategory];
// 		}
// 	});
// }

// const handleStorageToggle = (selectedStorageOption) => {
// 	setSelectedStorage((prevStorage) => {
// 		if (prevStorage.includes(selectedStorageOption)) {
// 			return prevStorage.filter((el) => el !== selectedStorageOption);
// 		} else {
// 			return [...prevStorage, selectedStorageOption];
// 		}
// 	});
// }


// const filterItems = () => {
// 	let tempItems = items.filter((item) => {
// 		const categoryFilter = selectedFilters.length === 0 || selectedFilters.includes(item.category);
// 		const storageFilter = selectedStorage.length === 0 || selectedStorage.includes(item.storage);
// 		return categoryFilter && storageFilter;
// 	});

// 	setFilteredItems(tempItems);
// }

{/* {categories.map((storage, i) => (
					<label key={i} className="filter-label">
						<input
							type="checkbox"
							checked={selectedStorage.includes(storage)}
							onChange={() => handleStorageToggle(storage)}
							className="filter-checkbox"
						/>
						{storage}
					</label>
				))} */}