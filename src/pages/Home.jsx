import axios from "axios";
import { useState, useEffect } from "react";
import Product from "../components/Product";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const check = localStorage.getItem("products");

        if (check) {
            setProducts(JSON.parse(check));
        } else {
            const res = await axios.get('https://fakestoreapi.com/products');
            localStorage.setItem("products", JSON.stringify(res.data));
            setProducts(res.data);
        }
    }

    return (
        <div className="productsContainer">
            {products.map((product) => <Product product={product} key={product.id} />)}
        </div>
    );
}
 
export default Home;