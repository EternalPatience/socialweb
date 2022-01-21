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
                <NavLink to={`/profile/${props.login}`} >Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' >Messages</NavLink>
            </div>
            <div>
                <NavLink to='/users' >Users</NavLink>
            </div>
            <div>
                <NavLink to='/news' >News</NavLink>
            </div>
            <div>
                <NavLink to='/music' >Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' >Settings</NavLink>
            </div>
            <div className={classes.sidebarElements}>
                <p className={classes.text}>Friends</p>
                {sidebarElements}
            </div>
        </nav>
    )
}

export default Navbar