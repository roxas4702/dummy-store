import styles from "./Header.module.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    const { cartCount } = useContext(CartContext);

    return (
        <div className={styles.header}>
            <Link to='/'><h2>Dummy Store</h2></Link>
            <div className={styles.contacts}>
                <a href="https://github.com/roxas4702" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://talent.start2impact.it/profile/luca-curro" target="_blank" rel="noreferrer">🚀</a>
                <a href="https://lucacurro.netlify.app/" target="_blank" rel="noreferrer">🌐</a>
            </div>
            <Link to='/cart'><button className={styles.cartButton}><FontAwesomeIcon icon={faCartShopping} /> Cart ({cartCount})</button></Link>        
        </div>
    );
}
 
export default Header;