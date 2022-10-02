import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <>
        <div className="navigation">
            <Link to='/location/create'>Nueva Ubicación</Link>
        </div>
        <Outlet />
        </>
    );
}

export default Navigation;