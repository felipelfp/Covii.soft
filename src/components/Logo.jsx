import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ size = 24, className = "" }) => {
  const rayVariants = {
    initial: { pathLength: 0, opacity: 0 },
    hover: { 
      pathLength: 1, 
      opacity: [0, 1, 0.5, 1, 0],
      transition: { 
        duration: 0.4, 
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover="hover"
      initial="initial"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="ray-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Abstract Automation/AI Symbol: Hexagon */}
      <motion.path 
        d="M50 15L85 35V75L50 95L15 75V35L50 15Z" 
        stroke="url(#logo-gradient)" 
        strokeWidth="8" 
        strokeLinejoin="round" 
        fill="rgba(99, 102, 241, 0.1)"
        variants={{
          hover: { strokeWidth: 10, fill: "rgba(99, 102, 241, 0.2)" }
        }}
      />

      {/* Lightning Rays */}
      <motion.path 
        d="M50 55 L70 20 M50 55 L85 55 M50 55 L70 85 M50 55 L30 85 M50 55 L15 55 M50 55 L30 20" 
        stroke="#fff" 
        strokeWidth="2" 
        strokeLinecap="round"
        filter="url(#ray-glow)"
        variants={rayVariants}
      />

      <motion.circle 
        cx="50" 
        cy="55" 
        r="12" 
        fill="url(#logo-gradient)" 
        filter="url(#glow)" 
        variants={{
          hover: { r: 15, filter: "url(#glow) brightness(1.5)" }
        }}
        transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <path 
        d="M30 40C30 30 40 25 50 25C60 25 70 30 70 40" 
        stroke="#fff" 
        strokeWidth="4" 
        strokeLinecap="round" 
        opacity="0.8"
      />
      <path 
        d="M35 70L50 80L65 70" 
        stroke="#fff" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        opacity="0.8"
      />
    </motion.svg>
  );
};

export default Logo;
