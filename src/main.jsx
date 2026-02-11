```javascript
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1 className="hero-title">Welcome to Our Website</h1>
        <p className="hero-subtitle">This is the home page content.</p>
        <Link to="/about" className="btn btn-primary">Learn More</Link>
      </section>
    </div>
  );
};

export default HomePage;
```
# Auto improvement by Melius