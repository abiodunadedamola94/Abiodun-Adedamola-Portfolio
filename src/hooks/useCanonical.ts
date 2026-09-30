import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// The same build is served from Lovable, vercel.app and the custom domain.
// Point every page's canonical at the custom domain so search engines treat it as the main address.
const CANONICAL_ORIGIN = "https://adedamola.mocreativeconcept.com";

export function useCanonical() {
  const location = useLocation();

  useEffect(() => {
    const href = CANONICAL_ORIGIN + location.pathname;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = href;
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", href);
  }, [location.pathname]);
}
