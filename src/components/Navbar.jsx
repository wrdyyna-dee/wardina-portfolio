
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks
        .map((link) =>
          document.getElementById(link.href.slice(1))
        )
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 180) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50
        px-4 pt-5 sm:px-6"
    >
      <nav
        className={`mx-auto flex w-full max-w-5xl
          items-center justify-between
          rounded-full border px-5 py-3
          backdrop-blur-2xl
          transition-all duration-300
          sm:px-7
          ${
            scrolled
              ? "border-purple-300/30 bg-[#111327]/90 shadow-[0_10px_35px_rgba(0,0,0,0.30)]"
              : "border-purple-300/30 bg-white/[0.07] shadow-[0_0_30px_rgba(168,85,247,0.08)]"
          }`}
      >
        {/* Logo */}

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="inline-block bg-gradient-to-r from-[#D8A4EF] via-[#E879F9] to-[#F5F0FA] bg-clip-text text-xl font-black tracking-tight text-transparent transition-all duration-300 hover:brightness-125 sm:text-2xl"
      >
        wrdyyna.
      </a>



        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active =
              activeSection === link.href.slice(1);

            return (
              <a
                key={link.name}
                href={link.href}
                className={`rounded-full px-4 py-2
                  text-sm font-medium
                  transition-all duration-300
                  ${
                    active
                      ? "bg-gradient-to-r from-purple-500/60 to-violet-500/50 text-white"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 cursor-pointer
            items-center justify-center rounded-full
            border border-purple-300/30
            bg-white/10 text-white md:hidden"
        >
          {menuOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="mx-auto mt-3 w-full max-w-5xl
            rounded-3xl border border-purple-300/25
            bg-[#111327]/95 p-3
            shadow-2xl backdrop-blur-2xl md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-2xl px-5 py-3
                text-sm transition-colors
                ${
                  activeSection === link.href.slice(1)
                    ? "bg-purple-500/25 text-purple-200"
                    : "text-slate-300 hover:bg-white/10"
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
