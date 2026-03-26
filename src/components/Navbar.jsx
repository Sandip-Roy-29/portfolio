import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setSticky(true);
      else setSticky(false);

      const sections = document.querySelectorAll("section");

      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        sticky === false ? "bg-transparent" : "bg-[var(--bg)]"
      } h-20 flex justify-between items-center px-16 py-5 fixed top-0 left-0 z-50 w-screen`}
    >
      <a href="#" className="font-bold text-3xl">
        Sandip Roy.
      </a>
      <nav className="hidden md:flex justify-center items-center gap-10 text-[var(--text)]">
        <a
          href="#home"
          className={`transition-all duration-300 ${
            active === "home"
              ? "text-[var(--accent)] scale-110"
              : "hover:text-[var(--accent)] hover:scale-110"
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`transition-all duration-300 ${
            active === "about"
              ? "text-[var(--accent)] scale-110"
              : "hover:text-[var(--accent)] hover:scale-110"
          }`}
        >
          About
        </a>
        <a
          href="#projects"
          className={`transition-all duration-300 ${
            active === "projects"
              ? "text-[var(--accent)] scale-110"
              : "hover:text-[var(--accent)] hover:scale-110"
          }`}
        >
          Projects
        </a>
        <a
          href="#skills"
          className={`transition-all duration-300 ${
            active === "skills"
              ? "text-[var(--accent)] scale-110"
              : "hover:text-[var(--accent)] hover:scale-110"
          }`}
        >
          Skills
        </a>
        <a
          href="#services"
          className={`transition-all duration-300 ${
            active === "services"
              ? "text-[var(--accent)] scale-110"
              : "hover:text-[var(--accent)] hover:scale-110"
          }`}
        >
          Services
        </a>
        <a
          href="#contact"
          className={`transition-all duration-300 ${
            active === "contact"
              ? "text-[var(--accent)] scale-110"
              : "hover:text-[var(--accent)] hover:scale-110"
          }`}
        >
          Contact
        </a>
      </nav>
      <button className="md:hidden text-3xl text-[var(--text)]" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "X" : "☰"}
      </button>
      <div className={`absolute top-20 left-0 w-full px-8 py-3 flex flex-col bg-[var(--bg2)] transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <a
          href="#home"
          className={`transition-all duration-300 ${
            active === "home"
              ? "text-[var(--accent)]"
              : "hover:text-[var(--accent)]"
          }`}
          onClick={() => setMenuOpen(false)}
          >
          Home
        </a>
        <a
          href="#about"
          className={`transition-all duration-300 ${
            active === "about"
            ? "text-[var(--accent)]"
            : "hover:text-[var(--accent)]"
          }`}
          onClick={() => setMenuOpen(false)}
          >
          About
        </a>
        <a
          href="#projects"
          className={`transition-all duration-300 ${
            active === "projects"
            ? "text-[var(--accent)]"
            : "hover:text-[var(--accent)]"
          }`}
          onClick={() => setMenuOpen(false)}
          >
          Projects
        </a>
        <a
          href="#skills"
          className={`transition-all duration-300 ${
            active === "skills"
            ? "text-[var(--accent)]"
              : "hover:text-[var(--accent)]"
          }`}
          onClick={() => setMenuOpen(false)}
          >
          Skills
        </a>
        <a
          href="#services"
          className={`transition-all duration-300 ${
            active === "services"
            ? "text-[var(--accent)]"
            : "hover:text-[var(--accent)]"
          }`}
          onClick={() => setMenuOpen(false)}
          >
          Services
        </a>
        <a
          href="#contact"
          className={`transition-all duration-300 ${
            active === "contact"
            ? "text-[var(--accent)]"
            : "hover:text-[var(--accent)]"
          }`}
          onClick={() => setMenuOpen(false)}
          >
          Contact
        </a>
      </div>
    </header>
  );
}
