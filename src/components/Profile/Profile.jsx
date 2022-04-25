import styles from "./Profile.module.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
    const { isLoading, user, logout } = useAuth0();
    if (isLoading) return null

    return (
        <div className={styles.profilePage}>
            <div className={styles.info}>
                <h2>Profile</h2>
                <span>Name: {user.given_name}</span>
                <span>Surname: {user.family_name}</span>
                <div>
                    <span>Country: </span>        
                    <img 
                        className={styles.locale}
                        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${user.locale.toUpperCase()}.svg`} 
                        alt={user.locale} 
                    />
                </div>
                <span>
                    Email: {user.email}
                        <span className={styles.isVerified}>
                            <FontAwesomeIcon icon={user.email_verified ? faCheck : faXmark} />
                            <span className={styles.tooltip}>{user.email_verified ? 'Verified' : 'Not Verified'}</span>
                        </span>
                </span>
                <button onClick={() => logout()}>Log Out</button>
            </div>
        </div>
    );
}
 
export default Profile;