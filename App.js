import React, { useState, useEffect } from 'react';
import ProposalButton from './components/ProposalButton';
import HeartExplosion from './components/HeartExplosion';
import Credits from './components/Credits';
import FloatingHearts from './components/FloatingHearts';
import TralaleritosBanner from './components/TralaleritosBanner';

const App = () => {
  const [yesSize, setYesSize] = useState(1);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [buttonText, setButtonText] = useState('Sí');
  const [showHearts, setShowHearts] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);
  const [showTralaleritos, setShowTralaleritos] = useState(false);

  // Jumpscare aleatorio de los Tralaleritos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTralaleritos(true);
      setTimeout(() => setShowTralaleritos(false), 1000);
    }, Math.random() * 20000 + 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleNoClick = () => {
    setYesSize(prev => prev + 0.3);
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.min(200 + Math.random() * 100, 250);
    setNoPosition({
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance * 0.5
    });
  };

  const handleYesClick = () => {
    if (buttonText === 'Sí') {
      setButtonText('Enserio?');
      setShowExplosion(true);
      setTimeout(() => setShowExplosion(false), 1000);
    } else if (buttonText === 'Enserio?') {
      setButtonText('Ok 👍');
      setAccepted(true);
      setShowHearts(true);
      setShowExplosion(true);
      setTimeout(() => setShowExplosion(false), 1000);
      // Mostrar Tralaleritos cuando acepta
      setShowTralaleritos(true);
      setTimeout(() => setShowTralaleritos(false), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {showTralaleritos && <TralaleritosBanner />}
      
      <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center">
        ¿Quieres Salir conmigo?
      </h1>

      <div className="flex gap-8 items-center mb-12 relative" style={{ minHeight: '120px' }}>
        <div style={{ 
          transform: `scale(${yesSize})`,
          transition: 'transform 0.3s',
          zIndex: 10
        }}>
          <ProposalButton
            onClick={handleYesClick}
            text={buttonText}
            color={`bg-green-500 hover:bg-green-600 ${accepted ? 'animate-pulse bg-yellow-400 hover:bg-yellow-500' : ''}`}
          />
        </div>

        <div style={{
          transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
          transition: 'transform 0.3s',
          zIndex: 10
        }}>
          <ProposalButton
            onClick={handleNoClick}
            text="No"
            color="bg-red-500 hover:bg-red-600"
          />
        </div>
      </div>

      {showExplosion && <HeartExplosion />}
      {showHearts && <FloatingHearts />}
      <Credits />

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes heartExplosion {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          10% { opacity: 1; }
          100% { 
            transform: 
              translate(
                calc(-50% + ${Math.random() * 400 - 200}px), 
                calc(-50% + ${Math.random() * 400 - 200}px)
              ) 
              scale(${Math.random() * 2 + 1}); 
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default App;

// DONE
