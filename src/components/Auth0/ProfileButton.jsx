import { useAuth0 } from "@auth0/auth0-react";
import styles from "./ProfileButton.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProfileButton = () => {
    const { isLoading, isAuthenticated, user, loginWithRedirect } = useAuth0();
    
    function loginFunc() {
        loginWithRedirect();
    }
    
    if (isLoading) return null;

    return (
        <div className={styles.profileButton}>
            {isAuthenticated ? (
            <Link to='/profile'>
                <span>Hello, {user.given_name}!</span>            
            </Link>
            ) : (
                <button onClick={() => loginFunc()}>
                    <FontAwesomeIcon icon={faUser} />Log In
                </button>
            )}
        </div>
    );
}
 
export default ProfileButton;