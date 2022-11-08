import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);


    const addCart = (product) => {
        setState({
            ...state, cart: [...state.cart, product]  
        });

    };

    return( {  
        state, addCart
    })
}

export default useInitialState;