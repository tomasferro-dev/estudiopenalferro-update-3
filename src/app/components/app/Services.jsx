import {
  ShieldCheck,
  Scale,
  Binary,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";
import { FileUser } from "lucide-react";
import heroImage from "../../../assets/images/fondo4.jpg";
import defensaImage from "../../../assets/images/defensa.jpg";
import litigacionImage from "../../../assets/images/litigacion.jpg";
import ciberdelitoImage from "../../../assets/images/ciberdelito.jpg";
import migracionesImage from "../../../assets/images/migraciones.jpg";
import { useState } from "react";
import ImageCredit from "../utils/ImageCredit";
import { FaWhatsapp } from "react-icons/fa";

export default function Services() {
  function ServiceCard({ icon: Icon, title, description, image, credit }) {
    const [open, setOpen] = useState(false);
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };
    return (
      <div
        className="relative w-full max-w-5xl mx-auto h-[220px] cursor-pointer overflow-hidden group"
        // onClick={() => !open && setOpen(true)}
        onClick={() => setOpen((prev) => !prev)}
        style={{
          backgroundImage: `
          linear-gradient(
            to right,
            rgba(17,24,39,0.85),
            rgba(17,24,39,0.65),
            rgba(196,162,89,0.35)
          ),
          url(${image})
        `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Contenido */}
        <div className="relative h-full grid grid-cols-[1fr_auto] items-center px-10">
          {/* Bloque izquierdo (imagen + título) */}
          <div
            className={`flex items-center gap-4 transition-all duration-500 ${
              open ? "-translate-x-24" : "translate-x-0"
            }`}
          >
            <div className="w-12 h-12 bg-[#C4A259] flex items-center justify-center rounded-sm">
              <Icon className="text-[#1A1918]" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-serif text-white tracking-wide">
                {title}
              </h3>
              
            </div>
          </div>

          {/* Flecha inicial */}
          {!open && <ChevronLeft className="text-[#C4A259]" size={28} />}
        </div>

        {/* Descripción */}
        <div
          className={`absolute inset-y-0 right-0 w-[45%] bg-[#1A1918]/90 backdrop-blur px-10 flex items-center gap-6 transition-all duration-500 ${
            open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-[#E6DDC6] leading-relaxed">{description}</p>

          {/* Flecha de cierre */}
          <button onClick={() => setOpen(false)} className="ml-auto">
            <ChevronRight
              className="text-[#C4A259] hover:scale-110 transition-transform"
              size={28}
            />
          </button>
        </div>
        {credit && (
          <div className="absolute bottom-3 left-4 z-10">{credit}</div>
        )}
      </div>
    );
  }
  return (
    <section
      id="areas"
      className="relative py-24 lg:py-32 bg-cover bg-center "
      style={{
        backgroundImage: `
      linear-gradient(
        to right,
        rgba(17, 24, 39, 0.92),
        rgba(33, 32, 28, 0.85),
        rgba(196, 162, 89, 0.35)
      ),
      url(${heroImage})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6 tracking-wide">
            Áreas de Ejercicio
          </h2>
          <div className="w-16 h-[2px] bg-[#C4A259] mx-auto mb-6"></div>
          <div>
          <p className="text-[#D4CDB8] max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            En Ferro y Asociados nos Destacamos por nuestra Excelencia y
            Seriedad ante cada una de las siguientes Áreas del Derecho, para
            Encontrar la Mejor Solución a tu Problema.
          </p>
          {/* <button onClick={() => scrollToSection("contacto")}>
            Contactanos Hoy
          </button> */}
          </div>
          <a
            href="https://wa.me/2616589732"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C4A259] text-[#1A1918] px-8 py-4 text-sm
             font-semibold tracking-[0.08em] uppercase hover:bg-[#D4B36A] transition-all duration-300 
             shadow-lg hover:shadow-xl rounded-sm mt-8"
          >
            <FaWhatsapp className="text-gray text-2xl" />

            Contactanos Hoy
            <ChevronRight size={18} />
          </a>
        </div>

        <div className="space-y-10 mt-20">
          <ServiceCard
            icon={ShieldCheck}
            title="Defensa Penal Particular"
            description="Toda persona investigada tiene derecho a una defensa técnica de su confianza desde el inicio del proceso penal."
            image={defensaImage}
            credit={
              <ImageCredit
                author={{
                  name: "Karolina Grabowska",
                  url: "https://www.pexels.com/es-es/@karola-g/",
                }}
                url="https://pexels.com/es-es/foto/traje-manos-oficina-trabajando-7876051/"
                webSite="Pexels"
              />
            }
          />

          <ServiceCard
            icon={Scale}
            title="Litigación Adversarial"
            description="Intervención estratégica en procesos orales bajo el sistema acusatorio, priorizando la oralidad y la inmediación."
            image={litigacionImage}
            credit={
              <ImageCredit
                author={{
                  name: "Sora Shimazaki",
                  url: "https://www.pexels.com/es-es/@sora-shimazaki/",
                }}
                url="https://www.pexels.com/es-es/foto/abogado-etnico-serio-discutiendo-un-nuevo-caso-con-un-colega-5668798/"
                webSite="Pexels"
              />
            }
          />

          <ServiceCard
            icon={Binary}
            title="Ciberdelitos"
            description="Asistencia legal en investigaciones por fraudes digitales, accesos indebidos y criminalidad informática."
            image={ciberdelitoImage}
            credit={
              <ImageCredit
                author={{
                  name: "Philipp Katzenberger",
                  url: "https://unsplash.com/es/@fantasyflip",
                }}
                url="https://unsplash.com/es/fotos/iIJrUoeRoCQ"
                webSite="Unsplash"
              />
            }
          />

          <ServiceCard
            icon={FileUser}
            title="Derecho Penal Migratorio"
            description="Defensa en causas vinculadas a la situación migratoria y su impacto en procesos penales."
            image={migracionesImage}
            credit={
              <ImageCredit
                author={{
                  name: "Marco López",
                  url: "https://unsplash.com/es/@marcolopez95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                }}
                url="https://unsplash.com/es/fotos/hombre-sentado-en-la-silla-de-la-pandilla-cerca-de-la-ventana-qK6HAkB91Yc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                webSite="Unsplash"
              />
            }
          />
        </div>
      </div>
    </section>
  );
}
