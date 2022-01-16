import {Outlet} from 'react-router-dom'

const GuestLayout = () => {
    return (
        <div>
            <h1>This is the Guest Layout Page</h1>
            <Outlet />
        </div>
    );
};


export default GuestLayout

