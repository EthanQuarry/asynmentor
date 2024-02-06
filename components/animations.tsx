"use client"

import { motion } from 'framer-motion';

export const FadeInFromTop = ({ children }: {children : React.ReactNode}) => {
  const animationVariants = {
    initial: {
      y: -20, // Start 50 pixels above the final position
      opacity: 0,
    },
    animate: {
      y: 0, // Move to the final position
      opacity: 1,
      transition: {// This creates a more dynamic movement
        stiffness: 0,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};

