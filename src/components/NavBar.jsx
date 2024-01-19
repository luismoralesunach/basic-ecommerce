import { Link } from "react-router-dom";
import { ShoppingCart} from 'phosphor-react'
import styles from './navbar.css'

const NavBar = () =>{
    

    return(
        <div className="navbar">
            

            <div className="links">
                he4llo
                <Link to='/'>Shop</Link>
                <Link to='/cart'>Cart</Link>
                
            </div>
        </div>
    )
}

export default NavBar;