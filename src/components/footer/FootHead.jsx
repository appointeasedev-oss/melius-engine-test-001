```typescript
import React from 'react';
import './FootHead.css';

interface FootHeadProps {
  title: string;
  subtitle?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FootHead: React.FC<FootHeadProps> = ({ title, subtitle, className, style }) => {
  return (
    <div className={`foot-head ${className || ''}`} style={style} aria-label="Footer Header">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default FootHead;
```