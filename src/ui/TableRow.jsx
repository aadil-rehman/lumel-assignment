import { useState } from "react";

function TableRow({ row, childLabel }) {
	const [input, setInput] = useState("");
	const [itemValue, setItemValue] = useState(row.value);
	const [variance, setVariance] = useState(0);

	let parentLabelvalue = 0;

	if (row.children) {
		parentLabelvalue = row.children.at(0).value + row.children.at(1).value;
	}

	console.log(parentLabelvalue);

	let oldItemValue;
	function handleButton1() {
		setItemValue((value) => value + (input * value) / 100);
		setVariance(input);
		setInput("");
	}

	function handleButton2() {
		const updatedItemValue = input;
		oldItemValue = itemValue;
		setItemValue(updatedItemValue);

		setVariance(((updatedItemValue - oldItemValue) / updatedItemValue) * 100);

		setInput("");
	}

	// setItemValue((value) => {
	//     value = input;
	//     setVariance(((value - oldItemValue) / value) * 100);
	// });

	return (
		<>
			<tr>
				<td>
					{childLabel}
					{row.label}
				</td>
				<td>{row.children ? parentLabelvalue : itemValue}</td>

				<td>
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				</td>
				<td>
					<button onClick={handleButton1}>Button 1</button>
				</td>
				<td>
					<button onClick={handleButton2}>Button 1</button>
				</td>
				<td>{Math.abs(variance).toFixed(2)}</td>
			</tr>
			{row.children &&
				row.children.map((child) => (
					<TableRow row={child} key={child.id} childLabel="--" />
				))}
		</>
	);
}

export default TableRow;
