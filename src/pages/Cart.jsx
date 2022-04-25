import styles from "./Cart.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";

const Cart = () => {
    const { isEmpty, totalItems, cartTotal } = useCart();

    if (isEmpty) {
        return (
            <div className={styles.isEmpty}>
                <h1>Your cart is empty!</h1>
                <Link className={styles.goBack} to='/'>Go Back</Link>
            </div>
        )
    }
    
    return (
        <div>
            <Link to='/'><FontAwesomeIcon className={styles.arrowLeft} icon={faArrowLeft} /></Link>
            <div className={styles.cartContainer}>
                <CartItem />

                <div className={styles.summary}>
                    <h2>Summary</h2>
                    <span className={styles.text}>Items: {totalItems}</span>
                    <span className={styles.text}>{`Total: $ ${cartTotal.toFixed(2)}`}</span>
                    <button className={styles.checkout}>Checkout</button>
                </div>
            </div>
        </div>
    );
}
 
export default Cart;