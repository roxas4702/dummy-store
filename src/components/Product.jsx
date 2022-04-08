import styles from "./Product.module.css"
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useCart } from "react-use-cart";

const Product = (props) => {
    const { setCartCount } = useContext(CartContext);
    
    const { totalItems } = useCart();

    useEffect(() => {
        setCartCount(totalItems);
    }, [totalItems, setCartCount])
    
    const { addItem } = useCart();

    return (
        <div className={styles.product}>
            <img className={styles.productImage} src={props.product.image} alt="" />
            <span className={styles.productTitle}>{props.product.title}</span>
            <span>{`$${props.product.price}`}</span>
            <button onClick={() => addItem(props.product)} className={styles.productButton}>Add to cart</button>
        </div>
    );
}
 
export default Product;