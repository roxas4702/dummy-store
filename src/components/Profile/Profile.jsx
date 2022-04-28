import styles from "./Profile.module.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
    const { isLoading, user, logout } = useAuth0();
    
    function logoutFunc() {
        const saveFavoutites = localStorage.getItem('favourites')
        const saveCart = localStorage.getItem('react-use-cart')
        localStorage.setItem(`${user.sub}_favourites`, saveFavoutites)
        localStorage.setItem(`${user.sub}_cart`, saveCart)
        localStorage.removeItem('favourites');
        localStorage.removeItem('react-use-cart');
        logout();
    }
    
    if (isLoading) return null;
    
    return (
        <div className={styles.profilePage}>
            <ul className={styles.info}>
                <h2>Profile</h2>
                <li>Name: {user.given_name}</li>
                <li>Surname: {user.family_name}</li>
                <li>
                    <span>Country: </span>        
                    <img 
                        className={styles.locale}
                        src={user.locale ? `https://purecatamphetamine.github.io/country-flag-icons/3x2/${user.locale.toUpperCase()}.svg` : null} 
                        alt={user.locale} 
                    />
                </li>
                <li>
                    Email: {user.email}
                        <span className={styles.isVerified}>
                            <FontAwesomeIcon icon={user.email_verified ? faCheck : faXmark} />
                            <span className={styles.tooltip}>{user.email_verified ? 'Verified' : 'Not Verified'}</span>
                        </span>
                </li>
                <li><button className={styles.logout} onClick={() => logoutFunc()}>Log Out</button></li>
            </ul>
        </div>
    );
}
 
export default Profile;