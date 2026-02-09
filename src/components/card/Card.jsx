```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ title, description, image, slug }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
```