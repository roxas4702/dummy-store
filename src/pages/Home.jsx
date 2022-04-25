import styles from "./Home.module.scss"
import axios from "axios";
import { useState, useEffect } from "react";
import Product from "../components/Product/Product";
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [favourites, setFavourites] = useState(null)


    useEffect(() => {
        getProducts();    
        const check = localStorage.getItem('favourites')
        if (check === null) localStorage.setItem('favourites', []);
        if (favourites === null) setFavourites(JSON.parse(check))
    }, [favourites])


    const filterProducts = (category) => {
        const updatedList = products.filter((p) => p.category === category);
        setFilteredData(updatedList);
    }

    const getProducts = async () => {
        const check = localStorage.getItem('products');
        if (check) {
            setProducts(JSON.parse(check));
            setFilteredData(JSON.parse(check));
        } else {
            const res = await axios.get('https://fakestoreapi.com/products');
            localStorage.setItem('products', JSON.stringify(res.data));
            setProducts(res.data);
            setFilteredData(res.data);
        }
    }

    function toggleFavourites(id) {
        const isFavourite = favourites.find(f => f.id === id);
        isFavourite ? 
        setFavourites(prev => prev.filter(f => f.id !== id)) : 
        setFavourites([...favourites, products.find(p => p.id === id)]);

    }

    return (
        <div>
            <Dropdown className={styles.dropdown}>
                <Dropdown.Toggle bsPrefix={styles.dropdownButton}>
                    Category <FontAwesomeIcon icon={faCaretDown} />
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
                {filteredData.map((product) => <Product product={product} key={product.id} toggleFavourites={toggleFavourites} favourites={favourites} />)}
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