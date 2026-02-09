```javascript
import React from 'react';

const LatestItems = ({ image, heading }) => {
  return (
    <div className="latest-item">
      <img src={image} alt={heading} />
      <h3>{heading}</h3>
    </div>
  );
};

export default LatestItems;
```