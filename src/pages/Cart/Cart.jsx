import { products } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import CartItem from './CartItem'
import "./cart.css";

const Cart = () =>{

    const { cartItems } = useContext(ShopContext)



    return(
        <div className="cart">
            <div className="cart-title">
                <h1>Cart</h1>
            </div>

            <div className="cart-items">
                {products.map((product)=>{
                    if(cartItems[product.id] !== 0 ){
                        return <CartItem data={product}/>
                    }
                })}
            </div>
            <div className="total-amount">
                <p>
                    Subtotal: $
                    </p>
                <button>Continue Shopping</button>
                <button> Chekcout </button>
            </div>
        </div>
    )
}

export default Cart;