
import StoreContext from "../../storeContext";
import Navbar from "./navbar";




function NavbarContainer() {



    return (
            <StoreContext>
                {(store) => {
                    return <Navbar state={store.getState().sidebar}/>
                }}
            </StoreContext>
    )
}

export default NavbarContainer