import React, { useState } from 'react';
import { Layers, Sparkles, ArrowRight } from 'lucide-react';

export default function ProductsServices() {
  const [activeCategory, setActiveCategory] = useState('todos');

  const products = [
    {
      id: 'cartoes',
      title: 'Cartões de Visita Premium',
      category: 'promocional',
      img: '/cards_mockup.jpg',
      badge: 'Mais Vendido',
      badgeColor: 'bg-[#00A0E9]',
      gramatura: 'Couché 300g',
      cores: '4x0 ou 4x4 (Colorido)',
      acabamentos: ['Verniz Localizado UV 3D', 'Plastificação Fosca Pro', 'Canto Arredondado', 'Hot Stamping Dourado'],
      description: 'Cartões de visita com presença marcante. Toque aveludado e brilho localizado em alta resolução.'
    },
    {
      id: 'panfletos',
      title: 'Panfletos, Flyers & Folders',
      category: 'promocional',
      img: '/flyers_mockup.jpg',
      badge: 'Produção Rápida',
      badgeColor: 'bg-[#E6007E]',
      gramatura: 'Couché 115g / 150g',
      cores: '4x0 ou 4x4 CMYK',
      acabamentos: ['Dobra Simples (Folder)', 'Dobra Tripla (Santuário)', 'Corte Reto', 'Verniz Total Brilho'],
      description: 'Ideal para campanhas promocionais, cardápios e divulgação comercial de grande escala.'
    },
    {
      id: 'banners',
      title: 'Banners & Faixas em Lona',
      category: 'comunicacao-visual',
      img: '/banners_mockup.jpg',
      badge: 'Alta Durabilidade',
      badgeColor: 'bg-amber-500 text-white',
      gramatura: 'Lona 440g Brilho/Fosca',
      cores: 'Impressão Digital HD',
      acabamentos: ['Ilhós Metálicos', 'Bastão & Cordão de Pendurar', 'Bainha Reforçada Soldada'],
      description: 'Comunicação visual para feiras, fachada de lojas, eventos esportivos e anúncios externos.'
    },
    {
      id: 'embalagens',
      title: 'Adesivos & Rótulos de Produtos',
      category: 'embalagens',
      img: '/packaging_mockup.jpg',
      badge: 'Corte Especial',
      badgeColor: 'bg-emerald-600',
      gramatura: 'Vinil Impermeável / Papel',
      cores: 'CMYK Solvente HD',
      acabamentos: ['Meio-Corte Inteligente', 'Transparente com Tinta Branca', 'Adesivo Metalizado'],
      description: 'Etiquetas adesivas para potes, embalagens de delivery, sacolas e identificação de marca.'
    },
    {
      id: 'pastas',
      title: 'Pastas Corporativas com Bolsa',
      category: 'corporativo',
      img: '/cards_mockup.jpg',
      badge: 'Identidade Visual',
      badgeColor: 'bg-purple-600',
      gramatura: 'Couché 300g / Supremo',
      cores: '4x0 ou 4x4 CMYK',
      acabamentos: ['Bolsa Interna para Cartão', 'Laminação Fosca', 'Verniz de Proteção'],
      description: 'Apresente propostas comerciais e contratos com alto padrão institucional para seus clientes.'
    },
    {
      id: 'taloes',
      title: 'Blocos, Talões & Recibos',
      category: 'corporativo',
      img: '/flyers_mockup.jpg',
      badge: 'Personalizado',
      badgeColor: 'bg-indigo-600',
      gramatura: 'Papel Autocopiativo 75g',
      cores: '1x0 (Preto) ou 4x0',
      acabamentos: ['Numeração Sequencial', 'Serrilha de Destaque', 'Capa Kraft / Cartão'],
      description: 'Organização e controle financeiro para sua empresa com 2 ou 3 vias de cópia instantânea.'
    }
  ];

  const categories = [
    { id: 'todos', label: 'Todos os Impressos' },
    { id: 'promocional', label: 'Promocionais & Flyers' },
    { id: 'corporativo', label: 'Linha Corporativa' },
    { id: 'comunicacao-visual', label: 'Comunicação Visual' },
    { id: 'embalagens', label: 'Etiquetas & Adesivos' }
  ];

  const filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleSelectProduct = (productName) => {
    const el = document.getElementById('calculadora');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-24 relative bg-[#FAFAFC]">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold uppercase tracking-wider text-[#00A0E9] mb-3">
              <Layers className="w-3.5 h-3.5 text-[#E6007E]" />
              Catálogo de Impressos Gráficos
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-gray-900">
              Nossos Produtos & <span className="text-gradient-cmyk">Acabamentos Especiais</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-md text-sm leading-relaxed font-medium">
            Impressão offset de alta tiragem ou digital sob demanda. Garantia de resolução, corte preciso e materiais de primeira linha.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gray-900 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <div 
              key={prod.id} 
              className="cmyk-glow-card group bg-white flex flex-col justify-between"
            >
              <div>
                {/* Product Image & Badge */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={prod.img} 
                    alt={prod.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  
                  {/* Badge */}
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide text-white shadow-md ${prod.badgeColor}`}>
                    {prod.badge}
                  </span>

                  {/* Gramatura Tag */}
                  <span className="absolute bottom-4 left-4 text-xs font-mono font-bold text-gray-900 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg border border-white/40 shadow-sm">
                    {prod.gramatura}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold font-heading text-gray-900 group-hover:text-[#00A0E9] transition-colors">
                    {prod.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Finishings List */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Acabamentos Disponíveis:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {prod.acabamentos.map((acab, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-gray-100 text-[11px] font-semibold text-gray-700 border border-gray-200 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#E6007E]" />
                          {acab}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0 border-t border-gray-100">
                <button
                  onClick={() => handleSelectProduct(prod.title)}
                  className="w-full py-3 px-4 rounded-xl bg-gray-100 hover:bg-gradient-to-r hover:from-[#00A0E9] hover:to-[#E6007E] text-gray-800 hover:text-white text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-transparent cursor-pointer"
                >
                  Solicitar Orçamento <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
