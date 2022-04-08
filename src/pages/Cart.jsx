import styles from "./Cart.module.css"
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useCart } from "react-use-cart";

const Cart = () => {
    const { setCartCount } = useContext(CartContext);
	const history = useHistory();

    const {
        isEmpty,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        emptyCart,
    } = useCart();

    useEffect(() => {
        setCartCount(totalItems);
    }, [totalItems, setCartCount])


    if (isEmpty) {
        return (
            <div className={styles.cartContainer}>
                <h1>Your cart is empty!</h1>
                <span className={styles.goBack} onClick={() => history.push('/')}>Go Back</span>
            </div>
        )
    }
    
    return (
        <div className={styles.cartContainer}>
                {items.map((item) => {
                    return (
                        <div className={styles.product} key={item.id}>
                            <img className={styles.productImage} src={item.image} alt="" />
                            <div className={styles.productInfo}>
                                <span className={styles.productTitle}>{item.title}</span>
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