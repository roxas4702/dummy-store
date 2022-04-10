import styles from "./Header.module.css"
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
	const history = useHistory();
    const { cartCount } = useContext(CartContext);

    return (
        <div className={styles.header}>
            <h2 onClick={() => history.push('/')}>Dummy Store</h2>
            <div className={styles.contacts}>
                {/* <a href="https://github.com/roxas4702" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> Github</a>
                <a href="https://talent.start2impact.it/profile/luca-curro" target="_blank" rel="noreferrer">🚀 Start2Impact</a>
                <a href="https://lucacurro.netlify.app/" target="_blank" rel="noreferrer">🌐 My Website</a> */}
                <h3>something</h3>
            </div>
            <button className={styles.cartButton} onClick={() => history.push('/cart')}><FontAwesomeIcon icon={faCartShopping} /> Cart ({cartCount})</button>           
        </div>
    );
}
 
export default Header;