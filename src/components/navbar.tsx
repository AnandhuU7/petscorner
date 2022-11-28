import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalContext } from "../contexts/global.context";
import "./navbar.css";

export function NavBar() {
    const activeRoute = useLocation().pathname;
    const { user } = useContext(GlobalContext);

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

           
            {user && (
                <Link className={`navbar-link ${activeRoute === "/latest" ? "active" : ""}`} to={"/latest"}>
                    Latest
                </Link>
            )}
            {user && (
                <Link className={`navbar-link ${activeRoute === "/sell" ? "active" : ""}`} to={"/sell"}>
                    Sell
                </Link>
            )}
             {user?.isAdmin && (
                <Link className={`navbar-link ${activeRoute === "/admin" ? "active" : ""}`} to={"/admin"}>
                    Admin
                </Link>
            )}
        </div>
    );
}
