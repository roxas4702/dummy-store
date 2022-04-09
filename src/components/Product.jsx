import styles from "./Product.module.css"
import { Link } from "react-router-dom";

const Product = (props) => {
    
    return (
        <div className={styles.product}>
            <img className={styles.productImage} src={props.product.image} alt="" />
            <span className={styles.productTitle}>{props.product.title}</span>
            <span>{`$${props.product.price}`}</span>
            <Link to={{
                pathname:`/product/${props.product.id}`,
                state: props,
            }}>
                <button className={styles.productButton}>Add to cart</button>
            </Link>
        </div>
    );
}
 
export default Product;