import { motion } from 'framer-motion';
import React from 'react';

export default function SlideTransition({ children }: { children: React.ReactNode }){
// const SlideTransition: React.FC = ({ children:React.ReactNode }) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
    >
      {children}
    </motion.div>
  );
};

// export default SlideTransition;