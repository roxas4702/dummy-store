import styles from "./Cart.module.scss"
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const Cart = () => {
    const { setCartCount } = useContext(CartContext);

    const { isEmpty, items, totalItems, cartTotal, updateItemQuantity, emptyCart } = useCart();

    useEffect(() => {
        setCartCount(totalItems);
    }, [totalItems, setCartCount])


    if (isEmpty) {
        return (
            <div className={styles.cartContainer}>
                <h1>Your cart is empty!</h1>
                <Link className={styles.goBack} to='/'>Go Back</Link>
            </div>
        )
    }
    
    return (
        <div className={styles.cartContainer}>
            {items.map((item) => {
                return (
                    <div className={styles.product} key={item.id}>
                        <span className={styles.imageContainer}>
                            <img src={item.image} alt="" />
                        </span>
                        <div className={styles.productInfo}>
                            <span className={styles.title}>{item.title}</span>
                            <span>{`$${item.price} (x${item.quantity}`})</span>
                            <div className={styles.buttonsWrapper}>
                                <button className={styles.buttonRemove} onClick={() => updateItemQuantity(item.id, item.quantity -1)}>-</button>
                                <button className={styles.buttonAdd} onClick={() => updateItemQuantity(item.id, item.quantity +1)}>+</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            <h1>Total: ${cartTotal.toFixed(2)}</h1>
            <button className={styles.clearCart} onClick={() => emptyCart()}>Clear Cart</button>
        </div>
    );
}
 
export default Cart;