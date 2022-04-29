import styles from "./Home.module.scss"
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useCart } from "react-use-cart";
import { FavouriteContext } from "../contexts/FavouriteContext";
import Product from "../components/Product/Product";
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const { favourites, setFavourites } = useContext(FavouriteContext);
	const { isAuthenticated, user } = useAuth0();
    const { setItems } = useCart();
    
    useEffect(() => {
        isAuthenticated && getUserData();

        function getUserData() {
            const getFavourites = localStorage.getItem(`${user.sub}_favourites`);
            if (getFavourites) {
                localStorage.setItem('favourites', getFavourites);
                setFavourites(JSON.parse(getFavourites));
            }
            const getCart = localStorage.getItem(`${user.sub}_cart`);
            if (getCart) {
                localStorage.setItem('react-use-cart', getCart);
                const parsedCart = JSON.parse(getCart)
                setItems(parsedCart.items);
            }
            localStorage.removeItem(`${user.sub}_favourites`);
            localStorage.removeItem(`${user.sub}_cart`);
        }
    }, [isAuthenticated, user?.sub, setFavourites, setItems])

    useEffect(() => {
        const data = localStorage.getItem('favourites');
        data && setFavourites(JSON.parse(data));
    }, [setFavourites])
    
    useEffect(() => {
        getProducts();
    }, [])

    
    function toggleFavourites(id) {
        const isFavourite = favourites.find(f => f.id === id);
        isFavourite ? 
        setFavourites(prev => prev.filter(f => f.id !== id)) : 
        setFavourites([...favourites, products.find(p => p.id === id)]);
    }
    
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
                {filteredData.map(product => <Product product={product} key={product.id} toggleFavourites={toggleFavourites} favourites={favourites} />)}
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