import Nav from "./Nav/Nav";

import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <h1 className="headerLogo">SSG BUILD</h1>
            <div className="imgWrapper"></div>
            <Nav className="navinHeader" />
            <div className="headerMask"></div>
        </header>
    );
};

export default Header;
