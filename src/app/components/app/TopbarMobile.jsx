import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "/images/logo-6.png";

export default function TopbarMobile() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("bienvenido");
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    setActiveSection(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 backdrop-blur-md
			bg-[#1A1918]/40 border-b border-[#3D3C38] z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <a
          onClick={() => scrollToSection("bienvenido")}
          className="select-none cursor-pointer"
        >
          <div className="flex">
            <div className="w-16 h-10 overflow-hidden rounded-full flex items-center justify-center">
              <img src={logo} className="w-full h-full" />
            </div>
            <div>
              <h2 className="text-[14px] font-semibold tracking-[0.12em] text-[#C4A259] uppercase">
                Estudio Jurídico Penal
              </h2>
              <h1 className="text-[11px] font-light tracking-[0.06em] text-[#9D9585] uppercase">
                Ferro & Asociados
              </h1>
            </div>
          </div>
        </a>
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
        <div className=" border-t border-[#3D3C38]">
          <ul className="py-4">
            {[
              { id: "bienvenido", label: "Bienvenido" },
              { id: "areas", label: "Servicios" },
              { id: "sobre-nosotros", label: "Sobre Nosotros" },
              { id: "contacto", label: "Contacto" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-6 py-3 text-[13px] font-medium tracking-[0.08em] uppercase transition-all ${
                    activeSection === item.id
                      ? "text-[#C4A259] "
                      : "text-[#9D9585]"
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
  );
}
