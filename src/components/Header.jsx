import styles from "./Header.module.scss"
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    const { isEmpty, items, totalItems, removeItem } = useCart();

    return (
        <div className={styles.header}>
            <Link to='/'><h2>Dummy Store</h2></Link>
            <div className={styles.contacts}>
                <a href="https://github.com/roxas4702" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://talent.start2impact.it/profile/luca-curro" target="_blank" rel="noreferrer">🚀</a>
                <a href="https://lucacurro.netlify.app/" target="_blank" rel="noreferrer">🌐</a>
            </div>

            <div>
                <div className={styles.dropdown}>
                    <button className={styles.cartButton}><FontAwesomeIcon icon={faCartShopping} /> Cart ({totalItems}) ▼</button>
                    <div className={styles.dropdownMenu}>
                        {items.map((item) => (
                            <div className={styles.product} key={item.id}>
                                <div className={styles.text}>
                                    <span className={styles.title}>{item.title}</span>
                                    <span className={styles.price}>{`$ ${item.price} (x${item.quantity}`})</span>
                                </div>
                                <FontAwesomeIcon className={styles.trash} onClick={() => removeItem(item.id)} icon={faTrashCan} />
                            </div>
                        ))}
                        <Link className={styles.goToCart} to='/cart'>Go to cart</Link>  
                    </div>
                </div>            
            </div>
        </div>
    );
}

export default Header;