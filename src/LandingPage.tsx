import ThreeBackground from './ThreeBackground';

export default function LandingPage() {
  // Lembre-se de colocar &confirm=t no final se o Drive avisar sobre vírus
  const linkDownloadLazarus = "https://drive.google.com/uc?export=download&id=1cYb4LcaTX8_FYneZTf89SXIyhJ7X-TP2&confirm=t";
  const linkSistemaWeb = "https://arcanevoid.vercel.app";

  return (
    <div className="relative min-h-screen bg-[#0a0416] font-sans flex flex-col overflow-x-hidden">
      <ThreeBackground />
      
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#0a0416]/60 via-[#0a0416]/90 to-[#0a0416] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col">
        
        {/* CABEÇALHO (SEM ÍCONE) */}
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

        {/* SEÇÃO 2: GALERIA DE IMAGENS (PREVIEW) */}
        <section className="relative z-10 bg-[#0d0714]/95 backdrop-blur-xl border-t border-purple-500/20 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-4xl font-bold text-center text-white mb-16 font-serif" style={{ fontFamily: "'Cinzel', serif" }}>
              Conheça a Interface
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Print Lazarus */}
              <div className="bg-[#120a1f]/90 p-4 rounded-2xl border border-purple-500/30 hover:border-[#a855f7] transition-colors shadow-2xl">
                <div className="rounded-xl overflow-hidden mb-4 border border-gray-700/50 bg-black flex items-center justify-center aspect-video">
                  {/* 🔥 SUBSTITUA O NOME ABAIXO PELO NOME DA FOTO QUE VOCÊ SALVOU NA PASTA PUBLIC */}
                  <img src="/print-lazarus.png" alt="Interface do Sistema Desktop (Lazarus)" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-2">Aplicação Desktop</h4>
                <p className="text-sm text-gray-400 text-center">Gerenciamento de arquivos, banco de dados e livros.</p>
              </div>

              {/* Print Web */}
              <div className="bg-[#120a1f]/90 p-4 rounded-2xl border border-purple-500/30 hover:border-[#a855f7] transition-colors shadow-2xl">
                <div className="rounded-xl overflow-hidden mb-4 border border-gray-700/50 bg-black flex items-center justify-center aspect-video">
                  {/* 🔥 SUBSTITUA O NOME ABAIXO PELO NOME DA FOTO QUE VOCÊ SALVOU NA PASTA PUBLIC */}
                  <img src="/print-web.png" alt="Interface da Mesa Virtual Web" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-2">Mesa Virtual Web</h4>
                <p className="text-sm text-gray-400 text-center">Chat em tempo real, voz, bot de dados e mapas.</p>
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