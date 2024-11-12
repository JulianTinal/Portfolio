import { useEffect } from 'react';
import ContenidoComponent from './components/ContenidoComponent/ContenidoComponent';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);
  return (
    <div className="min-h-screen w-full bg-black relative pt-16">
      <NavbarComponent />
      <ContenidoComponent />
    </div>
  );
}

export default App;
