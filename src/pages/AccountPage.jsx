import styles from "./AccountPage.module.scss";
import { Switch, Route } from "react-router-dom";
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import Profile from "../components/Profile/Profile";
import Favourites from "../components/Profile/Favourites";

const ProfilePage = () => {
    return (
        <div className={styles.accountPage}>
            <ProfileSidebar />
            <Switch>
                <Route exact path='/profile' component={Profile} />
                <Route path='/profile/favourites' component={Favourites} />
            </Switch>
        </div>
    );
}
 
export default ProfilePage;