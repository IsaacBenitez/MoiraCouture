import React, { useEffect, useState } from 'react';
import '../../styles/ProductList.scss'; //TODO
import ProductItem from './ProductItem';
import useGetProducts from '../../customHooks/useGetProducts';
import hero from '../../assets/icons/hero.png';


const API = 'http://api.escuelajs.co/api/v1/products';

const ProductList = () => {

    const products = useGetProducts(API);
	

	return (
		<div><img src={hero}  alt="" />	
		<section className="main-container">
			<div className="ProductList" >
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
		</div>
	);
}

export default ProductList;

