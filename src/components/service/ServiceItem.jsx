```javascript
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useMediaQuery } from "react-responsive";
import Logo from "../../assets/images/logo.svg";
import MobileMenu from "./MobileMenu";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const location = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const menuItems = [
    { label: t("home"), path: "/", exact: true },
    { label: t("about"), path: "/about" },
    { label: t("services"), path: "/services" },
    { label: t("blog"), path: "/blog" },
    { label: t("contact"), path: "/contact" },
  ];

  const authMenuItems = [
    { label: t("dashboard"), path: "/dashboard" },
    { label: t("logout"), onClick: handleLogout },
  ];

  const guestMenuItems = [
    { label: t("login"), path: "/login" },
    { label: t("register"), path: "/register" },
  ];

  const renderMenuItems = (items) =>
    items.map((item, index) => (
      <li key={index}>
        {item.path ? (
          <Link
            to={item.path}
            className={`nav-link ${
              location.pathname === item.path && "active"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ) : (
          <button
            className="nav-link"
            onClick={item.onClick}
            onKeyDown={(e) => e.key === "Enter" && item.onClick()}
            role="button"
            tabIndex={0}
          >
            {item.label}
          </button>
        )}
      </li>
    ));

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__logo" aria-label="Home">
            <img src={Logo} alt="Company Logo" />
          </Link>

          {!isMobile ? (
            <nav className="header__nav" aria-label="Main navigation">
              <ul>{renderMenuItems(menuItems)}</ul>
              {user ? (
                <ul>{renderMenuItems(authMenuItems)}</ul>
              ) : (
                <ul>{renderMenuItems(guestMenuItems)}</ul>
              )}
            </nav>
          ) : (
            <MobileMenu
              menuItems={menuItems}
              authMenuItems={authMenuItems}
              guestMenuItems={guestMenuItems}
              user={user}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          )}

          <button
            className={`header__menu-btn ${isMobile && "is-active"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
```
# Auto improvement by Melius