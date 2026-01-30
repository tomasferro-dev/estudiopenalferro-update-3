import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, ShieldCheck, Scale, Binary, ChevronDown} from 'lucide-react';
import aboutImage from "../assets/images/josefina-recreado.png";
import CopyButton from './components/ui/CoppyButton';
import { FileUser } from "lucide-react";
import Hero from '../app/components/app/Hero.jsx';
import Topbar from '../app/components/app/Topbar.jsx';
import Services from '../app/components/app/Services.jsx';
import About from '../app/components/app/About.jsx';


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

      {/* Main Content */}
      <main>
        <Hero/>
        
        <Services/>
        

        {/* About Section */}
        <About/>

        <section 
          id='global'
          className="py-20 lg:py-32 bg-[#3D3928]">


        </section>

        

        {/* Contact Section */}
        <section
          id="contacto"
          className="py-20 lg:py-32 bg-[#3D3928]">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6 tracking-wide">
                Contacto
              </h2>
              <div className="w-16 h-[2px] bg-[#C4A259] mx-auto mb-6"></div>
              <p className="text-[#D4CDB8] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Estamos disponibles para atender su consulta. Contáctenos a través de
                cualquiera de los siguientes medios.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Phone */}
              <div                 className="bg-[#1A1918] p-8 text-center hover:bg-[#C4A259]/10 border border-[#3D3C38] hover:border-[#C4A259] transition-all duration-300 group"
>
                <a
                href="tel:+5492616123456"
              >
                <div className="w-14 h-14 bg-[#C4A259]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C4A259] transition-all">
                  <Phone className="text-[#C4A259] group-hover:text-[#1A1918]" size={24} />
                </div>
                <h3 className="text-sm font-semibold tracking-[0.08em] uppercase text-[#C4A259] mb-2">
                  Teléfono
                </h3>
                <p className="text-[#D4CDB8] text-base">
                  +54 9 261 658 9732
                </p>
                
                <div className="h-6" aria-hidden="true" />
                
                </a>
                <section style={{ marginTop: 24 }}>
                  <pre
                    style={{
                      maxWidth: 680,
                      maxHeight: 220,
                      overflow: "auto",
                      background: "#11182710",
                      padding: 12,
                      borderRadius: 8,
                    }}
                  >
                  </pre>
                  <CopyButton
                    text={`+5492616123456`}
                    label="Copiar Teléfono"
                  />
                </section>
              </div>


              {/* Email */}
              <div
                className="bg-[#1A1918] p-8 text-center hover:bg-[#C4A259]/10 border border-[#3D3C38] hover:border-[#C4A259] transition-all duration-300 group"
              >
              <a
                href="mailto:estudioabogferro@gmail.com"
              >
                <div className="w-14 h-14 bg-[#C4A259]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C4A259] transition-all">
                  <Mail className="text-[#C4A259] group-hover:text-[#1A1918]" size={24} />
                </div>
                <h3 className="text-sm font-semibold tracking-[0.08em] uppercase text-[#C4A259] mb-2">
                  Email
                </h3>
                <p className="text-[#D4CDB8] text-base break-all">
                  estudioabogferro
                </p>
                <p className="text-[#D4CDB8] text-base break-all" >
                  @gmail.com  
                </p>
              </a>

                <section style={{ marginTop: 24 }}>
                  <pre
                    style={{
                      maxWidth: 680,
                      maxHeight: 220,
                      overflow: "auto",
                      background: "#11182710",
                      padding: 12,
                      borderRadius: 8,
                    }}
                  >
                  </pre>
                  <CopyButton
                    text={`estudioabogferro@gmail.com`}
                    label="Copiar Correo"
                  />
                </section>

              </div>


              {/* Location */}
              <div className="bg-[#1A1918] p-8 text-center border border-[#3D3C38]">
                <div className="w-14 h-14 bg-[#C4A259]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-[#C4A259]" size={24} />
                </div>
                <h3 className="text-sm font-semibold tracking-[0.08em] uppercase text-[#C4A259] mb-2">
                  Ubicación
                </h3>
                <p className="text-[#D4CDB8] text-base">
                  Mendoza, Argentina
                </p>
                <div className="h-6" aria-hidden="true" />

                <section style={{ marginTop: 24 }}>
        <pre
          style={{
            maxWidth: 680,
            maxHeight: 220,
            overflow: "auto",
            background: "#11182710",
            padding: 12,
            borderRadius: 8,
          }}
        >
        </pre>
        <CopyButton
          text={`Av. Bartolomé Mitre 565
                Planta baja, oficina 16
                Ciudad de Mendoza, Mendoza, Argentina`}
          label="Copiar Dirección"
        />
          </section>
        </div>
      </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              
              <a
                href="https://wa.me/2616589732"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C4A259] text-[#1A1918] px-8 py-4 text-sm font-semibold tracking-[0.08em] uppercase hover:bg-[#D4B36A] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Consultar por WhatsApp
                <ChevronRight size={18} />
              </a>
            </div>
            <div className="text-center mt-12">
              <p className="text-[#D4CDB8] text-base break-all">
                Encontranos en:
              </p>
              
            </div>
              <div className="w-12 h-[2px] bg-[#C4A259] mx-auto mb-2 mt-2"></div>
              
<div className="text-center mt-4 px-4">
  <div
    className="
      mx-auto
      flex items-center justify-center
      text-[#1A1918]
      py-4
      text-sm font-semibold tracking-[0.08em] uppercase
      transition-all duration-300 shadow-lg hover:shadow-xl
      w-full
      max-w-full
      lg:max-w-4xl
      xl:max-w-5xl
      overflow-hidden
    "
  >
    <iframe
      id="map-canvas"
      className="
        w-full
        h-[260px] sm:h-[300px] md:w-[700px]
        rounded-md
      "
      frameBorder="0"
      scrolling="no"
      src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Av.%20Bartolomé%20Mitre%20565,%20Mendoza&t=&z=14&ie=UTF8&iwloc=B&output=embed"
   
>

                  </iframe>
                </div>
              </div>
            </div>
          </section>

        {/* Footer */}
        <footer className="bg-[#1A1918] border-t border-[#3D3C38] py-8">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center">
              <p className="text-[#9D9585] text-sm tracking-wide">
                © 2026 Estudio Jurídico Penal Ferro y Asoc. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
