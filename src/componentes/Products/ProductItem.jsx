import React, { useState, useContext } from 'react';
import '../../styles/ProductItem.scss'; 
import shoppingCart from '../../assets/icons/shoppingCart.svg'; 
import AppContext from '../../context/AppContext';


	const ProductItem = ({product}) => {
		const{ addCart} = useContext(AppContext);     
		const handleClick = item => {
			addCart(item);
		} 
	
	
	

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={shoppingCart} alt="" />
				</figure>
				
			</div>
		</div>
	);
}

export default ProductItem;