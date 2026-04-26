export default function NavLink({
  id,
  label,
  active,
  onClick,
  scrollToSection,
  mobile = false,
}) {
  const handleClick = (e) => {
    e.preventDefault();

    const target = document.getElementById(id);
    if (target) scrollToSection(target);

    if (onClick) onClick();
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      aria-current={active === id ? "page" : undefined}
      className={`transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm ${
        active === id
          ? `text-[var(--accent)] ${!mobile && "scale-110"}`
          : `hover:text-[var(--accent)] ${!mobile && "hover:scale-110"}`
      }`}
    >
      {label}
    </a>
  );
}