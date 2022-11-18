import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);


    const addCart = (product) => {
        setState({
            ...state, cart: [...state.cart, { ...product, idCart:state.cart.length+1}, ]  //TODO
        });

    };





    const removeFromCart = (product) => {//TODO
        setState({
            ...state,
             cart: state.cart.filter((items) => items.idCart !== product.idCart), //TODO
        });
    }
        







    return( {  
        state, addCart, removeFromCart//TODO
    })
}

export default useInitialState;