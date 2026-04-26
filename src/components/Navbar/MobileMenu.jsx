import NavLink from "./NavLink";
import { NAV_LINKS } from "../../constants/NAVIGATION";

export default function MobileMenu({
  menuOpen,
  active,
  closeMenu,
  scrollToSection,
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      aria-hidden={!menuOpen}
      className={`fixed top-16 md:top-20 z-50 left-0 w-full px-8 py-3 flex flex-col gap-4 bg-[var(--bg2)] transition-transform duration-300 ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.id}
          {...link}
          active={active}
          onClick={closeMenu}
          mobile
          scrollToSection={scrollToSection}
        />
      ))}
    </div>
  );
}
