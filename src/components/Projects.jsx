
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  LayoutDashboard,
  Smartphone,
  ShoppingBag,
  ChartNoAxesCombined,
} from "lucide-react";

// ==========================================
// PROJECT DATA
// ==========================================

const projects = [
  {
    id: "01",
    title: "e-UKK",
    subtitle: "Corporate Communications Request Management System",
    category: "Web & Mobile",
    description:
      "A centralized platform for managing publicity, media coverage, and corporate souvenir requests, with approval workflows, task assignments, and status tracking.",
    technologies: ["FlutterFlow", "Firebase", "JavaScript"],
    image: "/images/projects/eukk.png",
    icon: LayoutDashboard,
    link: "/projects/e-ukk",
  },
  {
    id: "02",
    title: "Active Arena",
    subtitle: "Sports Booking Mobile Application",
    category: "Mobile App",
    description:
      "A mobile booking platform that allows users to browse sports facilities, select available slots, and manage their bookings in one place.",
    technologies: ["FlutterFlow", "UI/UX"],
    image: "/images/projects/sports-booking.png",
    icon: Smartphone,
    link: "/projects/active-arena",
  },
  {
    id: "03",
    title: "Preloved Pundana",
    subtitle: "Preloved Item Management System",
    category: "Web Development",
    description:
      "A web-based platform for organizing and managing second-hand item listings and user records through a centralized database.",
    technologies: ["PHP", "SQL", "HTML", "CSS"],
    image: "/images/projects/preloved.png",
    icon: ShoppingBag,
    link: "/projects/preloved-pundana",
  },
  {
    id: "04",
    title: "Fast Food Consumption and Health Impact",
    subtitle: "Tableau Data Visualization Project",
    category: "Data Analytics",
    description:
      "An interactive data visualization dashboard exploring fast food consumption habits, dietary patterns, and their relationship with health outcomes.",
    technologies: ["Tableau", "OpenRefine"],
    image: "/images/projects/tableau-public.png",
    icon: ChartNoAxesCombined,
    link: "/projects/tableau",
  },
];

// ==========================================
// RESPONSIVE CARDS PER VIEW
// ==========================================

function getCardsPerView() {
  if (typeof window === "undefined") return 4;

  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;

  return 4;
}

// ==========================================
// PROJECT CARD
// ==========================================

function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);
  const Icon = project.icon;

  return (
    <article
      className="
        group flex h-full flex-col overflow-hidden
        rounded-2xl border border-purple-300/15
        bg-gradient-to-br from-[#24152E]
        via-[#191120] to-[#110C18]
        transition-all duration-300
        hover:border-purple-400/60
        hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)]
      "
    >
      {/* Project Preview */}
      <div className="relative h-44 overflow-hidden bg-[#21132D]">
        {!imageError ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="
              h-full w-full object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Icon
              size={52}
              strokeWidth={1.3}
              className="text-purple-300"
            />
          </div>
        )}

        <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 font-code text-[10px] text-white backdrop-blur-md">
          {project.category}
        </div>
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-3 font-code text-[10px] tracking-widest text-purple-300">
          PROJECT / {project.id}
        </span>

        <h3 className="mb-1 text-xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mb-4 min-h-[38px] text-xs font-medium leading-5 text-purple-300">
          {project.subtitle}
        </p>

        <p className="mb-5 flex-1 text-xs leading-6 text-gray-300">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full border border-purple-400/20
                bg-purple-500/10 px-2.5 py-1
                font-code text-[10px] text-purple-200
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Case Study */}


        {/* Case Study */}
        <div className="mt-auto border-t border-white/10 pt-4">
          <a
            href={project.link}
            className="
              group/link inline-flex items-center gap-2
              font-code text-xs font-medium text-purple-300
              transition-colors duration-300
              hover:text-purple-200
            "
          >
            Read Full Case Study

            <ArrowUpRight
              size={16}
              className="
                transition-transform duration-300
                group-hover/link:-translate-y-1
                group-hover/link:translate-x-1
              "
            />
          </a>
        </div>
      </div>
    </article>
  );
}


// ==========================================
// MAIN PROJECTS SECTION
// ==========================================

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);

  const touchStartX = useRef(null);

  // Responsive Layout
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Carousel Navigation
  const nextProject = () => {
    setCurrentIndex(
      (previous) => (previous + 1) % projects.length
    );
  };

  const previousProject = () => {
    setCurrentIndex(
      (previous) =>
        (previous - 1 + projects.length) % projects.length
    );
  };

  // Visible Projects - Circular Carousel
  const visibleProjects = Array.from(
    { length: Math.min(cardsPerView, projects.length) },
    (_, index) =>
      projects[(currentIndex + index) % projects.length]
  );

  // Touch Swipe Support
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const difference =
      touchStartX.current - event.changedTouches[0].clientX;

    if (difference > 50) {
      nextProject();
    } else if (difference < -50) {
      previousProject();
    }

    touchStartX.current = null;
  };

  return (
    <section
      id="projects"
      className="
        relative isolate overflow-hidden
        bg-[#080609] px-6 pt-6 pb-24 text-white
      "
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-fuchsia-700/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 font-code text-sm tracking-widest text-fuchsia-400">
              02 / PROJECT
            </p>

            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Selected Works
              <span className="text-[#C4B5FD]">.</span>
            </h2>

            <p className="max-w-2xl leading-7 text-gray-400">
              A selection of projects where I've explored
              web, mobile and data visualization.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={previousProject}
              aria-label="Previous project"
              className="
                flex h-12 w-12 cursor-pointer
                items-center justify-center rounded-full
                border border-purple-400/30
                bg-purple-500/10 text-purple-200
                transition-all duration-300
                hover:border-purple-400
                hover:bg-purple-600/30
              "
            >
              <ArrowLeft size={20} />
            </button>

            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
              className="
                flex h-12 w-12 cursor-pointer
                items-center justify-center rounded-full
                border border-purple-400/50
                bg-purple-600/40 text-white
                transition-all duration-300
                hover:bg-purple-500/60
                hover:shadow-[0_0_25px_rgba(167,139,250,0.3)]
              "
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="
            grid grid-cols-1 gap-5
            sm:grid-cols-2 lg:grid-cols-4
          "
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Pagination Indicator */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Start carousel at project ${index + 1}`}
              aria-current={currentIndex === index ? "true" : undefined}
              className={`
                h-2 cursor-pointer rounded-full
                transition-all duration-300
                ${
                  currentIndex === index
                    ? "w-8 bg-purple-400"
                    : "w-2 bg-purple-400/25 hover:bg-purple-400/60"
                }
              `}
            />
          ))}
        </div>

        <p className="mt-10 text-center font-code text-xs text-gray-500">
          Built with curiosity. Improved through practice.
        </p>
      </div>
    </section>
  );
}
