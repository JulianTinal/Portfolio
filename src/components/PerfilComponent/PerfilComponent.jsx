import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, Facebook, ChevronDown } from 'lucide-react';

const PerfilComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { href: "https://github.com/JulianTinal", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/julian-tinal-272692321/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.facebook.com/profile.php?id=100063557323309", icon: Facebook, label: "Facebook" },
    { href: "mailto:julian.tinal.15tvsec@gmail.com", icon: Mail, label: "Email" }
  ];

  return (
    <div className="min-h-screen -mt-10 w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      {/* Efectos de fondo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className={`relative w-full max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* Sección de imagen circular */}
          <div className="relative group w-full max-w-xs lg:max-w-md">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
            
            {/* Contenedor circular */}
            <div className="relative overflow-hidden rounded-full border-4 border-purple-500/30 shadow-2xl w-full aspect-square">
              <img 
                src="/public/images/cv.jpg"
                alt="Julian Gabriel Varguez Tinal"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Redes sociales */}
            <div className="flex justify-center gap-4 mt-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 hover:bg-purple-600/40 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    <Icon size={24} className="text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Sección de contenido */}
          <div className="w-full max-w-2xl text-center lg:text-left">
            {/* Título con efecto de gradiente */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="block">JULIAN GABRIEL</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                VARGUEZ TINAL
              </span>
            </h1>

            {/* Subtítulo */}
            <div className="my-6">
              <span className="inline-block text-2xl sm:text-3xl text-purple-400 font-mono font-bold py-2 px-6 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30">
                DESARROLLADOR FULL STACK
              </span>
            </div>

            {/* Descripción */}
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-10">
  Soy una persona responsable, comprometido con lo que hago. Me gusta el diseño, por lo que disfruto tanto el área de programación 
  <span className="text-purple-400 font-medium"> backend</span> como 
  <span className="text-pink-400 font-medium"> frontend</span>. 
  Me encanta aprender cosas nuevas, soy muy sociable y trabajo muy bien en equipo.
</p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a 
                href="/public/micv.pdf"
                download="Julian_Varguez_CV.pdf"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-xl text-xl font-bold text-white hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
              >
                <Download size={24} />
                DESCARGAR CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilComponent;