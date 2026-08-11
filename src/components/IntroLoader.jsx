import React, { useState, useEffect } from 'react';
import { Printer, ArrowRight } from 'lucide-react';

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [passPhase, setPassPhase] = useState('CYAN'); // CYAN, MAGENTA, YELLOW, KEY, DONE

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            document.body.style.overflow = '';
            onComplete();
          }, 600);
          return 100;
        }
        const next = prev + 1;
        if (next < 25) setPassPhase('CYAN');
        else if (next < 50) setPassPhase('MAGENTA');
        else if (next < 75) setPassPhase('YELLOW');
        else setPassPhase('KEY');
        return next;
      });
    }, 30);

    return () => {
      document.body.style.overflow = '';
      clearInterval(timer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    document.body.style.overflow = '';
    onComplete();
  };

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B0D12] text-white transition-opacity duration-700 ${progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Halftone Dot Grid Overlay */}
      <div className="absolute inset-0 halftone-bg opacity-30 pointer-events-none" />
      
      {/* CMYK Glowing Orb Background */}
      <div 
        className="absolute w-[650px] h-[650px] rounded-full blur-[150px] transition-all duration-700 pointer-events-none"
        style={{
          background: passPhase === 'CYAN' ? 'rgba(0, 160, 233, 0.4)' :
                      passPhase === 'MAGENTA' ? 'rgba(230, 0, 126, 0.4)' :
                      passPhase === 'YELLOW' ? 'rgba(255, 237, 0, 0.4)' :
                      'rgba(255, 255, 255, 0.25)'
        }}
      />

      {/* Skip Intro Button */}
      <div className="absolute top-8 right-8 z-50">
        <button 
          onClick={handleSkip}
          className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/15 backdrop-blur-md transition-all shadow-lg cursor-pointer"
        >
          Pular Experiência <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Central Printing Press Plate Card */}
      <div className="relative z-10 max-w-md w-full px-6 flex flex-col items-center text-center">
        
        {/* Registration Crop Marks Card */}
        <div className="relative w-full p-8 rounded-3xl bg-white/[0.04] border border-white/15 backdrop-blur-2xl mb-8 overflow-hidden shadow-2xl">
          <div className="crop-mark crop-mark-tl" />
          <div className="crop-mark crop-mark-tr" />
          <div className="crop-mark crop-mark-bl" />
          <div className="crop-mark crop-mark-br" />

          <div className="relative flex flex-col items-center justify-center py-6">
            
            {/* Spinning Roller Gear */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full border-4 border-dashed border-[#00A0E9] animate-spin flex items-center justify-center" style={{ animationDuration: '4s' }}>
                <div className="w-14 h-14 rounded-full border-4 border-dashed border-[#E6007E] animate-spin flex items-center justify-center" style={{ animationDirection: 'reverse', animationDuration: '3s' }}>
                  <div className="w-8 h-8 rounded-full border-4 border-[#FFED00] animate-pulse flex items-center justify-center">
                    <Printer className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Original Logo Reveal Container */}
            <div className="relative max-w-xs w-full h-20 flex items-center justify-center bg-white/95 rounded-2xl p-4 shadow-2xl border border-white/30">
              <img 
                src="/logo_ariana.svg" 
                alt="Gráfica Ariana" 
                className="w-full h-full object-contain transition-all duration-500"
                style={{ 
                  opacity: passPhase === 'KEY' || passPhase === 'YELLOW' || passPhase === 'MAGENTA' ? 1 : 0.4,
                  filter: passPhase === 'CYAN' ? 'hue-rotate(180deg)' : passPhase === 'MAGENTA' ? 'hue-rotate(300deg)' : 'none'
                }}
              />
            </div>

          </div>
        </div>

        {/* Ink Plate Badges */}
        <div className="flex items-center justify-center gap-2.5 mb-6">
          <div className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono transition-all ${passPhase === 'CYAN' ? 'bg-[#00A0E9] text-white scale-110 shadow-lg shadow-[#00A0E9]/50' : 'bg-white/10 text-gray-400'}`}>
            C (Cyan)
          </div>
          <div className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono transition-all ${passPhase === 'MAGENTA' ? 'bg-[#E6007E] text-white scale-110 shadow-lg shadow-[#E6007E]/50' : 'bg-white/10 text-gray-400'}`}>
            M (Magenta)
          </div>
          <div className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono transition-all ${passPhase === 'YELLOW' ? 'bg-[#FFED00] text-black scale-110 shadow-lg shadow-[#FFED00]/50' : 'bg-white/10 text-gray-400'}`}>
            Y (Yellow)
          </div>
          <div className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono transition-all ${passPhase === 'KEY' ? 'bg-white text-black scale-110 shadow-lg shadow-white/50' : 'bg-white/10 text-gray-400'}`}>
            K (Black)
          </div>
        </div>

        {/* Pass Status Text */}
        <div className="h-6 mb-4 font-mono text-xs sm:text-sm font-semibold tracking-wider text-gray-200">
          {passPhase === 'CYAN' && <span className="text-[#00A0E9]">→ Calibrando Passagem Cian 300 DPI...</span>}
          {passPhase === 'MAGENTA' && <span className="text-[#E6007E]">→ Aplicando Camada Magenta Offset...</span>}
          {passPhase === 'YELLOW' && <span className="text-[#FFED00]">→ Ajustando Retícula Amarela & Vivacidade...</span>}
          {passPhase === 'KEY' && <span className="text-white">✓ Alinhamento CMYK Perfeito Concluído!</span>}
        </div>

        {/* CMYK Progress Bar */}
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden relative mb-3 p-0.5 border border-white/10">
          <div 
            className="h-full transition-all duration-100 ease-out rounded-full"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #00A0E9 0%, #E6007E 50%, #FFED00 100%)'
            }}
          />
        </div>

        {/* Percentage */}
        <div className="flex justify-between w-full text-xs text-gray-400 font-mono">
          <span>PARQUE GRÁFICO ARIANA</span>
          <span className="font-bold text-white">{progress}%</span>
        </div>

      </div>
    </div>
  );
}
