import styles from "./Favourites.module.scss"
import { useContext } from "react";
import { FavouriteContext } from "../../contexts/FavouriteContext";
import Product from "../Product/Product";

const Favourites = () => {
    const { favourites, setFavourites } = useContext(FavouriteContext);

    function toggleFavourites(id) {
        const isFavourite = favourites.find(f => f.id === id);
        isFavourite && setFavourites(prev => prev.filter(f => f.id !== id));
    }

    return (
        <div className={styles.favourites}>
            <h2>Favourites</h2>
            <div className={styles.productsContainer}>
                {favourites.map(favourite => <Product product={favourite} key={favourite.id} toggleFavourites={toggleFavourites} favourites={favourites} vertical='vertical'/>)}
            </div>
        </div>
    );
}
 
export default Favourites;