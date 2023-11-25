import express from "express"
import cors from "cors"
import mysql from "mysql"

const app = express();

app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
	'user': 'root',
	'password': 'root',
	'host': '127.0.0.1',
	'port': 8889,
	'unix_socket': '/Applications/MAMP/tmp/mysql/mysql.sock',
	'database': 'pickPhone',
})


app.get("/", (req, res) => {
	return res.json("Hey")
})

app.get("/categories", (req, res) => {
	const sql = `
	SELECT categories.*, sub_categories.subcategory_id, sub_categories.subcategory_name
	FROM categories
	LEFT JOIN sub_categories ON categories.categorie_id = sub_categories.category_id;
	`;

	db.query(sql, (err, data) => {
		if (err) return res.json(err);

		const categoriesWithSubcategories = {};

		// Group subcategories by category_id
		data.forEach((row) => {
			const categoryId = row.categorie_id; // Adjust the column name here
			if (!categoriesWithSubcategories[categoryId]) {
				categoriesWithSubcategories[categoryId] = {
					categorie_id: row.categorie_id, // Adjust the column name here
					categorie_name: row.categorie_name, // Adjust the column name here
					subcategories: [],
				};
			}

			if (row.subcategory_name) {
				categoriesWithSubcategories[categoryId].subcategories.push({
					subcategory_id: row.subcategory_id,
					subcategory_name: row.subcategory_name,
				});
			}
		});

		const result = Object.values(categoriesWithSubcategories);

		return res.json(result);
	});
});

app.get("/items", (req, res) => {
	const queryItems = `
	  SELECT
		pc.*,
		b.brand_name,
		o.os_name,
		ds.display_size,
		sc.storage_capacity AS scapacity_name
	  FROM
		phone_characteristics pc
		LEFT JOIN brands b ON pc.brand_id = b.brand_id
		LEFT JOIN operating_systems o ON pc.os_id = o.os_id
		LEFT JOIN display_sizes ds ON pc.display_id = ds.display_id
		LEFT JOIN storage_capacities sc ON pc.scapacity_id = sc.scapacity_id;
	`;

	db.query(queryItems, (err, itemsData) => {
		if (err) return res.json(err);

		return res.json(itemsData);
	});
});




app.listen(8080, () => {
	console.log("Listening...");
})