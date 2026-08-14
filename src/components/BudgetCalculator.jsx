import React, { useState } from 'react';
import { MessageSquare, Calculator, FileCheck, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BudgetCalculator() {
  const [formData, setFormData] = useState({
    nome: '',
    servico: 'Cartões de Visita Premium',
    tamanho: '9x5 cm (Padrão)',
    tamanhoCustom: '',
    quantidade: '1.000 un',
    quantidadeCustom: '',
    cores: '4x4 (Colorido Frente e Verso)',
    temArquivo: 'Sim - Tenho PDF / Arte Pronta',
    observacoes: ''
  });

  const serviciosOptions = [
    { label: 'Cartões de Visita Premium', desc: 'Couché 300g, Verniz Localizado, Plastificação' },
    { label: 'Panfletos, Flyers & Folders', desc: 'Couché 115g/150g com 1 ou 2 dobras' },
    { label: 'Banners, Lonas & Faixas', desc: 'Impressão digital em grande formato com ilhós' },
    { label: 'Envelopes & Papel Timbrado', desc: 'Identidade corporativa completa em Offset' },
    { label: 'Pastas Corporativas', desc: 'Com bolsa interna para documentos A4' },
    { label: 'Blocos, Talões & Recibos', desc: 'Auto-copiativo, numerado e serrilhado' },
    { label: 'Adesivos & Etiquetas', desc: 'Vinil brilho/fosco com corte especial' },
    { label: 'Convites Especiais & Cardápios', desc: 'Papéis nobres e acabamentos de luxo' },
  ];

  const tamanhosOptions = [
    '9x5 cm (Padrão Cartão)',
    'A6 (10x15 cm)',
    'A5 (15x21 cm)',
    'A4 (21x29.7 cm)',
    'A3 (29.7x42 cm)',
    'Banner 70x100 cm',
    'Banner 100x150 cm',
    'Personalizado / Sob Medida'
  ];

  const quantidadesOptions = [
    '100 un',
    '250 un',
    '500 un',
    '1.000 un (Recomendado)',
    '2.500 un',
    '5.000 un',
    '10.000 un+',
    'Outra Quantidade'
  ];

  const coresOptions = [
    { value: '4x0 (Colorido Só Frente)', label: '4x0 - Colorido Frente / Verso Branco' },
    { value: '4x4 (Colorido Frente e Verso)', label: '4x4 - Colorido Frente e Verso' },
    { value: '1x0 (Preto e Branco Só Frente)', label: '1x0 - Preto e Branco Frente' },
    { value: '1x1 (Preto e Branco Frente e Verso)', label: '1x1 - Preto e Branco Frente e Verso' },
    { value: 'Cores Especiais / Pantone', label: 'Cores Especiais / Pantone / Dourado' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch (err) {
      // fallback
    }

    const finalTamanho = formData.tamanho === 'Personalizado / Sob Medida' ? (formData.tamanhoCustom || 'Sob Medida') : formData.tamanho;
    const finalQuantidade = formData.quantidade === 'Outra Quantidade' ? (formData.quantidadeCustom || 'Outra') : formData.quantidade;

    const message = 
`SOLICITAÇÃO DE ORÇAMENTO - GRÁFICA ARIANA
---------------------------------------
Cliente/Empresa: ${formData.nome || 'Não informado'}
Serviço: ${formData.servico}
Tamanho: ${finalTamanho}
Quantidade: ${finalQuantidade}
Cores: ${formData.cores}
Tem Arquivo Pronto?: ${formData.temArquivo}
${formData.observacoes ? `Observações/Acabamentos: ${formData.observacoes}\n` : ''}---------------------------------------
Enviado pelo site oficial da Gráfica Ariana`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5511981387865?text=${encoded}`, '_blank');
  };

  return (
    <section id="calculadora" className="py-24 relative bg-[#F8FAFC]">
      {/* Accent CMYK Ambient Lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A0E9]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E6007E]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="reveal-on-scroll text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold uppercase tracking-wider text-[#00A0E9]">
            <Calculator className="w-4 h-4 text-[#E6007E]" />
            Orçamento Rápido & Sem Compromisso
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-gray-900">
            Solicite seu <span className="text-gradient-cmyk">Orçamento Gráfico</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Preencha os campos abaixo e envie diretamente para nossa equipe no WhatsApp <strong className="text-gray-900 font-bold">(11) 9.8138-7865</strong>.
          </p>
        </div>

        {/* Form Container */}
        <div className="reveal-on-scroll delay-150 max-w-4xl mx-auto cmyk-glow-card p-8 sm:p-12 bg-white rounded-3xl border border-gray-200/80 shadow-2xl relative">
          
          <form onSubmit={handleSendWhatsApp} className="space-y-8">
            
            {/* Client Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label text-gray-800">Seu Nome ou Empresa:</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Ex: Maria Souza / Padaria Estrela"
                  className="form-control"
                />
              </div>

              {/* Field 1: Serviço */}
              <div className="form-group">
                <label className="form-label text-gray-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#00A0E9] text-white flex items-center justify-center text-xs font-extrabold shadow-sm">1</span>
                  Serviço Desejado: <span className="text-[#E6007E]">*</span>
                </label>
                <select
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  className="form-control font-semibold text-gray-800"
                  required
                >
                  {serviciosOptions.map((opt, i) => (
                    <option key={i} value={opt.label}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 2: Tamanho & Quantidade */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Field 2: Tamanho */}
              <div className="form-group">
                <label className="form-label text-gray-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#E6007E] text-white flex items-center justify-center text-xs font-extrabold shadow-sm">2</span>
                  Tamanho / Formato: <span className="text-[#E6007E]">*</span>
                </label>
                <select
                  name="tamanho"
                  value={formData.tamanho}
                  onChange={handleChange}
                  className="form-control font-semibold text-gray-800"
                  required
                >
                  {tamanhosOptions.map((tam, i) => (
                    <option key={i} value={tam}>
                      {tam}
                    </option>
                  ))}
                </select>
                {formData.tamanho === 'Personalizado / Sob Medida' && (
                  <input
                    type="text"
                    name="tamanhoCustom"
                    value={formData.tamanhoCustom}
                    onChange={handleChange}
                    placeholder="Digite as medidas (ex: 12x18 cm)"
                    className="form-control mt-2"
                  />
                )}
              </div>

              {/* Field 3: Quantidade */}
              <div className="form-group">
                <label className="form-label text-gray-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FFED00] text-gray-900 flex items-center justify-center text-xs font-extrabold shadow-sm">3</span>
                  Quantidade de Tiragem: <span className="text-[#E6007E]">*</span>
                </label>
                <select
                  name="quantidade"
                  value={formData.quantidade}
                  onChange={handleChange}
                  className="form-control font-semibold text-gray-800"
                  required
                >
                  {quantidadesOptions.map((qtd, i) => (
                    <option key={i} value={qtd}>
                      {qtd}
                    </option>
                  ))}
                </select>
                {formData.quantidade === 'Outra Quantidade' && (
                  <input
                    type="text"
                    name="quantidadeCustom"
                    value={formData.quantidadeCustom}
                    onChange={handleChange}
                    placeholder="Digite a quantidade exata"
                    className="form-control mt-2"
                  />
                )}
              </div>

            </div>

            {/* Step 3: Cores & Arquivo Pronto */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Field 4: Cores */}
              <div className="form-group">
                <label className="form-label text-gray-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#141720] text-white flex items-center justify-center text-xs font-extrabold shadow-sm">4</span>
                  Cores de Impressão: <span className="text-[#E6007E]">*</span>
                </label>
                <select
                  name="cores"
                  value={formData.cores}
                  onChange={handleChange}
                  className="form-control font-semibold text-gray-800"
                  required
                >
                  {coresOptions.map((cor, i) => (
                    <option key={i} value={cor.value}>
                      {cor.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 5: Tem arquivo pronto? */}
              <div className="form-group">
                <label className="form-label text-gray-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#00A0E9] text-white flex items-center justify-center text-xs font-extrabold shadow-sm">5</span>
                  Tem arquivo pronto?: <span className="text-[#E6007E]">*</span>
                </label>
                <select
                  name="temArquivo"
                  value={formData.temArquivo}
                  onChange={handleChange}
                  className="form-control font-semibold text-gray-800"
                  required
                >
                  <option value="Sim - Tenho PDF / Arte Pronta">
                    Sim - Tenho arquivo pronto (PDF / Corel / PS / AI)
                  </option>
                  <option value="Não - Preciso da criação de arte pela Gráfica Ariana">
                    Não - Preciso que a Gráfica Ariana crie a arte
                  </option>
                </select>
              </div>

            </div>

            {/* Observações */}
            <div className="form-group">
              <label className="form-label text-gray-800">
                Observações ou Acabamentos Especiais (Opcional):
              </label>
              <textarea
                name="observacoes"
                rows={3}
                value={formData.observacoes}
                onChange={handleChange}
                placeholder="Ex: Verniz Localizado UV no logo, Dobra simples, Papel Couché 300g..."
                className="form-control"
              />
            </div>

            {/* WhatsApp Output Preview */}
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 font-mono text-xs text-emerald-950 space-y-2">
              <div className="flex items-center justify-between font-sans text-xs">
                <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <FileCheck className="w-4 h-4" /> Prévia da Mensagem enviada ao WhatsApp:
                </span>
                <span className="font-semibold text-emerald-800 whitespace-nowrap">(11) 9.8138-7865</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-emerald-200 text-gray-800 space-y-1.5 shadow-sm font-sans">
                <div className="font-extrabold text-emerald-700 text-sm tracking-wide border-b border-emerald-100 pb-1">SOLICITAÇÃO DE ORÇAMENTO - GRÁFICA ARIANA</div>
                <div><strong>Cliente:</strong> {formData.nome || '[Seu Nome]'}</div>
                <div><strong>Serviço:</strong> {formData.servico}</div>
                <div><strong>Tamanho:</strong> {formData.tamanho === 'Personalizado / Sob Medida' ? (formData.tamanhoCustom || 'Sob Medida') : formData.tamanho}</div>
                <div><strong>Quantidade:</strong> {formData.quantidade === 'Outra Quantidade' ? (formData.quantidadeCustom || 'Outra') : formData.quantidade}</div>
                <div><strong>Cores:</strong> {formData.cores}</div>
                <div><strong>Arquivo Pronto?:</strong> {formData.temArquivo}</div>
                {formData.observacoes && <div><strong>Obs:</strong> {formData.observacoes}</div>}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="btn-cmyk-primary w-full py-4 px-8 text-base sm:text-lg font-bold shadow-2xl flex items-center justify-center gap-2 cursor-pointer flex-wrap sm:flex-nowrap"
              >
                <Send className="w-5 h-5 fill-current shrink-0" />
                <span>Enviar Orçamento para o WhatsApp</span>
                <span className="whitespace-nowrap font-extrabold">(11) 9.8138-7865</span>
              </button>
              <div className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#E6007E]" />
                Atendimento rápido em horário comercial por consultores qualificados.
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
