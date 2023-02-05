import "./styles/NavBar.css";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "var(--color-violet-jc",
  };

  return (
    <nav className="navbar-main">
      <div className="navbar-items">
        <div className="navlogo-container">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dystdxfua/image/upload/v1669315810/just%20cupcakes/logo_spvrj6.png"
              alt="just-cupcakes-logo"
              className="navbar-logo"
            />
          </Link>
        </div>
        <div className="navlist-container">
          <ul className="navlist">
            <NavLink
              to="/category/chocolate"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="navlist-item">chocolate</li>
            </NavLink>
            <NavLink
              to="/category/frutal"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="navlist-item">frutal</li>
            </NavLink>
            <NavLink
              to="/category/especial"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="navlist-item">especial</li>
            </NavLink>
          </ul>
        </div>
        <Link to="/cart">
          <div className="navcart-container">
            <CartWidget />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
