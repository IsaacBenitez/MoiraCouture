import React, {useContext} from 'react';
import CartOrderItem from './CartOrderItem';
import AppContext from '../../context/AppContext';
import '../../styles/CartTotalOrder.scss';


const CartTotalOrder = () => {

	const {state} = useContext(AppContext);

	const totalOrder = () => {
		const reducer = (counter, actualValue) => counter + actualValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}


	return (
		<aside className="CartTotalOrder">
			<div className="title-container">
				<img src={"jjk"} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">

				{state.cart.map(eachItem => (
					<CartOrderItem product= {eachItem} key={`orderItem-${eachItem.id}`} />

				))};
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${totalOrder()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default CartTotalOrder;
