```javascript
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { Search, ShoppingCart, Favorite, Menu, Close } from "react-feather";
import { CartContext } from "../../context/Context";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems, wishItems } = React.useContext(CartContext);

  const getTotalItems = (items) => items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__contact">
            <p>
              <a href="tel:+19876543210">+1 987 654 3210</a> &bull;{" "}
              <a href="mailto:info@company.com">info@company.com</a>
            </p>
          </div>
          <div className="header__links">
            <Link to="/wishlist">
              <Favorite />
              <span className="wishlist-count">{wishItems.length}</span>
            </Link>
            <Link to="/cart">
              <ShoppingCart />
              <span className="cart-count">{getTotalItems(cartItems)}</span>
            </Link>
          </div>
        </div>
        <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="header__logo">
            LOGO
          </Link>
          <div className="header__menu">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
              About
            </Link>
            <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
              Services
            </Link>
            <Link to="/solutions" className={location.pathname === "/solutions" ? "active" : ""}>
              Solutions
            </Link>
            <Link to="/blog" className={location.pathname === "/blog" ? "active" : ""}>
              Blog
            </Link>
            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
              Contact
            </Link>
            <div className="header__search">
              <Search />
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <button className="header__menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <Close /> : <Menu />}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
```
# Auto improvement by Melius