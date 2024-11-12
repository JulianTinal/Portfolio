import React, { useState } from 'react';
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope ,FaWhatsapp } from 'react-icons/fa';

const NavbarComponent = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  // Reemplaza "TUNUMERO" con tu número de teléfono incluyendo código de país
  // Por ejemplo: "5219991234567" para México (+52) y el número 9991234567
  const whatsappNumber = "5219991746477";
  const whatsappMessage = "¡Hola! Me gustaria hacerte una oferta";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const navItems = [
    { id: 'about', icon: FaUser, text: 'Sobre Mi', href: '#about' },
    { id: 'skills', icon: FaTools, text: 'Habilidades', href: '#skills' },
    { id: 'projects', icon: FaProjectDiagram, text: 'Proyectos', href: '#projects' },
    { id: 'contact', icon: FaWhatsapp, text: 'Contacto', href: whatsappUrl, isExternal: true }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-md border-b border-white/10 text-white p-4 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center space-x-2 md:space-x-8">
          {navItems.map(({ id, icon: Icon, text, href, isExternal }) => (
            <a
              key={id}
              href={href}
              target={isExternal ? "_blank" : "_self"}
              rel={isExternal ? "noopener noreferrer" : ""}
              onClick={(e) => {
                if (!isExternal) {
                  handleClick(id);
                }
              }}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg
                transition-all duration-300
                ${activeSection === id 
                  ? 'bg-purple-500 text-white scale-105' 
                  : 'hover:bg-white/10'}
                group relative
              `}
            >
              <Icon size={20} className={`
                transition-all duration-300
                ${activeSection === id ? 'text-white' : 'text-gray-400 group-hover:text-white'}
              `} />
              <span className={`
                hidden md:block text-sm font-medium
                transition-all duration-300
                ${activeSection === id ? 'text-white' : 'text-gray-400 group-hover:text-white'}
              `}>
                {text}
              </span>
              
              {activeSection === id && (
                <div className="absolute inset-0 -z-10 bg-purple-600/20 blur-xl rounded-lg"></div>
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;