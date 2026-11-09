import { useState } from 'react';
import ThreeBackground from './ThreeBackground';

export default function LandingPage() {
  // Lembre-se do &confirm=t para pular o aviso de vírus do Google Drive
  const linkDownloadLazarus = "https://drive.google.com/uc?export=download&id=1cYb4LcaTX8_FYneZTf89SXIyhJ7X-TP2&confirm=t";
  const linkSistemaWeb = "https://arcanevoid.vercel.app";

  // 🔥 IMAGENS DO CARROSSEL (Coloque as suas fotos na pasta public com esses nomes)
  const imagensCarrossel = [
    { src: "/print-lazarus.png", alt: "Sistema Desktop Lazarus", titulo: "Gerenciamento Desktop" },
    { src: "/print-web-chat.png", alt: "Chat da Mesa Virtual", titulo: "Chat em Tempo Real" },
    { src: "/print-web-mesa.png", alt: "Mesa Virtual e Tokens", titulo: "Mesa Interativa" }
  ];

  const [slideAtual, setSlideAtual] = useState(0);

  const proximoSlide = () => {
    setSlideAtual((prev) => (prev === imagensCarrossel.length - 1 ? 0 : prev + 1));
  };

  const slideAnterior = () => {
    setSlideAtual((prev) => (prev === 0 ? imagensCarrossel.length - 1 : prev - 1));
  };

  return (
    <div className="relative min-h-screen bg-[#0a0416] font-sans flex flex-col overflow-x-hidden">
      <ThreeBackground />
      
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#0a0416]/60 via-[#0a0416]/90 to-[#0a0416] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col">
        
        {/* CABEÇALHO */}
        <header className="w-full px-8 py-6 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-purple-500/20 sticky top-0 z-50">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-white tracking-widest drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" style={{ fontFamily: "'Cinzel', serif" }}>ARCANEVOID</h1>
          </div>
          <a href={linkSistemaWeb} className="px-6 py-2 bg-[#9333ea] hover:bg-[#a855f7] text-white rounded-md font-bold transition-all shadow-[0_0_15px_rgba(147,51,234,0.5)] border border-purple-400/50">
            ACESSAR SISTEMA
          </a>
        </header>

        {/* SEÇÃO 1: HERO */}
        <main className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.9)]" style={{ fontFamily: "'Cinzel', serif" }}>
            ArcaneVoid
          </h2>
          <p className="text-xl md:text-2xl text-purple-200 max-w-3xl font-serif italic mb-10 drop-shadow-md">
            A plataforma definitiva para unir sua biblioteca de RPG à mesa virtual.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 pointer-events-auto">
            <a href={linkDownloadLazarus} className="px-8 py-4 bg-[#1a1225]/90 border-2 border-[#9333ea]/50 text-purple-200 font-arcane tracking-widest rounded-xl hover:bg-[#2b1f3d] transition-all transform hover:scale-105 flex items-center justify-center shadow-xl">
              BAIXAR SISTEMA DESKTOP
            </a>
            <a href={linkSistemaWeb} className="px-8 py-4 bg-gradient-to-r from-[#9333ea] to-[#7e22ce] text-white font-arcane tracking-widest rounded-xl shadow-[0_0_30px_rgba(147,51,234,0.6)] transition-all transform hover:scale-105 flex items-center justify-center">
              ACESSAR SISTEMA WEB
            </a>
          </div>

          <div className="mt-20 animate-bounce pointer-events-none flex flex-col items-center">
             <span className="text-purple-400 text-xs font-arcane tracking-widest mb-2">EXPLORAR</span>
             <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
        </main>

        {/* SEÇÃO 2: CARROSSEL DE IMAGENS */}
        <section className="relative z-10 bg-[#0d0714]/95 backdrop-blur-xl border-t border-purple-500/20 py-24">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-4xl font-bold text-center text-white mb-12 font-serif" style={{ fontFamily: "'Cinzel', serif" }}>
              Conheça a Interface
            </h3>
            
            {/* CONTAINER DO CARROSSEL */}
            <div className="relative bg-[#120a1f]/90 p-4 rounded-2xl border border-purple-500/30 shadow-2xl flex flex-col items-center">
              
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-700/50 bg-black flex items-center justify-center">
                {/* Imagem Atual */}
                <img 
                  src={imagensCarrossel[slideAtual].src} 
                  alt={imagensCarrossel[slideAtual].alt} 
                  className="w-full h-full object-cover transition-opacity duration-500"
                  // Se a imagem não existir, mostra um fundo cinza com texto
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1280x720/1a1225/a855f7?text=Adicione+a+imagem+na+pasta+public';
                  }}
                />

                {/* Título da Imagem (Sobreposta) */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 text-center">
                  <p className="text-white font-arcane tracking-widest text-lg">{imagensCarrossel[slideAtual].titulo}</p>
                </div>

                {/* Setas de Navegação */}
                <button 
                  onClick={slideAnterior} 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[#9333ea] rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button 
                  onClick={proximoSlide} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[#9333ea] rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>

              {/* Bolinhas Indicadoras */}
              <div className="flex gap-3 mt-6">
                {imagensCarrossel.map((_, index) => (
                  <button 
                    key={index} 
                    onClick={() => setSlideAtual(index)}
                    className={`w-3 h-3 rounded-full transition-all ${slideAtual === index ? 'bg-[#a855f7] scale-125' : 'bg-gray-600 hover:bg-gray-400'}`}
                  />
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* SEÇÃO 3: FUNCIONALIDADES */}
        <section className="relative z-10 bg-[#0a0416]/98 backdrop-blur-xl py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-4xl font-bold text-center text-white mb-16 font-serif" style={{ fontFamily: "'Cinzel', serif" }}>
              Recursos do Sistema
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-[#120a1f]/90 p-8 rounded-2xl border border-purple-500/30 hover:border-[#a855f7] transition-colors shadow-2xl">
                <h4 className="text-2xl font-bold text-white mb-4 border-b border-purple-500/30 pb-2">Desktop (Lazarus)</h4>
                <ul className="text-gray-300 space-y-3 mt-4 text-sm leading-relaxed">
                  <li><strong className="text-purple-300">Gerenciamento de Acervo:</strong> Faça upload e organize livros, mapas, tokens e fichas.</li>
                  <li><strong className="text-purple-300">Histórico e Favoritos:</strong> Acesse rapidamente os conteúdos que você mais usa.</li>
                  <li><strong className="text-purple-300">Análise de Dados:</strong> Monitore o engajamento e as estatísticas de uso.</li>
                </ul>
              </div>

              <div className="bg-[#120a1f]/90 p-8 rounded-2xl border border-purple-500/30 hover:border-[#a855f7] transition-colors shadow-2xl">
                <h4 className="text-2xl font-bold text-white mb-4 border-b border-purple-500/30 pb-2">Web (Discord-like)</h4>
                <ul className="text-gray-300 space-y-3 mt-4 text-sm leading-relaxed">
                  <li><strong className="text-purple-300">Comunicação em Tempo Real:</strong> Chat de texto e canais integrados.</li>
                  <li><strong className="text-purple-300">Chamadas de Voz e Vídeo:</strong> Conecte-se com sua mesa via WebRTC.</li>
                  <li><strong className="text-purple-300">Bot de Dados:</strong> Role dados no chat usando "!d20".</li>
                  <li><strong className="text-purple-300">Mesa Interativa:</strong> Posicione tokens e gerencie cenas no navegador.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative z-10 text-center py-10 border-t border-[#2b1f3d] text-gray-500 text-sm bg-[#0a0416]">
          <p>ArcaneVoid &copy; {new Date().getFullYear()} - Desenvolvido como Projeto de TCC.</p>
        </footer>
      </div>
    </div>
  );
}