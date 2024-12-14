import React from 'react';
import tripea from '/public/images/tripea.jpg';
import egu from '/public/images/egu.jpg';
import wikidragon from '/public/images/wiki-dragon.png';
import { FaReact, FaHtml5, FaCss3Alt, FaPhp, FaNodeJs, FaLaravel, FaVuejs, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiJavascript, SiApachekafka, SiRedux } from 'react-icons/si';

const ProyectosComponent = () => {
  const projects = [ 
    { 
      title: "TRIPEA", 
      description: "Desarrollo de una web dinámica para un cliente llamado Tripea, una agencia de viajes. Se implementó un diseño atractivo, un panel de administración y rutas protegidas. Además, se integró un sistema de traducción de la web de español a inglés para usuarios de habla inglesa.",
      link: "http://tripea-project.atwebpages.com/home", 
      image: tripea,
      icons: [FaLaravel, SiMysql, FaPhp, FaVuejs, FaBootstrap]
    }, 
    { 
      title: "EGU-MERCH",
      description: "Desarrollo de una Progressive Web App (PWA) para una tienda de playeras con diseños de anime, que incluye un sistema de pago integrado y diversas funciones adicionales. La aplicación ofrece una interfaz amigable para el usuario, garantizando una experiencia de compra sencilla y agradable.", 
      link: "https://pwa-egu-merch.netlify.app/", 
      image: egu,
      icons: [FaReact, SiMysql, FaNodeJs, SiJavascript, SiTailwindcss]
    },

    { 
      title: "WIKI DRAGON",
      description: "Wiki Dragon es una plataforma en línea diseñada para que los fanáticos de Dragon Ball puedan explorar y descubrir diferentes personajes dentro de sus respectivas sagas. Utiliza la API proporcionada por Dragon Ball API para obtener información detallada y actualizada. Si eres un apasionado de Dragon Ball, ¡esta página web te encantará!", 
      link: "https://wiki-dragon.netlify.app/", 
      image: wikidragon,
      icons: [FaReact,  SiJavascript, SiTailwindcss]
    } 
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16 relative">
          <span className="relative inline-block" data-aos="fade-in">
            Mis Proyectos
            <span className="absolute bottom-0 left-0 w-full h-1"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" data-aos="fade-in">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
            >
              {/* Contenedor de imagen */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Vista previa de ${project.title}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg transform hover:bg-purple-700 transition-colors duration-300 hover:scale-105"
                  >
                    Ver proyecto
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                {/* Título */}
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-4">
                  {project.title}
                </h3>
                
                {/* Descripción */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Separador */}
                <div className="w-full h-px bg-purple-500/20 mb-6"></div>

                {/* Tecnologías - Título */}
                <h4 className="text-sm uppercase tracking-wider text-purple-400 mb-3">
                  Tecnologías utilizadas
                </h4>

                {/* Contenedor de iconos */}
                <div className="flex flex-wrap gap-4">
                  {project.icons.map((Icon, idx) => (
                    <div 
                      key={idx} 
                      className="bg-purple-900/30 p-2 rounded-lg hover:bg-purple-900/50 transition-all duration-300"
                    >
                      <Icon 
                        className="text-purple-300 hover:text-purple-400 transition-colors duration-300" 
                        size={24}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProyectosComponent;