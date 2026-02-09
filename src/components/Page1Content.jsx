```jsx
import React from 'react';
import './Page1Content.css';

const Page1Content = () => {
  return (
    <section className="page1-content" aria-labelledby="page1-heading">
      <h1 id="page1-heading" className="page1-heading">Welcome to Our Page</h1>
      <p className="page1-description">
        This is a description of our page. It provides an overview of what you can find here.
      </p>
      <div className="page1-features">
        <div className="feature" aria-label="Feature 1">
          <h2>Feature 1</h2>
          <p>Details about feature 1.</p>
        </div>
        <div className="feature" aria-label="Feature 2">
          <h2>Feature 2</h2>
          <p>Details about feature 2.</p>
        </div>
        <div className="feature" aria-label="Feature 3">
          <h2>Feature 3</h2>
          <p>Details about feature 3.</p>
        </div>
      </div>
    </section>
  );
};

export default Page1Content;
```