import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import CopyButton from "./components/ui/CoppyButton";
import Hero from "../app/components/app/Hero.jsx";
import Topbar from "../app/components/app/Topbar.jsx";
import TopbarMobile from "../app/components/app/TopbarMobile.jsx";
import Services from "../app/components/app/Services.jsx";
import About from "../app/components/app/About.jsx";
import Contact from "../app/components/app/Contact.jsx";
import Footer from "../app/components/app/Footer.jsx";
import Recognition from "../app/components/app/Recognition.jsx";
import SharedBackground from "../app/components/utils/SharedBackground.jsx";
import logo from "/images/logo-6.png";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("bienvenido");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#2B2A27] text-white">
      {/* Desktop Topbar Navigation */}
      <div className="hidden lg:block">
        <Topbar />
      </div>

      {/* Mobile Header */}
      <TopbarMobile/>

      <main>
        <Hero />
        <Services />
        <SharedBackground>
          <About />
          <div className="flex justify-center">
            <div className="flex items-center justify-center">
              <img
                src={logo}
                alt="Estudio Penal Ferro"
                className="
                  w-[180px]
                  sm:w-[220px]
                  lg:w-[360px]
                  h-auto
                  object-contain
                  drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                "
              />
            </div>
          </div>

          <Recognition />
        </SharedBackground>
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
