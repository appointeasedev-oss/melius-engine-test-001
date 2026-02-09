```jsx
import React from 'react';

interface LatestItemsProps {
  data: {
    title: string;
    date: string;
    image: string;
    alt?: string;
  }[];
}

const LatestItems: React.FC<LatestItemsProps> = ({ data }) => {
  return (
    <div className="latest-items">
      <h2>Latest Updates</h2>
      <div className="items-container">
        {data.map((item, index) => (
          <article key={index} className="item">
            <img src={item.image} alt={item.alt || 'Latest update'} loading="lazy" />
            <div className="item-content">
              <h3>{item.title}</h3>
              <p>{item.date}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default LatestItems;
```