import React, { useEffect, useState } from 'react';
import '../../styles/ProductList.scss'; //TODO
import ProductItem from './ProductItemMujer';
import useGetProducts from '../../customHooks/useGetProducts';
import ProductItemMujer from './ProductItemHombre';
import ProductItemHombre from './ProductItemHombre';

//const API = 'http://api.escuelajs.co/api/v1/products'; //MODIFY
const PROJECT = 'http://localhost:9000/api/products';

const ProductList = (props) => {

	const products = useGetProducts(PROJECT);//MODIFY
	if (props.Genero === "Mujer") {

		return (

			<section className="main-container py-3">
				<h2 className="pb-2 border-bottom text-first mx-5">MUJER</h2>
				<div className="ProductList py-5" >
					{products.map(product => (
						<ProductItem product={product} key={product.id} Genero={props.Genero} />
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
					{products.map(product => (
						<ProductItemHombre product={product} key={product.id} Genero={props.Genero} />
					))}
				</div>
			</section>

		);
}

export default ProductList;

