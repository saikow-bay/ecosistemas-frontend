import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, Map } from 'lucide-react';
import { CHAPTERS } from '../data/hotspots';

const Chapter: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const chapterId = parseInt(id || '0', 10);
  const chapter = CHAPTERS.find(c => c.id === chapterId);

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Chapter not found</h1>
          <button onClick={() => navigate('/')} className="btn-primary">
            Return to Map
          </button>
        </div>
      </div>
    );
  }

  const prevChapter = CHAPTERS.find(c => c.id === chapterId - 1);
  const nextChapter = CHAPTERS.find(c => c.id === chapterId + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Header */}
      <header className="sticky top-0 z-30 glass-panel border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="btn-ghost flex items-center gap-2"
              aria-label="Back to map"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Back to Map</span>
            </button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">{chapter.title}</h1>
              <div 
                className="w-16 h-1 rounded-full mt-2"
                style={{ backgroundColor: chapter.color }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={chapter.cover}
              alt={chapter.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="flex gap-2">
                {chapter.kpis.map((kpi, index) => (
                  <span key={index} className={`chip chip-${kpi.type} bg-white/90`}>
                    {kpi.label}: {kpi.value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel rounded-xl p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 rounded-full" style={{ backgroundColor: chapter.color }} />
              Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {chapter.summary}
            </p>
          </motion.div>

          {/* Key Concepts Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel rounded-xl p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 rounded-full" style={{ backgroundColor: chapter.color }} />
              Key Concepts
            </h2>
            <ul className="space-y-3">
              {chapter.concepts.map((concept, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <div 
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: chapter.color }}
                  />
                  <span className="leading-relaxed">{concept}</span>
                </li>
              ))}
            </ul>
            
            {/* Simple diagram placeholder */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <p className="text-center text-gray-500 text-sm font-medium">
                📊 Interactive Diagram
              </p>
              <p className="text-center text-gray-400 text-xs mt-1">
                Visual representation would appear here
              </p>
            </div>
          </motion.div>

          {/* Activity Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel rounded-xl p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 rounded-full" style={{ backgroundColor: chapter.color }} />
              Field Activity
            </h2>
            <ol className="space-y-3">
              {chapter.activity.map((step, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: chapter.color }}
                  >
                    {index + 1}
                  </div>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* Navigation Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-panel rounded-xl p-6"
        >
          <div className="flex justify-between items-center">
            {/* Previous Button */}
            <div className="flex-1">
              {prevChapter ? (
                <button
                  onClick={() => navigate(`/chapter/${prevChapter.id}`)}
                  className="btn-ghost flex items-center gap-2 w-full max-w-xs justify-start"
                >
                  <ChevronLeft size={20} />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Previous</div>
                    <div className="font-medium">{prevChapter.title}</div>
                  </div>
                </button>
              ) : (
                <div /> // Empty div to maintain spacing
              )}
            </div>

            {/* Map Button */}
            <button
              onClick={() => navigate('/')}
              className="btn-primary flex items-center gap-2 mx-4"
            >
              <Map size={20} />
              <span className="hidden sm:inline">Map</span>
            </button>

            {/* Next Button */}
            <div className="flex-1 flex justify-end">
              {nextChapter ? (
                <button
                  onClick={() => navigate(`/chapter/${nextChapter.id}`)}
                  className="btn-ghost flex items-center gap-2 w-full max-w-xs justify-end"
                >
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Next</div>
                    <div className="font-medium">{nextChapter.title}</div>
                  </div>
                  <ChevronRight size={20} />
                </button>
              ) : (
                <div /> // Empty div to maintain spacing
              )}
            </div>
          </div>
        </motion.footer>
      </main>
    </div>
  );
};

export default Chapter;