import styles from "./ProductPage.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductPage = ({ location }) => {
    const { state } = location;
    const { image, title, description, price } = state;
    const { addItem } = useCart();

    return (
        <div>
            <Link to='/'><FontAwesomeIcon className={styles.arrowLeft} icon={faArrowLeft} /></Link> 
            <div className={styles.product}>
                <img src={image} alt="" />
                <div className={styles.text}>
                    <span className={styles.title}>{title}</span>
                    <span>{description}</span>
                    <div className={styles.priceAndButton}>
                        <span className={styles.price}>{`$ ${price}`}</span>
                        <button onClick={() => addItem(state)}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProductPage;