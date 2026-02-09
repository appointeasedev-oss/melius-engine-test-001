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