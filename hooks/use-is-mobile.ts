"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the current viewport is mobile size
 * @param breakpoint - The maximum width (in pixels) to consider as mobile. Default is 640px (Tailwind's sm breakpoint)
 * @returns boolean indicating if the viewport is mobile size
 */
export function useIsMobile(breakpoint: number = 640): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Initialize on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Check immediately
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}
