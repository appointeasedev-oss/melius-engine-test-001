```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/Context';

const FootItems = ({ items }) => {
  const { theme } = useTheme();

  return (
    <div className={`footer-items ${theme}`}>
      {items.map((item, index) => (
        <Link key={item.id || index} to={item.path} className="footer-item">
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default FootItems;
```
# Auto improvement by Melius