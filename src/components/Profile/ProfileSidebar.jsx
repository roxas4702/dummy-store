import styles from "./ProfileSidebar.module.scss"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProfileSidebar = () => {
    const { isLoading, user} = useAuth0();
    if (isLoading) return null

    return (
        <div className={styles.sidebar}>
            <img className={styles.profilePicture} src={user.picture} alt="img" />
            <span className={styles.completeName}>{user.name}</span>
            <ul>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/profile/favourites'>Favourites</Link></li>
            </ul>
        </div>
    );
}
 
export default ProfileSidebar;