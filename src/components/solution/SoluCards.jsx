```jsx
import React from 'react';
import PropTypes from 'prop-types';
import './SoluCards.css';

const SoluCards = ({ solution }) => {
  return (
    <div className="solu-cards">
      {solution.map((item, index) => (
        <div key={index} className="solu-card">
          <div className="solu-card-header">
            <h3>{item.title}</h3>
          </div>
          <div className="solu-card-content">
            <p>{item.description}</p>
          </div>
          <div className="solu-card-footer">
            <button className="solu-card-button" aria-label={`Learn more about ${item.title}`}>
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

SoluCards.propTypes = {
  solution: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SoluCards;
```

```css
.solu-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.solu-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 300px;
  max-width: 100%;
}

.solu-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.solu-card-header {
  margin-bottom: 15px;
}

.solu-card-header h3 {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}

.solu-card-content {
  margin-bottom: 20px;
}

.solu-card-content p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.solu-card-footer {
  text-align: center;
}

.solu-card-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.solu-card-button:hover {
  background-color: #0056b3;
}
```