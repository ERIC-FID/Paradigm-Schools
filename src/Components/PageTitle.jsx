import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageTitle() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === "/about" && hash === "#gallery") {
      document.title = "Gallery - Paradigm Schools";
    } else if (pathname === "/about") {
      document.title = "About Us - Paradigm Schools";
    } else if (pathname === "/") {
      document.title = "Home - Paradigm Schools";
    } else {
      document.title = "Paradigm Schools";
    }
  }, [pathname, hash]);

  return null;
}