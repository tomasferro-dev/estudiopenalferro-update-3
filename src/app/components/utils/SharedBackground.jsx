import heroImage from "../../../assets/comprimido/fondo1.jpg";

export default function SharedBackground({ children }) {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `
          linear-gradient(
            to top,
            rgba(17,24,39,0.85),
            rgba(17,24,39,0.65),
            rgba(17,24,39,0.35)
          ),
          url(${heroImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {children}
    </div>
  );
}
