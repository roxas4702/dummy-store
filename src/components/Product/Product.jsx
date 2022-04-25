import styles from "./Product.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as bookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as bookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
    const { id, image, title, price } = props.product;
    const productTitle = (title) => title.length < 60 ? title : `${title.substring(0, 60)}...`;
    localStorage.setItem('favourites', JSON.stringify(props.favourites));

    return (
        <div className={styles.product}>
            <div className={styles.imageContainer}>
                <FontAwesomeIcon 
                    onClick={() => props.toggleFavourites(id)} 
                    className={styles.bookmarkIcon} 
                    icon={props.favourites.find(f => f.id === id) ? bookmarkSolid : bookmarkRegular} 
                />
                <img src={image} alt="" />
            </div>
            <div className={styles.text}>
                <span className={styles.title}>{productTitle(title)}</span>
                <span className={styles.price}>{`$ ${price}`}</span>
                <Link className={styles.buyButton} to={{ pathname:`/product/${id}`, state: props.product }}>Buy Now</Link>
            </div>
        </div>
    );
}
 
export default Product;