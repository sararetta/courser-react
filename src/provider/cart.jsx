import React, {createContext, useContext, useReducer} from "react";


export const CartContext = createContext({
    cart:0
});

const CartReducer = (state, action) => {
    switch (action.type) {
        case "Add": {
            return {
                ...state,
                cart: state.cart+1
            };
        }
      
      
        default: {
            return state;
        }
    }
};

const CartProvider = ({children}) => {
 
    const [state, dispatch] = useReducer(CartReducer, {
        cart:0
    });

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("CartProvider");
    }
    return context;
};

export {CartProvider, useCart};
