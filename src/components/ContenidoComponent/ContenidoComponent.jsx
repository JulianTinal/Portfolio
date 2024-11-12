import React from 'react';
import PerfilComponent from '../../components/PerfilComponent/PerfilComponent';
import SkillsComponent from '../../components/SkillsComponent/SkillsComponent';
import ProyectosComponent from '../../components/ProyectosComponent/ProyectosComponent';

const ContenidoComponent = () => {
  return (
    <div className="py-8 px-4 text-white">
      <section id='about'>
      <PerfilComponent />
      </section>
      <br />
      <section id='skills'>
      <SkillsComponent />
      </section>
      <br />
      <section id='projects'>
      <ProyectosComponent />
      </section>
    </div>
  );
};

export default ContenidoComponent;
