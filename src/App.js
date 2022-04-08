import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartContext} from "./context/CartContext"
import { CartProvider } from "react-use-cart";
import { useState } from "react";
import Header from "./components/Header";
import Home from './pages/Home';
import Cart from "./pages/Cart";

const App = () => {
	const [cartCount, setCartCount] = useState(0)

	return (
		<Router>
			<CartContext.Provider value={{ cartCount, setCartCount }}>
				<Header />
				<div className="content">
					<CartProvider>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/cart' component={Cart} />
						</Switch>
					</CartProvider>
				</div>
			</CartContext.Provider>
		</Router>
	);
}
 
export default App;
					
