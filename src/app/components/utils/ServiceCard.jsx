// import {
//   ChevronRight,
//   ChevronLeft,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";

// import { useState } from "react";

// export default function ServiceCard({ icon: Icon, title, description, image, credit }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       className="relative w-full max-w-5xl mx-auto h-[220px] cursor-pointer overflow-hidden group"
//       onClick={() => setOpen((prev) => !prev)}
//       style={{
//         backgroundImage: `
//           linear-gradient(
//             to right,
//             rgba(17,24,39,0.85),
//             rgba(17,24,39,0.65),
//             rgba(196,162,89,0.35)
//           ),
//           url(${image})
//         `,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* CONTENIDO BASE */}
//       <div className="relative h-full flex items-center px-6 lg:px-10">
//         {/* ===== MOBILE ===== */}
//         <div className="lg:hidden flex items-center gap-4 w-full">
//           {/* Icono */}
//           <div className="w-11 h-11 bg-[#C4A259] flex items-center justify-center rounded-sm">
//             <Icon className="text-[#1A1918]" size={20} />
//           </div>

//           {/* Título */}
//           <h3 className="text-lg font-serif text-white tracking-wide">
//             {title}
//           </h3>

//           {/* Flecha mobile (siempre visible) */}
//           <span className="ml-auto">
//             {open ? (
//               <ChevronDown className="text-[#C4A259]" size={28} />
//             ) : (
//               <ChevronUp className="text-[#C4A259] animate-bounce" size={28} />
//             )}
//           </span>
//         </div>

//         {/* ===== DESKTOP ===== */}
//         <div className="hidden lg:flex items-center w-full">
//           {/* Icono + título */}
//           <div
//             className={`flex items-center gap-4 transition-all duration-500 ${
//               open ? "-translate-x-24" : "translate-x-0"
//             }`}
//           >
//             <div className="w-12 h-12 bg-[#C4A259] flex items-center justify-center rounded-sm">
//               <Icon className="text-[#1A1918]" size={24} />
//             </div>
//             <h3 className="text-2xl font-serif text-white tracking-wide">
//               {title}
//             </h3>
//           </div>

//           {/* Flecha desktop (siempre visible) */}
//           <span className="ml-auto">
//             {open ? (
//               <ChevronRight className="text-[#C4A259]" size={28} />
//             ) : (
//               <ChevronLeft className="text-[#C4A259]" size={28} />
//             )}
//           </span>
//         </div>
//       </div>

//       {/* ===== DESCRIPCIÓN ===== */}
//       <div
//   className={`
//     absolute
//     inset-x-0
//     bottom-0

//     /* Desktop positioning */
//     lg:inset-y-0
//     lg:right-50
//     lg:w-[45%]

//     bg-[#1A1918]/90
//     backdrop-blur
//     px-6 lg:px-10
//     py-6
//     transition-all duration-500

//     ${
//       open
//         ? "translate-y-0 opacity-100 lg:translate-x-0 lg:translate-y-0"
//         : "translate-y-full opacity-0 lg:translate-x-full lg:translate-y-0"
//     }
//   `}
//   onClick={(e) => e.stopPropagation()}
// >
//         <p className="text-[#E6DDC6] text-sm lg:text-base leading-relaxed">
//           {description}
//         </p>
//       </div>

