import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, Menu, X, Printer } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section on scroll
      const sections = ['servicos', 'calculadora', 'sede-propria', 'pre-impressao', 'portfolio', 'contato'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços & Produtos', href: '#servicos', id: 'servicos' },
    { label: 'Calculadora de Orçamento', href: '#calculadora', id: 'calculadora' },
    { label: 'Sede Própria', href: '#sede-propria', id: 'sede-propria' },
    { label: 'Guia de Impressão', href: '#pre-impressao', id: 'pre-impressao' },
    { label: 'Portfólio', href: '#portfolio', id: 'portfolio' },
    { label: 'Contato', href: '#contato', id: 'contato' },
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
            <a 
              href="https://maps.google.com/?q=Rua+Felisberto+Pereira+Santiago+53+Vila+Silviania+Carapicuiba+SP"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-medium hover:text-[#00A0E9] transition-colors"
              title="Abrir no Google Maps GPS"
            >
              <MapPin className="w-3.5 h-3.5 text-[#00A0E9]" />
              Rua Felisberto Pereira Santiago, 53 - Carapicuíba/SP
            </a>
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
          
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="relative h-11 flex items-center">
              <img 
                src="/logo_ariana.svg" 
                alt="Gráfica Ariana Logo" 
                className="h-9 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-bold transition-all duration-300 relative py-1.5 px-3 rounded-full ${
                    isActive 
                      ? 'text-[#00A0E9] bg-blue-50/80 shadow-sm' 
                      : 'text-gray-700 hover:text-[#00A0E9] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-[#00A0E9] to-[#E6007E] rounded-full animate-in fade-in duration-300" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action CTA Button */}
          <div className="flex items-center gap-2">
            <button 
              onClick={handleWhatsApp}
              className="px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-[#00A0E9] to-[#E6007E] text-white shadow-md flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current shrink-0" />
              <span className="hidden sm:inline">Orçamento WhatsApp</span>
              <span className="inline sm:hidden">WhatsApp</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#00A0E9] focus:outline-none rounded-xl bg-gray-100 border border-gray-200 active:scale-95 transition-transform"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
