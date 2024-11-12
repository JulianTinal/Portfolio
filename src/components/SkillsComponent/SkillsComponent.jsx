import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaPhp, FaNodeJs, FaLaravel, FaVuejs, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiJavascript, SiApachekafka, SiRedux } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const SkillsComponent = () => {
  return (
    <div className="mb-16 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-in">Tecnologías y Herramientas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12" data-aos="fade-in">
        {/* Frontend */}
        <div className="text-center">
          <h3 className="text-xl text-purple-400 font-semibold mb-6">Frontend</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <FaReact size={40} className="text-white hover:text-blue-400 transition-colors" />
              <span className="text-sm mt-2">React</span>
            </div>
            <div className="flex flex-col items-center">
              <FaVuejs size={40} className="text-white hover:text-green-400 transition-colors" />
              <span className="text-sm mt-2">Vue.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiJavascript size={40} className="text-white hover:text-yellow-400 transition-colors" />
              <span className="text-sm mt-2">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FaHtml5 size={40} className="text-white hover:text-orange-500 transition-colors" />
              <span className="text-sm mt-2">HTML5</span>
            </div>
          </div>
        </div>
        
        {/* Backend */}
        <div className="text-center">
          <h3 className="text-xl text-purple-400 font-semibold mb-6">Backend</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <FaNodeJs size={40} className="text-white hover:text-green-500 transition-colors" />
              <span className="text-sm mt-2">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <FaLaravel size={40} className="text-white hover:text-red-500 transition-colors" />
              <span className="text-sm mt-2">Laravel</span>
            </div>
            <div className="flex flex-col items-center">
              <FaPhp size={40} className="text-white hover:text-purple-400 transition-colors" />
              <span className="text-sm mt-2">PHP</span>
            </div>
            <div className="flex flex-col items-center">
              <TbApi size={40} className="text-white hover:text-blue-400 transition-colors" />
              <span className="text-sm mt-2">APIs</span>
            </div>
          </div>
        </div>

        {/* Database & Styling */}
        <div className="text-center sm:col-span-2 md:col-span-1 mx-auto w-full max-w-md">
          <h3 className="text-xl text-purple-400 font-semibold mb-6">Database & UI</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <SiMongodb size={40} className="text-white hover:text-green-500 transition-colors" />
              <span className="text-sm mt-2">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <SiMysql size={40} className="text-white hover:text-blue-500 transition-colors" />
              <span className="text-sm mt-2">MySQL</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss size={40} className="text-white hover:text-teal-400 transition-colors" />
              <span className="text-sm mt-2">Tailwind</span>
            </div>
            <div className="flex flex-col items-center">
              <FaBootstrap size={40} className="text-white hover:text-purple-400 transition-colors" />
              <span className="text-sm mt-2">Bootstrap</span>
            </div>
          </div>
        </div>
      </div>

      {/* Librerías Favoritas */}
      <div className="mt-12 text-center" data-aos="fade-in">
        <h3 className="text-xl text-purple-400 font-semibold mb-6">Librerías Favoritas</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-6 py-2 bg-gray-800 rounded-full text-sm hover:bg-purple-500 transition-colors">AOS</span>
          <span className="px-6 py-2 bg-gray-800 rounded-full text-sm hover:bg-purple-500 transition-colors">Notyf</span>
          <span className="px-6 py-2 bg-gray-800 rounded-full text-sm hover:bg-purple-500 transition-colors">Sweet Alert</span>
          <span className="px-6 py-2 bg-gray-800 rounded-full text-sm hover:bg-purple-500 transition-colors">ApexCharts</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;