import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  isVisible: boolean;
  content: string;
  position: { x: number; y: number };
}

const Tooltip: React.FC<TooltipProps> = ({ isVisible, content, position }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed pointer-events-none z-50"
          style={{
            left: `${position.x}px`,
            top: `${position.y - 60}px`,
            transform: 'translateX(-50%)',
          }}
        >
          <div className="glass-panel px-3 py-2 rounded-lg shadow-lg max-w-xs">
            <p className="text-sm font-medium text-gray-800 text-center">
              {content}
            </p>
            {/* Arrow */}
            <div 
              className="absolute top-full left-1/2 transform -translate-x-1/2"
              style={{
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '6px solid rgba(245, 243, 239, 0.85)',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Tooltip;