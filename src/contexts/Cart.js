import React, { useState } from 'react'

const CartContext = React.createContext();

function CartProvider(props) {

    const [cartItems, setCartItems] = useState([])


    const addToCart = (product) => {
       setCartItems(cartItems.concat(product))
    }


    return (
        <CartContext.Provider value={{
            cartItems: cartItems,
            addToCart: addToCart
        }}>
            {props.children}
        </CartContext.Provider>
    )

}

export { CartContext, CartProvider }