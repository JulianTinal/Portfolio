import { useEffect, useState } from 'react';
import ContenidoComponent from './components/ContenidoComponent/ContenidoComponent';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1000, 
      once: true,
    });

    // Detectar dispositivo móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Parallax del mouse (solo desktop)
    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 12,
          y: (e.clientY / window.innerHeight - 0.5) * 12,
        });
      }
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  return (
    <div className="min-h-screen w-full bg-black relative overflow-x-hidden">
      {/* Fondo Animado Fijo */}
      <div className="fixed inset-0 z-0">
        {/* Orbes flotantes principales */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div 
          className="absolute top-60 right-20 w-96 h-96 bg-violet-500/15 rounded-full mix-blend-screen filter blur-3xl animate-pulse" 
          style={{ animationDelay: '2s' }}
        ></div>
        <div 
          className="absolute bottom-40 left-20 w-72 h-72 bg-purple-700/18 rounded-full mix-blend-screen filter blur-3xl animate-pulse" 
          style={{ animationDelay: '4s' }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-indigo-600/12 rounded-full mix-blend-screen filter blur-3xl animate-pulse" 
          style={{ animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-52 h-52 bg-pink-600/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" 
          style={{ animationDelay: '3s' }}
        ></div>
        <div 
          className="absolute top-10 left-1/2 w-44 h-44 bg-purple-500/15 rounded-full mix-blend-screen filter blur-3xl animate-pulse" 
          style={{ animationDelay: '5s' }}
        ></div>
        
        {/* Gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/8 via-transparent to-violet-900/8"></div>
        
        {/* Grid pattern con parallax */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="h-full w-full transition-transform duration-75 ease-out" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(147, 51, 234, 0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(147, 51, 234, 0.06) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
          ></div>
        </div>

        {/* Partículas flotantes (solo desktop) */}
        {!isMobile && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 15}s`,
                  animationDuration: `${15 + Math.random() * 25}s`
                }}
              ></div>
            ))}
          </div>
        )}
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 pt-16">
        <NavbarComponent />
        <ContenidoComponent />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          50% {
            transform: translateY(-120px) rotate(180deg);
            opacity: 0.9;
          }
          90% {
            opacity: 0.7;
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;