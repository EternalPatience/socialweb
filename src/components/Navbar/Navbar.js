import classes from "./navbar.module.css";


function Navbar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={classes.item}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={classes.item}>
                <p>News</p>
            </div>
            <div className={classes.item}>
                <p>Music</p>
            </div>
            <div className={classes.item}>
                <p>Settings</p>
            </div>
        </nav>
    )
}

export default Navbar