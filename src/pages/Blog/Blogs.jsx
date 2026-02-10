import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Card = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    router.push(`/card/${data.id}`);
  };

  if (isLoading) {
    return (
      <div className="card">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="loading"
        />
      </div>
    );
  }

  return (
    <div className="card" onClick={handleClick}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="content"
      >
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </motion.div>
    </div>
  );
};

export default Card;
# Auto improvement by Melius