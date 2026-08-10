import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, Menu, X, Printer } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços & Produtos', href: '#servicos' },
    { label: 'Calculadora de Orçamento', href: '#calculadora' },
    { label: 'Sede Própria', href: '#sede-propria' },
    { label: 'Guia de Impressão', href: '#pre-impressao' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511981387865?text=Olá!%20Vim%20pelo%20site%20da%20Gráfica%20Ariana%20e%20gostaria%20de%20solicitar%20um%20orçamento.', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* CMYK Top Accent Bar */}
      <div className="cmyk-bar-header" />

      {/* Top Info Strip */}
      <div className="bg-[#F1F4F9] text-xs py-2 px-4 border-b border-gray-200 hidden md:block">
        <div className="container-custom flex justify-between items-center text-gray-700">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#00A0E9]" />
              Atendimento em Carapicuíba & Grande SP
            </span>
            <span className="flex items-center gap-2 font-medium">
              <Printer className="w-3.5 h-3.5 text-[#E6007E]" />
              Parque Gráfico Próprio com Impressão Offset & Digital
            </span>
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <a href="tel:11981387865" className="hover:text-[#00A0E9] transition-colors flex items-center gap-1.5 text-gray-800">
              <Phone className="w-3.5 h-3.5 text-[#E6007E]" />
              (11) 9.8138-7865
            </a>
            <span className="text-gray-300">|</span>
            <span className="text-emerald-600 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Atendimento Aberto
            </span>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'nav-glass-light shadow-md py-2' : 'bg-white/95 backdrop-blur-md border-b border-gray-200/80 py-3'}`}>
        <div className="container-custom flex items-center justify-between h-16">
          
          {/* Official Brand Logo PNG */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-48 h-12 flex items-center">
              <img 
                src="/logo_ariana.svg" 
                alt="Gráfica Ariana Logo" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm font-bold text-gray-700 hover:text-[#00A0E9] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#00A0E9] after:to-[#E6007E] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button 
              onClick={handleWhatsApp}
              className="px-5 py-2.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#00A0E9] to-[#E6007E] text-white shadow-lg shadow-[#E6007E]/20 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Orçamento WhatsApp
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-gray-700 hover:text-[#00A0E9] focus:outline-none rounded-xl bg-gray-100 border border-gray-200"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-3">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-gray-800 hover:text-[#00A0E9] py-2 border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsApp();
              }}
              className="w-full py-3.5 px-6 rounded-full font-bold text-sm bg-gradient-to-r from-[#00A0E9] to-[#E6007E] text-white shadow-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Fazer Orçamento (11) 9.8138-7865
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
