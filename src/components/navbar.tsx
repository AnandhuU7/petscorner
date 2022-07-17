import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export function NavBar() {
    const activeRoute = useLocation().pathname;
    return (
        <div className='app-navbar'>
            <Link className={`navbar-link ${activeRoute === "/home" ? "active" : ""}`} to={"/home"}>
                Home
            </Link>
            <Link className={`navbar-link ${activeRoute === "/dogs" ? "active" : ""}`} to={"/dogs"}>
                Dogs
            </Link>
            <Link className={`navbar-link ${activeRoute === "/cats" ? "active" : ""}`} to={"/cats"}>
                Cats
            </Link>
            <Link className={`navbar-link ${activeRoute === "/rabbits" ? "active" : ""}`} to={"/rabbits"}>
                Rabbits
            </Link>
            <Link className={`navbar-link ${activeRoute === "/birds" ? "active" : ""}`} to={"/birds"}>
                Birds
            </Link>
        </div>
    );
}
