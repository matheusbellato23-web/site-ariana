import React, { useState } from 'react';
import IntroLoader from './components/IntroLoader';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import BudgetCalculator from './components/BudgetCalculator';
import CmykMixer from './components/CmykMixer';
import ProductsServices from './components/ProductsServices';
import BuildingShowcase from './components/BuildingShowcase';
import PrepressGuide from './components/PrepressGuide';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleWhatsAppFloating = () => {
    window.open('https://wa.me/5511981387865?text=Olá!%20Vim%20pelo%20site%20da%20Gráfica%20Ariana%20e%20gostaria%20de%20um%20orçamento.', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-gray-900 selection:bg-[#E6007E] selection:text-white relative">
      
      {/* Fullscreen Printing Pass Intro Loader */}
      {showIntro && (
        <IntroLoader onComplete={() => setShowIntro(false)} />
      )}

      {/* Interactive Fluid CMYK Motion Canvas */}
      <AnimatedBackground />

      {/* Main Website Structure */}
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <BudgetCalculator />
        <CmykMixer />
        <ProductsServices />
        <BuildingShowcase />
        <PrepressGuide />
        <Portfolio />
      </main>

      <Footer />

      {/* Floating Action Button (WhatsApp Direct) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleWhatsAppFloating}
          className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-emerald-400/30"
          aria-label="Orçamento via WhatsApp"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline text-sm">Orçamento WhatsApp</span>
        </button>
      </div>

    </div>
  );
}
