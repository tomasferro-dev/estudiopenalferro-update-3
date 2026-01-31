import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import CopyButton from "../ui/CoppyButton";
import heroImage from "../../../assets/images/contacto.jpg";
import phoneImage from "../../../assets/images/telefono.jpg";
import emailImage from "../../../assets/images/email.jpg";
import officeImage from "../../../assets/images/oficina.jpg";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-20 lg:py-32 bg-[#3D3928] "
      style={{
        backgroundImage: `
                    linear-gradient(
                to bottom,
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

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Phone */}
          {/* <div
            className="bg-[#1A1918] p-8 text-center hover:bg-[black] border border-[#3D3C38] hover:border-[#C4A259]
           transition-all duration-300 group hover:cursor-pointer"
          >
            <a href="tel:+5492616123456">
              <div className="w-14 h-14 bg-[#C4A259]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C4A259] transition-all">
                <Phone
                  className="text-[#C4A259] group-hover:text-[#1A1918]"
                  size={24}
                />
              </div>
              <h3 className="text-sm font-semibold tracking-[0.08em] uppercase text-[#C4A259] mb-2">
                Teléfono
              </h3>
              <p className="text-[#D4CDB8] text-base">+54 9 261 658 9732</p>

              <div className="h-6" aria-hidden="true" />
            </a>
            <section style={{ marginTop: 24 }}>
              <pre
                style={{
                  maxWidth: 680,
                  maxHeight: 220,
                  overflow: "auto",
                  background: "#11182710",
                  padding: 12,
                  borderRadius: 8,
                }}
              ></pre>
              <CopyButton text={`+5492616123456`} label="Copiar Teléfono" />
            </section>
          </div> */}
          <a
            href="tel:+5492616123456"
            className="relative group block h-[260px] rounded-md overflow-hidden cursor-pointer"
          >
            {/* Imagen */}
            <img
              src={phoneImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay base */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Overlay hover dorado */}
            <div className="absolute inset-0 bg-[#3D3928]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Contenido */}
            <div className="relative z-10 h-full p-8 flex flex-col items-center justify-center text-center">
              {/* icono */}
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
            </div>

            {/* Copy button (NO bloquea el click) */}
            <div className="absolute bottom-4 right-4 z-20 pointer-events-auto">
              <CopyButton text="+5492616123456" label="Copiar" />
            </div>
          </a>

          {/* Email */}
          {/* <div className="bg-[#1A1918] p-8 text-center hover:bg-[#C4A259]/10 border border-[#3D3C38] hover:border-[#C4A259] transition-all duration-300 group">
            <a href="mailto:estudioabogferro@gmail.com">
              <div className="w-14 h-14 bg-[#C4A259]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C4A259] transition-all">
                <Mail
                  className="text-[#C4A259] group-hover:text-[#1A1918]"
                  size={24}
                />
              </div>
              <h3 className="text-sm font-semibold tracking-[0.08em] uppercase text-[#C4A259] mb-2">
                Email
              </h3>
              <p className="text-[#D4CDB8] text-base break-all">
                estudioabogferro
              </p>
              <p className="text-[#D4CDB8] text-base break-all">@gmail.com</p>
            </a>

            <section style={{ marginTop: 24 }}>
              <pre
                style={{
                  maxWidth: 680,
                  maxHeight: 220,
                  overflow: "auto",
                  background: "#11182710",
                  padding: 12,
                  borderRadius: 8,
                }}
              ></pre>
              <CopyButton
                text={`estudioabogferro@gmail.com`}
                label="Copiar Correo"
              />
            </section>
          </div> */}
          <a
            href="mailto:estudioabogferro@gmail.com"
            className="relative group block h-[260px] rounded-md overflow-hidden cursor-pointer"
          >
            {/* Imagen */}
            <img
              src={emailImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay base */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Overlay hover dorado */}
            <div className="absolute inset-0 bg-[#3D3928]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Contenido */}
            <div className="relative z-10 h-full p-8 flex flex-col items-center justify-center text-center">
              {/* icono */}
              <div className="w-14 h-14 bg-[#C4A259]/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C4A259] transition-all">
                <Mail
                  className="text-[#C4A259] group-hover:text-[#1A1918]"
                  size={24}
                />
              </div>

              <h3 className="text-sm font-semibold tracking-[0.08em] uppercase text-[#C4A259] mb-2">
                Email
              </h3>
              <p className="text-[#E6DDC6] text-base">estudioabogferro@gmail.com</p>
            </div>

            {/* Copy button (NO bloquea el click) */}
            <div className="absolute bottom-4 right-4 z-20 pointer-events-auto">
              <CopyButton text="+5492616123456" label="Copiar" />
            </div>
          </a>

          {/* Location */}
          {/* <div className="bg-[#1A1918] p-8 text-center border border-[#3D3C38]">
            <div className="w-14 h-14 bg-[#C4A259]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-[#C4A259]" size={24} />
            </div>
            <h3 className="text-sm font-semibold tracking-[0.08em] uppercase text-[#C4A259] mb-2">
              Ubicación
            </h3>
            <p className="text-[#D4CDB8] text-base">Mendoza, Argentina</p>
            <div className="h-6" aria-hidden="true" />

            <section style={{ marginTop: 24 }}>
              <pre
                style={{
                  maxWidth: 680,
                  maxHeight: 220,
                  overflow: "auto",
                  background: "#11182710",
                  padding: 12,
                  borderRadius: 8,
                }}
              ></pre>
              <CopyButton
                text={`Av. Bartolomé Mitre 565
                Planta baja, oficina 16
                Ciudad de Mendoza, Mendoza, Argentina`}
                label="Copiar Dirección"
              />
            </section>
          </div> */}
          <a
            href="https://maps.google.com/?q=Av. Bartolomé Mitre 565, Mendoza"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block h-[260px] rounded-md overflow-hidden cursor-pointer"
          >
            {/* Imagen */}
            <img
              src={officeImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 object-[center_90%]"
            />

            {/* Overlay base */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Overlay hover dorado */}
            <div className="absolute inset-0 bg-[#3D3928]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Contenido */}
            <div className="relative z-10 h-full p-8 flex flex-col items-center justify-center text-center">
              {/* icono */}
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
            </div>

            {/* Copy button (NO bloquea el click) */}
            <div className="absolute bottom-4 right-4 z-20 pointer-events-auto">
              <CopyButton text="+5492616123456" label="Copiar" />
            </div>
          </a>
        </div>

        {/* CTA Button */}
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
        <div className="text-center mt-12">
          <p className="text-[#D4CDB8] text-base break-all">Encontranos en:</p>
        </div>
        <div className="w-12 h-[2px] bg-[#C4A259] mx-auto mb-2 mt-2"></div>

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
      {/* Foto de <a href="https://unsplash.com/es/@jakubzerdzicki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jakub Żerdzicki</a> en <a href="https://unsplash.com/es/fotos/una-mujer-sentada-frente-a-una-computadora-portatil-sosteniendo-un-telefono-celular-GM5U6NiUg5w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
    </section>
  );
}
