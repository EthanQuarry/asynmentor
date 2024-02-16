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

export const FadeInFromTopOne = ({ children }: {children : React.ReactNode}) => {
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

export const FadeInFromTopTwo = ({ children }: {children : React.ReactNode}) => {
  const animationVariants = {
    initial: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: .3,
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

export const FadeInFromTopThree = ({ children }: {children : React.ReactNode}) => {
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
      transition={{ ease: "easeOut", delay: 1.2}}
    >
      {children}
    </motion.div>
  );
};



