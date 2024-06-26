"use client"

import { motion, useScroll, useAnimation, delay } from 'framer-motion';
import { useEffect } from 'react';

export const FadeInFromTop = ({ children }: { children: React.ReactNode }) => {
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

export const FadeInFromTopOne = ({ children }: { children: React.ReactNode }) => {
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

export const FadeInFromTopTwo = ({ children }: { children: React.ReactNode }) => {
  const animationVariants = {
    initial: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 4,
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

export const FadeInFromTopThree = ({ children }: { children: React.ReactNode }) => {
  const animationVariants = {
    initial: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
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

export const FadeInOnScrollOne = ({ children }: { children: React.ReactNode }) => {
  
  const { scrollY } = useScroll();
  const controls = useAnimation();
  
  useEffect(() => {
    const scrollThreshold = 350; 

    const updateAnimation = () => {
      if (scrollY.get() > scrollThreshold) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        });
      }
    };

    updateAnimation();

    const unsubscribe = scrollY.on("change",  updateAnimation);

    return () => unsubscribe();
  }, [scrollY, controls]);

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
      initial={{ opacity: 0, y: -20 }}
      variants={animationVariants}
      animate={controls}
    >
      {children}
    </motion.div>
  ) 
}

export const FadeInOnScrollLeft = ({ children }: { children: React.ReactNode }) => {
  
  const { scrollY } = useScroll();
  const controls = useAnimation();
  
  useEffect(() => {
    const scrollThreshold = 350; 

    const updateAnimation = () => {
      if (scrollY.get() > scrollThreshold) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { 
            duration: 0.5,
            delay: 0.4 

          },
        });
      }
    };

    updateAnimation();

    const unsubscribe = scrollY.on("change",  updateAnimation);

    return () => unsubscribe();
  }, [scrollY, controls]);

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
      initial={{ opacity: 0, y: -20 }}
      variants={animationVariants}
      animate={controls}
    >
      {children}
    </motion.div>
  ) 
}


export const DelayAnimation = ({ children, delay }: { children: React.ReactNode, delay: number }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateChild = async () => {
      await controls.start('animate');
    };

    animateChild();
  }, [controls]);

  const animationVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: delay, // Adjust this delay as needed to synchronize with the first animation
      },
    },
  };

  return (
    <motion.span
      initial="initial"
      animate={controls}
      variants={animationVariants}
    >
      {children}
    </motion.span>
  );
};