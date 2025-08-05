import React from 'react';
import tripea from '/public/images/tripea.jpg';
import egu from '/public/images/egu.jpg';
import wikidragon from '/public/images/wiki-dragon.png';
import XOPXOP from '/public/images/XOPXOP.jpg';
import CasaPastel from '/public/images/casapastel.jpg';
import CdGlendy from '/public/images/cd-glendy.jpg';
import { FaReact, FaHtml5, FaCss3Alt, FaPhp, FaNodeJs, FaLaravel, FaVuejs, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiJavascript, SiApachekafka, SiRedux } from 'react-icons/si';

const ProyectosComponent = () => {
  const projects = [ 
    { 
      title: "CASA PASTEL VERO",
      link: "https://pastel-vero.netlify.app/", 
      image: CasaPastel,
      icons: [FaReact, SiJavascript, SiTailwindcss]
    } ,
    { 
      title: "CD.GLENDY TINAL",
      link: "https://cd-glendy.netlify.app/", 
      image: CdGlendy,
      icons: [FaReact, SiJavascript, SiTailwindcss]
    } ,
     { 
      title: "TRIPEA", 
      link: "http://tripea-project.atwebpages.com/home", 
      image: tripea,
      icons: [FaLaravel, SiMysql, FaPhp, FaVuejs, FaBootstrap]
    },
    { 
      title: "XOPXOP",
      link: "https://xopxop.netlify.app/", 
      image: XOPXOP,
      icons: [FaReact, SiMysql, FaNodeJs, SiJavascript, SiTailwindcss]
    },
    
    { 
      title: "EGU-MERCH",
      link: "https://pwa-egu-merch.netlify.app/", 
      image: egu,
      icons: [FaReact, SiMysql, FaNodeJs, SiJavascript, SiTailwindcss]
    },
   
    { 
      title: "WIKI DRAGON",
      link: "https://wiki-dragon.netlify.app/", 
      image: wikidragon,
      icons: [FaReact, SiJavascript, SiTailwindcss]
    } 
  ];

  return (
    <section className="py-16">
  <div className="max-w-7xl text-center mx-auto px-4">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 tracking-tight px-4">
      <span className="block">Mis</span>
      <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
        Proyectos
      </span>
    </h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" data-aos="fade-in">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative cursor-pointer"
        >
          {/* Animated border gradient */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse group-hover:animate-none blur-sm"></div>
          
          <div className="relative bg-gradient-to-br from-gray-900 via-purple-950/30 to-black rounded-2xl overflow-hidden border border-purple-500/10 group-hover:border-transparent transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-[1.02]">
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute w-2 h-2 bg-purple-400/30 rounded-full top-4 left-4 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
              <div className="absolute w-1 h-1 bg-pink-400/40 rounded-full top-8 right-8 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
              <div className="absolute w-1.5 h-1.5 bg-purple-300/20 rounded-full bottom-12 left-6 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500"></div>
            </div>

            {/* Image with advanced overlay */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={`Vista previa de ${project.title}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
              />
              
              {/* Multi-layer overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated scan line */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out skew-x-12"></div>
              
              {/* Interactive buttons */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 px-4 py-2 bg-purple-600/90 hover:bg-purple-500 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 backdrop-blur-sm"
                  >
                    <span>Ver proyecto</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Content with advanced animations */}
            <div className="relative p-5 space-y-4">
              {/* Title with typewriter effect simulation */}
              <div className="overflow-hidden">
                <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-200 group-hover:to-pink-200 group-hover:bg-clip-text transition-all duration-500 leading-tight transform translate-y-0 group-hover:-translate-y-0.5">
                  {project.title}
                </h3>
              </div>

              {/* Animated divider */}
              <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>

              {/* Tech stack with stagger animation */}
              <div className="flex items-center gap-2 flex-wrap">
                {project.icons.slice(0, 6).map((Icon, idx) => (
                  <div 
                    key={idx} 
                    className="group/icon relative flex items-center justify-center w-9 h-9 bg-purple-900/20 hover:bg-purple-800/40 rounded-xl transition-all duration-300 hover:scale-125 hover:rotate-12 transform"
                    style={{
                      transitionDelay: `${idx * 50}ms`
                    }}
                  >
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 bg-purple-500/20 rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <Icon 
                      className="relative z-10 text-purple-300/80 group-hover/icon:text-purple-100 transition-all duration-300 group-hover/icon:drop-shadow-lg" 
                      size={16}
                    />
                    
                    {/* Ripple effect */}
                    <div className="absolute inset-0 bg-purple-400/30 rounded-xl scale-0 group-hover/icon:scale-150 opacity-100 group-hover/icon:opacity-0 transition-all duration-500"></div>
                  </div>
                ))}
                
                {project.icons.length > 6 && (
                  <div className="flex items-center justify-center w-9 h-9 bg-purple-900/20 rounded-xl group-hover:bg-purple-800/40 transition-all duration-300">
                    <span className="text-purple-300/60 text-xs font-bold group-hover:text-purple-200 transition-colors duration-300">
                      +{project.icons.length - 6}
                    </span>
                  </div>
                )}
              </div>

              {/* Progress bar animation */}
              <div className="relative h-1 bg-purple-900/20 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out delay-300"></div>
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default ProyectosComponent;