import { useContext } from "react";
import { ShopContext } from '../../context/shop-context'



const CartItem = (props) =>{

    const {id, productName, price, ProductImage} = props.data
    const {cartItems, addToCart, removeFromCart,eliminateFromCart, updateCartAmount } = useContext(ShopContext)

    return(
        <div className="cartItem">
            <img src={ProductImage} alt='Product Image'/>
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={()=>removeFromCart(id)}> - </button> 
                    <input value={cartItems[id]} onChange={(event)=>updateCartAmount(Number(event.target.value),id)}/>
                    <button onClick={()=>addToCart(id)}>+</button>
                    <button onClick={()=>eliminateFromCart(id)}>Eliminate from Cart</button>
                </div>
            </div>
        </div>
        
    )
}

export default CartItem;