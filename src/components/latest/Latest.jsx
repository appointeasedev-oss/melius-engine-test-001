```javascript
import React from 'react';

const LatestItems = ({ image, heading, description }) => {
  return (
    <div className="latest-item">
      <img src={image} alt={heading} />
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

export default LatestItems;
```