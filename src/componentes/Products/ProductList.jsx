import React, { useEffect, useState } from 'react';
import '../../styles/ProductList.scss'; //TODO
import ProductItem from './ProductItemMujer';
import useGetProducts from '../../customHooks/useGetProducts';
import hero from '../../assets/icons/hero.png';

import ExampleData from '../../dataSuministrada/ExampleData';//MODIFY
import ExampleData2 from '../../dataSuministrada/ExampleData2';//MODIFY
import ProductItemMujer from './ProductItemHombre';
import ProductItemHombre from './ProductItemHombre';

const exampleJson2 = ExampleData2;

const exampleJson = ExampleData;  //MODIFY

//const API = 'http://api.escuelajs.co/api/v1/products'; //MODIFY

const ProductList = (props) => {

	const products = useGetProducts(exampleJson);//MODIFY
	if (props.Genero === "Mujer") {

		return (

			<section className="main-container py-3">
				<h2 class="pb-2 border-bottom text-first mx-5">MUJER</h2>
				<div className="ProductList py-5" >
					{exampleJson2.map(product => (
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
					{exampleJson2.map(product => (
						<ProductItemHombre product={product} key={product.id} Genero={props.Genero} />
					))}
				</div>
			</section>

		);
}

export default ProductList;

