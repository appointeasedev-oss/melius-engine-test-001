```javascript
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Footer = ({ children }) => {
  const router = useRouter();

  const handleClick = (path) => {
    router.push(path);
  };

  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer__social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer__copyright">
        &copy; 2024 My Website. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
```
# Auto improvement by Melius