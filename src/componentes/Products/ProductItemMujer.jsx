import React, { useState, useContext } from 'react';
import '../../styles/ProductItem.scss'; 
import shoppingCart from '../../assets/icons/shoppingCart.svg'; 
import AppContext from '../../context/AppContext';


	const ProductItemMujer = ({product}) => {
		const{ addCart} = useContext(AppContext);     
		const handleClick = item => {
			addCart(item);
		} 
	
		
	if(product.sexo==="F"){
	

	return (
		<div className="ProductItem">
			<img src={product.imagen} alt={product.descripcion} />
			<div className="product-info">
				<div>
					<p>${product.precio}</p>	
					<p>{product.talla}</p>	
					<p>{product.descripcion}</p>									
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={shoppingCart} alt="" />
				</figure>
				
			</div>
		</div>
	);
}  }

export default ProductItemMujer;