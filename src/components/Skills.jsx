
import { useEffect, useRef, useState } from "react";

// ==========================================
// TECHNOLOGY ICONS
// ==========================================

const devicon =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const skills = [
  // PROGRAMMING & WEB DEVELOPMENT
  {
    name: "HTML5",
    category: "Programming",
    icon: `${devicon}/html5/html5-original.svg`,
  },
  {
    name: "CSS3",
    category: "Programming",
    icon: `${devicon}/css3/css3-original.svg`,
  },
  {
    name: "JavaScript",
    category: "Programming",
    icon: `${devicon}/javascript/javascript-original.svg`,
  },
  {
    name: "PHP",
    category: "Programming",
    icon: `${devicon}/php/php-original.svg`,
  },
  {
    name: "SQL",
    category: "Programming",
    icon: `${devicon}/mysql/mysql-original.svg`,
  },
  {
    name: "Python",
    category: "Programming",
    icon: `${devicon}/python/python-original.svg`,
  },

  {
    name: "Node.js",
    category: "Programming",
    icon: `${devicon}/nodejs/nodejs-original.svg`,
  },

  // MOBILE & BACKEND
  {
    name: "FlutterFlow",
    category: "Mobile & Backend",
    icon: "/icons/flutterflow.png",
  },
  {
    name: "Firebase Authentication",
    category: "Mobile & Backend",
    icon: "/icons/firebase.png",
  },
  {
    name: "Cloud Firestore",
    category: "Mobile & Backend",
    icon: `${devicon}/firebase/firebase-original.svg`,
  },


  // DATA ANALYTICS
  {
    name: "Microsoft Excel",
    category: "Data Analytics",
    icon: "/icons/excel.png",
  },
  {
    name: "Power BI",
    category: "Data Analytics",
    icon: "/icons/powerbi.png",
  },
  {
    name: "Tableau",
    category: "Data Analytics",
    icon: "/icons/tableau.png",
  },

  // UI/UX & DESIGN
  {
    name: "Canva",
    category: "Design",
    icon: "/icons/canva.png",
  },
  {
    name: "Figma",
    category: "Design",
    icon: `${devicon}/figma/figma-original.svg`,
  },

  // DEVELOPMENT TOOLS & CMS
  {
    name: "Visual Studio Code",
    category: "Tools",
    icon: `${devicon}/vscode/vscode-original.svg`,
  },
  {
    name: "WordPress",
    category: "Tools",
    icon: `${devicon}/wordpress/wordpress-original.svg`,
  },
  {
    name: "Joomla",
    category: "Tools",
    icon: "/icons/joomla.png",
  },
];

// ==========================================
// CATEGORY FILTERS
// ==========================================

const filters = [
  "All",
  "Programming",
  "Mobile & Backend",
  "Data Analytics",
  "Design",
  "Tools",
];

// ==========================================
// INDIVIDUAL TECHNOLOGY CARD
// ==========================================

