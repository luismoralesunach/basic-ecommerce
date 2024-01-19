import { products } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import CartItem from './CartItem'
import "./cart.css";
import { useNavigate } from 'react-router-dom'

const Cart = () =>{

    const { cartItems, getTotalAmount } = useContext(ShopContext)

    const totalAmount = getTotalAmount()

    const navigate = useNavigate()
    

    return(
        <div className="cart">
            <div className="cart-title">
                <h1>Cart</h1>
            </div>

            <div className="cart">
                {products.map((product)=>{
                    if(cartItems[product.id] !== 0 ){
                        return <CartItem data={product}/>
                    }
                })}
            </div>
            {totalAmount > 0 ?

            <div className="checkout">
                <p>
                    Subtotal: ${totalAmount} 
                    </p>
                <button onClick={()=>navigate('/')}>Continue Shopping</button>
                <button> Checkout </button>
            </div>
            : <h1>Your cart is empty</h1>}
        </div>
    )
}

export default Cart;