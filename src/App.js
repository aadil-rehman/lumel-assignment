import { useState } from "react";
import "./index.css";
import TableRow from "./ui/TableRow";

const rows = [
	{
		id: "electronics",
		label: "Electronics",
		value: 1400,
		children: [
			{ id: "phones", label: "Phones", value: 800 },
			{ id: "laptops", label: "Laptops", value: 700 },
		],
	},
	{
		id: "furniture",
		label: "Furniture",
		value: 1000,
		children: [
			{ id: "tables", label: "Tables", value: 300 },
			{ id: "chairs", label: "Chairs", value: 700 },
		],
	},
];

function App() {
	return (
		<div>
			<h1>Hierarchical Table Website</h1>
			<table>
				<thead>
					<th>Label</th>
					<th>Value</th>
					<th>Input</th>
					<th>Allocation %</th>
					<th>Allocation Val</th>
					<th>Variance %</th>
				</thead>
				<tbody>
					{rows.map((row) => (
						<TableRow row={row} key={row.id} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
