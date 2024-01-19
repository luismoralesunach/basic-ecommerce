import { products } from "../../products";
import Product from "./Product";
import "./Home.css";
const Home = () =>{

    return(
        <div className="shop">

            <div className="shopTitle">
                <h1>Shop here</h1>
            </div>
            <div className="products">
                {products.map((product) =>
                <Product data={product} key={product.id}/>
                )}
            </div>
        </div>
    )
}

export default Home;