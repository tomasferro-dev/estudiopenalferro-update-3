import { Phone, Mail, MapPin, ChevronRight, Send } from "lucide-react";
import CopyButton from "../ui/CoppyButton";
import heroImage from "../../../assets/comprimido/contacto.jpg";
import { FaWhatsapp } from "react-icons/fa";

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

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-20 lg:py-32 bg-[#3D3928] "
      style={{
        backgroundImage: `
                    linear-gradient(
                to right,
                rgba(17,24,39,0.85),
                rgba(17,24,39,0.65),
                rgba(196,162,89,0.35)
                    ),
                    url(${heroImage})
                  `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6 tracking-wide">
          Contacto
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="w-full h-[2px] bg-[#C4A259] mx-auto lg:mx-0 mb-6"></div>
            <p className="text-[#D4CDB8] text-base md:text-lg leading-relaxed">
              Estamos disponibles para atender su consulta. Contáctenos a través
              de cualquiera de los siguientes medios.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a
            href="tel:+5492616123456"
            className="relative group block h-[260px] rounded-md overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 bg-[#3D3928]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 h-full p-8 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 bg-[#C4A259]/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C4A259] transition-all">
                <Phone
                  className="text-[#C4A259] group-hover:text-[#1A1918]"
                  size={24}
                />
              </div>

              <h3 className="text-sm font-semibold tracking-[0.08em] uppercase text-[#C4A259] mb-2">
                Teléfono
              </h3>
              <p className="text-[#E6DDC6] text-base">+54 9 261 658 9732</p>
              <div className="z-20 pointer-events-auto mt-6">
                <CopyButton text="+5492616123456" label="Copiar" />
              </div>
            </div>
          </a>

          <a
            href="mailto:estudioabogferro@gmail.com"
            className="relative group block h-[260px] rounded-md overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 bg-[#3D3928]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 h-full p-8 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 bg-[#C4A259]/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C4A259] transition-all">
                <Mail
                  className="text-[#C4A259] group-hover:text-[#1A1918]"
                  size={24}
                />
              </div>

              <h3 className="text-sm font-semibold tracking-[0.08em] uppercase text-[#C4A259] mb-2">
                Email
              </h3>
              <p className="text-[#E6DDC6] text-base">
                estudioabogferro@gmail.com
              </p>
              <div className="z-20 pointer-events-auto mt-6">
                <CopyButton text="estudioabogferro@gmail.com" label="Copiar" />
              </div>
            </div>
          </a>

          <a
            href="https://maps.google.com/?q=Av. Bartolomé Mitre 565, Mendoza"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block h-[260px] rounded-md overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 bg-[#3D3928]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 h-full p-8 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 bg-[#C4A259]/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C4A259] transition-all">
                <MapPin
                  className="text-[#C4A259] group-hover:text-[#1A1918]"
                  size={24}
                />
              </div>

              <h3 className="text-sm font-semibold tracking-[0.08em] uppercase text-[#C4A259] mb-2">
                Ubicación
              </h3>
              <p className="text-[#E6DDC6] text-base">Mendoza, Argentina</p>
              <div className="z-20 pointer-events-auto mt-6">
                <CopyButton text="https://maps.google.com/?q=Av. Bartolomé Mitre 565, Mendoza" label="Copiar" />
              </div>
            </div>
          </a>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/2616589732"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C4A259] text-[#1A1918] px-8 py-4 text-sm font-semibold tracking-[0.08em] uppercase hover:bg-[#D4B36A] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp className="text-gray text-2xl" />
            Consultar por WhatsApp
            <ChevronRight size={18} />
          </a>
        </div>

        <div className="float-right text-right mt-6">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6 tracking-wide mt-6">
            Nuestra Oficina
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="w-full h-[2px] bg-[#C4A259] mx-auto lg:mx-0 mb-6"></div>
              <p className="text-[#D4CDB8] text-base md:text-lg leading-relaxed text-right">
                Nuestra Oficina se encuentra ubicada en el Centro de la Ciudad
                de Mendoza, sobre Avenida Mitre, a metros de Avenida Pedro
                Molina y a escazas cuadras de Plaza Independencia. Reserva un
                turno para una Consulta Legal a través de nuestro{" "}
                <a onClick={() => scrollToSection("contacto")}>WhatsApp</a>,
                Teléfono o Email.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="w-48 h-[2px] bg-[#C4A259] mx-auto mb-2 mt-2"></div> */}

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
            ></iframe>
          </div>
        </div>
      </div>

      {/* FORMULARIO + GIF */}
      <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* GIF / IMAGEN IZQUIERDA */}
        <div className="w-full h-[280px] sm:h-[360px] lg:h-full rounded-md overflow-hidden flex items-center justify-center">
          <img
            src="/images/logo-6.png"
            alt="Logo Estudio Penal Ferro"
            className="
              max-w-[440px]
              sm:max-w-[260px]
              lg:max-w-[500px]
              w-full
              h-auto
              object-contain
            "
          />
        </div>

        {/* FORMULARIO */}
        <div className="bg-[#1A1918]/80 backdrop-blur-sm rounded-md p-8 lg:p-10 shadow-xl lg:mr-20">
          <h3 className="text-3xl font-serif font-light text-white tracking-wide mb-6">
            Contáctanos hoy
          </h3>

          <div className="w-20 h-[2px] bg-[#C4A259] mb-8"></div>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.target;
              const data = new FormData(form);

              const mensaje =
                `Nombre: ${data.get("nombre")}\n` +
                `Email: ${data.get("email")}\n` +
                `Teléfono: ${data.get("telefono")}\n` +
                `Tema: ${data.get("tema")}\n\n` +
                `Mensaje:\n${data.get("mensaje")}`;

              const url = `https://wa.me/5492616589732?text=${encodeURIComponent(mensaje)}`;

              window.open(url, "_blank");
            }}
            className="space-y-6"
          >
            <input
              type="text"
              name="nombre"
              placeholder="Nombre y apellido"
              className="w-full bg-transparent border-b border-[#C4A259]/50 text-[#E6DDC6] placeholder-[#D4CDB8]/60 focus:outline-none focus:border-[#C4A259] py-2"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-[#C4A259]/50 text-[#E6DDC6] placeholder-[#D4CDB8]/60 focus:outline-none focus:border-[#C4A259] py-2"
            />

            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              className="w-full bg-transparent border-b border-[#C4A259]/50 text-[#E6DDC6] placeholder-[#D4CDB8]/60 focus:outline-none focus:border-[#C4A259] py-2"
            />

            <select
              name="tema"
              className="w-full bg-[#1A1918] border border-[#C4A259]/40 text-[#E6DDC6] py-2 px-3 rounded-md focus:outline-none focus:border-[#C4A259]"
            >
              <option value="">Tema de la consulta</option>
              <option value="Defensa Penal">Defensa</option>
              <option value="Litigación">Litigación</option>
              <option value="Ciberdelito">Ciberdelito</option>
              <option value="Migraciones">Migraciones</option>
              <option value="Otra consulta">Otra</option>
            </select>

            <textarea
              name="mensaje"
              rows={4}
              placeholder="Mensaje"
              className="w-full bg-transparent border border-[#C4A259]/40 text-[#E6DDC6] placeholder-[#D4CDB8]/60 rounded-md p-3 focus:outline-none focus:border-[#C4A259]"
            ></textarea>

            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-[#C4A259] text-[#1A1918] px-8 py-4 text-sm font-semibold tracking-[0.08em] uppercase hover:bg-[#D4B36A] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Enviar consulta
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
