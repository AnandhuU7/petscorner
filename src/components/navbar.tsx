import { Link } from "react-router-dom";
import "./navbar.css";

export function NavBar() {
    return (
        <div className='app-navbar'>
            <Link className={"navbar-link"} to={"/home"}>
                Home
            </Link>
            <Link className={"navbar-link"} to={"/dogs"}>
                Dogs
            </Link>
            <Link className={"navbar-link"} to={"/cats"}>
                Cats
            </Link>
            <Link className={"navbar-link"} to={"/rabbits"}>
                Rabbits
            </Link>
            <Link className={"navbar-link"} to={"/birds"}>
                Birds
            </Link>
        </div>
    );
}
