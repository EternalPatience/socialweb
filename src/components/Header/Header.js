import classes from "./header.module.css";


function Header() {
    return (
        <header className={classes.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7FNyUKExh-sEgB4sNlZg24ikLf4Re0ZEAbQ&usqp=CAU}'
                 alt='logo'/>
        </header>
    )
}

export default Header