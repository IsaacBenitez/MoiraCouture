import React from 'react';
import '../../styles/CartOrderItem.scss';





const CartOrderItem = ({product}) => {
	return (
		<div className="CartOrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={"dssd"} alt="close" />
		</div>
	);
}

export default CartOrderItem;
