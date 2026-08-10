import React from 'react';
import { Phone, MessageSquare, MapPin, Globe, Instagram, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-[#0F1219] text-gray-300 relative pt-20 pb-10 border-t border-gray-800">
      
      {/* CMYK Top Decorative Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A0E9] via-[#E6007E] to-[#FFED00]" />

      <div className="container-custom relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-gray-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="w-56 h-16 flex items-center bg-white/95 rounded-2xl p-3 shadow-lg">
              <img src="/logo_ariana.png" alt="Gráfica Ariana Logo" className="w-full h-full object-contain" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Mais de 20 anos de excelência em impressos em geral. Soluções completas em offset e digital para cartões de visita, panfletos, folders, banners, envelopes e projetos corporativos personalizados.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/graficaariana2?igsh=MXg3bXJ5eXU1NmV4aw==" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E6007E] hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                title="Instagram @graficaariana2"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a 
                href="https://www.facebook.com/share/1Fd7oyQsBf/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00A0E9] hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                title="Facebook Gráfica Ariana"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a 
                href="http://www.graficaariana.com.br/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFED00] hover:text-black flex items-center justify-center transition-all duration-300 border border-white/10"
                title="Website Oficial"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold font-heading text-base uppercase tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#servicos" className="hover:text-[#00A0E9] transition-colors">Serviços & Impressos</a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-[#E6007E] transition-colors">Calculadora de Orçamento</a>
              </li>
              <li>
                <a href="#sede-propria" className="hover:text-amber-400 transition-colors">Nossa Sede Própria</a>
              </li>
              <li>
                <a href="#pre-impressao" className="hover:text-white transition-colors">Guia de Pré-Impressão</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Galeria de Trabalhos</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-bold font-heading text-base uppercase tracking-wider">
              Atendimento & Vendas
            </h4>
            
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-400 text-xs font-medium">WhatsApp Vendas (Atendimento Imediato)</div>
                  <a 
                    href="https://wa.me/5511981387865" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-white font-bold hover:text-emerald-400 text-base"
                  >
                    (11) 9.8138-7865
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#00A0E9] shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-400 text-xs font-medium">Telefone Fixo da Loja</div>
                  <span className="text-white font-semibold">(11) 4188-6667</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E6007E] shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-400 text-xs font-medium">Localização da Sede Própria</div>
                  <span className="text-gray-300">Carapicuíba - Grande São Paulo / SP</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Globe className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-400 text-xs font-medium">Website Institucional</div>
                  <a href="http://www.graficaariana.com.br/" target="_blank" rel="noreferrer" className="text-amber-400 font-semibold hover:underline">
                    www.graficaariana.com.br
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} <strong>Gráfica Ariana Impressos em Geral</strong>. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
