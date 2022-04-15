import styles from "./CartDropdown.module.scss"
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const CartDropdown = () => {
    const { isEmpty, items, totalItems, removeItem } = useCart();

    return (
        <Dropdown align="end">
                <Dropdown.Toggle variant="success" className={styles.cartButton} id="dropdown-basic">
                    <FontAwesomeIcon icon={faCartShopping} /> Cart ({totalItems})
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles.dropdownMenu}>
                    {isEmpty ? <h2 className={styles.isEmpty}>Your cart is empty!</h2> : (
                        <div>{
                            items.map((item) => (
                                    <div className={styles.product} key={item.id}>
                                        <div className={styles.text}>
                                            <span className={styles.title}>{item.title}</span>
                                            <span className={styles.price}>{`$ ${item.price} (x${item.quantity}`})</span>
                                        </div>
                                        <FontAwesomeIcon className={styles.trash} onClick={() => removeItem(item.id)} icon={faTrashCan} />
                                    </div>
                            ))}
                            <Dropdown.Item className={styles.goToCart}>
                                <Link to='/cart'>Go to cart</Link>
                            </Dropdown.Item>
                            
                            

                        </div>
                    )}
                </Dropdown.Menu>
                                
            </Dropdown>
    );
}
 
export default CartDropdown;