import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Header from "./components/Header/Header";
import Home from './pages/Home';
import ProductPage from "./pages/ProductPage";
import AccountPage from "./pages/AccountPage";
import Cart from "./pages/Cart";

const App = () => {
	return (
		<Router>
			<CartProvider>
				<Header />
				<div className="content">
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/product/:id' component={ProductPage} />
						<Route path='/profile' component={AccountPage} />
						<Route exact path='/cart' component={Cart} />
					</Switch>
				</div>
			</CartProvider>
		</Router>
	);
}
 
export default App;
					
