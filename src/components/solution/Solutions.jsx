import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, sliderContainer, slider, pageVariants, pageTransition } from './animations';

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <motion.div
        className="home"
        variants={sliderContainer}
      >
        <motion.div
          className="slider"
          variants={slider}
        >
          <div className="slide">
            <h1>Welcome to Our Website</h1>
            <p>Discover amazing content</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
# Auto improvement by Melius