import { ChevronDown, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../../../assets/comprimido/fondo2.jpg";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="bienvenido"
      className="relative min-h-screen w-full flex items-center justify-center  "
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(17, 24, 39, 0.9),
            rgba(17, 24, 39, 0.7),
            rgba(17, 24, 39, 0.5)
          ),
          url(${heroImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-20 text-center ">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold tracking-wide text-white mb-8 leading-tight"
        >
          Estudio Jurídico Penal
          <br />
          Ferro y Asoc.
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-24 h-[2px] bg-[#C4A259] mx-auto mb-8 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="text-base
            sm:text-lg
            md:text-xl
            text-[#D4CDB8]
            max-w-xl
            md:max-w-3xl
            mx-auto
            text-left
            mb-8
            leading-relaxed"
        >
          Somos un grupo de Abogados que ofrece Servicios Legales a Personas y
          Empresas. Nos destacamos por nuestra Atención Personalizada y al
          Instante. Trabajamos para Econtrar la Mejor Solución a tu Situación.
        </motion.p>

        {/* Features */}
        {/* <div className="flex flex-wrap gap-6 mb-24 items-center"> */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-sm sm:text-base"
        >
          <div className="flex items-center gap-2 text-white">
            <CheckCircle2 className="w-5 h-5 text-[#fcbf49]" />
            <span>Atención 100% Personalizada</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <CheckCircle2 className="w-5 h-5 text-[#fcbf49]" />
            <span>Respondemos tu Consulta en el Día</span>
          </div>
          <div className="flex items-center gap-2 text-white mb-8">
            <CheckCircle2 className="w-5 h-5 text-[#fcbf49]" />
            <span>Presupuesto y Asesoramiento Sin Cargo</span>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("areas")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 
             flex flex-col items-center gap-1 text-white"
          aria-label="Scroll to services"
        >
          <span className="text-sm tracking-wide uppercase">
            Nuestros Servicios
          </span>
          <ChevronDown className="w-10 h-10" />
        </button>

        <a
          href="https://wa.me/2616589732"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#C4A259] text-[#1A1918] px-8 py-4 text-sm
                   font-semibold tracking-[0.08em] uppercase hover:bg-[#D4B36A] transition-all duration-300 
                   shadow-lg hover:shadow-xl rounded-sm mb-6"
        >
          <FaWhatsapp className="text-gray text-2xl" />
          Contactanos Hoy
          <ChevronRight size={18} />
        </a>
      </div>
    </section>
  );
}
