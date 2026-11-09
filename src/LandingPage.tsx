import { useState } from 'react';
import ThreeBackground from './ThreeBackground';

export default function LandingPage() {
  const linkDownloadLazarus = "https://drive.google.com/uc?export=download&id=1cYb4LcaTX8_FYneZTf89SXIyhJ7X-TP2&confirm=t";
  const linkSistemaWeb = "https://arcanevoid.vercel.app";

  const imagensCarrossel = [
     { src: "/print-lazarus.png", alt: "Sistema Desktop Lazarus", titulo: "Gerenciamento Desktop" },
    { src: "/print-web-chat.png", alt: "Tela principal web", titulo: "O véu entre os mundos se abre para aqueles que ousam sonhar." },
    { src: "/print-web-mesa.png", alt: "Chat da Mesa Virtual", titulo: "Chat em Tempo Real" }
  ];

  const [slideAtual, setSlideAtual] = useState(0);

  const proximoSlide = () => setSlideAtual((prev) => (prev === imagensCarrossel.length - 1 ? 0 : prev + 1));
  const slideAnterior = () => setSlideAtual((prev) => (prev === 0 ? imagensCarrossel.length - 1 : prev - 1));

  return (
    <div className="relative min-h-screen bg-[#0a0416] font-sans flex flex-col overflow-x-hidden">
      <ThreeBackground />
      
      {/* Overlay escuro para garantir leitura do texto sobre o 3D */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#0a0416]/60 via-[#0a0416]/85 to-[#0a0416] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col">
        
        {/* CABEÇALHO */}
        <header className="w-full px-8 py-6 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-purple-500/20 sticky top-0 z-50">
          <h1 className="text-3xl font-bold text-white tracking-widest drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" style={{ fontFamily: "'Cinzel', serif" }}>ARCANEVOID</h1>
          <a href={linkSistemaWeb} className="px-6 py-2 bg-[#9333ea] hover:bg-[#a855f7] text-white rounded-md font-bold transition-all shadow-[0_0_15px_rgba(147,51,234,0.5)] border border-purple-400/50">
            ACESSAR SISTEMA
          </a>
        </header>

        {/* HERO SECTION */}
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

        {/* SEÇÃO: A JORNADA */}
        <section className="relative z-10 bg-[#0d0714]/95 backdrop-blur-xl border-t border-purple-500/20 py-24 overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 relative z-20">
            <h3 className="text-4xl font-bold text-center text-white mb-12 font-serif drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]" style={{ fontFamily: "'Cinzel', serif" }}>
              A Jornada e o Propósito
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify md:text-center">
              <p>
                O projeto iniciou como uma simples ideia para a conclusão do curso (TCC), mas, pouco a pouco, fui me envolvendo cada vez mais e transformando o ArcaneVoid em algo muito maior e mais completo do que imaginei.
              </p>
              <p>
                Ele não é apenas um sistema de gerenciamento; é a materialização de um conceito profundo sobre o poder do Role-Playing Game (RPG). 
                O projeto nasceu com o propósito de facilitar o acesso ao <strong>RPG Terapêutico</strong>, uma ferramenta amplamente utilizada na psicologia para o desenvolvimento de habilidades sociais, empatia e resolução de conflitos em um ambiente seguro.
              </p>
              <p>
                O grande desafio técnico foi unificar duas pontas distintas: a necessidade de um <strong>acervo seguro e local</strong> (onde o mestre guarda seus livros e mapas) e a <strong>interatividade em tempo real</strong> (onde a mesa se reúne para jogar). Para superar isso, integramos a robustez do Lazarus e do PostgreSQL com a agilidade do React e WebSockets.
              </p>
            </div>
          </div>
        </section>

        {/* CARROSSEL */}
        <section className="relative z-10 bg-[#0a0416]/98 backdrop-blur-xl py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-4xl font-bold text-center text-white mb-12 font-serif" style={{ fontFamily: "'Cinzel', serif" }}>
              Conheça a Interface
            </h3>
            
            <div className="relative bg-[#120a1f]/90 p-4 rounded-2xl border border-purple-500/40 shadow-[0_0_40px_rgba(147,51,234,0.2)] flex flex-col items-center">
              <div className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden border border-gray-700/50 bg-black flex items-center justify-center">
                <img 
                  src={imagensCarrossel[slideAtual].src} 
                  alt={imagensCarrossel[slideAtual].alt} 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1280x720/1a1225/a855f7?text=Adicione+a+imagem+na+pasta+public';
                  }}
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 text-center">
                  <p className="text-white font-arcane tracking-widest text-lg">{imagensCarrossel[slideAtual].titulo}</p>
                </div>
                <button onClick={slideAnterior} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-[#9333ea] rounded-full flex items-center justify-center text-white backdrop-blur-md transition-all border border-purple-500/30">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={proximoSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-[#9333ea] rounded-full flex items-center justify-center text-white backdrop-blur-md transition-all border border-purple-500/30">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
              <div className="flex gap-3 mt-6">
                {imagensCarrossel.map((_, index) => (
                  <button 
                    key={index} 
                    onClick={() => setSlideAtual(index)}
                    className={`w-3 h-3 rounded-full transition-all ${slideAtual === index ? 'bg-[#a855f7] scale-125 shadow-[0_0_10px_rgba(168,85,247,0.8)]' : 'bg-gray-600 hover:bg-gray-400'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RECURSOS */}
        <section className="relative z-10 bg-[#0d0714]/95 backdrop-blur-xl py-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-20">
            <h3 className="text-4xl font-bold text-center text-white mb-16 font-serif drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]" style={{ fontFamily: "'Cinzel', serif" }}>
              Recursos do Sistema
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-[#120a1f]/90 p-8 rounded-2xl border border-purple-500/30 hover:border-[#a855f7] transition-colors shadow-2xl relative overflow-hidden group">
                <h4 className="text-2xl font-bold text-white mb-4 border-b border-purple-500/30 pb-2">Desktop (Lazarus)</h4>
                <ul className="text-gray-300 space-y-3 mt-4 text-sm leading-relaxed">
                  <li><strong className="text-purple-300">Gerenciamento de Acervo:</strong> Faça upload e organize livros, mapas, tokens e fichas.</li>
                  <li><strong className="text-purple-300">Histórico e Favoritos:</strong> Acesse rapidamente os conteúdos que você mais usa.</li>
                  <li><strong className="text-purple-300">Downloads Rápidos:</strong> Armazene e baixe recursos para suas sessões.</li>
                </ul>
              </div>

              <div className="bg-[#120a1f]/90 p-8 rounded-2xl border border-purple-500/30 hover:border-[#a855f7] transition-colors shadow-2xl relative overflow-hidden group">
                <h4 className="text-2xl font-bold text-white mb-4 border-b border-purple-500/30 pb-2">Web (Discord-like)</h4>
                <ul className="text-gray-300 space-y-3 mt-4 text-sm leading-relaxed">
                  <li><strong className="text-purple-300">Comunicação em Tempo Real:</strong> Chat de texto e canais integrados.</li>
                  <li><strong className="text-purple-300">Chamadas de Voz e Vídeo:</strong> Conecte-se com sua mesa via WebRTC.</li>
                  <li><strong className="text-purple-300">Bot de Dados:</strong> Role dados no chat usando "!d20".</li>
                  <li><strong className="text-purple-300">Mesa Interativa:</strong> Posicione tokens e compartilhe telas.</li>
                  <li><strong className="text-purple-300">Criação em Pixel Art:</strong> Crie e customize mapas e tokens diretamente na plataforma.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* RODAPÉ ATUALIZADO */}
        <footer className="relative z-10 text-center py-10 border-t border-[#2b1f3d] text-gray-400 text-sm bg-[#0a0416]">
          <p className="mb-2">ArcaneVoid &copy; {new Date().getFullYear()} - Desenvolvido por <strong className="text-white">Kemily De Almeida</strong> como Projeto de TCC.</p>
          <p>
            Instagram: <a href="https://instagram.com/amantedaarte13" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors font-bold">@amantedaarte13</a>
          </p>
        </footer>
      </div>
    </div>
  );
}