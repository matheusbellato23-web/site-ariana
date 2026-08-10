import React, { useState } from 'react';
import { Eye, X, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);

  const gallery = [
    {
      title: 'Cartões com Verniz UV 3D Localizado',
      category: 'Cartões de Visita',
      img: '/cards_mockup.jpg',
      desc: 'Papel Couché 300g com laminação fosca pro e verniz hi-gloss em relevo no logotipo.'
    },
    {
      title: 'Catálogos & Folders Corporativos',
      category: 'Promocional',
      img: '/flyers_mockup.jpg',
      desc: 'Folders tri-dobra em couché 150g com alta saturação de tintas CMYK offset.'
    },
    {
      title: 'Faixas & Banners em Lona 440g',
      category: 'Comunicação Visual',
      img: '/banners_mockup.jpg',
      desc: 'Impressão digital em grande formato com tintas resistentes a sol e chuva.'
    },
    {
      title: 'Rótulos & Embalagens de Luxo',
      category: 'Adesivos & Rótulos',
      img: '/packaging_mockup.jpg',
      desc: 'Caixas com hot stamping metalizado e adesivos recortados eletronicamente.'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white relative border-t border-gray-200">
      <div className="container-custom relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-wider text-[#00A0E9]">
            <Sparkles className="w-3.5 h-3.5 text-[#E6007E]" />
            Galeria de Trabalhos Entregues
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-gray-900">
            Excelência em <span className="text-gradient-cmyk">Impressão Real</span>
          </h2>
          <p className="text-gray-600 text-base">
            Veja a riqueza de detalhes e a intensidade de cores dos nossos projetos gráficos executados.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedImg(item)}
              className="cmyk-glow-card group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-xl">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[10px] font-bold text-gray-900 border border-white/50 shadow-sm">
                  {item.category}
                </span>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#00A0E9] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-2 font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-2xl p-6">
            <button 
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors z-10 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-gray-200">
                <img src={selectedImg.img} alt={selectedImg.title} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#00A0E9] text-xs font-bold border border-blue-100">
                  {selectedImg.category}
                </span>
                <h3 className="text-2xl font-black font-heading text-gray-900">
                  {selectedImg.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedImg.desc}
                </p>
                <div className="pt-4">
                  <a 
                    href="#calculadora" 
                    onClick={() => setSelectedImg(null)}
                    className="btn-cmyk-primary w-full text-sm py-3.5 text-center"
                  >
                    Pedir Orçamento Igual a Este
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
