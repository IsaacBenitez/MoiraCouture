import React, { useEffect, useState } from 'react';
import '../../styles/ProductList.scss'; //TODO
import ProductItem from './ProductItem';
import getAllProducts from "../../requests/getAllProducts";


const ProductList = (props) => {
	const [data, setData] = useState([]);

	//COGER DATOS DE MONGO
	useEffect(() => {
		getAllProducts().then(result => {
			setData(result)
		})
	}, []);

	return (
		<div className="row">
			{
				data
					.filter(product => product.sexo === (props.Genero === "Mujer" ? "F" : "M"))
					.map(product => <ProductItem product={product} key={product.id} />)
			}
		</div>

	);
}

export default ProductList;

