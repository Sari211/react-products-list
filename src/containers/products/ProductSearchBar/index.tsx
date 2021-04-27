import * as React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
	filterText: string;
	inStockOnly: boolean;
	filterIdText:string
	onFilterTextChange: (text: string) => void;
	onInStockChange: (inStock: boolean) => void;
	// onInStockChangeId:(inStock: boolean) => void;
	onFilterIdTextChange:(text: string) => void;
}

const ProductSearchBar: React.FC<Props> = (props: Props) => {
	const {
		filterIdText,filterText, inStockOnly ,onFilterTextChange, onInStockChange,
		onFilterIdTextChange
	} = props;

	function handleFilterTextChange(e: React.ChangeEvent<HTMLInputElement>) {
		onFilterTextChange(e.target.value.toString());
	}

	function handleInStockChange(e: React.ChangeEvent<HTMLInputElement>) {
		const value: boolean = e.target.checked as any as boolean;
		onInStockChange(value);
	}
	function handleFilterIdTextChange(e: React.ChangeEvent<HTMLInputElement>) {
		onFilterIdTextChange(e.target.value.toString());
	}

	// function handleInStockChangeId(e: React.ChangeEvent<HTMLInputElement>) {
	// 	const value: boolean = e.target.checked as any as boolean;
	// 	onInStockChangeId(value);
	// }
	return (
		<Form>
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="Search..."
					value={filterText}
					onChange={handleFilterTextChange}
				/>
			</Form.Group>

			
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="Search By Id..."
					value={filterIdText}
					onChange={handleFilterIdTextChange}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Check
					label="Only show products in stock"
					checked={inStockOnly}
					onChange={handleInStockChange}
				/>
			</Form.Group>

			{/* <Form.Group>
				<Form.Check
					label="Only show products in stock"
					checked={inStockOnly}
					onChange={handleInStockChangeId}
				/>
			</Form.Group> */}
		</Form>
		
	);
};

export default ProductSearchBar;
