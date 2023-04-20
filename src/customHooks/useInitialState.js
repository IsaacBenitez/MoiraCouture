import { useState } from "react";



const useInitialState = () => {
    const initialState = {
        cart: [],
    }
    const [state, setState] = useState(initialState);


    const addCart = (product) => {
        setState({
            ...state, cart: [...state.cart, { ...product, idCart:state.cart.length+1}, ]
        });

    };


    const removeFromCart = (product) => {
        setState({
            ...state,
             cart: state.cart.filter((items) => items.idCart !== product.idCart),
        });
    }
        







    return( {  
        state, addCart, removeFromCart//TODO
    })
}

export default useInitialState;