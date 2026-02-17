import { Award, Globe, X } from "lucide-react";
import { useState, useEffect } from "react";
import recognitionImage from "../../../assets/comprimido/lir2.jpg";

export default function Recognition() {
  const [open, setOpen] = useState(false);

  // cerrar modal con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="pt-8 pb-20 lg:pb-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white tracking-wide mb-6">
            Reconocimiento internacional
          </h2>

          <div className="w-24 h-[2px] bg-[#C4A259] mb-6"></div>

          <p className="text-[#D4CDB8] text-base md:text-lg leading-relaxed mb-4">
            El Estudio Penal Ferro ha sido reconocido por medios especializados
            del ámbito jurídico internacional, destacando su compromiso
            profesional, la excelencia técnica y el ejercicio ético del derecho.
          </p>

          <p className="text-[#D4CDB8] text-base md:text-lg leading-relaxed">
            En particular, el estudio fue mencionado por la revista{" "}
            <span className="text-[#C4A259] font-medium">
              The Legal Industry
            </span>
            , publicación internacional dedicada al análisis de firmas
            jurídicas, profesionales del derecho y tendencias del sector legal.
          </p>
        </div>

        {/* CARD / TROFEO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* TEXTO + ICONOS */}
          <div className="bg-[#1A1918]/70 backdrop-blur-sm rounded-md p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#C4A259]/20 flex items-center justify-center">
                <Award className="text-[#C4A259]" />
              </div>

              <h3 className="text-xl font-serif text-white">
                Mención en medio jurídico internacional
              </h3>
            </div>

            <ul className="space-y-4 text-[#D4CDB8] text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <Globe className="text-[#C4A259] mt-1" size={18} />
                Reconocimiento por publicación especializada de alcance global.
              </li>

              <li className="flex items-start gap-3">
                <Globe className="text-[#C4A259] mt-1" size={18} />
                Valoración del enfoque profesional, técnico y estratégico del
                estudio.
              </li>

              <li className="flex items-start gap-3">
                <Globe className="text-[#C4A259] mt-1" size={18} />
                Distinción independiente basada en criterios editoriales del
                sector legal.
              </li>
            </ul>
          </div>

          {/* IMAGEN / PRUEBA (THUMB) */}
          <div className="relative">
            <button
              onClick={() => setOpen(true)}
              className="group relative focus:outline-none"
              aria-label="Ver mención completa"
            >
              <div className="absolute inset-0 border border-[#C4A259]/40 rounded-md pointer-events-none"></div>

              <img
                src={recognitionImage}
                alt="Mención del Estudio Penal Ferro en The Legal Industry"
                loading="lazy"
                decoding="async"
                className="w-full rounded-md shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
              />

              {/* overlay hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-md">
                <span className="text-white text-sm tracking-wide">
                  Ver imagen completa
                </span>
              </div>
            </button>

            <p className="text-xs text-[#BFB8A2] mt-4 text-center">
              Captura ilustrativa de la mención publicada por The Legal
              Industry.
            </p>
          </div>
        </div>
      </div>

      {/* MODAL IMAGEN HD */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* botón cerrar */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar imagen"
              className="
                absolute
                top-3
                right-3
                z-10
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-full
                bg-black/70
                text-white
                hover:bg-black/90
                hover:text-[#C4A259]
                transition
            "
            >
              <X size={20} />
            </button>

            {/* IMAGEN GRANDE (NO en el bundle) */}
            <img
              src="/images/lir.png"
              alt="Mención completa del Estudio Penal Ferro en The Legal Industry"
              loading="lazy"
              decoding="async"
              className="w-full rounded-md shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
