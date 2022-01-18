import classes from "./navbar.module.css";
import {NavLink} from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";




function Navbar(props) {
    let sidebarElements = props.sidebar.friends.map(friend =>
        <Sidebar name={friend.name}
                 age={friend.age}
                 key={friend.id}
                 avatar={friend.avatar}
                 gender={friend.gender}/>)

    return (
            <nav className={classes.nav}>
                <div>
                    <NavLink to={`/profile/${props.login}`} className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs' className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to='/users' className={navData => navData.isActive ? classes.active : classes.item}>Users</NavLink>
                </div>
                <div>
                    <NavLink to='/news' className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink>
                </div>
                <div>
                    <NavLink to='/music' className={navData => navData.isActive ? classes.active : classes.item}>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/settings' className={navData => navData.isActive ? classes.active : classes.item}>Settings</NavLink>
                </div>
                <div className={classes.sidebarElements}>
                    <p className={classes.text}>Friends</p>
                    {sidebarElements}
                </div>
            </nav>
    )
}

export default Navbar