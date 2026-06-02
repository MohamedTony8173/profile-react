import { useState, useEffect } from "react";

export const useMediaQuery = (query) => {
  const getMatches = () =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = useState(() => getMatches());

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const media = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches ?? media.matches);

    // Use the modern API when available
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }

    // Fallback for older browsers
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query]);

  return matches;
};
