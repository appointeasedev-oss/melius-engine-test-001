```javascript
import React from 'react';
import PropTypes from 'prop-types';

const ParaBox = ({ title, text }) => {
  return (
    <section className="para-box" aria-labelledby="para-box-title">
      <h2 id="para-box-title" className="para-box-title">{title}</h2>
      <p className="para-box-text">{text}</p>
    </section>
  );
};

ParaBox.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ParaBox;
```