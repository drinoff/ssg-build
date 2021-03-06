import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footerQuickLinks">
                    <h4>Бързи Линкове</h4>
                    <ul>
                        <li>Начало</li>
                        <li>За Нас</li>
                        <li>Проекти</li>
                        <li>Връзка</li>
                    </ul>
                </div>
                <div className="footerContact">
                    <h4>Връзка с Мен</h4>
                    <ul>
                        <li>089 987 88 888</li>
                        <li>WhatsUp</li>
                        <li>Viber</li>
                        <li
                            onClick={() =>
                                (window.location = "mailto:yourmail@gmail.com")
                            }
                        >
                            selqydin1990@gmail.com
                        </li>
                    </ul>
                </div>

                <div className="footerSocial">
                    <h2>SSG Build</h2>
                </div>
            </footer>
            <p className="designMark">
                SSG Build &#174; Design{" "}
                <a href="http://drinoff.eu" target="_blank" rel="noreferrer">
                    Drinoff
                </a>
            </p>
        </>
    );
};

export default Footer;
