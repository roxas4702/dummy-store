import styles from "./ProductPage.module.scss"
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductPage = ({ location }) => {
    const { state } = location;
    const { image, title, description, price } = state.product;
    const { addItem } = useCart();

    return (
        <div className={styles.product}>
            <img src={image} alt="" />
            <div className={styles.text}>
                <span className={styles.title}>{title}</span>
                <span>{description}</span>
                <span className={styles.price}>{`$ ${price}`}</span>
                <div className={styles.buttonsWrapper}>
                    <button onClick={() => addItem(state.product)}>Add to cart</button>
                    <Link to='/'><button>Go back</button></Link>       
                </div>
            </div>
        </div>
    );
}
 
export default ProductPage;