//       {/* Créditos */}
//       {credit && (
//         <div className="absolute bottom-3 left-4 z-10">
//           {credit}
//         </div>
//       )}
//     </div>
//   );
// }
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  image,
  credit,
  onToggle,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className="relative w-full max-w-5xl mx-auto h-[220px] overflow-hidden cursor-pointer group"
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
      <div className="absolute inset-0 bg-black/30" />

      {/* ================= CONTENIDO BASE ================= */}
      <div
        className={`
          relative z-10 h-full flex items-center px-6 lg:px-10
          transition-all duration-500
          ${open ? "lg:pr-[50%]" : ""}
        `}
      >
        {/* ===== MOBILE ===== */}
        <div
          className={`
            lg:hidden flex items-center gap-4 w-full 
            transition-transform duration-500
            ${open ? "-translate-y-[165%]" : "translate-y-0"}
          `}
        >
          <div className="w-11 h-11 bg-[#C4A259] flex items-center justify-center rounded-sm">
            <Icon className="text-[#1A1918]" size={20} />
          </div>

          <h3 className="text-lg font-serif text-white tracking-wide">
            {title}
          </h3>

          <span className="ml-auto">
            {open ? (
              <ChevronDown className="text-[#C4A259]" size={28} />
            ) : (
              <ChevronUp
                className="text-[#C4A259] animate-bounce"
                size={28}
              />
            )}
          </span>
        </div>

        {/* ===== DESKTOP ===== */}
        <div className="hidden lg:flex items-center w-full">
          <div
            className={`
              flex items-center gap-4 transition-all duration-500
              ${open ? "translate-x-0 translate-x-[-10%]" : "translate-x-0"}
            `}
          >
            <div className="w-12 h-12 bg-[#C4A259] flex items-center justify-center rounded-sm">
              <Icon className="text-[#1A1918]" size={24} />
            </div>
            <h3 className="text-2xl font-serif text-white tracking-wide">
              {title}
            </h3>
          </div>

          <span className="ml-auto">
            {open ? (
              <ChevronRight className="text-[#C4A259]" size={28} />
            ) : (
              <ChevronLeft className="text-[#C4A259]" size={28} />
            )}
          </span>
        </div>
      </div>

      {/* ================= DESCRIPCIÓN ================= */}
      <div
        className={`
          absolute z-20 bg-[#1A1918]/95 backdrop-blur
          transition-transform duration-500 

          /* Desktop */
          lg:top-0 lg:right-0 lg:h-full lg:w-1/2
          ${open ? "lg:translate-x-120 " : "lg:translate-x-250 lg:translate-y-0"}

          /* Mobile */
          left-0 bottom-0 w-full h-[50%] pb-32
          ${open ? "-translate-y-0" : "translate-y-full"}

          px-6 lg:px-10 py-6
        `}
      >
        <p className="text-[#E6DDC6] text-sm lg:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* ================= CRÉDITOS ================= */}
      {credit && (
        <div className="absolute bottom-3 left-4 z-30">
          {credit}
        </div>
      )}
    </div>
  );
}

// // import {
// //   ChevronRight,
// //   ChevronLeft,
// //   ChevronDown,
// //   ChevronUp,
// // } from "lucide-react";

// // export default function ServiceCard({
// //   icon: Icon,
// //   title,
// //   description,
// //   image,
// //   credit,
// //   open,
// //   onToggle,
// // }) {
// //   return (
// //     <div
// //       onClick={onToggle}
// //       className="relative w-full max-w-5xl mx-auto h-[220px] overflow-hidden cursor-pointer group"
// //       style={{
// //         backgroundImage: `
// //           linear-gradient(
// //             to right,
// //             rgba(17,24,39,0.85),
// //             rgba(17,24,39,0.65),
// //             rgba(196,162,89,0.35)
// //           ),
// //           url(${image})
// //         `,
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //       }}
// //     >
// //       {/* Overlay */}
// //       <div className="absolute inset-0 bg-black/30" />

// //       {/* ================= CONTENIDO BASE ================= */}
// //       <div
// //         className={`
// //           relative z-10 h-full flex items-center px-6 lg:px-10
// //           transition-all duration-500
// //           ${open ? "lg:pr-[50%]" : ""}
// //         `}
// //       >
// //         {/* ===== MOBILE ===== */}
// //         <div
// //           className={`
// //             lg:hidden flex items-center gap-4 w-full
// //             transition-transform duration-500
// //             ${open ? "-translate-y-[165%]" : "translate-y-0"}
// //           `}
// //         >
// //           <div className="w-11 h-11 bg-[#C4A259] flex items-center justify-center rounded-sm">
// //             <Icon className="text-[#1A1918]" size={20} />
// //           </div>

// //           <h3 className="text-lg font-serif text-white tracking-wide">
// //             {title}
// //           </h3>

// //           <span className="ml-auto">
// //             {open ? (
// //               <ChevronDown className="text-[#C4A259]" size={28} />
// //             ) : (
// //               <ChevronUp
// //                 className="text-[#C4A259] animate-bounce"
// //                 size={28}
// //               />
// //             )}
// //           </span>
// //         </div>

// //         {/* ===== DESKTOP ===== */}
// //         <div className="hidden lg:flex items-center w-full">
// //           <div
// //             className={`
// //               flex items-center gap-4 transition-all duration-500
// //               ${open ? "translate-x-[-10%]" : "translate-x-0"}
// //             `}
// //           >
// //             <div className="w-12 h-12 bg-[#C4A259] flex items-center justify-center rounded-sm">
// //               <Icon className="text-[#1A1918]" size={24} />
// //             </div>

// //             <h3 className="text-2xl font-serif text-white tracking-wide">
// //               {title}
// //             </h3>
// //           </div>

// //           <span className="ml-auto">
// //             {open ? (
// //               <ChevronRight className="text-[#C4A259]" size={28} />
// //             ) : (
// //               <ChevronLeft className="text-[#C4A259]" size={28} />
// //             )}
// //           </span>
// //         </div>
// //       </div>

