import { useRef, useCallback, useEffect } from "react";

export function useScroll() {
  const animationRef = useRef(null);

  const smoothScrollTo = useCallback((targetY, duration) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  const scrollToSection = useCallback(
    (target) => {
      if (!target) return;

      const navbar = document.querySelector("header");
      const offset = -(navbar?.offsetHeight || 0);

      const targetY =
        target.getBoundingClientRect().top + window.scrollY + offset;

      const distance = Math.abs(targetY - window.scrollY);

      const duration = Math.min(1200, Math.max(500, distance * 0.5));

      smoothScrollTo(targetY, duration);
    },
    [smoothScrollTo],
  );

  // add this to useScroll
  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return { scrollToSection };
}
