import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Page1 = () => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1, transition: { duration: 1 } } : { opacity: 0 }}
      className="page1"
    >
      <div className="container">
        <div className="page1-content">
          <h1>Page 1</h1>
          <p>This is the first page of the application.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Page1;
# Auto improvement by Melius