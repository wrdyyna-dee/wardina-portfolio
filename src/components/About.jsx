
import { useRef } from "react";
import { MapPin } from "lucide-react";

function About() {
  const photoRef = useRef(null);

  // Interactive 3D Photo Tilt
  const handleMouseMove = (event) => {
    const photo = photoRef.current;
    if (!photo) return;

    const rect = photo.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = -((y - centerY) / centerY) * 8;

    photo.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (photoRef.current) {
      photoRef.current.style.transform =
        "rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#080609] px-6 pt-6 pb-20 text-white"
    >
      {/* Magenta Grid Background */}
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
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 25%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 25%, transparent 90%)",
        }}
      />

      {/* Left Magenta Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle,rgba(224,0,220,0.18)_0%,transparent_70%)] blur-3xl"
      />

      {/* Right Purple Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(139,22,216,0.16)_0%,transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section Heading */}
        <p className="mb-3 font-code text-sm font-medium tracking-widest text-fuchsia-400">
          01 / ABOUT ME
        </p>

        <h2 className="mb-12 text-4xl font-bold text-white sm:text-5xl">
          A little about me
          <span className="text-[#E000DC]">.</span>
        </h2>

        {/* Two-Column Layout */}
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Profile Photo */}
          <div
            className="relative mx-auto w-full max-w-md"
            style={{ perspective: "1000px" }}
          >
            {/* Photo Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-5 rounded-3xl bg-fuchsia-600/20 blur-3xl"
            />

            {/* Interactive Glass Photo */}
            <div
              ref={photoRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative overflow-hidden rounded-3xl border border-fuchsia-400/30 bg-gradient-to-br from-fuchsia-500/10 via-white/5 to-purple-600/10 p-3 shadow-[0_15px_50px_rgba(224,0,220,0.12)] backdrop-blur-xl transition-all duration-200 ease-out hover:border-fuchsia-400/60 hover:shadow-[0_20px_60px_rgba(224,0,220,0.22)]"
            >
              <img
                src="/profile.jpg"
                alt="Wardina Khairudin"
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* About Description */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Hello, I'm Wardina Binti Khairudin.
            </h3>

            <p className="mb-5 text-base leading-8 text-[#C9BDCE]">
              I'm an Information Science graduate specializing in Information Content Management from Universiti Teknologi MARA (UiTM), with a keen interest in web and mobile development, data analytics, and digital design.
            </p>

            <p className="mb-5 text-base leading-8 text-[#C9BDCE]">
              I enjoy transforming ideas into practical, user-friendly digital solutions. Through my academic projects, I've gained hands-on experience in application development and data visualization, while my internship in Corporate Communications strengthened my skills in website management, digital content, and professional communication.
            </p>

            <p className="mb-5 text-base leading-8 text-[#C9BDCE]">
              I'm naturally curious, adaptable, and motivated to keep learning. As I begin my professional journey, I'm eager to contribute to meaningful projects, expand my technical expertise, and build a career in web or mobile development or data analytics.
            </p>

            {/* Availability and Location */}
            <div className="mt-8 flex flex-wrap items-center gap-5 font-code">

              {/* Availability Badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-fuchsia-400/25 bg-fuchsia-400/10 px-4 py-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-40" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-fuchsia-400" />
                </span>

                <span className="text-sm font-medium tracking-wide text-fuchsia-100">
                  Open to opportunities
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-[#BBAFC2]">
                <MapPin
                  size={18}
                  strokeWidth={1.8}
                  className="text-fuchsia-400"
                  aria-hidden="true"
                />

                <span className="text-sm tracking-wide">
                  Shah Alam, Selangor
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
