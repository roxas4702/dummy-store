import axios from "axios";
import { useState, useEffect } from "react";
import Product from "../components/Product";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const filterProducts = (category) => {
        setProducts(products.filter((p) => p.category === category));
        console.log(products)
    }


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
            <button onClick={() => filterProducts("men's clothing")}>men's clothing</button>
            <button onClick={() => filterProducts("women's clothing")}>women's clothing</button>
            <button onClick={() => filterProducts("jewelery")}>jewelery</button>
            <button onClick={() => filterProducts("electronics")}>electronics</button>

            {products.map((product) => <Product product={product} key={product.id} />)}
        </div>
    );
}
 
export default Home;