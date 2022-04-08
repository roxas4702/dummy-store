import ProductCSS from "./Product.module.css"
import { useCart } from "react-use-cart";

const Product = (props) => {
    const { addItem } = useCart();

    return (
        <div className={ProductCSS.product}>
            <img className={ProductCSS.productImage} src={props.product.image} alt="" />
            <span>{props.product.title}</span>
            <span>{`$${props.product.price}`}</span>
            <button onClick={() => addItem(props.product)} className={ProductCSS.productButton}>Add to cart</button>
        </div>
    );
}
 
export default Product;