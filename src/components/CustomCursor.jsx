import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState([]);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursorX.set(clientX);
      cursorY.set(clientY);

      // Add to trail if moved significantly
      const dist = Math.hypot(clientX - lastPos.current.x, clientY - lastPos.current.y);
      if (dist > 15) {
        const id = Math.random().toString(36).substring(2, 9);
        const newPoint = { 
          id, 
          x1: lastPos.current.x, 
          y1: lastPos.current.y, 
          x2: clientX, 
          y2: clientY 
        };
        
        setTrail(prev => [...prev.slice(-12), newPoint]);
        lastPos.current = { x: clientX, y: clientY };

        // Auto remove point after short duration
        setTimeout(() => {
          setTrail(prev => prev.filter(p => p.id !== id));
        }, 300);
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('a, button, .glass-card, input, textarea, .nav-btn, .viverdeia-btn-primary, .viverdeia-btn-outline, h1, h2, h3, h4, h5, h6, p, span, li, img')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <div className="lightning-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 99999 }}>
        <svg width="100%" height="100%">
          <defs>
            <filter id="lightning-glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <AnimatePresence>
            {trail.map((point) => (
              <motion.path
                key={point.id}
                d={`M ${point.x1} ${point.y1} L ${point.x1 + (point.x2-point.x1)*0.5 + (Math.random()-0.5)*20} ${point.y1 + (point.y2-point.y1)*0.5 + (Math.random()-0.5)*20} L ${point.x2} ${point.y2}`}
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                filter="url(#lightning-glow)"
                initial={{ pathLength: 0, opacity: 0.8, stroke: "#818cf8" }}
                animate={{ pathLength: 1, opacity: 0, stroke: "#fff" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            ))}
          </AnimatePresence>
        </svg>
      </div>

      <motion.div
        className="custom-cursor-x"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 99999
        }}
        animate={{
          scale: isHovering ? 1.2 : 0,
          opacity: isHovering ? 1 : 0,
          rotate: isHovering ? 360 : 0
        }}
        transition={{
          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
          scale: { duration: 0.3 }
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 40 40">
          <filter id="x-glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <path d="M10 10 L30 30 M30 10 L10 30" stroke="#fff" strokeWidth="2" strokeLinecap="round" filter="url(#x-glow)" />
        </svg>
      </motion.div>

      <motion.div
        className="custom-cursor-outer"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -15,
          top: -15,
          borderColor: isHovering ? 'var(--indigo-400)' : 'rgba(255,255,255,0.2)',
          backgroundColor: isHovering ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
          zIndex: 99999
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: 1
        }}
      />
      <motion.div
        className="custom-cursor-inner"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -3,
          top: -3,
          backgroundColor: isHovering ? '#fff' : 'var(--indigo-500)',
          boxShadow: isHovering ? '0 0 15px #fff' : '0 0 10px var(--indigo-500)',
          zIndex: 99999
        }}
        animate={{
          scale: isHovering ? 1.2 : 1,
        }}
      />

      <style>{`
        .custom-cursor-outer {
          position: fixed;
          width: 30px;
          height: 30px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          pointer-events: none;
          transition: border-color 0.3s, background-color 0.3s;
        }
        .custom-cursor-inner {
          position: fixed;
          width: 6px;
          height: 6px;
          background-color: var(--indigo-500);
          border-radius: 50%;
          pointer-events: none;
        }
        @media (max-width: 968px) {
          .custom-cursor-outer, .custom-cursor-inner, .lightning-container { display: none; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
