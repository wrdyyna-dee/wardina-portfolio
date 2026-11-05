
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowUp, Mail } from "lucide-react";

// ==========================================
// SOCIAL MEDIA LINKS
// ==========================================

const socials = [
  {
    name: "LINKEDIN",
    url: "https://www.linkedin.com/in/wardinakhairudin",
  },
  {
    name: "TIKTOK",
    url: "https://www.tiktok.com/@wrdyyna_?_r=1&_t=ZS-9B60zZUlqjM",
  },
  {
    name: "WHATSAPP",
    url: "https://wa.me/601127865895",
  },
];

// ==========================================
// MAIN CONTACT COMPONENT
// ==========================================

export default function Contact() {
  const [localTime, setLocalTime] = useState("");
  const [showHeadline, setShowHeadline] = useState(false);

  const headlineRef = useRef(null);

  // ==========================================
  // LIVE MALAYSIA TIME
  // ==========================================

  useEffect(() => {
    const updateTime = () => {
      const time = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kuala_Lumpur",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());

      setLocalTime(time);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // ==========================================
  // FADE-IN ANIMATION ON SCROLL
  // ==========================================

  useEffect(() => {
    const element = headlineRef.current;
    if (!element) return;

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (mediaQuery.matches) {
      setShowHeadline(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowHeadline(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // ==========================================
  // SMOOTH SCROLL TO TOP
  // ==========================================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#080609] px-6 pt-6 pb-20 text-white"
    >
      {/* ================================= */}
      {/* BACKGROUND GRID */}
      {/* ================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(224,0,220,0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(224,0,220,0.055) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 90%)",
        }}
      />

      {/* Left Magenta Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-fuchsia-600/15 blur-[120px]"
      />

      {/* Right Purple Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-purple-600/15 blur-[120px]"
      />

      {/* ================================= */}
      {/* MAIN CONTENT */}
      {/* ================================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px w-10 bg-fuchsia-400" />

          <p className="font-code text-xs tracking-[0.3em] text-fuchsia-400">
            05 / LET'S CONNECT
          </p>
        </div>

        {/* ================================= */}
        {/* ANIMATED HEADLINE */}
        {/* ================================= */}

        <div
          ref={headlineRef}
          className="mb-20 sm:mb-28"
        >
          <h2 className="text-[clamp(2.8rem,9vw,9rem)] font-black uppercase leading-[0.9] tracking-[-0.07em]">

            {/* LET'S CREATE */}
            <span
              className={`block ${
                showHeadline
                  ? "contact-fade-in"
                  : "opacity-0"
              }`}
              style={{
                animationDelay: "0ms",
              }}
            >
              LET'S CREATE
            </span>

            {/* SOMETHING */}
            <span
              className={`block bg-gradient-to-r from-[#E000DC] via-fuchsia-400 to-[#8B16D8] bg-clip-text text-transparent ${
                showHeadline
                  ? "contact-fade-in"
                  : "opacity-0"
              }`}
              style={{
                animationDelay: "250ms",
              }}
            >
              SOMETHING
            </span>

            {/* GREAT */}
            <span
              className={`block ${
                showHeadline
                  ? "contact-fade-in"
                  : "opacity-0"
              }`}
              style={{
                animationDelay: "500ms",
              }}
            >
              GREAT.
            </span>

          </h2>
        </div>

        {/* ================================= */}
        {/* CONTACT INFORMATION */}
        {/* ================================= */}

        <div className="grid gap-14 border-t border-fuchsia-300/15 pt-12 md:grid-cols-3 md:gap-8">

          {/* SOCIALS */}
          <div>
            <h3 className="mb-8 font-code text-xs tracking-[0.25em] text-[#A899B0]">
              SOCIALS
            </h3>

            <div className="flex flex-col items-start gap-5">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm font-semibold tracking-widest text-white transition-colors duration-300 hover:text-fuchsia-300"
                >
                  <span>{social.name}</span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.8}
                    className="text-fuchsia-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* ================================= */}
          {/* CONTACT DETAILS */}
          {/* ================================= */}

          <div>
            <h3 className="mb-8 font-code text-xs tracking-[0.25em] text-[#A899B0]">
              CONTACT DETAILS
            </h3>

            {/* Email */}
            <a
              href="mailto:wrdyyna@gmail.com"
              className="group inline-flex max-w-full items-center gap-3 text-base font-semibold text-white transition-colors duration-300 hover:text-fuchsia-300 sm:text-lg"
            >
              <Mail
                size={22}
                strokeWidth={1.8}
                className="shrink-0 text-fuchsia-400 transition-transform duration-300 group-hover:scale-110"
              />

              <span className="break-all">
                wrdyyna@gmail.com
              </span>
            </a>

            {/* Location */}
            <p className="mt-5 font-code text-xs tracking-widest text-[#A899B0]">
              MALAYSIA
            </p>

            {/* Availability */}
            <div className="mt-5 inline-flex items-center gap-3">

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-fuchsia-400" />
              </span>

              <span className="font-code text-xs tracking-wider text-fuchsia-200">
                OPEN TO OPPORTUNITIES
              </span>
            </div>
          </div>

          {/* ================================= */}
          {/* LOCAL TIME */}
          {/* ================================= */}

          <div className="md:text-right">
            <h3 className="mb-8 font-code text-xs tracking-[0.25em] text-[#A899B0]">
              LOCAL TIME
            </h3>

            <div className="flex items-center gap-3 md:justify-end">
              <span className="font-code text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-white tabular-nums">
                {localTime || "--:--:--"}
              </span>

              <span className="font-code text-sm font-semibold text-fuchsia-400">
                MYT
              </span>
            </div>

            <p className="mt-3 font-code text-xs tracking-widest text-[#A899B0]">
              KUALA LUMPUR, MALAYSIA
            </p>

            <p className="mt-2 font-code text-xs text-[#A899B0]">
              UTC +08:00
            </p>
          </div>
        </div>

        {/* ================================= */}
        {/* FOOTER */}
        {/* ================================= */}

        <footer className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-fuchsia-300/10 pt-7 sm:flex-row sm:items-center">

          {/* Copyright */}
          <p className="font-code text-xs text-[#A899B0]">
            © {new Date().getFullYear()} wrdyyna.
            All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex cursor-pointer items-center gap-3 font-code text-xs tracking-widest text-white transition-colors duration-300 hover:text-fuchsia-300"
          >
            <span>BACK TO TOP</span>

            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-fuchsia-400 group-hover:bg-fuchsia-500/20">
              <ArrowUp size={20} strokeWidth={1.8} />
            </span>
          </button>
        </footer>

      </div>
    </section>
  );
}
