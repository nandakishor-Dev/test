import { useState, useEffect } from "react";

const BREAKPOINT_LG = 1024;

const useIsScreenBelowLg = () => {
  const [isBelowLg, setIsBelowLg] = useState(window.innerWidth < BREAKPOINT_LG);

  useEffect(() => {
    const handleResize = () => {
      setIsBelowLg(window.innerWidth < BREAKPOINT_LG);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isBelowLg;
};

export default useIsScreenBelowLg;