// //       {/* ================= DESCRIPCIÓN ================= */}
// //       <div
// //         className={`
// //           absolute z-20 bg-[#1A1918]/95 backdrop-blur
// //           transition-transform duration-500

// //           /* Desktop */
// //           lg:top-0 lg:right-0 lg:h-full lg:w-1/2
// //           ${open ? "lg:translate-x-0" : "lg:translate-x-full"}

// //           /* Mobile */
// //           left-0 bottom-0 w-full h-[50%] pb-32
// //           ${open ? "translate-y-0" : "translate-y-full"}

// //           px-6 lg:px-10 py-6
// //         `}
// //       >
// //         <p className="text-[#E6DDC6] text-sm lg:text-base leading-relaxed">
// //           {description}
// //         </p>
// //       </div>

// //       {/* ================= CRÉDITOS ================= */}
// //       {credit && (
// //         <div className="absolute bottom-3 left-4 z-30">
// //           {credit}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// import {
//   ChevronRight,
//   ChevronLeft,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";

// export default function ServiceCard({
//   icon: Icon,
//   title,
//   description,
//   image,
//   credit,
//   open,
//   onToggle,
// }) {
//   return (
//     <div
//       onClick={onToggle}
//       className="relative w-full max-w-5xl mx-auto h-[220px] overflow-hidden cursor-pointer group"
//       style={{
//         backgroundImage: `
//           linear-gradient(
//             to right,
//             rgba(17,24,39,0.85),
//             rgba(17,24,39,0.65),
//             rgba(196,162,89,0.35)
//           ),
//           url(${image})
//         `,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* ================= CONTENIDO BASE ================= */}
//       <div
//         className={`
//           relative z-10 h-full flex items-center px-6 lg:px-10
//           transition-all duration-500
//           ${open ? "lg:pr-[50%]" : ""}
//         `}
//       >
//         {/* ===== MOBILE ===== */}
//         <div
//           className={`
//             lg:hidden flex items-center gap-4 w-full
//             transition-transform duration-500
//             ${open ? "-translate-y-[165%]" : "translate-y-0"}
//           `}
//         >
//           <div className="w-11 h-11 bg-[#C4A259] flex items-center justify-center rounded-sm">
//             <Icon className="text-[#1A1918]" size={20} />
//           </div>

//           <h3 className="text-lg font-serif text-white tracking-wide">
//             {title}
//           </h3>

//           <span className="ml-auto">
//             {open ? (
//               <ChevronDown className="text-[#C4A259]" size={28} />
//             ) : (
//               <ChevronUp
//                 className="text-[#C4A259] animate-bounce"
//                 size={28}
//               />
//             )}
//           </span>
//         </div>

//         {/* ===== DESKTOP ===== */}
//         <div className="hidden lg:flex items-center w-full">
//           <div
//             className={`
//               flex items-center gap-4 transition-all duration-500
//               ${open ? "translate-x-[-10%]" : "translate-x-0"}
//             `}
//           >
//             <div className="w-12 h-12 bg-[#C4A259] flex items-center justify-center rounded-sm">
//               <Icon className="text-[#1A1918]" size={24} />
//             </div>

//             <h3 className="text-2xl font-serif text-white tracking-wide">
//               {title}
//             </h3>
//           </div>

//           <span className="ml-auto">
//             {open ? (
//               <ChevronRight className="text-[#C4A259]" size={28} />
//             ) : (
//               <ChevronLeft className="text-[#C4A259]" size={28} />
//             )}
//           </span>
//         </div>
//       </div>

//       {/* ================= DESCRIPCIÓN ================= */}
//       <div
//         className={`
//           absolute z-20 bg-[#1A1918]/95 backdrop-blur
//           transition-transform duration-500

//           /* Desktop */
//           lg:top-0 lg:right-0 lg:h-full lg:w-1/2
//           ${open ? "lg:translate-x-[120px]" : "lg:translate-x-[250px]"}

//           /* Mobile */
//           left-0 bottom-0 w-full h-[50%] pb-32
//           ${open ? "translate-y-0" : "translate-y-full"}

//           px-6 lg:px-10 py-6
//         `}
//       >
//         <p className="text-[#E6DDC6] text-sm lg:text-base leading-relaxed">
//           {description}
//         </p>
//       </div>

//       {/* ================= CRÉDITOS ================= */}
//       {credit && (
//         <div className="absolute bottom-3 left-4 z-30">
//           {credit}
//         </div>
//       )}
//     </div>
//   );
// }
