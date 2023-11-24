import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../App.css';
import '../index.css';

const Categories = () => {


	const [data, setData] = useState([]);
	const [activeIndices, setActiveIndices] = useState([]);

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
				console.log(res.data); // Log the received data
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);


	return (
		<div className="container">
			<div className="side-menu">


				{/* {data &&
					data.map((category) => (
						<div key={category.categorie_id}>
							<h3 className="filter-label">
								{category.categorie_name}
							</h3>
							<ul>
								{category.subcategories.map((subcategory, i) => (
									<li key={i} className="filter-button" onClick={handleLiClick}>
										<label>
											<input type="checkbox" style={{ display: 'none' }} />
											{subcategory.subcategory_name}
										</label>
									</li>
								))}
							</ul>
						</div>
					))} */}
				{data &&
					data.map((category) => (
						<div key={category.categorie_id}>
							{/* <ul>
								<li className="category-label">{category.categorie_name}</li>
								{category.subcategories.map((subcategory, i) => (
									<li
										key={i}
										className={`subcategory-button ${i === activeIndex ? 'active' : ''}`}
										onClick={() => handleLiClick(i)}
									>

										<label>
											<input type="checkbox" style={{ display: 'none' }} />
											{subcategory.subcategory_name}
										</label>
									</li>
								))}
							</ul> */}
							<ul>
								<li className="category-label">{category.categorie_name}</li>
								{category.subcategories.map((subcategory, i) => (
									<li
										key={subcategory.subcategory_id}
										className={`subcategory-button ${activeIndices.includes(subcategory.subcategory_id) ? 'active' : ''}`}
										onClick={() => handleLiClick(subcategory.subcategory_id)}
									>
										<label>
											<input type="checkbox" style={{ display: 'none' }} />
											{subcategory.subcategory_name}
										</label>
									</li>
								))}
							</ul>
						</div>
					))}




			</div>

			<div className="items-container">
				{/* {filteredItems.map((item, i) => (
					<div key={i} className='item'>
						<p>{item.category} {item.name} {item?.model}</p>
						<p>{item.storage}</p>

						<h2>{item.price}$</h2>
					</div>
				))} */}
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