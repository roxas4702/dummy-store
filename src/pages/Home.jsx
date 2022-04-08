import axios from "axios";
import { useEffect, useState } from "react";
// import { ProductContext } from "../context/ProductContext"
import Product from "../components/Product";

const Home = () => {
    // const { products, setProducts } = useContext(ProductContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
	    .then(res => setProducts(res.data));
    }, [setProducts])

    return (
        <div className="productsContainer">
            {products.map((product) => <Product product={product} key={product.id} />)}
        </div>
    );
}
 
export default Home;