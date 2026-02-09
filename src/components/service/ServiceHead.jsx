```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animations';

const ServiceHead: React.FC = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="service-head"
    >
      <h1>Services</h1>
      <p>We provide high-quality services</p>
    </motion.div>
  );
};

export default ServiceHead;
```