import logo from "../assets/logo.png"

function Header(){
    return (
        <section id="header">
            <header className="header">
                <img src={logo} alt="Logo" className="header-logo"></img>
                <h1>Ali Kaan Büke</h1>
                <div className="header-links">
                    <a href="#about">Hakkımda</a>
                    <a href="#projects">Projeler</a>
                </div>
            </header>
        </section>
    )
}

export default Header;