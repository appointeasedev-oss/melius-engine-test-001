```javascript
import React from 'react';

const MiniBox = ({ title, children }) => {
  return (
    <div className="mini-box">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default MiniBox;
```