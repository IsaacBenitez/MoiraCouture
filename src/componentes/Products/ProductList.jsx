import React, { useEffect, useState } from 'react';
import '../../styles/ProductList.scss'; //TODO
import ProductItemMujer from './ProductItemMujer';
import ProductItemHombre from './ProductItemHombre';
import getAllProducts from "../../requests/getAllProducts";


const ProductList = (props) => {
	const [data, setData] = useState([]);

	//COGER DATOS DE MONGO
	useEffect(() => {
		getAllProducts().then(result => {
			setData(result)
		})
	}, []);

	if (props.Genero === "Mujer") {

		return (

			<section className="main-container py-3">
				<h2 className="pb-2 border-bottom text-first mx-5">MUJER</h2>
				<div className="ProductList py-5" >
					{data.map(product => (
						<ProductItemMujer product={product} key={product.id} Genero={props.Genero} />
					))}
				</div>
			</section>

		);
	}

	else

		return (

			<section className="main-container py-3">
				<h2 class="pb-2 border-bottom text-first mx-5">HOMBRE</h2>
				<div className="ProductList py-5">
					{data.map(product => (
						<ProductItemHombre product={product} key={product.id} Genero={props.Genero} />
					))}
				</div>
			</section>

		);
}

export default ProductList;

