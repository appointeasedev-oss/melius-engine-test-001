```javascript
import React from 'react';

const MiniBox = ({ title, children }) => {
  return (
    <div className="mini-box">
      <h3 className="mini-box-title">{title}</h3>
      <div className="mini-box-content">{children}</div>
    </div>
  );
};

export default MiniBox;
```