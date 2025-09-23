import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HotspotMap from './components/HotspotMap';
import Chapter from './pages/Chapter';
import ZeroLab from './pages/ZeroLab';
import Page18Lab from './pages/Page18Lab';
import PageInfoFotosintesisResp from './pages/PageInfoFotosintesisResp';
import PageInfoFotosintesis4 from './pages/PageInfoFotosintesis4';
import ProduccionFotosintetica from './pages/ProduccionFotosintetica';
import EnergiaSolar from './pages/EnergiaSolar'; // <-- 🟢 Línea agregada

// Paleta consistente
const THEME = { fondo: '#CFCFCF', tinta: '#111111', acento: '#FF4B36' };

// Intro
const IntroScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(true);

  const handleClick = () => {
    setShowIntro(false);
    setTimeout(() => navigate('/mapa'), 800);
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          key="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          onClick={handleClick}
          className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
          style={{ backgroundColor: THEME.fondo }}
        >
          <div className="text-center max-w-3xl px-6">
            <motion.h1 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: THEME.tinta }}>
              Indagar es el inicio de la ciencia.
            </motion.h1>
            <motion.p className="mt-3 text-base md:text-lg" style={{ color: `${THEME.tinta}CC` }}>
              Todo descubrimiento comienza con una pregunta.
            </motion.p>
            <motion.p className="mt-6 text-sm" style={{ color: THEME.acento }}>
              (Haz clic para continuar)
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Mapa
const MapScreen: React.FC = () => {
  const navigate = useNavigate();
  const goChapter = (id: number) => navigate(`/capitulo/${id}`);
  const goZero = () => navigate('/cero');
  const goPage18 = () => navigate('/pagina-18');
  const goFotosintesis = () => navigate('/fotosintesis');
  const goFotosintesis4 = () => navigate('/fotosintesis-4');
  const goProduccionFotosintetica = () => navigate('/ProduccionFotosintetica');
  const goEnergiaSolar = () => navigate('/energia-solar'); // <-- 🟢 Línea agregada

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: THEME.fondo }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <HotspotMap
        onNavigateToChapter={goChapter}
        onNavigateToZero={goZero}
        onNavigateToPage18={goPage18}
        onNavigateToFotosintesis={goFotosintesis}
        onNavigateToFotosintesis4={goFotosintesis4}
        onNavigateToProduccionFotosintetica={goProduccionFotosintetica}
        onNavigateToEnergiaSolar={goEnergiaSolar} // <-- 🟢 Línea agregada
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-6 w-full text-center z-30 pointer-events-none"
      >
        <p className="text-xs" style={{ color: THEME.tinta }}>
          Haz clic en un punto para continuar
        </p>
      </motion.div>
    </motion.div>
  );
};

// App
const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans antialiased">
        <Routes>
          <Route path="/" element={<IntroScreen />} />
          <Route path="/mapa" element={<MapScreen />} />
          <Route path="/capitulo/:id" element={<Chapter />} />
          <Route path="/cero" element={<ZeroLab />} />
          <Route path="/pagina-18" element={<Page18Lab />} />
          <Route path="/fotosintesis" element={<PageInfoFotosintesisResp />} />
          <Route path="/fotosintesis-4" element={<PageInfoFotosintesis4 />} />
          <Route path="/ProduccionFotosintetica" element={<ProduccionFotosintetica />} />
          <Route path="/energia-solar" element={<EnergiaSolar />} /> {/* <-- 🟢 Línea agregada */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;