import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import './Accordion.css'

const Accordion = ({ data, handleBrandClick }) => {
	const [activeIndices, setActiveIndices] = useState([]);

	const handleItemClick = (index) => {
		setActiveIndices((prevIndices) =>
			prevIndices.includes(index)
				? prevIndices.filter((i) => i !== index)
				: [...prevIndices, index]
		);
	};

	return (
		<aside className="side-menu">
			{data && data.map((category) => (
				<div key={category.category_id}>
					<ul className='categories'>
						<li>
							<div className='category-title'>
								<div
									className="category-label"
									onClick={() => handleItemClick(category.category_id)}
								>
									{category.category_name}
									<i className='fa fa-chevron-down'><IoIosArrowDown /></i>
								</div>
							</div>
							{activeIndices.includes(category.category_id) &&
								<ul className='sub-categories'>
									{category.subcategories.map((subcategory) => (
										<li
											key={subcategory.subcategory_id}
											className='subcategory-button'
											onClick={() => handleBrandClick(category.brand)}
										>
											<input type="checkbox" style={{ display: 'none' }} />
											{subcategory.subcategory_name}
										</li>
									))}
								</ul>
							}
						</li>
					</ul>
				</div>
			))}
		</aside>
	);
};

export default Accordion;
