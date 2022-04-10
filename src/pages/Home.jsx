import styles from "./Home.module.css"
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
        const updatedList = products.filter((p) => p.category === category);
        setFilteredData(updatedList);
    }

    const getProducts = async () => {
        const check = localStorage.getItem("products");
        if (check) {
            setProducts(JSON.parse(check));
            setFilteredData(JSON.parse(check));
        } else {
            const res = await axios.get('https://fakestoreapi.com/products');
            localStorage.setItem("products", JSON.stringify(res.data));
            setProducts(res.data);
            setFilteredData(res.data);
        }
    }

    return (
        <div>
            <div className={styles.categoryButtons}>
                <button onClick={getProducts}>All</button>
                <button onClick={() => filterProducts("men's clothing")}>Men's clothing</button>
                <button onClick={() => filterProducts("women's clothing")}>Women's clothing</button>
                <button onClick={() => filterProducts("jewelery")}>Jewelery</button>
                <button onClick={() => filterProducts("electronics")}>Electronics</button>
            </div>
            <div className={styles.productsContainer}>
                {filteredData.map((product) => <Product product={product} key={product.id} />)}
                <div className={styles.fillEmptySpaces}></div>
                <div className={styles.fillEmptySpaces}></div>
                <div className={styles.fillEmptySpaces}></div>
                <div className={styles.fillEmptySpaces}></div>
            </div>
        </div>
    );
}
 
export default Home;