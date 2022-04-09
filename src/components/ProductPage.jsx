import { useContext, useEffect } from "react";
import { useCart } from "react-use-cart";
import { CartContext } from "../context/CartContext";
import styles from "./ProductPage.module.css"

const ProductPage = ({ location }) => {
    const { state } = location;
    const { setCartCount } = useContext(CartContext);
    
    const { totalItems } = useCart();

    useEffect(() => {
        setCartCount(totalItems);
    }, [totalItems, setCartCount])
    
    const { addItem } = useCart();

    return (
        <div className={styles.product}>
            <img className={styles.productImage} src={state.product.image} alt="" />
            <span className={styles.productTitle}>{state.product.title}</span>
            <span>{`$${state.product.price}`}</span>
            <button onClick={() => addItem(state.product)} className={styles.productButton}>Add to cart</button>
        </div>
    );
}
 
export default ProductPage;