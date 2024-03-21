import { motion } from 'framer-motion';
import React from 'react';

export default function SlideBottomToTopTransition({ children }: { children: React.ReactNode }){
// const SlideTransition: React.FC = ({ children:React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: '70%' }}
      animate={{y: 0 }}
      exit={{ y: '-70%' }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

// export default SlideTransition;