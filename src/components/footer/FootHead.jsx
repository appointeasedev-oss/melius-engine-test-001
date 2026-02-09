```typescript
import React from 'react';
import './FootHead.css';

interface FootHeadProps {
  title: string;
  subtitle?: string;
}

const FootHead: React.FC<FootHeadProps> = ({ title, subtitle }) => {
  return (
    <div className="foot-head" aria-label="Footer Header">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default FootHead;
```