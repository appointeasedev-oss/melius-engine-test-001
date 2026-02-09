```javascript
import React from 'react';
import './DevItems.css';

interface DevItemProps {
  title: string;
  description: string;
  link: string;
  image: string;
  imageAlt?: string;
}

const DevItems: React.FC<DevItemProps> = ({ title, description, link, image, imageAlt = title }) => {
  return (
    <div className="dev-item">
      <div className="dev-item-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
      <div className="dev-item-image">
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  );
};

export default DevItems;
```