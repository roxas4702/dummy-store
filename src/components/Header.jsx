import { useHistory } from "react-router-dom";
import HeaderCSS from "./Header.module.css"

const Header = () => {
	const history = useHistory();

    return (
        <div className={HeaderCSS.header}>
            <h2 onClick={() => history.push('/')}>Dummy Store</h2>
            <span>links</span>
            <button className={HeaderCSS.cartButton} onClick={() => history.push('/cart')}>🛒 Cart (0)</button>           
        </div>
    );
}
 
export default Header;