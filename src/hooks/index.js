import { useState, useEffect } from "react";

const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    return width <= 1024
};

export { useViewport }