import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profile from '/public/images/cv.jpg';
import cv from '/public/micv.pdf';

const PerfilComponent = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 text-white">
      <div className="text-center md:text-left" data-aos="fade-in">
        <div className="w-64 h-64 mx-auto mb-2 relative">
          <img 
            src={profile}
            alt="Foto de perfil"
            className="rounded-full w-full h-full object-cover border-4 border-purple-500"
          />
          {/* Botones sociales circulares */}
          <div className="flex gap-4 justify-center md:justify-center mt-4">
            <a 
              href="https://github.com/JulianTinal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full w-12 h-12 bg-purple-500 hover:bg-purple-600 flex items-center justify-center transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/julian-tinal-272692321/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full w-12 h-12 bg-purple-500 hover:bg-purple-600 flex items-center justify-center transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:julian.tinal.15tvsec@gmail.com" 
              className="rounded-full w-12 h-12 bg-purple-500 hover:bg-purple-600 flex items-center justify-center transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="text-center" data-aos="fade-in">
        <h1 className="text-4xl font-bold mt-5 mb-2">JULIAN GABRIEL VARGUEZ TINAL</h1>
        <p className="text-xl text-purple-400 mb-2">DESARROLLADOR FULL STACK</p>
        <p className="text-gray-300 mb-4 max-w-prose mx-auto">
        Soy una persona responsable, comprometido con lo que hago. Me gusta el diseño, por lo que disfruto tanto el área de programación backend como frontend. Me encanta aprender cosas nuevas, soy muy sociable y trabajo muy bien en equipo.
        </p>
        <div className="flex justify-center font-bold">
          <a 
            href={cv} 
            download 
            className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-md transition-colors"
          >
            <Download size={20} />
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default PerfilComponent;
