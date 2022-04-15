import styles from './CartItem.module.scss'
import { useCart } from "react-use-cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const CartItem = () => {
    const { items, updateItemQuantity } = useCart();

    return (
        <div className={styles.cartItems}>
                {items.map((item) => (
                    <div className={styles.product} key={item.id}>
                        <span className={styles.imageContainer}>
                            <img src={item.image} alt="" />
                        </span>
                        <div className={styles.text}>
                            <span className={styles.title}>{item.title}</span>
                            <span>{`$ ${item.price} (x${item.quantity}`})</span>
                            <div className={styles.buttonsWrapper}>
                                <FontAwesomeIcon
                                    className={styles.removeProduct}
                                    onClick={() => updateItemQuantity(item.id, item.quantity -1)} 
                                    icon={faMinus} 
                                />
                                <FontAwesomeIcon
                                    className={styles.addProduct}
                                    onClick={() => updateItemQuantity(item.id, item.quantity +1)}
                                    icon={faPlus}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    );
}
 
export default CartItem;