import styles from "./Product.module.css"
import { Link } from "react-router-dom";

const Product = (props) => {

    const productTitle = (title) => title.length < 60 ? title : `${title.substring(0, 60)}...`;
    
    return (
        <Link className={styles.product} to={{ pathname:`/product/${props.product.id}`, state: props }}>
            <div className={styles.imageContainer}>
                <img className={styles.productImage} src={props.product.image} alt="" />
            </div>
            <span className={styles.productTitle}>{productTitle(props.product.title)}</span>
            <span>{`$${props.product.price}`}</span>
        </Link>
    );
}
 
export default Product;