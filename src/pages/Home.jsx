import styles from "./Home.module.scss"
import axios from "axios";
import { useState, useEffect } from "react";
import Product from "../components/Product";
import { Dropdown } from 'react-bootstrap';

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
            <Dropdown className={styles.dropdown}>
                <Dropdown.Toggle className={styles.button} id="dropdown-basic">
                    Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={getProducts}>All</Dropdown.Item>
                    <Dropdown.Item onClick={() => filterProducts("men's clothing")}>Men's clothing</Dropdown.Item>
                    <Dropdown.Item onClick={() => filterProducts("women's clothing")}>Women's clothing</Dropdown.Item>
                    <Dropdown.Item onClick={() => filterProducts("jewelery")}>Jewelery</Dropdown.Item>
                    <Dropdown.Item onClick={() => filterProducts("electronics")}>Electronics</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <div className={styles.productsContainer}>
                {filteredData.map((product) => <Product product={product} key={product.id} />)}
                <div className={styles.fillEmptySpaces}></div>
                <div className={styles.fillEmptySpaces}></div>
                <div className={styles.fillEmptySpaces}></div>
                <div className={styles.fillEmptySpaces}></div>
                <div className={styles.fillEmptySpaces}></div>
            </div>
        </div>
    );
}
 
export default Home;