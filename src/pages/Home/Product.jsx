import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";


const Product = (props) =>{

    const {id, productName, price, ProductImage} = props.data
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

    return (
        <div className="product">
            product here
            <img src={ProductImage} alt="productimage"/>
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
                <button className="addToCartBttn" onClick={() => addToCart(id)}>
                    Add to Cart 
                    {cartItemAmount > 0 && <>({cartItemAmount})</>}
                </button>
            </div>
        </div>
    )
}

export default Product;