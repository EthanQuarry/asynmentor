"use client"

import { motion } from 'framer-motion';

export const FadeInFromTop = ({ children }: {children : React.ReactNode}) => {
  const animationVariants = {
    initial: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
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

