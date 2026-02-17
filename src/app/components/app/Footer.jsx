import { Phone, Mail, MapPin, Scale } from "lucide-react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import logo from "/images/logo-6.png"; 

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <footer className="bg-[#1A1918] text-[#D4CDB8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            
            <div className="flex flex-col leading-tight">
              <h2 className="text-[14px] font-semibold tracking-[0.15em] text-[#C4A259] uppercase">
                Estudio Jurídico Penal
              </h2>
              <h1 className="text-[12px] font-light tracking-[0.08em] text-[#B8B1A1] uppercase">
                Ferro & Asociados
              </h1>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-[#BFB8A2]">
            Estudio jurídico especializado en derecho penal, litigación
            estratégica y asesoramiento legal integral. Comprometidos con la
            defensa técnica, la confidencialidad y el ejercicio ético de la
            profesión.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-[0.12em] uppercase text-white mb-4">
            Enlaces rápidos
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <a onClick={() => scrollToSection("bienvenido")} className="hover:text-[#C4A259] transition cursor-pointer">
                Inicio
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection("areas")} className="hover:text-[#C4A259] transition cursor-pointer">
                Áreas de Práctica
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("sobre-nosotros")}
                className="hover:text-[#C4A259] transition cursor-pointer"
              >
                Sobre el Estudio
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection("contacto")} className="hover:text-[#C4A259] transition cursor-pointer">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-[0.12em] uppercase text-white mb-4">
            Áreas de práctica
          </h4>

          <ul className="space-y-3 text-sm">
            <li>Defensa Penal</li>
            <li>Litigación Oral</li>
            <li>Ciberdelitos</li>
            <li>Derecho Migratorio</li>
            <li>Asesoramiento Legal</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-[0.12em] uppercase text-white mb-4">
            Contacto
          </h4>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#C4A259] mt-1" />
              <span>
                Av. Bartolomé Mitre 565
                <br />
                Mendoza, Argentina
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#C4A259]" />
              <a
                href="tel:+5492616589732"
                className="hover:text-[#C4A259] transition"
              >
                +54 9 261 658 9732
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#C4A259]" />
              <a
                href="mailto:estudioabogferro@gmail.com"
                className="hover:text-[#C4A259] transition"
              >
                estudioabogferro@gmail.com
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://wa.me/5492616589732"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4A259] hover:text-[#D4B36A] transition text-xl"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              className="text-[#C4A259] hover:text-[#D4B36A] transition text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#C4A259]/20 py-6 text-center text-xs text-[#BFB8A2]">
        © {new Date().getFullYear()} Estudio Penal Ferro — Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
