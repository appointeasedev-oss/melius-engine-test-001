import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">{t('logo')}</Link>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">{t('home')}</Link>
              </li>
              <li>
                <Link to="/about">{t('about')}</Link>
              </li>
              <li>
                <Link to="/services">{t('services')}</Link>
              </li>
              <li>
                <Link to="/contact">{t('contact')}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
# Auto improvement by Melius