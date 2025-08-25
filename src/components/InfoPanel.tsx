import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Chapter } from '../data/hotspots';

interface InfoPanelProps {
  isOpen: boolean;
  chapter: Chapter | null;
  onClose: () => void;
  onOpenChapter: (id: number) => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ isOpen, chapter, onClose, onOpenChapter }) => {
  if (!chapter) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white/95 backdrop-blur-xl shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {chapter.title}
                  </h2>
                  <div 
                    className="w-12 h-1 rounded-full"
                    style={{ backgroundColor: chapter.color }}
                  />
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close panel"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Cover Image */}
              <div className="mb-6">
                <img
                  src={chapter.cover}
                  alt={chapter.title}
                  className="w-full h-48 object-cover rounded-xl shadow-md"
                />
              </div>
              
              {/* Excerpt */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {chapter.excerpt}
                </p>
              </div>
              
              {/* KPIs */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                  Key Indicators
                </h3>
                <div className="flex flex-wrap gap-2">
                  {chapter.kpis.map((kpi, index) => (
                    <span
                      key={index}
                      className={`chip chip-${kpi.type}`}
                    >
                      {kpi.label}: {kpi.value}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* CTA Button */}
              <motion.button
                onClick={() => onOpenChapter(chapter.id)}
                className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Open Chapter
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InfoPanel;