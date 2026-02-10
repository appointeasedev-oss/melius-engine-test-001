```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Our Website</h1>
      <p>This is the home page.</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}

export default Home;
```
# Auto improvement by Melius