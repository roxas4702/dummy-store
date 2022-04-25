import styles from "./CartDropdown.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';

const CartDropdown = () => {
    const { isEmpty, items, totalItems, removeItem } = useCart();

    return (
        <Dropdown align="end">
            <Dropdown.Toggle bsPrefix={styles.cartButton}>
                <FontAwesomeIcon className={styles.cartIcon} icon={faCartShopping} />
                ({totalItems})
                <FontAwesomeIcon icon={faCaretDown} />
            </Dropdown.Toggle>
            <Dropdown.Menu className={styles.dropdownMenu}>
                {isEmpty ? <h2>Your cart is empty!</h2> : (
                    <div>
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
                )}
            </Dropdown.Menu>                               
        </Dropdown>
    );
}
 
export default CartDropdown;