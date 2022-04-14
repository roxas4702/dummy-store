import styles from "./Product.module.scss"
import { Link } from "react-router-dom";

const Product = (props) => {
    const { id, image, title, price } = props.product;
    const productTitle = (title) => title.length < 60 ? title : `${title.substring(0, 60)}...`;
    
    return (
        <Link className={styles.product} to={{ pathname:`/product/${id}`, state: props }}>
            <div className={styles.imageContainer}>
                <img src={image} alt="" />
            </div>
            <div className={styles.productInfo}>
                <span className={styles.title}>{productTitle(title)}</span>
                <span className={styles.price}>{`$${price}`}</span>
            </div>
        </Link>
    );
}
 
export default Product;