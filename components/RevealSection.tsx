import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RevealSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const RevealSection: React.FC<RevealSectionProps> = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};