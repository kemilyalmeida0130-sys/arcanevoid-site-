import ThreeBackground from './ThreeBackground';

export default function LandingPage() {
  // Link direto do Google Drive (já convertido para baixar na hora)
  const linkDownloadLazarus = "https://drive.google.com/uc?export=download&id=1cYb4LcaTX8_FYneZTf89SXIyhJ7X-TP2";
  const linkSistemaWeb = "https://arcanevoid.vercel.app";

  return (
    <div className="relative min-h-screen bg-[#0a0416] font-sans flex flex-col overflow-x-hidden">
      <ThreeBackground />
      
      {/* Fundo escuro para dar contraste */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#0a0416]/60 via-[#0a0416]/90 to-[#0a0416] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col">
        
        {/* CABEÇALHO FIXO */}
        <header className="w-full px-8 py-6 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-purple-500/20 sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <h1 className="text-2xl font-bold text-white tracking-widest" style={{ fontFamily: "'Cinzel', serif" }}>ARCANEVOID</h1>
          </div>
          <a href={linkSistemaWeb} className="px-6 py-2 bg-[#9333ea] hover:bg-[#a855f7] text-white rounded-md font-bold transition-all shadow-[0_0_15px_rgba(147,51,234,0.5)] border border-purple-400/50">
            ACESSAR SISTEMA
          </a>
        </header>

        {/* SEÇÃO 1: HERO */}
        <main className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]" style={{ fontFamily: "'Cinzel', serif" }}>
            Bem-vindo ao <br/> ArcaneVoid
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl font-serif italic mb-10 drop-shadow-md">
            A plataforma definitiva para unir sua biblioteca de RPG à mesa virtual.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 pointer-events-auto">
            {/* BOTÃO DE DOWNLOAD DIRETO */}
            <a 
              href={linkDownloadLazarus} 
              className="px-8 py-4 bg-[#1a1225]/90 border-2 border-[#9333ea]/50 text-purple-200 font-arcane tracking-widest rounded-xl hover:bg-[#2b1f3d] transition-all transform hover:scale-105 flex items-center justify-center shadow-xl"
            >
              BAIXAR SISTEMA DESKTOP
            </a>
            <a 
              href={linkSistemaWeb} 
              className="px-8 py-4 bg-gradient-to-r from-[#9333ea] to-[#7e22ce] text-white font-arcane tracking-widest rounded-xl shadow-[0_0_30px_rgba(147,51,234,0.6)] transition-all transform hover:scale-105 flex items-center justify-center"
            >
              ACESSAR SISTEMA WEB
            </a>
          </div>

          {/* SETA INDICANDO ROLAGEM */}
          <div className="mt-24 animate-bounce pointer-events-none flex flex-col items-center">
             <span className="text-purple-400 text-xs font-arcane tracking-widest mb-2">SAIBA MAIS</span>
             <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
        </main>

        {/* SEÇÃO 2: SOBRE O PROJETO */}
        <section className="relative z-10 bg-[#0d0714]/95 backdrop-blur-xl border-t border-purple-500/20 py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-4xl font-bold text-white mb-8 font-serif" style={{ fontFamily: "'Cinzel', serif" }}>
              Sobre o Projeto
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed text-justify md:text-center">
              O ArcaneVoid é um sistema híbrido desenvolvido como Trabalho de Conclusão de Curso (TCC). 
              Ele resolve a fragmentação de ferramentas no mundo do RPG de mesa, oferecendo um ambiente 
              completo para o Mestre e os Jogadores. Através da integração de um banco de dados PostgreSQL, 
              todas as informações, desde fichas de personagens até mensagens de chat, são sincronizadas em tempo real.
            </p>
          </div>
        </section>

        {/* SEÇÃO 3: FUNCIONALIDADES */}
        <section className="relative z-10 bg-[#0a0416]/98 backdrop-blur-xl py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-4xl font-bold text-center text-white mb-16 font-serif" style={{ fontFamily: "'Cinzel', serif" }}>
              Recursos do Sistema
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* Bloco Desktop */}
              <div className="bg-[#120a1f]/90 p-8 rounded-2xl border border-purple-500/30 hover:border-[#a855f7] transition-colors shadow-2xl">
                <h4 className="text-2xl font-bold text-white mb-4 border-b border-purple-500/30 pb-2">Aplicação Desktop (Lazarus)</h4>
                <ul className="text-gray-300 space-y-3 mt-4 text-sm leading-relaxed">
                  <li><strong className="text-purple-300">Gerenciamento de Acervo:</strong> Faça upload e organize livros, mapas, tokens e fichas em um só lugar.</li>
                  <li><strong className="text-purple-300">Histórico e Favoritos:</strong> Acesse rapidamente os conteúdos que você mais usa ou baixou.</li>
                  <li><strong className="text-purple-300">Análise de Dados:</strong> Monitore o engajamento e as estatísticas de uso da plataforma.</li>
                  <li><strong className="text-purple-300">Integração Local:</strong> Conexão direta e otimizada com o banco de dados PostgreSQL.</li>
                </ul>
              </div>

              {/* Bloco Web */}
              <div className="bg-[#120a1f]/90 p-8 rounded-2xl border border-purple-500/30 hover:border-[#a855f7] transition-colors shadow-2xl">
                <h4 className="text-2xl font-bold text-white mb-4 border-b border-purple-500/30 pb-2">Mesa Virtual (Web)</h4>
                <ul className="text-gray-300 space-y-3 mt-4 text-sm leading-relaxed">
                  <li><strong className="text-purple-300">Comunicação em Tempo Real:</strong> Chat de texto integrado com canais e servidores, no melhor estilo Discord.</li>
                  <li><strong className="text-purple-300">Chamadas de Voz e Vídeo:</strong> Conecte-se com sua mesa via WebRTC, incluindo compartilhamento de tela.</li>
                  <li><strong className="text-purple-300">Bot de Dados:</strong> Role dados diretamente no chat usando comandos simples como "!d20".</li>
                  <li><strong className="text-purple-300">Mesa Interativa:</strong> Posicione tokens, desenhe e gerencie cenas diretamente no navegador.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* RODAPÉ */}
        <footer className="relative z-10 text-center py-10 border-t border-[#2b1f3d] text-gray-500 text-sm bg-[#0a0416]">
          <p>ArcaneVoid &copy; {new Date().getFullYear()} - Desenvolvido como Projeto de TCC.</p>
        </footer>
      </div>
    </div>
  );
}