import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <img
            src="public/img/mappabianca-fav3.png"
            alt="Mappa Bianca Logo"
            style={{ height: "70px" }}
          />
        </a>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/archaeomap" onClick={closeMenu}>Archaeomap</Link>
          <a
            href="https://vival18.github.io/forte-rivoli"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Forte Rivoli
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;




