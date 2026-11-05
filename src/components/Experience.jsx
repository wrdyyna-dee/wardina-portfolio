
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

// ==========================================
// INTERNSHIP RESPONSIBILITIES
// ==========================================

const internshipResponsibilities = [
  {
    text: (
      <>
        Coordinated publicity, digital content, and event documentation
        for <strong className="text-fuchsia-200">20+ faculty programmes and events.</strong>
      </>
    ),
  },
  {
    text: (
      <>
        Designed <strong className="text-fuchsia-200">50+ digital promotional materials</strong>{" "}
        using Canva and maintained faculty website content through Joomla.
      </>
    ),
  },
  {
    text: (
      <>
        Developed a <strong className="text-fuchsia-200">centralized document repository</strong>{" "}
        using Google Docs and Google Drive to improve information retrieval.
      </>
    ),
  },
  {
    text: (
      <>
        Prepared official correspondence, presentation materials, and
        event documentation while supporting stakeholder coordination
        and media coverage.
      </>
    ),
  },
  {
    text: (
      <>
        Supported reporting and task monitoring using{" "}
        <strong className="text-fuchsia-200">
          Google Workspace, Excel, and Power BI.
        </strong>
      </>
    ),
  },
];

const internshipSkills = [
  "Joomla",
  "Canva",
  "Google Workspace",
  "Excel",
  "Power BI",
  "Media Relations",
];

// ==========================================
// iCONS INVOLVEMENTS
// ==========================================

const iconsInvolvements = [
  {
    role: "Deputy Programme Director",
    programme: "iCONS KICKSTART",
  },
  {
    role: "Deputy Secretary",
    programme: "Digital Synergy Day 2025",
  },
  {
    role: "Technical Bureau",
    programme: "Power BI Skills Workshop",
  },
  {
    role: "Technical Bureau",
    programme: "Satu Irama Dua Budaya, Indonesia",
  },
  {
    role: "External Relations Bureau",
    programme: "International Lecture AiMS x iCONS x UNAIR",
  },
  {
    role: "Committee Member",
    programme: "Ekspo Selangkah ke UiTM",
  },

];

// ==========================================
// SELECTED HIGHLIGHTS GALLERY
// ==========================================

const highlights = [
  {
    title: "UiTM 104th Convocation Ceremony",
    date: "16 May 2026",
    category: "Work Experience",
    description:
      "Contributed to the faculty's media coverage through live streaming, video recording, and editing content for Facebook updates.",
    image: "/images/experience/convocation-2026.jpg",
  },
  {
    title: "I-LISS 2026 Conference",
    date: "26 August 2026",
    category: "Work Experience",
    description:
      "Served as a Conference Buddy, providing participant support and contributing to the smooth coordination of conference activities.",
    image: "/images/experience/iliss-2026.jpg",
  },
  {
    title: "LOI & MoU Ceremony",
    date: "27 August 2026",
    category: "Work Experience",
    description:
      "Supported technical preparations, backdrop management, and ceremonial arrangements for the LOI handover and MoU exchange.",
    image: "/images/experience/loi-mou-2026.jpg",
  },
  {
    title: "Information Content Society (iCONS)",
    date: "Session 2024/2025",
    category: "Education",
    description:
      "Served as Exco of Technical & Special Support, contributing to programme coordination, technical operations, and student-led activities.",
    image: "/images/experience/icons-2024-2025.jpg",
  },
];

// ==========================================
// REUSABLE COMPONENTS
// ==========================================

function CategoryTag({ category }) {
  const isWork = category === "Work Experience";

  return (
    <span
      className={`inline-flex w-fit items-center rounded-full
        border px-3 py-1.5 font-code text-[10px]
        font-semibold uppercase tracking-[0.12em]
        ${
          isWork
            ? "border-fuchsia-300/50 bg-fuchsia-500/20 text-fuchsia-100"
            : "border-purple-300/50 bg-purple-500/20 text-purple-100"
        }`}
    >
      {category}
    </span>
  );
}

function DateBadge({ children }) {
  return (
    <div
      className="inline-flex w-fit items-center gap-2
        rounded-full border border-white/20
        bg-white/10 px-3 py-2
        font-code text-[11px] text-slate-100"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </svg>

      {children}
    </div>
  );
}

