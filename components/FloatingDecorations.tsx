import React from 'react';
import { motion } from 'framer-motion';
import { CherryIcon, BowIcon } from './Icons';

export const FloatingDecorations: React.FC = () => {
  // Mais itens com posições e atrasos variados para um efeito mais rico
  const items = [
    // Topo
    { type: 'cherry', top: '4%', left: '6%', delay: 0, scale: 1 },
    { type: 'bow', top: '10%', right: '12%', delay: 2, scale: 0.9 },
    { type: 'cherry', top: '15%', left: '85%', delay: 1.2, scale: 0.8 },
    
    // Meio-Superior
    { type: 'bow', top: '22%', left: '15%', delay: 0.5, scale: 1.1 },
    { type: 'cherry', top: '28%', right: '25%', delay: 2.5, scale: 0.9 },
    
    // Centro
    { type: 'bow', top: '38%', left: '5%', delay: 1.5, scale: 0.8 },
    { type: 'cherry', top: '42%', right: '8%', delay: 0.8, scale: 1.2 },
    { type: 'bow', top: '50%', left: '90%', delay: 3, scale: 1 },
    
    // Meio-Inferior
    { type: 'cherry', top: '58%', left: '12%', delay: 1.8, scale: 0.9 },
    { type: 'bow', top: '65%', right: '18%', delay: 0.2, scale: 1.1 },
    
    // Fundo
    { type: 'cherry', top: '75%', left: '8%', delay: 2.2, scale: 1 },
    { type: 'bow', top: '82%', right: '5%', delay: 1, scale: 0.9 },
    { type: 'cherry', top: '92%', left: '20%', delay: 0.5, scale: 0.8 },
    { type: 'bow', top: '88%', right: '25%', delay: 2.8, scale: 0.8 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="absolute opacity-50 md:opacity-60"
          style={{ top: item.top, left: item.left, right: item.right }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, -15, 0],
            scale: [item.scale, item.scale * 1.1, item.scale]
          }}
          transition={{
            duration: 6 + Math.random() * 2, // Duração aleatória entre 6s e 8s
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          {item.type === 'cherry' ? (
            <CherryIcon className="w-10 h-10 md:w-16 md:h-16" />
          ) : (
            <BowIcon className="w-12 h-12 md:w-20 md:h-20" />
          )}
        </motion.div>
      ))}
    </div>
  );
};