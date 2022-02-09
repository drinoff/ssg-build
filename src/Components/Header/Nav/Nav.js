import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link className="navLink" to="/">
                        Начало
                    </Link>
                </li>
                <li>
                    <Link className="navLink" to="/about">
                        За Нас
                    </Link>
                </li>
                <li>
                    <Link className="navLink" to="/projects">
                        Проекти
                    </Link>
                </li>
                <li>
                    <Link className="navLink" to="/contact">
                        Връзка
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
