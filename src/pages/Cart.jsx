import styles from "./Cart.module.scss"
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
    const { isEmpty, totalItems, cartTotal, emptyCart } = useCart();

    if (isEmpty) {
        return (
            <div className={styles.isEmpty}>
                <h1>Your cart is empty!</h1>
                <Link className={styles.goBack} to='/'>Go Back</Link>
            </div>
        )
    }
    
    return (
        <div className={styles.cartContainer}>
            <CartItem />

            <div className={styles.summary}>
                <h2>Summary</h2>
                <span className={styles.text}>Items: {totalItems}</span>
                <span className={styles.text}>{`Total: $ ${cartTotal.toFixed(2)}`}</span>
                <button className={styles.checkout}>Proceed to Checkout</button>
                <button className={styles.clearCart} onClick={() => emptyCart()}>Clear Cart</button>
            </div>
        </div>
    );
}
 
export default Cart;