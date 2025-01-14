import React, {useContext, useEffect, useRef} from 'react';
import CartOrderItem from './CartOrderItem';
import AppContext from '../../context/AppContext';
import '../../styles/CartTotalOrder.scss';



const CartTotalOrder = (props) => {

	const { state } = useContext(AppContext);

	const totalOrder = () => {
		const reducer = (counter, actualValue) => counter + actualValue.precio;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	// Random emojis
	const emojis = ['😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','🫠','😉','😊','😇','🥰','😍','🤩','😘','😗','😚','😙','🥲','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🫢','🫣','🤫','🤔','🫡','🤐','😏','🤤','😴','🤯','🤠','🥳','🥸','😎','🤓','😳','😈','👻','👽','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','🙈','🙉','🙊','💘','💝','💖','💗','💓','💞','💕','💟','❣','❤️‍🔥','❤️‍🩹','❤','🧡','💛','💚','💙','💜','🤎','🖤','🤍']

	const getRandomElements = (arr, num) => {
		const result = [];
		const selectedIndices = new Set();
		while (result.length < num) {
			const randomIndex = Math.floor(Math.random() * arr.length);
			if (!selectedIndices.has(randomIndex)) {
				selectedIndices.add(randomIndex);
				result.push(arr[randomIndex]);
			}
		}
		return result;
	};

	const randomEmojis = getRandomElements(emojis, 4);


	return (
		<>
			{state.cart.length > 0
				?
				<aside className="CartTotalOrder py-3">
					<span style={{cursor: 'pointer'}} onClick={() => {props.closeCart(false)}}>
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
							 className="bi bi-arrow-left" viewBox="0 0 16 16">
							<path fillRule="evenodd"
								  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
						</svg>
					</span>

					<div className="title-container">
						<h5>TUS PRODUCTOS</h5>
					</div>
					<div className="my-order-content">

						{state.cart.map((eachItem,index) => (
							<CartOrderItem product={eachItem} key={index}/>

						))}

						<div className="order pt-4">
							<h5>Total</h5>

							<h5 className="text-end">${totalOrder()}</h5>
						</div>
						<button className="primary-button">
							Checkout
						</button>
					</div>
				</aside>
				:
				<aside className="CartTotalOrder py-3" >
					<span className="icon-pointer" onClick={() => {props.closeCart(false)}}>
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
							 className="bi bi-arrow-left" viewBox="0 0 16 16">
							<path fillRule="evenodd"
								  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
						</svg>
					</span>
					<div className="title-container">
						<h5>AGREGA TUS PRODUCTOS FAVORITOS</h5>
					</div>
							{randomEmojis.map( (emoji, index) => {
								return (
									<div className="CartOrderItem" key={index}>
										<figure>
											<h1>{emoji}</h1>
										</figure>
										<p>$0X0X0</p>
									</div>
								);
								}
							)}
					<div className="order py-4">
						<h5>Total</h5>

						<h5 className="text-end">💛💙❤️</h5>
					</div>
				</aside>}
		</>
	);
}

export default CartTotalOrder;
