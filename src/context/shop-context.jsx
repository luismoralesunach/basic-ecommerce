import { createContext, useState } from "react"
import { products } from '../products'



export const ShopContext = createContext(null)

const getDefaultCart = () =>{
    let cart = {}
    for(let i = 1; i < products.length +1; i++){
        cart[i] = 0;
    }
    return cart;
}


export const ShopContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}))
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}))
    }

    const eliminateFromCart = (itemId) =>{
        setCartItems((prev) =>({...prev, [itemId]: 0}))
    }

    const updateCartAmount = (newAmount, itemId) =>{
        setCartItems((prev) =>({...prev, [itemId]: newAmount}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, eliminateFromCart, updateCartAmount}
    
    console.log(cartItems)

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

