import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src="img/mappabianca-fav3.png"
            alt="Mappa Bianca Logo"
            style={{ height: "70px" }}
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;




