import styles from "./Product.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as bookmarkSolid, faStar } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as bookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Product = (props) => {
    const { id, image, title, price, rating } = props.product;
    const productTitle = (title) => title.length < 60 ? title : `${title.substring(0, 60)}...`;
    
    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(props.favourites));
    }, [props.favourites])

    return (
        <div className={`${styles.product} ${props.vertical && styles.vertical}`}>
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
                <div className={styles.info}>
                    <span className={styles.price}>{`$ ${price}`}</span>
                    <span className={styles.rating}>
                        {rating.rate}
                        <FontAwesomeIcon className={styles.starIcon} icon={faStar} />
                    </span>
                </div>
                <Link to={{ pathname:`/product/${id}`, state: props.product }} className={styles.buyButton}>Buy Now</Link>
            </div>
        </div>
    );
}
 
export default Product;