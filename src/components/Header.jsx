import styles from "./Header.module.css"
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
	const history = useHistory();
    const { cartCount } = useContext(CartContext);

    return (
        <div className={styles.header}>
            <h2 onClick={() => history.push('/')}>Dummy Store</h2>
            <span>links</span>
            <button className={styles.cartButton} onClick={() => history.push('/cart')}><FiShoppingCart /> Cart ({cartCount})</button>           
        </div>
    );
}
 
export default Header;