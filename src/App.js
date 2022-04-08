import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { ProductContext } from "./context/ProductContext";
import Header from "./components/Header";
import Home from './pages/Home';
import Cart from "./pages/Cart";
import { CartProvider } from "react-use-cart";

const App = () => {

	return (
		<Router>
			<Header />
			<div className="content">
				<CartProvider>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/cart' component={Cart} />
					</Switch>
				</CartProvider>
			</div>
		</Router>
	);
}
 
export default App;
					
				{/* <ProductContext.Provider value={{  }}> */}
				{/* </ProductContext.Provider> */}
