import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight} from 'lucide-react';
import CopyButton from './components/ui/CoppyButton';
import Hero from '../app/components/app/Hero.jsx';
import Topbar from '../app/components/app/Topbar.jsx';
import Services from '../app/components/app/Services.jsx';
import About from '../app/components/app/About.jsx';
import Contact from '../app/components/app/Contact.jsx';
import Footer from '../app/components/app/Footer.jsx';
import Recognition from '../app/components/app/Recognition.jsx';
import SharedBackground from '../app/components/utils/SharedBackground.jsx';


export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('bienvenido');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#2B2A27] text-white">
      {/* Desktop Topbar Navigation */}
      <Topbar/>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-[#1A1918] border-b border-[#3D3C38] z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h2 className="text-[14px] font-semibold tracking-[0.12em] text-[#C4A259] uppercase">
              Estudio Jurídico
            </h2>
            <h1 className="text-[11px] font-light tracking-[0.06em] text-[#9D9585] uppercase">
              Penal Ferro
            </h1>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#C4A259] p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-[#1A1918] border-t border-[#3D3C38]">
            <ul className="py-4">
              {[
                { id: 'bienvenido', label: 'Bienvenido' },
                { id: 'sobre-nosotros', label: 'Sobre Nosotros' },
                { id: 'areas', label: 'Áreas de Ejercicio' },
                { id: 'contacto', label: 'Contacto' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-6 py-3 text-[13px] font-medium tracking-[0.08em] uppercase transition-all ${
                      activeSection === item.id
                        ? 'text-[#C4A259] bg-[#C4A259]/10'
                        : 'text-[#9D9585]'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main>
        <Hero/>
        <Services/>
        <SharedBackground>
          <About/>
          <Recognition/>
        </SharedBackground>
        <Contact/>
        <Footer/>
        
      </main>
    </div>
  );
}
