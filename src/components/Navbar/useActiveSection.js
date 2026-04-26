import { useEffect } from "react";

export function useActiveSection(setActive) {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              !visibleSection ||
              entry.boundingClientRect.top <
                document.getElementById(visibleSection)?.getBoundingClientRect()
                  .top
            ) {
              visibleSection = entry.target.id;
            }
          }
        });

        if (visibleSection) {
          setActive((prev) =>
            prev === visibleSection ? prev : visibleSection,
          );
        }
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      observer.disconnect();
    };
  }, [setActive]);
}
