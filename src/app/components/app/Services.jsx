// import {
//   ShieldCheck,
//   Scale,
//   Binary,
//   ChevronRight,
//   ChevronLeft,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";
// import { FileUser } from "lucide-react";
// import heroImage from "../../../assets/comprimido/fondo4.jpg";
// import defensaImage from "../../../assets/comprimido/defensa.jpg";
// import litigacionImage from "../../../assets/comprimido/litigacion.jpg";
// import ciberdelitoImage from "../../../assets/comprimido/ciberdelito.jpg";
// import migracionesImage from "../../../assets/comprimido/migraciones.jpg";
// import { useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
// import ServiceCard from "../utils/ServiceCard";

// export default function Services() {
  
//   return (
//     <section
//       id="areas"
//       className="relative py-24 lg:py-32 bg-cover bg-center "
//       style={{
//         backgroundImage: `
//       linear-gradient(
//         to right,
//         rgba(17, 24, 39, 0.92),
//         rgba(33, 32, 28, 0.85),
//         rgba(196, 162, 89, 0.35)
//       ),
//       url(${heroImage})
//     `,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6 tracking-wide">
//             Áreas de Ejercicio
//           </h2>
//           <div className="w-16 h-[2px] bg-[#C4A259] mx-auto mb-6"></div>
//           <div>
//             <p className="text-[#D4CDB8] max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
//               En Ferro y Asociados nos Destacamos por nuestra Excelencia y
//               Seriedad ante cada una de las siguientes Áreas del Derecho, para
//               Encontrar la Mejor Solución a tu Problema.
//             </p>
            
//           </div>
//           <a
//             href="https://wa.me/2616589732"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 bg-[#C4A259] text-[#1A1918] px-8 py-4 text-sm
//              font-semibold tracking-[0.08em] uppercase hover:bg-[#D4B36A] transition-all duration-300 
//              shadow-lg hover:shadow-xl rounded-sm mt-8"
//           >
//             <FaWhatsapp className="text-gray text-2xl" />
//             Contactanos Hoy
//             <ChevronRight size={18} />
//           </a>
//         </div>

//         <div className="space-y-10 mt-20">
//   <ServiceCard
//     icon={ShieldCheck}
//     title="Defensa Penal Particular"
//     description="Defensa penal especializada para personas investigadas o imputadas en causas penales en Argentina, con intervención desde la etapa inicial del proceso y acompañamiento integral durante toda la causa."
//     image={defensaImage}
//   />

//   <ServiceCard
//     icon={Scale}
//     title="Litigación Adversarial"
//     description="Representación legal en juicios penales bajo el sistema acusatorio, con experiencia en audiencias orales, estrategia procesal y defensa técnica efectiva ante tribunales penales."
//     image={litigacionImage}
//   />

//   <ServiceCard
//     icon={Binary}
//     title="Ciberdelitos"
//     description="Asesoramiento y defensa en delitos informáticos, fraudes digitales, estafas electrónicas, accesos indebidos y otras conductas penales vinculadas a tecnologías de la información."
//     image={ciberdelitoImage}
//   />

//   <ServiceCard
//     icon={FileUser}
//     title="Derecho Penal Migratorio"
//     description="Defensa penal en causas que involucran a personas extranjeras, regularización migratoria, expulsiones y su relación con procesos penales en la República Argentina."
//     image={migracionesImage}
//   />
// </div>
// </div>

//     </section>
//   );
// }

import {
  ShieldCheck,
  Scale,
  Binary,
  ChevronRight,
} from "lucide-react";
import { FileUser } from "lucide-react";
import heroImage from "../../../assets/comprimido/fondo4.jpg";
import defensaImage from "../../../assets/comprimido/defensa.jpg";
import litigacionImage from "../../../assets/comprimido/litigacion.jpg";
import ciberdelitoImage from "../../../assets/comprimido/ciberdelito.jpg";
import migracionesImage from "../../../assets/comprimido/migraciones.jpg";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import ServiceCard from "../utils/ServiceCard";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);


  return (
    <section
      id="areas"
      className="relative py-24 lg:py-32 bg-cover bg-center"
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

          <div className="w-16 h-[2px] bg-[#C4A259] mx-auto mb-6" />

          <p className="text-[#D4CDB8] max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            En Ferro y Asociados nos destacamos por nuestra excelencia y
            seriedad ante cada una de las siguientes áreas del derecho, para
            encontrar la mejor solución a tu problema.
          </p>

          <a
            href="https://wa.me/2616589732"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C4A259] text-[#1A1918] px-8 py-4 text-sm
            font-semibold tracking-[0.08em] uppercase hover:bg-[#D4B36A]
            transition-all duration-300 shadow-lg hover:shadow-xl rounded-sm mt-8"
          >
            <FaWhatsapp className="text-2xl" />
            Contactanos Hoy
            <ChevronRight size={18} />
          </a>
        </div>

        <div className="space-y-10 mt-20">
          <ServiceCard
            icon={ShieldCheck}
            title="Defensa Penal Particular"
            description="Defensa penal especializada para personas investigadas o imputadas en causas penales en Argentina, con intervención desde la etapa inicial del proceso y acompañamiento integral durante toda la causa."
            image={defensaImage}
            open={openIndex === 0}
            onToggle={() =>
              setOpenIndex(openIndex === 0 ? null : 0)
            }
          />

          <ServiceCard
            icon={Scale}
            title="Litigación Adversarial"
            description="Representación legal en juicios penales bajo el sistema acusatorio, con experiencia en audiencias orales, estrategia procesal y defensa técnica efectiva ante tribunales penales."
            image={litigacionImage}
            open={openIndex === 1}
            onToggle={() =>
              setOpenIndex(openIndex === 1 ? null : 1)
            }
          />

          <ServiceCard
            icon={Binary}
            title="Ciberdelitos"
            description="Asesoramiento y defensa en delitos informáticos, fraudes digitales, estafas electrónicas, accesos indebidos y otras conductas penales vinculadas a tecnologías de la información."
            image={ciberdelitoImage}
            open={openIndex === 2}
            onToggle={() =>
              setOpenIndex(openIndex === 2 ? null : 2)
            }
          />

          <ServiceCard
            icon={FileUser}
            title="Derecho Penal Migratorio"
            description="Defensa penal en causas que involucran a personas extranjeras, regularización migratoria, expulsiones y su relación con procesos penales en la República Argentina."
            image={migracionesImage}
            open={openIndex === 3}
            onToggle={() =>
              setOpenIndex(openIndex === 3 ? null : 3)
            }
          />
        </div>
      </div>
    </section>
  );
}
