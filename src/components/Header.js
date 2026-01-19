import logo from "../assets/logo.png"
import name from "../assets/bukealikaan (1).png"

function Header(){
    return (
        <section id="header">
            <header className="header">
                <img src={logo} alt="Logo" className="header-logo"></img>
                <h1>Ali Kaan Büke</h1>
                <div className="header-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                </div>
            </header>
        </section>
    )
}

export default Header;