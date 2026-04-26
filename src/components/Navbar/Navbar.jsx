import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NAV_LINKS } from "../../constants/NAVIGATION";
import { NAVBAR_CONFIG } from "../../constants/ANIMATION_CONFIG";

import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import { useScroll } from "./useScroll";
import { useActiveSection } from "./useActiveSection";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollToSection } = useScroll();

  useActiveSection(setActive);

  // Sticky logic (minimal + safe)
  useEffect(() => {
    const handleScroll = () => {
      const shouldStick = window.scrollY > NAVBAR_CONFIG.SCROLL_OFFSET;

      setSticky((prev) => (prev === shouldStick ? prev : shouldStick));
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body lock
  useEffect(() => {
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

  if (menuOpen) {
    if (isIOS) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;
    } else {
      document.body.style.overflow = "hidden";
    }
  } else {
    if (isIOS) {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(top || "0") * -1);
    } else {
      document.body.style.overflow = "";
    }
  }

  return () => {
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
    document.body.style.top = "";
  };
}, [menuOpen]);

  // ESC close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`${
        sticky ? "bg-[var(--bg)]" : "bg-transparent"
      } h-16 md:h-20 flex justify-between items-center px-6 md:px-16 fixed top-0 left-0 z-50 w-full transition-colors duration-300`}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="font-bold text-3xl"
        onClick={(e) => {
          e.preventDefault();
          const target = document.getElementById("hero");
          scrollToSection(target);
        }}
      >
        Sandip Roy.
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-10">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.id}
            {...link}
            active={active}
            scrollToSection={scrollToSection}
          />
        ))}
      </nav>

      {/* Mobile Button */}
      <button
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        className="md:hidden text-3xl"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && createPortal(
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />,
        document.body
      )}

      {/* Mobile Menu */}
      <MobileMenu
        menuOpen={menuOpen}
        active={active}
        closeMenu={closeMenu}
        scrollToSection={scrollToSection}
      />
    </header>
  );
}
