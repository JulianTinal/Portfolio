import React from 'react';
import tripea from '/public/images/tripea.jpg';
import egu from '/public/images/egu.jpg';
import { FaReact, FaHtml5, FaCss3Alt, FaPhp, FaNodeJs, FaLaravel, FaVuejs, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiJavascript, SiApachekafka, SiRedux } from 'react-icons/si';

const ProyectosComponent = () => {
  const projects = [ 
    { title: "TRIPEA", 
      description: "Desarrollo de una web dinámica para un cliente llamado Tripea, una agencia de viajes. Se implementó un diseño atractivo, un panel de administración y rutas protegidas. Además, se integró un sistema de traducción de la web de español a inglés para usuarios de habla inglesa.",
      link: "http://tripea-project.atwebpages.com/home", 
      image: tripea,
      icons: [FaLaravel, SiMysql, FaPhp, FaVuejs, FaBootstrap]
    }, 
    { title: "EGU-MERCH",
      description: "Desarrollo de una Progressive Web App (PWA) para una tienda de playeras con diseños de anime, que incluye un sistema de pago integrado y diversas funciones adicionales. La aplicación ofrece una interfaz amigable para el usuario, garantizando una experiencia de compra sencilla y agradable.", 
      link: "https://pwa-egu-merch.netlify.app/", 
      image: egu,
      icons: [FaReact, SiMysql, FaNodeJs, SiJavascript, SiTailwindcss ]
    } 
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-center  mb-12" data-aos="fade-in">Mis Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-aos="fade-in">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-purple-600 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={`Vista previa de ${project.title}`}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold bg-purple-500 px-4 py-2 rounded-md hover:bg-purple-600 transition-colors"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
            <div className="p-6 flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <div className="flex space-x-2">
                {project.icons.map((Icon, idx) => (
                  <Icon key={idx} className="text-white" size={24} />
                ))}
              </div>
            </div>
            <div className="p-6 -mt-12">
              <p className="text-gray-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProyectosComponent;
