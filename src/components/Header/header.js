import classes from "./header.module.css";
import {NavLink} from "react-router-dom";


function Header(props) {

    return (
        <header className={classes.header}>
            <img src='https://az12497.vo.msecnd.net/1404d4b5bbd94f028000b9d71f81d465/images/184/9cc8996fb7b9420b9b9d1d55b61e3e1d.jpg'
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