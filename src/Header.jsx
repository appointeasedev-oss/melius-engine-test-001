```jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { logEvent } from '../../utils/analytics';

import { LanguageSelector } from '../language-selector';
import { Logo } from '../logo';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';

import './index.css';

export const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    logEvent('mobile_menu_toggle', { state: !menuOpen ? 'opened' : 'closed' });
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    logEvent('dropdown_toggle', { dropdown });
  };

  const handleLinkClick = (link) => {
    closeMenu();
    logEvent('header_link_click', { link });
  };

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo" onClick={() => handleLinkClick('logo')}>
          <Logo />
        </Link>

        <DesktopMenu
          activeDropdown={activeDropdown}
          onDropdown={handleDropdown}
          onLinkClick={handleLinkClick}
        />

        <div className="header__actions">
          <LanguageSelector />
          <button
            className="header__menu-toggle"
            onClick={toggleMenu}
            aria-label={t('navigation.menu')}
          >
            <span className="header__menu-icon" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <MobileMenu
          activeDropdown={activeDropdown}
          onDropdown={handleDropdown}
          onLinkClick={handleLinkClick}
          onClose={closeMenu}
        />
      )}
    </header>
  );
};
```