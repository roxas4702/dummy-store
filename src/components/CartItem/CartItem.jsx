import styles from './CartItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useCart } from "react-use-cart";
import { Link } from 'react-router-dom';

const CartItem = () => {
    const { items, updateItemQuantity } = useCart();

    return (
        <div className={styles.cartItems}>
                {items.map((item) => (
                    <div className={styles.product} key={item.id}>
                        <span className={styles.imageContainer}>
                            <Link className={styles.product} to={{ pathname:`/product/${item.id}`, state: item }}>
                                <img src={item.image} alt="" />
                            </Link>
                        </span>
                        <div className={styles.text}>
                            <span className={styles.title}>{item.title}</span>
                            <div className={styles.buttonsWrapper}>
                                <FontAwesomeIcon
                                    className={styles.removeProduct}
                                    onClick={() => updateItemQuantity(item.id, item.quantity -1)} 
                                    icon={faMinus} 
                                />
                                <span className={styles.quantity}>{item.quantity}</span>
                                <FontAwesomeIcon
                                    className={styles.addProduct}
                                    onClick={() => updateItemQuantity(item.id, item.quantity +1)}
                                    icon={faPlus}
                                />
                            </div>
                            <span className={styles.price}>{`$ ${item.price}`}</span>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default CartItem;