function GlassCard({ children }) {
  return (
    <article
      className="group relative min-w-0 overflow-hidden
        rounded-[2rem] border border-fuchsia-300/20
        bg-gradient-to-br from-fuchsia-500/20
        via-[#310B38]/65 to-purple-700/20
        p-5 backdrop-blur-2xl
        shadow-[0_15px_45px_rgba(0,0,0,0.20)]
        transition-all duration-500
        hover:-translate-y-1 hover:border-fuchsia-200/50
        hover:shadow-[0_20px_55px_rgba(224,0,220,0.25)]
        sm:p-7 lg:p-8"
    >
      {/* Glass reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-0 h-px
          bg-gradient-to-r from-transparent via-white/60 to-transparent"
      />

      {/* Inner glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-20
          h-56 w-56 rounded-full bg-purple-400/15 blur-3xl"
      />

      <div className="relative z-10">{children}</div>
    </article>
  );
}

function SkillTags({ skills }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={skill}
          className={`rounded-full border px-3 py-1.5
            font-code text-[10px] backdrop-blur-lg
            ${
              index % 2 === 0
                ? "border-fuchsia-200/30 bg-fuchsia-300/10 text-fuchsia-100"
                : "border-purple-200/30 bg-purple-300/10 text-purple-100"
            }`}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

function ResponsibilityList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex gap-3 text-sm leading-7 text-slate-200"
        >
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-300" />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

// ==========================================
// CENTERED TIMELINE ITEM
// ==========================================

function TimelineItem({ side = "left", children }) {
  const isLeft = side === "left";

  return (
    <div className="relative mb-12 last:mb-0">
      {/* Timeline dot */}
      <span
        className="absolute left-0 top-9 z-10
          h-4 w-4 -translate-x-1/2 rounded-full
          border-[3px] border-[#080609] bg-fuchsia-300
          shadow-[0_0_18px_rgba(224,0,220,0.8)]
          md:left-1/2"
      />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className={
            isLeft
              ? "ml-7 min-w-0 md:ml-0 md:mr-9"
              : "ml-7 min-w-0 md:col-start-2 md:ml-9"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// HIGHLIGHT GALLERY CARD
// ==========================================

function HighlightCard({ item, onImageClick }) {
  return (
    <article
      className="group relative min-w-0 overflow-hidden
        rounded-3xl border border-fuchsia-300/20
        bg-gradient-to-br from-white/[0.06]
        via-fuchsia-500/[0.12] to-purple-500/[0.15]
        p-4 backdrop-blur-2xl
        transition-all duration-500
        hover:-translate-y-2 hover:border-fuchsia-300/50
        hover:shadow-[0_20px_50px_rgba(224,0,220,0.20)]"
    >
      <button
        type="button"
        onClick={() => onImageClick(item)}
        aria-label={`View photo: ${item.title}`}
        className="block w-full cursor-zoom-in overflow-hidden rounded-2xl"
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-48 w-full object-cover
            transition-transform duration-700
            group-hover:scale-105"
        />
      </button>

      <div className="px-1 pt-5">
        <CategoryTag category={item.category} />

        <p className="mt-4 font-code text-xs text-fuchsia-200">
          {item.date}
        </p>

        <h4 className="mt-2 text-lg font-semibold leading-7 text-white">
          {item.title}
        </h4>

        <p className="mt-3 text-sm leading-7 text-slate-300">
          {item.description}
        </p>
      </div>
    </article>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function Experience() {
  const timelineRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  // Animated timeline progress
  useEffect(() => {
    const updateProgress = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;

      const rect = timeline.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalDistance = rect.height + viewportHeight * 0.6;
      const traveled = viewportHeight * 0.8 - rect.top;

      const nextProgress = Math.min(
        100,
        Math.max(0, (traveled / totalDistance) * 100)
      );

      setProgress(nextProgress);
    };

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  // Close lightbox with Escape
  useEffect(() => {
    if (!selectedImage) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedImage]);


return (
  <>
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-[#080609] px-6 pt-6 pb-20 text-white"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_at_25%_30%,rgba(224,0,220,0.10),transparent_55%),radial-gradient(ellipse_at_80%_70%,rgba(139,22,216,0.09),transparent_55%)]"
      />

      <div className="mx-auto max-w-7xl">
        {/* ================================= */}
        {/* SECTION HEADING */}
        {/* ================================= */}

        <div className="mb-16 text-center">
          <p className="mb-3 font-code text-sm font-medium tracking-widest text-fuchsia-400">
            03 / MY JOURNEY
          </p>

          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Experience & Education
            <span className="text-[#E000DC]">.</span>
          </h2>

          <p className="mx-auto max-w-2xl leading-8 text-gray-400">
            A journey through professional experience,
            academic learning, and leadership activities.
          </p>
        </div>

        {/* ================================= */}
        {/* CENTERED TIMELINE */}
        {/* ================================= */}

        <div ref={timelineRef} className="relative">
          {/* Timeline base line */}
          <div
            className="absolute bottom-0 left-0 top-0
              w-[2px] -translate-x-1/2
              bg-fuchsia-300/20 md:left-1/2"
          />

          {/* Scroll progress line */}
          <div
            className="absolute left-0 top-0 w-[3px]
              -translate-x-1/2 rounded-full
              bg-gradient-to-b from-fuchsia-400
              via-purple-500 to-purple-400
              shadow-[0_0_18px_rgba(224,0,220,0.75)]
              md:left-1/2"
            style={{
              height: `${progress}%`,
              transition: "height 100ms linear",
            }}
          />

          {/* ================================= */}
          {/* 01 - WORK EXPERIENCE */}
          {/* ================================= */}

          <TimelineItem side="left">
            <GlassCard>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <CategoryTag category="Work Experience" />
                <DateBadge>MAR 2026 – SEP 2026</DateBadge>
              </div>




<h3 className="mb-2 bg-gradient-to-r from-[#8B5CC7] via-[#A78BFA] to-[#C4B5FD] bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
  Corporate Communications Intern
</h3>




              <p className="mb-6 text-sm text-slate-200">
                Faculty of Information Science, UiTM Puncak Perdana
              </p>

              <ResponsibilityList items={internshipResponsibilities} />

              <div className="mt-7">
                <SkillTags skills={internshipSkills} />
              </div>
            </GlassCard>
          </TimelineItem>

          {/* ================================= */}
          {/* 02 - EDUCATION */}
          {/* ================================= */}

          <TimelineItem side="right">
            <GlassCard>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <CategoryTag category="Education" />
                <DateBadge>SEP 2023 – SEP 2026</DateBadge>
              </div>



<h3 className="mb-2 bg-gradient-to-r from-[#8B5CC7] via-[#A78BFA] to-[#C4B5FD] bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
  Bachelor of Information Science (Hons.) Information Content Management
</h3>




              <p className="mt-2 text-sm text-slate-200">
                Universiti Teknologi MARA (UiTM), Puncak Perdana
              </p>

              <div className="mt-6">
                <SkillTags
                  skills={[
                    "CGPA 3.61",
                    "First Class",
                    "Dean's Award × 3",
                  ]}
                />
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-200">
                <strong className="text-fuchsia-100">
                  Areas of Study:
                </strong>{" "}
                Web Development, Database Management, Information Systems, UI/UX Design, Mobile Application Development, Data Analytics, Corporate Communications and Information Management.
              </p>


              {/* iCONS involvement */}
              <div className="mt-8 border-t border-white/20 pt-7">
                <h4 className="mb-4 font-code text-xs tracking-[0.16em] text-fuchsia-100">
                  LEADERSHIP & INVOLVEMENT
                </h4>

                <p className="mb-5 text-sm font-medium text-white">
                  Exco Technical & Special Support — iCONS
                  <span className="block text-xs font-normal text-slate-200">
                    Session 2024/2025
                  </span>
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {iconsInvolvements.map((item, index) => (
                    <div
                      key={`${item.role}-${item.programme}`}
                      className={`max-w-full rounded-2xl border
                        px-3 py-2.5 backdrop-blur-xl
                        transition-all duration-300
                        hover:-translate-y-1
                        ${
                          index % 2 === 0
                            ? "border-fuchsia-200/35 bg-fuchsia-400/15 hover:border-fuchsia-200/70"
                            : "border-purple-200/35 bg-purple-400/15 hover:border-purple-200/70"
                        }`}
                    >
                      <p
                        className={`font-code text-[10px] font-semibold ${
                          index % 2 === 0
                            ? "text-fuchsia-100"
                            : "text-purple-100"
                        }`}
                      >
                        {item.role}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-100">
                        {item.programme}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </TimelineItem>

          {/* ================================= */}
          {/* 03 - MATRICULATION */}
          {/* ================================= */}

          <TimelineItem side="left">
            <GlassCard>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <CategoryTag category="Education" />
                <DateBadge>JUL 2022 – MAY 2023</DateBadge>
              </div>


<h3 className="mb-2 bg-gradient-to-r from-[#8B5CC7] via-[#A78BFA] to-[#C4B5FD] bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
  Matriculation Programme
</h3>
              <p className="font-medium text-fuchsia-100">
                Physical Science
              </p>

              <p className="mt-2 text-sm text-slate-200">
                Kolej Matrikulasi Johor
              </p>

              <div className="mt-6">
                <SkillTags skills={["CGPA 3.68"]} />
              </div>
            </GlassCard>
          </TimelineItem>
        </div>

        {/* ================================= */}
        {/* SELECTED HIGHLIGHTS GALLERY */}
        {/* ================================= */}

        <div className="mt-28">
          <div className="mb-12 text-center">
            <p className="mb-3 font-code text-xs tracking-[0.2em] text-fuchsia-300">
              BEYOND THE TIMELINE
            </p>

            <h3 className="text-3xl font-bold text-white sm:text-4xl">
              Selected Highlights
              <span className="text-fuchsia-400">.</span>
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">
              A glimpse into the events, experiences, and leadership
              activities that shaped my journey.
            </p>
          </div>

          
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <HighlightCard
                key={item.title}
                item={item}
                onImageClick={setSelectedImage}
              />
            ))}
          </div>

        </div>
      </div>

    </section>

    {/* IMAGE LIGHTBOX PORTAL */}
    {selectedImage &&
      createPortal(
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Close image"
            className="fixed right-5 top-5 z-[100000] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-fuchsia-400/50 bg-[#250629] text-white shadow-[0_0_25px_rgba(224,0,220,0.3)] transition-all duration-300 hover:scale-110 hover:bg-fuchsia-600 sm:right-10 sm:top-8"
          >
            <X size={22} strokeWidth={2} />
          </button>

          {/* Image */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
            className="relative flex w-full max-w-5xl flex-col items-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-[0_20px_70px_rgba(0,0,0,0.5)]"
            />

            <p className="font-code text-center text-sm text-fuchsia-100">
              {selectedImage.title}
            </p>
          </div>
        </div>,
        document.body
      )}
  </>
);
}

