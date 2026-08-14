import React, { useState } from 'react';
import { MessageSquare, Calculator, Sparkles, ShieldCheck, Zap, Layers, Palette, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511981387865?text=Olá!%20Vim%20pelo%20site%20da%20Gráfica%20Ariana%20e%20gostaria%20de%20um%20orçamento%20rápido.', '_blank');
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAFAFC] via-[#F5F7FC] to-[#FAFAFC]">
      
      {/* Background Halftone & Ambient Ink Glows */}
      <div className="absolute inset-0 halftone-bg opacity-40 pointer-events-none" />
      <div className="absolute top-16 left-1/4 w-96 h-96 rounded-full bg-[#00A0E9]/12 blur-[130px] pointer-events-none" />
      <div className="absolute top-36 right-1/4 w-96 h-96 rounded-full bg-[#E6007E]/12 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 rounded-full bg-[#FFED00]/20 blur-[130px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Action CTAs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Top Badge */}
            <div className="reveal-on-scroll inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold tracking-wide uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00A0E9] via-[#E6007E] to-[#FFED00] animate-pulse" />
              <span className="text-gray-800">Tradição & Impressão Gráfica de Alta Qualidade</span>
            </div>

            {/* Main Headline */}
            <h1 className="reveal-on-scroll delay-100 text-4xl sm:text-5xl md:text-6xl font-black font-heading leading-[1.1] tracking-tight text-gray-900">
              Sua marca impressa com{' '}
              <span className="text-gradient-cmyk">cores vivas</span> e acabamento impecável.
            </h1>

            {/* Subtitle */}
            <p className="reveal-on-scroll delay-200 text-lg md:text-xl text-gray-600 max-w-2xl font-normal leading-relaxed">
              Da criação de artes ao impresso final offset e digital. Cartões de visita com Verniz Localizado UV, panfletos, pastas corporativas, banners e envelopes com a agilidade e qualidade que a sua empresa merece.
            </p>

            {/* Feature Highlights Grid */}
            <div className="reveal-on-scroll delay-300 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="interactive-card flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                <div className="p-2.5 rounded-xl bg-blue-50 text-[#00A0E9]">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Tecnologia</div>
                  <div className="text-sm font-bold text-gray-900">Offset 4 Cores</div>
                </div>
              </div>

              <div className="interactive-card flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                <div className="p-2.5 rounded-xl bg-pink-50 text-[#E6007E]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Atendimento</div>
                  <div className="text-sm font-bold text-gray-900">Produção Rápida</div>
                </div>
              </div>

              <div className="interactive-card flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-gray-200/80 shadow-sm col-span-2 sm:col-span-1">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Estrutura Real</div>
                  <div className="text-sm font-bold text-gray-900">Sede Própria</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="reveal-on-scroll delay-400 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a href="#calculadora" className="btn-cmyk-primary py-4 px-8 text-base shadow-xl">
                <Calculator className="w-5 h-5" />
                Monte Seu Orçamento Instantâneo
              </a>

              <button onClick={handleWhatsApp} className="btn-cmyk-secondary py-4 px-7 text-base">
                <MessageSquare className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                WhatsApp (11) 9.8138-7865
              </button>
            </div>

            {/* Social Trust */}
            <div className="reveal-on-scroll delay-500 flex items-center gap-4 pt-2 text-xs text-gray-600">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#00A0E9] border-2 border-white flex items-center justify-center font-bold text-white text-xs shadow-md">C</div>
                <div className="w-8 h-8 rounded-full bg-[#E6007E] border-2 border-white flex items-center justify-center font-bold text-white text-xs shadow-md">M</div>
                <div className="w-8 h-8 rounded-full bg-[#FFED00] border-2 border-white flex items-center justify-center font-bold text-gray-900 text-xs shadow-md">Y</div>
                <div className="w-8 h-8 rounded-full bg-[#141720] border-2 border-white flex items-center justify-center font-bold text-white text-xs shadow-md">K</div>
              </div>
              <div>
                <div className="font-bold text-gray-900">+50.000 impressos entregues com perfeição</div>
                <div>Garantia de fidelidade de cor com prova offset</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Product Mockup Showcase */}
          <div className="lg:col-span-5 relative reveal-on-scroll delay-200">
            <div 
              className="spot-uv-card rounded-3xl overflow-hidden border border-gray-200/90 bg-white shadow-2xl p-6 transition-all duration-300 animate-float-gentle"
              onMouseMove={handleMouseMove}
              style={{
                boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.12), ${(mousePos.x - 50) / 3}px ${(mousePos.y - 50) / 3}px 30px rgba(0, 160, 233, 0.18)`
              }}
            >
              {/* Corner Crop Marks */}
              <div className="crop-mark crop-mark-tl" />
              <div className="crop-mark crop-mark-tr" />
              <div className="crop-mark crop-mark-bl" />
              <div className="crop-mark crop-mark-br" />

              {/* Product Preview Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                <img 
                  src="/cards_mockup.jpg" 
                  alt="Cartões de Visita Premium Gráfica Ariana" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                {/* Spot UV Interactive Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 text-xs font-bold text-gray-900 flex items-center gap-2 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-[#E6007E]" />
                  Verniz Localizado UV 3D
                </div>

                {/* Paper Weight Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="bg-white/90 backdrop-blur-md border border-white/50 p-3 rounded-xl shadow-lg">
                    <div className="text-[10px] uppercase font-bold text-[#00A0E9]">Papel Couché 300g</div>
                    <div className="text-sm font-bold text-gray-900">Cartões & Impressos Especiais</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00A0E9] to-[#E6007E] flex items-center justify-center text-white font-bold text-xs shadow-lg">
                    4x4
                  </div>
                </div>
              </div>

              {/* Interactive Color Swatch Bar */}
              <div className="mt-5 p-4 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Palette className="w-5 h-5 text-[#E6007E]" />
                  <div className="text-xs">
                    <div className="font-bold text-gray-900">Controle de Cor Offset CMYK</div>
                    <div className="text-gray-500">Retícula e Densidade 300 DPI</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#00A0E9] shadow-sm" title="Cyan 100%" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#E6007E] shadow-sm" title="Magenta 100%" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FFED00] shadow-sm" title="Yellow 100%" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#141720] shadow-sm" title="Key 100%" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
