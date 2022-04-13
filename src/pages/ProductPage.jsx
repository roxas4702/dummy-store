import styles from "./ProductPage.module.scss"
import { useContext, useEffect } from "react";
import { useCart } from "react-use-cart";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductPage = ({ location }) => {
    const { state } = location;
    const { image, title, description, price } = state.product;
    const { setCartCount } = useContext(CartContext);
    const { addItem } = useCart();
    const { totalItems } = useCart();
    

    useEffect(() => {
        setCartCount(totalItems);
    }, [totalItems, setCartCount])
    

    return (
        <div className={styles.product}>
            <img className={styles.productImage} src={image} alt="" />
            <div className={styles.productInfo}>
                <span className={styles.productTitle}>{title}</span>
                <span>{description}</span>
                <span className={styles.productPrice}>{`$${price}`}</span>
                <div className={styles.buttonsWrapper}>
                    <button onClick={() => addItem(state.product)}>Add to cart</button>
                    <Link to='/'><button>Go back</button></Link>       
                </div>
            </div>
        </div>
    );
}
 
export default ProductPage;