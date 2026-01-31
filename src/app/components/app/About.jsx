
import { Menu, X, Phone, Mail, MapPin, ChevronRight, ShieldCheck, Scale, Binary, ChevronDown} from 'lucide-react';
import aboutImage from "../../../assets/images/josefina-recreado.png";
import heroImage from "../../../assets/images/fondo1.jpg";

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
export default function About() {
  return(
    <section
      id="sobre-nosotros"
      className="py-20 lg:py-32 bg-[#B8A67D]"
      style={{
              backgroundImage: `
                linear-gradient(
            to top,
            rgba(17,24,39,0.85),
            rgba(17,24,39,0.65),
            rgba(196,162,89,0.35)
                ),
                url(${heroImage})
              `,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
            }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6 tracking-wide">
              Abogada Josefina Ferro
            </h2>
            <div className="w-80 h-[2px] bg-[#C4A259] mb-8"></div>
            <div className="space-y-6 text-white leading-relaxed">
              <p className="text-base md:text-lg">
                El estudio jurídico se encuentra a cargo de la abogada Josefina Ferro,
                quien es egresada de la Facultad de Derecho de la Universidad Nacional
                de Cuyo.
              </p>
              <p className="text-base md:text-lg">
                Ejerce defensa particular en causas penales por delitos de competencia
                provincial o federal.
              </p>
              <p className="text-base md:text-lg">
                Se especializa en cyberdelito y litigación penal en sistema adversarial.
              </p>
            </div>
            <button
              onClick={() => scrollToSection('contacto')}
              className="mt-8 inline-flex items-center gap-2 bg-[#1A1918] text-[#C4A259] px-7 py-3 text-sm font-semibold tracking-[0.08em] uppercase hover:bg-[#2B2A27] transition-all duration-300"
            >
              Contactar
              <ChevronRight size={16} />
            </button>
          </div>
<div className="order-first lg:order-last h-full">
            <img
  src={aboutImage}
  alt="Abog. Josefina Ferro"
  className="w-full h-full object-cover shadow-2xl"
  style={{
    maskImage: `
      linear-gradient(to top, transparent 0%, black 35%),
      linear-gradient(to left, transparent 0%, black 35%),
      linear-gradient(to bottom, transparent 0%, black 35%)
    `,
    WebkitMaskImage: `
      linear-gradient(to top, transparent 0%, black 35%),
      linear-gradient(to left, transparent 0%, black 35%),
      linear-gradient(to bottom, transparent 0%, black 35%)
    `,
    maskComposite: 'intersect',
    WebkitMaskComposite: 'source-in',
  }}
/>

          </div>
        </div>
      </div>
    </section>
  )
}