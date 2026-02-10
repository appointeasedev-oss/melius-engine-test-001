import React from 'react';
import { Link } from 'react-router-dom';

function FooterItems({ head, item }) {
  return (
    <div className="foot-items">
      <h3>{head}</h3>
      <ul>
        {item.map((i) => (
          <li key={i}>
            <Link to="#">{i}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterItems;
# Auto improvement by Melius