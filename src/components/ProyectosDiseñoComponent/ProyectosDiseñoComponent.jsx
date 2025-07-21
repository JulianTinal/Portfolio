import { useState, useEffect } from "react";
import Fresas from "/public/images/fresas.jpg";
import LogoNovedades from "/public/images/Logo_Novedades.jpg";
import LogoChecoarts from "/public/images/Logo_Checoarts.jpg";
import CasaPastel from "/public/images/pastelvero.jpg";
import Luffy from "/public/images/luffy.jpg";
import Promocion from "/public/images/promocion.jpg";
import Invitacion from "/public/images/invitacion.png";
import Twitch from "/public/images/banerss.jpg";

const ProyectosDiseñoComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Proyectos de ejemplo con imágenes verticales
  const projects = [
    {
  id: 4,
  title: "Mockup de Playera Personalizada – Luffy Gear 5",
  image: Luffy,
  description:
    "Diseño y mockup personalizado de playera con temática de anime. Este modelo presenta a Monkey D. Luffy en su forma Gear 5, con ilustración central, efectos visuales y tipografía temática. Forma parte de una línea de diseños exclusivos para productos personalizados relacionados con anime.",
  tools: ["Photoshop", "Illustrator"],
  year: "2023",
  category: "Mockup / Diseño de Producto",
},
    {
      
      
id: 1,
  title: "Logo Novedades Mariluz",
  image: LogoNovedades,
  description:
    "Desarrollo completo de identidad visual para un boutique . Incluye logotipo, paleta de colores, tipografía y aplicaciones en diversos materiales. El diseño busca transmitir elegancia, estilo y cercanía a través de elementos visuales coherentes y sofisticados.",
  tools: ["Photoshop"],
  year: "2024",
  category: "Branding",
 },
   {
  id: 2,
  title: "Logo Checoarts",
  image: LogoChecoarts,
  description:
    "Desarrollo completo de identidad visual para negocio de servicios de diseño gráfico, diseño web y programación fullstack. Incluye logotipo, paleta de colores, tipografía y aplicaciones en diversos materiales. El diseño busca transmitir creatividad, profesionalismo e innovación a través de elementos visuales coherentes y modernos.",
  tools: ["Photoshop"],
  year: "2024",
  category: "Branding",
},
{
  id: 3,
  title: "Imagen Promocional – Web Casa Pastel Vero",
  image: CasaPastel,
  description:
    "Diseño de imagen promocional para presentar el desarrollo web de la pastelería Casa Pastel Vero. La pieza destaca el diseño moderno y responsivo del sitio, resaltando la identidad visual de la marca y su presencia digital.",
  tools: ["Canva"],
  year: "2023",
  category: "Marketing",
},
    
    {
  id: 5,
  title: "Promoción de Servicios Web – ChecoArts",
  image: Promocion,
  description:
    "Imagen promocional que presenta los servicios de diseño y desarrollo web ofrecidos por ChecoArts. Incluye diseño de landing pages, sistemas web (CMS), tiendas online y UI/UX. El diseño destaca por su estilo moderno y profesional, con un llamado a la acción claro y datos de contacto visibles.",
  tools: ["Canva"],
  year: "2023",
  category: "Web Design",
},
    {
  id: 6,
  title: "Invitación Personalizada – Fiesta Infantil",
  image: Invitacion,
  description:
    "Diseño gráfico original de invitación personalizada para fiesta infantil. Inspirada en el universo de Sonic, la invitación presenta un estilo colorido y dinámico con personajes icónicos y detalles del evento destacados en una composición llamativa. Ideal para celebraciones temáticas y proyectos de diseño personalizado.",
  tools: ["Illustrator", "Photoshop"],
  year: "2023",
  category: "Diseño Gráfico",
},
    {
  id: 7,
  title: "Banners para Canal de Twitch",
  image: Twitch,
  description:
    "Diseño de banners personalizados para canal de Twitch, enfocados en la promoción de redes sociales como Discord, Instagram y TikTok. Cada pieza utiliza fondos vibrantes, personajes de estilo anime y elementos visuales llamativos para captar la atención del público y reforzar la identidad del canal.",
  tools: ["Photoshop", "Illustrator"],
  year: "2023",
  category: "Diseño Digital",
},
  ];

  // Detectar si es móvil
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Auto-play del carrusel - 10 segundos en web, desactivado en móvil
  useEffect(() => {
    if (!isPaused && !isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [isPaused, isMobile, projects.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    );
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const getVisibleProjects = () => {
    const visible = [];
    const totalProjects = projects.length;

    if (isMobile) {
      // En móvil solo mostramos 3 imágenes: anterior, actual, siguiente
      const prevIndex = (currentIndex - 1 + totalProjects) % totalProjects;
      const nextIndex = (currentIndex + 1) % totalProjects;

      visible.push({ ...projects[prevIndex], position: "prev" });
      visible.push({ ...projects[currentIndex], position: "current" });
      visible.push({ ...projects[nextIndex], position: "next" });
    } else {
      // Lógica original para desktop
      for (let i = 2; i >= 1; i--) {
        const index = (currentIndex - i + totalProjects) % totalProjects;
        visible.push({ ...projects[index], position: `prev-${i}` });
      }

      visible.push({ ...projects[currentIndex], position: "current" });

      for (let i = 1; i <= 2; i++) {
        const index = (currentIndex + i) % totalProjects;
        visible.push({ ...projects[index], position: `next-${i}` });
      }
    }

    return visible;
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Elementos decorativos de fondo */}

      <div className="relative z-10 py-8 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header - Mejorado para responsive */}
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 tracking-tight px-4 ">
              <span className="block">Portfolio de</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Diseñador
              </span>
            </h1>

            <p className="text-xl  sm:text-2xl text-gray-300  max-w-2xl md:max-w-4xl mx-auto leading-relaxed  px-4 animate-fade-in">
              Creando experiencias visuales excepcionales que combinan
              estrategia, creatividad y funcionalidad. Cada proyecto es una
              historia única contada a través del diseño.
            </p>
          </div>

          {/* Carrusel de Imágenes - Totalmente responsive */}
          <div
            className="relative"
            onMouseEnter={() => !isMobile && setIsPaused(true)}
            onMouseLeave={() => !isMobile && setIsPaused(false)}
          >
            {/* Vista Desktop */}
            {!isMobile && (
              <div className="flex items-center justify-center h-[700px] relative overflow-hidden">
                {getVisibleProjects().map((project, index) => {
                  const isActive = project.position === "current";
                  const isPrev1 = project.position === "prev-1";
                  const isPrev2 = project.position === "prev-2";
                  const isNext1 = project.position === "next-1";
                  const isNext2 = project.position === "next-2";

                  let transformClasses = "";
                  let sizeClasses = "";
                  let opacityClasses = "";
                  let zIndexClasses = "";

                  if (isActive) {
                    transformClasses = "translate-x-0 scale-100";
                    sizeClasses = "w-[400px] h-[600px]";
                    opacityClasses = "opacity-100";
                    zIndexClasses = "z-30";
                  } else if (isPrev1) {
                    transformClasses = "-translate-x-[320px] scale-75";
                    sizeClasses = "w-[280px] h-[420px]";
                    opacityClasses = "opacity-70";
                    zIndexClasses = "z-20";
                  } else if (isPrev2) {
                    transformClasses = "-translate-x-[520px] scale-50";
                    sizeClasses = "w-[200px] h-[300px]";
                    opacityClasses = "opacity-40";
                    zIndexClasses = "z-10";
                  } else if (isNext1) {
                    transformClasses = "translate-x-[320px] scale-75";
                    sizeClasses = "w-[280px] h-[420px]";
                    opacityClasses = "opacity-70";
                    zIndexClasses = "z-20";
                  } else if (isNext2) {
                    transformClasses = "translate-x-[520px] scale-50";
                    sizeClasses = "w-[200px] h-[300px]";
                    opacityClasses = "opacity-40";
                    zIndexClasses = "z-10";
                  }

                  return (
                    <div
                      key={`${project.id}-${project.position}`}
                      className={`absolute transition-all duration-1000 ease-out cursor-pointer transform ${transformClasses} ${zIndexClasses} hover:scale-105`}
                      onClick={() =>
                        isActive
                          ? openModal(project)
                          : goToSlide(
                              projects.findIndex((p) => p.id === project.id)
                            )
                      }
                    >
                      <div
                        className={`relative overflow-hidden rounded-2xl transition-all duration-1000 ${sizeClasses} ${opacityClasses} shadow-2xl`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                        {isActive && (
                          <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/60 shadow-2xl shadow-purple-500/40 animate-pulse"></div>
                        )}

                        {!isActive && (
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 rounded-2xl"></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Vista Mobile - Carrusel horizontal mejorado */}
            {isMobile && (
              <div className="relative h-[500px] overflow-hidden">
                <div className="flex items-center justify-center h-full relative">
                  {getVisibleProjects().map((project, index) => {
                    const isActive = project.position === "current";
                    const isPrev = project.position === "prev";
                    const isNext = project.position === "next";

                    let transformClasses = "";
                    let sizeClasses = "";
                    let opacityClasses = "";
                    let zIndexClasses = "";

                    if (isActive) {
                      transformClasses = "translate-x-0 scale-100";
                      sizeClasses = "w-[280px] h-[420px]";
                      opacityClasses = "opacity-100";
                      zIndexClasses = "z-30";
                    } else if (isPrev) {
                      transformClasses = "-translate-x-[200px] scale-75";
                      sizeClasses = "w-[200px] h-[300px]";
                      opacityClasses = "opacity-50";
                      zIndexClasses = "z-20";
                    } else if (isNext) {
                      transformClasses = "translate-x-[200px] scale-75";
                      sizeClasses = "w-[200px] h-[300px]";
                      opacityClasses = "opacity-50";
                      zIndexClasses = "z-20";
                    }

                    return (
                      <div
                        key={`${project.id}-${project.position}`}
                        className={`absolute transition-all duration-700 ease-out cursor-pointer transform ${transformClasses} ${zIndexClasses}`}
                        onClick={() =>
                          isActive
                            ? openModal(project)
                            : goToSlide(
                                projects.findIndex((p) => p.id === project.id)
                              )
                        }
                      >
                        <div
                          className={`relative overflow-hidden rounded-xl transition-all duration-700 ${sizeClasses} ${opacityClasses} shadow-xl`}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                          {isActive && (
                            <div className="absolute inset-0 rounded-xl border-2 border-purple-500/50 shadow-lg shadow-purple-500/25"></div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Controles de navegación - Ajustados para mobile */}
            <button
              onClick={prevSlide}
              className={`absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 z-40 ${
                isMobile ? "w-12 h-12" : "w-16 h-16"
              } bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center text-white hover:bg-black/80 hover:border-purple-500/60 transition-all duration-300 shadow-lg`}
            >
              <svg
                className={`${isMobile ? "w-5 h-5" : "w-7 h-7"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className={`absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 z-40 ${
                isMobile ? "w-12 h-12" : "w-16 h-16"
              } bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center text-white hover:bg-black/80 hover:border-purple-500/60 transition-all duration-300 shadow-lg`}
            >
              <svg
                className={`${isMobile ? "w-5 h-5" : "w-7 h-7"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Indicadores y contador */}
          <div className="text-center mt-12 md:mt-16 px-4">
            {/* Indicadores */}
            <div className="flex justify-center gap-2 md:gap-3 mb-6 md:mb-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`${
                    isMobile ? "w-2 h-2" : "w-3 h-3"
                  } rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-purple-500 scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            {/* Contador */}
            <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
              <span className="text-purple-400 font-medium">
                {currentIndex + 1}
              </span>
              <div className="w-8 md:w-12 h-px bg-gray-600"></div>
              <span>{projects.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal - Responsive mejorado */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-2 md:p-4">
          <div className="bg-gray-900 rounded-2xl md:rounded-3xl max-w-7xl w-full max-h-[95vh] overflow-hidden shadow-2xl border border-purple-500/20">
            <div className="flex flex-col lg:flex-row max-h-[95vh] overflow-y-auto">
              {/* Imagen Section */}
              <div className="lg:w-3/5 bg-black relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 lg:h-full object-cover"
                />
                <div className="absolute top-4 md:top-6 left-4 md:left-6">
                  <span className="px-3 md:px-4 py-2 bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-xs md:text-sm font-medium">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-2/5 p-6 md:p-8 lg:p-12 bg-gray-900 relative">
                <div className="absolute top-4 md:top-6 right-4 md:right-6">
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 border border-gray-700 hover:border-purple-500/50"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="pr-12 md:pr-16">
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {selectedProject.title}
                  </h2>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-6 md:mb-8">
                   
                    
                   
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-8 md:mb-10 text-base md:text-lg">
                    {selectedProject.description}
                  </p>

                  <div className="mb-8 md:mb-10">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-purple-600 rounded-md flex items-center justify-center">
                        <svg
                          className="w-3 h-3 md:w-4 md:h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      Herramientas
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.tools.map((tool, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-200"
                        >
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-300 font-medium text-sm md:text-base">
                            {tool}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

               
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProyectosDiseñoComponent;
