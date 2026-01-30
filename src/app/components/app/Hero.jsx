import { ChevronDown, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../../../assets/images/fondo2.jpg";

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section
      id="bienvenido"
      className="relative min-h-screen w-full flex items-center justify-center"
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
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-20 text-center">
      
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
          className="text-lg md:text-xl text-[#D4CDB8] max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Somos un grupo de Abogados que ofrece Servicios Legales a Personas y Empresas. Nos destacamos por nuestra
          Atención Personalizada y al Instante. Trabajamos para Econtrar la Mejor Solución a tu Situación.
        </motion.p>

        {/* Features */}
        {/* <div className="flex flex-wrap gap-6 mb-24 items-center"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 place-items-center text-center">

          <div className="flex items-center gap-2 text-white">
            <CheckCircle2 className="w-5 h-5 text-[#fcbf49]" />
            <span>Atención 100% Personalizada</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <CheckCircle2 className="w-5 h-5 text-[#fcbf49]" />
            <span>Respondemos tu Consulta en el día</span>
          </div>
          <div className="flex items-center gap-2 text-white ">
            <CheckCircle2 className="w-5 h-5 text-[#fcbf49]" />
            <span>Presupuesto y asesoramiento sin cargo</span>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('areas')}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce"
          aria-label="Scroll to services"
        >
          <ChevronDown className="w-10 h-10 text-white" />
        </button>
      </div>
    </section>

  )
}
   