function TechCard({ skill, index }) {
  const [imageError, setImageError] = useState(false);

  const showSymbol = !skill.icon || imageError;

  return (
    <div
      className="
        tech-card group relative
        flex min-h-[155px] flex-col
        items-center justify-center
        gap-4 overflow-hidden
        rounded-2xl border
        border-purple-300/15
        bg-gradient-to-br
        from-[#21142D]
        via-[#17101F]
        to-[#120C1A]
        p-5 backdrop-blur-xl
        transition-[border-color,background-color,box-shadow]
        duration-300
        hover:border-purple-400/60
        hover:shadow-[0_0_35px_rgba(167,139,250,0.20)]
      "
      style={{
        animationDelay: `${Math.min(index, 20) * 45}ms`,
      }}
    >
      {/* Hover Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-br
          from-purple-500/15
          via-transparent
          to-fuchsia-500/10
          opacity-0 transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Technology Logo */}
      <div
        className="
          relative z-10 flex h-16 w-16
          items-center justify-center
          transition-transform duration-500
          group-hover:-translate-y-1
          group-hover:scale-110
        "
      >
        {showSymbol ? (
          <span
            className="
              flex h-14 w-14 items-center
              justify-center rounded-xl
              border border-purple-400/25
              bg-purple-500/10
              font-code text-xs font-bold
              tracking-wide text-purple-200
            "
          >
            {skill.symbol || skill.name.slice(0, 3).toUpperCase()}
          </span>
        ) : (
          <img
            src={skill.icon}
            alt={`${skill.name} logo`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="
              h-14 w-14 object-contain
              drop-shadow-[0_0_12px_rgba(167,139,250,0.10)]
              transition-all duration-500
              group-hover:drop-shadow-[0_0_18px_rgba(167,139,250,0.45)]
            "
          />
        )}
      </div>

      {/* Technology Name */}
      <span
        className="
          relative z-10 max-w-full
          text-center font-code
          text-xs font-medium
          leading-relaxed text-gray-200
          transition-colors duration-300
          group-hover:text-purple-200
          sm:text-sm
        "
      >
        {skill.name}
      </span>

      {/* Bottom Highlight */}
      <div
        aria-hidden="true"
        className="
          absolute bottom-0 left-1/2
          h-[2px] w-0
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-purple-400
          to-transparent
          transition-all duration-500
          group-hover:w-3/4
        "
      />
    </div>
  );
}

// ==========================================
// MAIN SKILLS SECTION
// ==========================================

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  // Scroll Reveal
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Filter Technologies
  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter(
          (skill) => skill.category === activeFilter
        );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="
        relative isolate overflow-hidden
        bg-[#080609]
        px-6 pt-6 pb-20 text-white
      "
    >
      {/* Background Glow - Left */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-32 top-20
          h-[450px] w-[450px]
          rounded-full
          bg-fuchsia-700/10
          blur-[120px]
        "
      />

      {/* Background Glow - Right */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 bottom-10
          h-[450px] w-[450px]
          rounded-full
          bg-purple-600/10
          blur-[120px]
        "
      />

      {/* Subtle Background Grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 -z-10
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(167,139,250,0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(167,139,250,0.045) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "55px 55px",
          maskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 90%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section Label */}
        <p
          className="
            mb-3 font-code text-sm
            tracking-widest text-fuchsia-400
          "
        >
          04 / MY TOOLKIT
        </p>

        {/* Section Heading */}
        <h2
          className="
            mb-4 text-4xl font-bold
            text-white sm:text-5xl
          "
        >
          Skills & Technologies
          <span className="text-[#E000DC]">.</span>
        </h2>

        {/* Description */}
        <p
          className="
            mb-10 max-w-2xl
            leading-8 text-gray-400
          "
        >
          Technologies and tools I've worked with through
          academic projects, practical experience,
          and independent learning.
        </p>

        {/* ================================= */}
        {/* CATEGORY FILTER BUTTONS */}
        {/* ================================= */}

        <div
          className="
            mb-10 flex flex-wrap
            gap-3
          "
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`
                  cursor-pointer rounded-full
                  border px-5 py-2.5
                  font-code text-xs font-medium
                  transition-all duration-300
                  ${
                    isActive
                      ? "border-purple-400/60 bg-purple-600/50 text-white shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                      : "border-white/10 bg-white/5 text-gray-400 hover:border-purple-400/40 hover:text-purple-200"
                  }
                `}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* ================================= */}
        {/* TECHNOLOGY GRID */}
        {/* ================================= */}

        <div
          className={`
            grid grid-cols-2 gap-4
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            ${
              isVisible
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >
          {filteredSkills.map((skill, index) => (
            <TechCard
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <p
          className="
            mt-12 text-center
            font-code text-xs
            tracking-wide text-gray-500
          "
        >
          Always learning. Always building.
        </p>

      </div>
    </section>
  );
}
