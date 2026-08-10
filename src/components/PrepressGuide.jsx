import React, { useState } from 'react';
import { FileCheck, Scissors, Palette, Type, Image as ImageIcon, Check, AlertTriangle } from 'lucide-react';

export default function PrepressGuide() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Sangria & Margem de Segurança (3mm)',
      icon: Scissors,
      color: 'text-[#00A0E9]',
      description: 'Estenda o fundo da sua arte em 3mm além do corte final. Mantenha textos importantes a no mínimo 4mm da borda para não serem cortados na guilhotina.',
      doText: 'Fundo ultrapassa a linha de corte vermelha.',
      dontText: 'Fundo rente ao corte deixa fiapos brancos nas bordas.'
    },
    {
      title: 'Modo de Cor CMYK (Cian, Magenta, Amarelo, Preto)',
      icon: Palette,
      color: 'text-[#E6007E]',
      description: 'Arquivos em RGB (telas/monitores) devem ser convertidos para CMYK. Isso evita variação de tom ao passar para a chapa gráfica de impressão.',
      doText: 'Arquivo fechado no perfil CMYK Fogra39 ou Coated GRACoL.',
      dontText: 'Enviar em RGB pode escurecer tons de azul e verde.'
    },
    {
      title: 'Resolução de Imagem (300 DPI)',
      icon: ImageIcon,
      color: 'text-amber-500',
      description: 'Todas as fotos e logotipos em mapa de bits devem ter resolução mínima de 300 DPI no tamanho final de impressão para evitar serrilhados.',
      doText: 'Imagens nítidas a 300 DPI em tamanho real 100%.',
      dontText: 'Imagens de WhatsApp (72 DPI) ficam pixeladas e borradas.'
    },
    {
      title: 'Fontes Convertidas em Curvas / Vetor',
      icon: Type,
      color: 'text-emerald-600',
      description: 'Converta todos os textos em curvas (Criar Contornos / Ctrl+Q no Corel / Ctrl+Shift+O no Illustrator). Assim, o arquivo mantém o design idêntico.',
      doText: 'Textos em curvas vetorizadas.',
      dontText: 'Fontes abertas podem ser substituídas por fontes padrão.'
    }
  ];

  return (
    <section id="pre-impressao" className="py-24 relative bg-[#F8FAFC] border-t border-gray-200">
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold uppercase tracking-wider text-[#00A0E9]">
            <FileCheck className="w-4 h-4 text-[#E6007E]" />
            Guia do Designer & Pré-Impressão
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-gray-900">
            Como Enviar seu Arquivo <span className="text-gradient-cmyk">Sem Erros</span>
          </h2>
          <p className="text-gray-600 text-base">
            Se você já possui a arte pronta, siga estas 4 recomendações técnicas para garantir um impresso perfeito:
          </p>
        </div>

        {/* Steps Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full p-4.5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#00A0E9] shadow-xl translate-x-2'
                      : 'bg-white/60 border-gray-200 hover:bg-white text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${isActive ? 'bg-blue-50' : 'bg-gray-100'} ${step.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-gray-400">PASSO 0{idx + 1}</div>
                    <div className={`text-base font-bold ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                      {step.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Panel */}
          <div className="lg:col-span-7">
            <div className="cmyk-glow-card p-8 bg-white rounded-3xl border border-gray-200/90 space-y-6 h-full flex flex-col justify-between shadow-2xl">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3">
                    {React.createElement(steps[activeStep].icon, { className: `w-7 h-7 ${steps[activeStep].color}` })}
                    <h3 className="text-2xl font-bold font-heading text-gray-900">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    Checklist 0{activeStep + 1}/04
                  </span>
                </div>

                <p className="text-base text-gray-600 leading-relaxed">
                  {steps[activeStep].description}
                </p>

                {/* DO vs DONT Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                      <Check className="w-4 h-4 text-emerald-600" /> Forma Correta
                    </div>
                    <p className="text-xs text-gray-700">
                      {steps[activeStep].doText}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
                    <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4 text-rose-600" /> Erro Comum
                    </div>
                    <p className="text-xs text-gray-700">
                      {steps[activeStep].dontText}
                    </p>
                  </div>

                </div>
              </div>

              {/* Assistance Callout */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between text-xs text-gray-700 font-medium">
                <span>Dúvidas no fechamento da arte? Nossa equipe faz a checagem prévia gratuita!</span>
                <a href="#calculadora" className="text-[#00A0E9] font-bold hover:underline whitespace-nowrap ml-2">
                  Enviar para Análise →
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
