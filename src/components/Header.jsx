import styles from "./Header.module.scss"
import { Link } from "react-router-dom";
import CartDropdown from "./CartDropdown";

const Header = () => {
    return (
        <div className={styles.header}>
            <Link to='/'><h2>Dummy Store</h2></Link>
            
            <CartDropdown />
        </div>
    );
}

export default Header;