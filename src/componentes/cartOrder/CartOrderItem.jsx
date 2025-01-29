import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import '../../styles/CartOrderItem.scss';
import {XLg} from "react-bootstrap-icons";





const CartOrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext)

	const handleRemove = product => {
		removeFromCart(product)
	}


	return (
		<div className="CartOrderItem">
			<figure>
				<img src={product.imagen} alt={product.descripcion} />
			</figure>
			<p className="fw-bold">{product.nombre}</p>
			<p>${product.precio}</p>
			<button alt="close" onClick={() => handleRemove(product)}><XLg/></button>

		</div>
	);
}

export default CartOrderItem;
