import ThreeBackground from './ThreeBackground';

export default function LandingPage() {
  // 🔥 O link da sua pasta do Google Drive
  const linkDownloadLazarus = "https://drive.google.com/drive/folders/1WQ4VvThKu1T6_2ZrC7RTqMYhd_EvgBj5?usp=sharing";
  
  // 🔥 O link do seu sistema web na Vercel
  const linkSistemaWeb = "https://arcanevoid.vercel.app";

  return (
    <div className="relative min-h-screen bg-[#0a0416] overflow-hidden font-sans flex flex-col">
      <ThreeBackground />
      
      {/* Overlay para dar contraste ao texto */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0416]/80 via-transparent to-[#0a0416] pointer-events-none"></div>

      <div className="relative z-10 flex-1 flex flex-col">
        
        {/* CABEÇALHO */}
        <header className="w-full px-8 py-6 flex justify-between items-center backdrop-blur-sm bg-black/20 border-b border-purple-500/20">
          <div className="flex items-center gap-3">
            {/* Ícone geométrico substituindo o emoji */}
            <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <h1 className="text-2xl font-bold text-white tracking-widest" style={{ fontFamily: "'Cinzel', serif" }}>ARCANEVOID</h1>
          </div>
          <a 
            href={linkSistemaWeb} 
            className="px-6 py-2 bg-[#9333ea] hover:bg-[#a855f7] text-white rounded-md font-bold transition-all shadow-[0_0_15px_rgba(147,51,234,0.5)] border border-purple-400/50"
          >
            ACESSAR SISTEMA
          </a>
        </header>

        {/* SEÇÃO PRINCIPAL (HERO) */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 mt-20 mb-20 pointer-events-none">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]" style={{ fontFamily: "'Cinzel', serif" }}>
            Bem-vindo ao <br/> ArcaneVoid
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl font-serif italic mb-10 drop-shadow-md">
            Um sistema completo para Mestres e Jogadores de RPG de Mesa. 
            Gerencie seus servidores, crie mapas interativos e jogue com seus amigos em tempo real.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 pointer-events-auto">
            <a 
              href={linkDownloadLazarus} 
              target="_blank" 
              rel="noreferrer" 
              className="px-8 py-4 bg-[#1a1225]/90 border-2 border-[#9333ea]/50 text-purple-200 font-arcane tracking-widest rounded-xl hover:bg-[#2b1f3d] transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl"
            >
              BAIXAR SISTEMA DESKTOP
            </a>
            <a 
              href={linkSistemaWeb} 
              className="px-8 py-4 bg-gradient-to-r from-[#9333ea] to-[#7e22ce] text-white font-arcane tracking-widest rounded-xl shadow-[0_0_30px_rgba(147,51,234,0.6)] transition-all transform hover:scale-105 flex items-center justify-center gap-3"
            >
              ACESSAR SISTEMA WEB
            </a>
          </div>
        </main>

        {/* SEÇÃO INFORMATIVA (SOBRE O PROJETO) */}
        <section className="relative z-10 bg-[#0a0416]/95 backdrop-blur-lg border-t border-purple-500/20 py-16 mt-10">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-white mb-6 font-serif" style={{ fontFamily: "'Cinzel', serif" }}>
              Sobre o Projeto
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
              O ArcaneVoid é uma plataforma híbrida desenvolvida como Trabalho de Conclusão de Curso (TCC). 
              O sistema visa solucionar a desorganização de conteúdos e a dificuldade de comunicação em sessões de RPG online, 
              unindo o poder de um gerenciador de arquivos local com a interatividade de um chat em tempo real.
            </p>
          </div>
        </section>

        {/* SEÇÃO INFORMATIVA (FUNCIONALIDADES) */}
        <section className="relative z-10 bg-[#0a0416]/95 backdrop-blur-lg py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-center text-white mb-12 font-serif" style={{ fontFamily: "'Cinzel', serif" }}>
              Funcionalidades
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* Card Desktop */}
              <div className="bg-[#120a1f]/80 p-8 rounded-2xl border border-purple-500/20 hover:border-[#9333ea] transition-colors shadow-lg">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 border border-purple-500/30">
                   <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Sistema Desktop</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Desenvolvido em Lazarus (Pascal) e integrado ao PostgreSQL. Permite o gerenciamento completo de usuários, upload e download de livros, fichas, tokens e mapas, além de análises de dados.
                </p>
              </div>

              {/* Card Web */}
              <div className="bg-[#120a1f]/80 p-8 rounded-2xl border border-purple-500/20 hover:border-[#9333ea] transition-colors shadow-lg">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 border border-purple-500/30">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Mesa Virtual (Web)</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Uma interface estilo Discord desenvolvida em React e Node.js. Oferece chat de texto em tempo real, chamadas de voz WebRTC, compartilhamento de tela, bots de rolagem de dados e uma mesa interativa (canvas).
                </p>
              </div>

              {/* Card IA */}
              <div className="bg-[#120a1f]/80 p-8 rounded-2xl border border-purple-500/20 hover:border-[#9333ea] transition-colors shadow-lg">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 border border-purple-500/30">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Ferramentas de Criação</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Módulos dedicados para forjar tokens customizados, desenhar mapas diretamente no navegador e uma área de "Ideias de Missões" com suporte a Inteligência Artificial para auxiliar os Mestres.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RODAPÉ */}
        <footer className="relative z-10 text-center py-8 border-t border-[#2b1f3d] text-gray-500 text-sm bg-[#0a0416]">
          <p>ArcaneVoid © {new Date().getFullYear()} - Desenvolvido como Projeto de TCC.</p>
        </footer>
      </div>
    </div>
  );
}