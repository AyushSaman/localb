import { motion } from 'framer-motion';
import React from 'react';

export default function SlideLeftToRightTransition({ children }: { children: React.ReactNode }){
// const SlideTransition: React.FC = ({ children:React.ReactNode }) => {
  return (
    <motion.div
      initial={{ x: '50%' }}
      animate={{x: 0 }}
      exit={{ x: '-50%' }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

// export default SlideTransition;