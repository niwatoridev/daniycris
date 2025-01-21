import DesktopVersion from "./pages/DesktopVersion";
import MobileVersion from "./pages/MobileVersion";
import React, { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true); // Considera tamaño móvil para pantallas <= 768px
      } else {
        setIsMobile(false); // Para pantallas mayores, como laptops
      }
    };

    // Llamamos la función al cargar el componente y en cada cambio de tamaño de ventana
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => window.removeEventListener("resize", checkWindowSize); // Limpieza del evento
  }, []);

  return (
    <div>
      {isMobile ? (
        <MobileVersion></MobileVersion>
      ) : (
        <DesktopVersion></DesktopVersion>
      )}
    </div>
  );
}

export default App;
