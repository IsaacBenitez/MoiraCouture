import React, { useState, useContext } from 'react';
import '../../styles/ProductItem.scss';
import shoppingCart from '../../assets/icons/shoppingCart.svg';
import AppContext from '../../context/AppContext';
import Button from "react-bootstrap/Button";


const ProductItemHombre = ({ product }) => {
	const { addCart } = useContext(AppContext);
	const handleClick = item => {
		addCart(item);
	}


	if (product.sexo === "M") {


		return (
			<div className="ProductItem">
				<div className="position-relative">
					<img className="img-fluid" src={product.imagen} alt={product.descripcion} />
					<div className="icon-pointer position-absolute bottom-0 start-0 end-0 py-0 bg-dark bg-opacity-100 text-center product-card__overlay" onClick={() => handleClick(product)}>
						<button className="btn fw-semibold text-white" variant="light">Agregar a la bolsa</button>
					</div>
				</div>
				<div className="product-info">
					<div>
						<p className="fw-bold">{product.nombre}</p>
						<p>${product.precio}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductItemHombre;