import { useState, useEffect } from "react";
import logo from "/images/logo-6.png"; 

export default function Topbar() {
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

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // 👇 CLAVE: detecta cuando la sección está “centrada”
        rootMargin: "-80% 0px -40% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="
			fixed top-0 left-0 w-full h-16 z-50
			backdrop-blur-md
			bg-[#1A1918]/40
			border-b border-white/10
			shadow-[0_8px_30px_rgb(0,0,0,0.35)]
      "
    >
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
        <a onClick={() => scrollToSection("bienvenido")} className="select-none cursor-pointer">
          {/* Branding */}
          <div className="flex">
            <div className="w-32 h-20 overflow-hidden rounded-full flex items-center justify-center">
              <img src={logo} className="w-full h-full" />
            </div>
            <div className="mt-4 ">
              <div className="flex flex-col leading-tight">
                <h2 className="text-[14px] font-semibold tracking-[0.15em] text-[#C4A259] uppercase">
                  Estudio Jurídico Penal
                </h2>
              </div>
              <h1 className="text-[12px] font-light tracking-[0.08em] text-[#B8B1A1] uppercase">
                Ferro & Asociados
              </h1>
            </div>
          </div>
        </a>

        {/* Navigation */}
        <ul className="flex items-center gap-2">
          {[
            { id: "bienvenido", label: "Inicio" },
            { id: "areas", label: "Servicios" },
            { id: "sobre-nosotros", label: "Sobre Nosotros" },
            { id: "contacto", label: "Contacto" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`
									px-4 py-2 text-[12px] font-medium tracking-[0.08em] uppercase
									transition-all duration-200
									${
                    activeSection === item.id
                      ? "text-[#C4A259] border-b-2 border-[#C4A259]"
                      : "text-[#CFC8B8] hover:text-[#C4A259]"
                  }
								`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
