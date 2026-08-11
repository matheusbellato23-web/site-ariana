import React, { useState } from 'react';
import { Copy, Check, Info, Droplets } from 'lucide-react';

export default function CmykMixer() {
  const [cmyk, setCmyk] = useState({ c: 100, m: 0, y: 55, k: 0 });
  const [copied, setCopied] = useState(false);

  const cmykToRgb = (c, m, y, k) => {
    const r = Math.round(255 * (1 - c / 100) * (1 - k / 100));
    const g = Math.round(255 * (1 - m / 100) * (1 - k / 100));
    const b = Math.round(255 * (1 - y / 100) * (1 - k / 100));
    return { r, g, b };
  };

  const { r, g, b } = cmykToRgb(cmyk.c, cmyk.m, cmyk.y, cmyk.k);
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  const totalInk = cmyk.c + cmyk.m + cmyk.y + cmyk.k;

  const handleSliderChange = (key, val) => {
    setCmyk((prev) => ({ ...prev, [key]: parseInt(val, 10) }));
  };

  const copyHex = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const presetColors = [
    { name: 'Cian Puro', c: 100, m: 0, y: 0, k: 0 },
    { name: 'Magenta Puro', c: 0, m: 100, y: 0, k: 0 },
    { name: 'Amarelo Vivo', c: 0, m: 0, y: 100, k: 0 },
    { name: 'Preto Gráfico (Rich Black)', c: 60, m: 40, y: 40, k: 100 },
    { name: 'Azul Ariana', c: 100, m: 60, y: 0, k: 0 },
    { name: 'Vermelho Offset', c: 0, m: 100, y: 100, k: 0 }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden border-y border-gray-200/80">
      <div className="container-custom relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold font-mono text-[#00A0E9]">
              <Droplets className="w-3.5 h-3.5" />
              Simulador de Tintas CMYK Offset
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-gray-900">
              Sinta a Precisão da <span className="text-gradient-cmyk">Mistura de Cores</span>
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              Na Gráfica Ariana, a calibração de tintas segue padrões rigorosos de densidade. Teste abaixo como os 4 canais de retícula se combinam na folha impressa:
            </p>

            {/* Presets */}
            <div className="flex flex-wrap gap-2 pt-1">
              {presetColors.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => setCmyk({ c: preset.c, m: preset.m, y: preset.y, k: preset.k })}
                  className="px-3.5 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-200 text-xs font-bold text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  {preset.name}
                </button>
              ))}
            </div>

            {/* Sliders */}
            <div className="space-y-4 pt-2">
              
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold font-mono">
                  <span className="text-[#00A0E9]">C - CIAN (CYAN)</span>
                  <span className="text-gray-900">{cmyk.c}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={cmyk.c}
                  onChange={(e) => handleSliderChange('c', e.target.value)}
                  className="w-full accent-[#00A0E9] bg-gray-200 h-2.5 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold font-mono">
                  <span className="text-[#E6007E]">M - MAGENTA</span>
                  <span className="text-gray-900">{cmyk.m}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={cmyk.m}
                  onChange={(e) => handleSliderChange('m', e.target.value)}
                  className="w-full accent-[#E6007E] bg-gray-200 h-2.5 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold font-mono">
                  <span className="text-amber-500">Y - AMARELO (YELLOW)</span>
                  <span className="text-gray-900">{cmyk.y}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={cmyk.y}
                  onChange={(e) => handleSliderChange('y', e.target.value)}
                  className="w-full accent-amber-400 bg-gray-200 h-2.5 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold font-mono">
                  <span className="text-gray-800">K - PRETO (KEY)</span>
                  <span className="text-gray-900">{cmyk.k}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={cmyk.k}
                  onChange={(e) => handleSliderChange('k', e.target.value)}
                  className="w-full accent-gray-900 bg-gray-200 h-2.5 rounded-lg cursor-pointer"
                />
              </div>

            </div>

          </div>

          {/* Right Column: Swatch Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-white border border-gray-200/90 space-y-6 shadow-2xl relative">
              <div className="crop-mark crop-mark-tl" />
              <div className="crop-mark crop-mark-tr" />
              <div className="crop-mark crop-mark-bl" />
              <div className="crop-mark crop-mark-br" />

              <div 
                className="w-full h-44 rounded-2xl shadow-md border border-gray-300 transition-all duration-300 relative flex items-end p-4 overflow-hidden"
                style={{ backgroundColor: hex }}
              >
                <div className="bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl text-white font-mono text-xs flex items-center justify-between w-full shadow-lg">
                  <span>HEX: {hex}</span>
                  <button 
                    onClick={copyHex} 
                    className="flex items-center gap-1 hover:text-[#00A0E9] transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copiado!' : 'Copiar'}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-gray-500 font-bold">VALORES CMYK</div>
                  <div className="font-bold text-gray-900 mt-1">C:{cmyk.c}% M:{cmyk.m}% Y:{cmyk.y}% K:{cmyk.k}%</div>
                </div>
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-gray-500 font-bold">COBERTURA (TAC)</div>
                  <div className={`font-bold mt-1 ${totalInk > 300 ? 'text-amber-600' : 'text-emerald-600'}`}>
                    {totalInk}% {totalInk > 300 ? '(Limite Rec.)' : '(Seguro)'}
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-600 flex items-start gap-2.5 bg-blue-50/70 p-3.5 rounded-xl border border-blue-100">
                <Info className="w-4 h-4 text-[#00A0E9] shrink-0 mt-0.5" />
                <span>
                  Em impressão offset, a cobertura ideal de tinta é de no máximo 300% para prevenir decalques durante o tempo de secagem do papel couché.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
