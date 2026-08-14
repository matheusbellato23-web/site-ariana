import React from 'react';
import { Phone, Building2, ShieldCheck, CheckCircle } from 'lucide-react';

export default function BuildingShowcase() {
  return (
    <section id="sede-propria" className="py-24 relative bg-white border-t border-gray-200/80">
      {/* Decorative CMYK light ambient */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00A0E9]/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E6007E]/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Real Building Image Showcase */}
          <div className="lg:col-span-6 relative reveal-on-scroll">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl p-3 bg-[#F8FAFC] group interactive-card">
              <div className="crop-mark crop-mark-tl" />
              <div className="crop-mark crop-mark-tr" />
              <div className="crop-mark crop-mark-bl" />
              <div className="crop-mark crop-mark-br" />

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img 
                  src="/sede_ariana.jpg" 
                  alt="Sede Própria Gráfica Ariana Impressos em Geral" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E6007E] flex items-center justify-center text-white font-bold shadow-md">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Prédio Próprio Gráfica Ariana</div>
                      <div className="text-xs text-gray-600">Impressos em Geral • <span className="whitespace-nowrap">Tel: (11) 4188-6667</span></div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                    Sede Real
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Trust Highlights */}
          <div className="lg:col-span-6 space-y-6 reveal-on-scroll delay-200">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-wider text-[#00A0E9]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Segurança & Tradição Garantida
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-heading text-gray-900 leading-tight">
              Estrutura Física e <span className="text-gradient-cmyk">Parque Gráfico Próprio</span>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              Diferente de intermediários virtuais, a <strong>Gráfica Ariana</strong> conta com sede própria, maquinário industrial de última geração e equipe especializada com décadas de experiência no segmento de impressos gráficos.
            </p>

            {/* Key Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                <div className="flex items-center gap-2 text-gray-900 font-bold text-sm">
                  <CheckCircle className="w-4 h-4 text-[#00A0E9]" />
                  Balcão de Atendimento Presencial
                </div>
                <p className="text-xs text-gray-600">
                  Venha conhecer nossas amostras de papéis, gramaturas e acabamentos pessoalmente.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                <div className="flex items-center gap-2 text-gray-900 font-bold text-sm">
                  <CheckCircle className="w-4 h-4 text-[#E6007E]" />
                  Parque Industrial Moderno
                </div>
                <p className="text-xs text-gray-600">
                  Maquinários Heidelberg e corte eletrônico garantem margens e sangrias perfeitas.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                <div className="flex items-center gap-2 text-gray-900 font-bold text-sm">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Controle Rigoroso de Qualidade
                </div>
                <p className="text-xs text-gray-600">
                  Checagem de arquivos digitais antes da gravação de chapas offset CTP.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                <div className="flex items-center gap-2 text-gray-900 font-bold text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Agilidade e Logística
                </div>
                <p className="text-xs text-gray-600">
                  Entregas pontuais para empresas e comércios da Grande São Paulo.
                </p>
              </div>

            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 text-white border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#00A0E9]/20 text-[#00A0E9]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-300 font-medium">WhatsApp Vendas Diretas</div>
                  <div className="text-lg font-extrabold text-white">(11) 9.8138-7865</div>
                </div>
              </div>
              <a 
                href="https://wa.me/5511981387865?text=Olá!%20Gostaria%20de%20visitar%20a%20Gráfica%20Ariana%20ou%20pedir%20um%20orçamento."
                target="_blank"
                rel="noreferrer"
                className="btn-cmyk-primary text-xs py-3 px-5 whitespace-nowrap cursor-pointer"
              >
                Falar com Consultor
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
