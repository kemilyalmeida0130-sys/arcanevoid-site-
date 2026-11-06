import ThreeBackground from './ThreeBackground';

export default function LandingPage() {
  // 🔥 COLOQUE AQUI O LINK DO SEU ARQUIVO .ZIP DO LAZARUS
  const linkDownloadLazarus = "https://drive.google.com/SEU_LINK_AQUI";
  
  // 🔥 Link do seu sistema web na Vercel
  const linkSistemaWeb = "https://arcanevoid.vercel.app";

  return (
    <div className="relative min-h-screen bg-[#0a0416] overflow-hidden font-sans flex flex-col">
      <ThreeBackground />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0416]/70 via-transparent to-[#0a0416] pointer-events-none"></div>

      <div className="relative z-10 flex-1 flex flex-col">
        <header className="w-full px-8 py-6 flex justify-between items-center backdrop-blur-sm bg-black/20 border-b border-purple-500/20">
          <div className="flex items-center gap-3">
            <span className="text-3xl text-purple-400">🔮</span>
            <h1 className="text-2xl font-bold text-white tracking-widest" style={{ fontFamily: "'Cinzel', serif" }}>ARCANEVOID</h1>
          </div>
          <a href={linkSistemaWeb} className="px-6 py-2 bg-[#9333ea] hover:bg-[#a855f7] text-white rounded-md font-bold transition-all shadow-[0_0_15px_rgba(147,51,234,0.5)]">
            ACESSAR SISTEMA
          </a>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 mt-20 pointer-events-none">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]" style={{ fontFamily: "'Cinzel', serif" }}>
            Bem-vindo ao <br/> ArcaneVoid
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl font-serif italic mb-10 drop-shadow-md">
            Um sistema completo para Mestres e Jogadores de RPG de Mesa. 
            Gerencie seus servidores, crie mapas interativos e jogue com seus amigos em tempo real.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 pointer-events-auto">
            <a href={linkDownloadLazarus} target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#1a1225]/90 border-2 border-[#9333ea]/50 text-purple-200 font-arcane tracking-widest rounded-xl hover:bg-[#2b1f3d] transition-all transform hover:scale-105 flex items-center gap-3 shadow-xl">
              <span className="text-2xl">💾</span> BAIXAR SISTEMA DESKTOP
            </a>
            <a href={linkSistemaWeb} className="px-8 py-4 bg-gradient-to-r from-[#9333ea] to-[#7e22ce] text-white font-arcane tracking-widest rounded-xl shadow-[0_0_30px_rgba(147,51,234,0.6)] transition-all transform hover:scale-105 flex items-center gap-3">
              <span className="text-2xl">🌐</span> ACESSAR SISTEMA WEB
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}