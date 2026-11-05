import { ArrowUpRight, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const roles = [
  "Information Science Graduate",
  "Web Development",
  "Mobile App Development",
  "Data Analytics",
  "UI/UX Design",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const heroRef = useRef(null);
  const glowRef = useRef(null);

  // Typewriter animation
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!deleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(
            currentRole.slice(0, displayText.length + 1)
          );
        } else {
          setDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(
            currentRole.slice(0, displayText.length - 1)
          );
        } else {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 40 : displayText.length === currentRole.length ? 1800 : 75);

    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIndex]);

  // Mouse-following glow
  const handleMouseMove = (event) => {
    if (!heroRef.current || !glowRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    glowRef.current.style.transform =
      `translate3d(${x - 220}px, ${y - 220}px, 0)`;
  };

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#080609] px-6 pb-16 pt-28 text-white"
    >
      {/* Background Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse at 12% 35%, rgba(224, 0, 220, 0.25), transparent 50%),
            radial-gradient(ellipse at 88% 60%, rgba(139, 22, 216, 0.20), transparent 50%),
            #080609
          `,
        }}
      />

      {/* Magenta Floating Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] animate-float-glow rounded-full bg-fuchsia-600/20 blur-[110px]"
      />

      {/* Purple Floating Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-[430px] w-[430px] rounded-full bg-purple-600/20 blur-[110px]"
      />

      {/* Bottom Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-fuchsia-700/15 blur-[130px]"
      />

      {/* Mouse Glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 hidden h-[440px] w-[440px] rounded-full bg-fuchsia-400/10 blur-[100px] transition-transform duration-300 ease-out lg:block"
        style={{
          transform: "translate3d(-500px, -500px, 0)",
        }}
      />

      {/* Subtle Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "75px 75px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 35%, transparent)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">

        {/* Hello */}
        <p className="mb-7 font-code text-xs tracking-[0.25em] text-fuchsia-300 sm:text-sm">
          {"HELLO, I'M"}
        </p>

        {/* Name with Orbit */}
        <div className="relative mx-auto mb-5 flex w-full max-w-4xl items-center justify-center py-5">

          {/* Orbit */}
          <div
            aria-hidden="true"
            className="hero-orbit pointer-events-none absolute left-1/2 top-1/2 h-[65px] w-[90%] rounded-[50%] border-2 border-fuchsia-500/60 shadow-[0_0_25px_rgba(224,0,220,0.30)] sm:h-[95px] sm:w-[85%] lg:h-[115px]"
          />

          {/* Name */}
          <h1 className="relative z-10 text-[clamp(3.8rem,10vw,8rem)] font-black uppercase leading-none tracking-[-0.055em] text-white">
            WARDINA
          </h1>

          {/* Sparkle */}
          <span
            aria-hidden="true"
            className="absolute right-[5%] top-0 animate-pulse text-2xl text-fuchsia-400 sm:text-4xl"
          >
            ✦
          </span>
        </div>


        {/* Animated Role - Coding Font */}
        <div className="mb-6 flex min-h-[55px] items-center justify-center">
          <h2 className="font-code text-lg font-medium tracking-wide text-fuchsia-200 sm:text-xl lg:text-2xl">
            <span className="text-fuchsia-400">&gt; </span>
            {displayText}
            <span className="ml-1 inline-block animate-pulse text-fuchsia-400">
              _
            </span>
          </h2>
        </div>


        {/* Buttons */}

{/* Buttons */}
<div className="flex flex-wrap items-center justify-center gap-4">

  {/* Explore Projects */}
  <a
    href="#projects"
    className="group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#E000DC] to-[#8B16D8] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(224,0,220,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(224,0,220,0.50)]"
  >
    Explore Projects

    <ArrowUpRight
      size={18}
      strokeWidth={2}
      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
    />
  </a>

  {/* View Resume PDF */}
  <a
    href="/Wardina_Khairudin_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full border border-fuchsia-300/40 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-300 hover:bg-fuchsia-500/15"
  >
    View Resume

    <Download
      size={18}
      strokeWidth={2}
      className="text-fuchsia-300 transition-transform duration-300 group-hover:translate-y-1"
    />
  </a>

</div>


        {/* Scroll Indicator */}
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="mt-15 flex flex-col items-center gap-3 text-slate-400 transition-colors hover:text-fuchsia-300"
        >
          <span className="font-code text-[10px] tracking-[0.3em]">
            SCROLL TO EXPLORE
          </span>
          <span className="animate-bounce text-lg">↓</span>
        </a>
      </div>
    </section>
  );
}
