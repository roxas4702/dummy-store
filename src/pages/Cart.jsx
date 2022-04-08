import { useCart } from "react-use-cart";
import CartCSS from "./Cart.module.css"

const Cart = () => {
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        emptyCart,
    } = useCart();

    if (isEmpty) return <h1>Your cart is empty!</h1>
    
    return (
        <div className={CartCSS.cartContainer}>
                {items.map((item) => {
                    return (
                        <div className={CartCSS.product} key={item.id}>
                            <img className={CartCSS.productImage} src={item.image} alt="" />
                            <div className={CartCSS.productInfo}>
                                <span className={CartCSS.productTitle}>{item.title}</span>
                                <span>Quantity ({item.quantity})</span>
                                <span>{`$${item.price}`}</span>
                                <div className={CartCSS.buttonsWrapper}>
                                    <button className={CartCSS.buttonRemove} onClick={() => updateItemQuantity(item.id, item.quantity -1)}>-</button>
                                    <button className={CartCSS.buttonAdd} onClick={() => updateItemQuantity(item.id, item.quantity +1)}>+</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <h1>Total: {cartTotal}</h1>
                <button onClick={() => emptyCart()}>Clear Cart</button>
        </div>
    );
}
 
export default Cart;