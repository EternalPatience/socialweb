import classes from "./header.module.css";
import {NavLink} from "react-router-dom";


function Header(props) {

    return (
        <header className={classes.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7FNyUKExh-sEgB4sNlZg24ikLf4Re0ZEAbQ&usqp=CAU}'
                 alt='logo'/>

            <div className={classes.loginBlock}>
                {props.isAuth ?
                    <div>
                        {props.login} - <button onClick={props.logout}>Logout</button>
                    </div> :
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header