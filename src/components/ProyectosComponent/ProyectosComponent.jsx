import React from 'react';
import tripea from '/public/images/tripea.jpg';
import egu from '/public/images/egu.jpg';
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
    } 
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-7xl  mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16 relative">
          <span className="relative inline-block" data-aos="fade-in" >
            Mis Proyectos
            <span className="absolute bottom-0 left-0 w-full h-1 "></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" data-aos="fade-in">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
            >
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
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 flex-wrap justify-end">
                    {project.icons.map((Icon, idx) => (
                      <Icon 
                        key={idx} 
                        className="text-purple-300 hover:text-purple-400 transform hover:scale-110 transition-all duration-300" 
                        size={28} 
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed -mt-5">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProyectosComponent;