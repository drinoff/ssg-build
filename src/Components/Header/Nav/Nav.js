import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link
                        to="/homePage"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        Начало
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        За Нас
                    </Link>
                </li>
                <li>
                    <Link
                        to="/projects"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        Проекти
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        Връзка
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
