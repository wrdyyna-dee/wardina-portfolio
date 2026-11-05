
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Database,
  ShieldCheck,
  Cloud,
  Layers3,
  Users,
  CalendarCheck,
  Bell,
  LayoutDashboard,
  ClipboardCheck,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Trophy,
  ExternalLink,
} from "lucide-react";

// =====================================================
// ACTIVEARENA — PROJECT DATA
// =====================================================

const IMAGE_PATH = "/images/projects/active-arena/";

const screenshots = [
  {
    title: "Welcome Screen",
    category: "Authentication",
    image: "welcome.png",
    description:
      "The entry screen introducing ActiveArena and guiding users into the application.",
  },
  {
    title: "Sign In",
    category: "Authentication",
    image: "sign-in.png",
    description:
      "Email and password authentication for registered users.",
  },
  {
    title: "Sign Up",
    category: "Authentication",
    image: "sign-up.png",
    description:
      "Account registration for new users.",
  },
  {
    title: "Home",
    category: "User Experience",
    image: "home.png",
    description:
      "Browse sports categories and discover available equipment.",
  },
  {
    title: "Sports Item Listing",
    category: "Item Discovery",
    image: "list-sport.png",
    description:
      "View sports equipment and its availability status.",
  },
  {
    title: "Book Sport Item",
    category: "Booking",
    image: "booking-sport.png",
    description:
      "Select a sports item, booking date, time, and duration.",
  },
  {
    title: "Booking Confirmation",
    category: "Booking",
    image: "booking-confirmation.png",
    description:
      "Confirmation screen displaying the submitted booking information.",
  },
  {
    title: "My Booking",
    category: "Booking Management",
    image: "my-booking.png",
    description:
      "Review booking requests and monitor their current status.",
  },
  {
    title: "Booking Details",
    category: "Booking Management",
    image: "booking-details.png",
    description:
      "View the selected item's booking schedule and status details.",
  },
  {
    title: "Notifications",
    category: "Communication",
    image: "notifications.png",
    description:
      "View notifications and updates related to booking activities.",
  },
  {
    title: "My Account",
    category: "Profile Management",
    image: "my-account.png",
    description:
      "Access and manage personal account information.",
  },
  {
    title: "Admin Dashboard",
    category: "Administration",
    image: "admin dashboard.png",
    description:
      "Monitor booking requests and access administrative management functions.",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "User Authentication",
    description:
      "Account registration and email/password login for authorized access.",
  },
  {
    icon: Layers3,
    title: "Sports Item Discovery",
    description:
      "Browse sports equipment, categories, item information, and availability.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Requests",
    description:
      "Select equipment, dates, time slots, and duration before submitting a request.",
  },
  {
    icon: ClipboardCheck,
    title: "Booking Tracking",
    description:
      "Review booking history, reservation details, and request statuses.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description:
      "Provide users with a place to review booking-related updates.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Management",
    description:
      "Review bookings, manage sports items, and access user records.",
  },
];

const bookingSteps = [
  {
    number: "01",
    title: "Create Account",
    description: "Register or sign in to access the application.",
  },
  {
    number: "02",
    title: "Browse Equipment",
    description: "Explore sports items and check their availability.",
  },
  {
    number: "03",
    title: "Choose Schedule",
    description: "Select the item, booking date, time, and duration.",
  },
  {
    number: "04",
    title: "Submit Request",
    description: "Record the booking request for administrative review.",
  },
  {
    number: "05",
    title: "Track Status",
    description: "Review booking information and monitor updates.",
  },
];

const technologies = [
  {
    name: "FlutterFlow",
    category: "Mobile Application",
    description: "Interface design, navigation, and application workflows.",
    icon: Smartphone,
  },
  {
    name: "Firebase Authentication",
    category: "Authentication",
    description: "User registration and email/password authentication.",
    icon: ShieldCheck,
  },
  {
    name: "Cloud Firestore",
    category: "Database",
    description: "Cloud-based data model for users, items, and bookings.",
    icon: Database,
  },
  {
    name: "Firebase Storage",
    category: "Media Storage",
    description: "Storage for item and profile images.",
    icon: Cloud,
  },
];

const testResults = [
  { name: "Navigation", result: "Pass" },
  { name: "Form Interaction", result: "Pass" },
  { name: "UI Display", result: "Pass" },
  { name: "Responsiveness", result: "Partial" },
  { name: "Error Handling", result: "Partial" },
];

// =====================================================
// SHARED UI COMPONENTS
// =====================================================

function SectionLabel({ number, children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-code text-xs tracking-[0.25em] text-lime-400">
        {number} / {children}
      </span>
      <div className="h-px w-10 bg-lime-400/50" />
    </div>
  );
}

function SectionHeading({ children, description }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {children}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-sm leading-8 text-white/55 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}

function PhoneMockup({ image, alt, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.4rem] border-[7px] border-[#30383a] bg-black p-[3px] shadow-2xl ${className}`}
    >
      <div className="absolute left-1/2 top-3 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />

      <img
        src={`${IMAGE_PATH}${image}`}
        alt={alt}
        loading="lazy"
        className="block h-full w-full rounded-[1.9rem] object-cover object-top"
      />
    </div>
  );
}

// =====================================================
// UI SHOWCASE
// =====================================================

function ActiveArenaShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Authentication",
    "User Experience",
    "Item Discovery",
    "Booking",
    "Booking Management",
    "Communication",
    "Profile Management",
    "Administration",
  ];

  const filteredScreenshots =
    selectedCategory === "All"
      ? screenshots
      : screenshots.filter(
          (screen) => screen.category === selectedCategory
        );

  const current =
    filteredScreenshots[activeIndex] || filteredScreenshots[0];

  function changeCategory(category) {
    setSelectedCategory(category);
    setActiveIndex(0);
  }

  function next() {
    setActiveIndex((prev) => (prev + 1) % filteredScreenshots.length);
  }

  function previous() {
    setActiveIndex(
      (prev) =>
        (prev - 1 + filteredScreenshots.length) %
        filteredScreenshots.length
    );
  }

  return (
    <section id="ui-showcase" className="py-20 sm:py-28">
      <SectionLabel number="06">UI SHOWCASE</SectionLabel>

      <SectionHeading description="Explore the application screens, from user authentication and equipment booking to the administrative dashboard.">
        Inside <span className="text-lime-400">ActiveArena.</span>
      </SectionHeading>

      {/* Category filters */}
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => changeCategory(category)}
            className={`rounded-full border px-4 py-2 text-xs transition-all duration-300 ${
              selectedCategory === category
                ? "border-lime-400 bg-lime-400 text-black"
                : "border-white/10 bg-white/5 text-white/60 hover:border-lime-400/40 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-lime-400/10 bg-gradient-to-br from-[#101d13] via-[#07100d] to-[#0c1118]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[100px]" />

        <div className="relative grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-16">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-[210px] sm:w-[245px]">
              <PhoneMockup
                key={current.image}
                image={current.image}
                alt={`${current.title} screen`}
                className="aspect-[9/19.5] w-full"
              />
            </div>
          </div>

          {/* Information */}
          <div>
            <span className="font-code text-xs uppercase tracking-[0.2em] text-lime-400">
              {current.category}
            </span>

            <h3 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              {current.title}
            </h3>

            <p className="mt-5 max-w-md leading-8 text-white/55">
              {current.description}
            </p>

            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous screenshot"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-lime-400 hover:text-lime-400"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next screenshot"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-lime-400 hover:text-lime-400"
              >
                <ChevronRight size={20} />
              </button>

              <span className="ml-3 font-code text-sm text-white/50">
                {String(activeIndex + 1).padStart(2, "0")}
                {" / "}
                {String(filteredScreenshots.length).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {filteredScreenshots.map((screen, index) => (
                <button
                  key={screen.image}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${screen.title}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-9 bg-lime-400"
                      : "w-4 bg-white/20 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot thumbnails */}
      <div className="mt-6 flex gap-3 overflow-x-auto pb-4">
        {filteredScreenshots.map((screen, index) => (
          <button
            key={screen.image}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Select ${screen.title}`}
            className={`w-24 shrink-0 overflow-hidden rounded-xl border p-1 transition-all sm:w-28 ${
              activeIndex === index
                ? "border-lime-400 bg-lime-400/10"
                : "border-white/10 bg-white/5 opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={`${IMAGE_PATH}${screen.image}`}
              alt={screen.title}
              loading="lazy"
              className="aspect-[9/16] w-full rounded-lg object-cover object-top"
            />
            <p className="truncate px-1 py-2 text-center text-[10px] text-white/70">
              {screen.title}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}

// =====================================================
// MAIN ACTIVEARENA PAGE
// =====================================================

export default function ActiveArena() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06100b] text-white">
      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -right-40 top-32 h-[500px] w-[500px] rounded-full bg-lime-500/[0.07] blur-[150px]" />
        <div className="absolute -left-40 top-[900px] h-[450px] w-[450px] rounded-full bg-emerald-500/[0.05] blur-[150px]" />
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-lime-400/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-7 sm:px-8">
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-white"
          >
            wrdyyna<span className="text-lime-400">.</span>
          </Link>

          <a
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 px-4 py-3 text-xs text-white transition hover:border-lime-400 hover:text-lime-400 sm:px-6 sm:text-sm"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </a>
        </div>
      </header>

      <main className="relative z-10">
        {/* =================================================
            HERO
        ================================================= */}
        <section className="mx-auto max-w-7xl px-5 pt-8 pb-16 sm:px-8 sm:pt-10 lg:pt-10 lg:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
            {/* Hero copy */}
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="font-code text-xs tracking-[0.35em] text-lime-400">
                  CASE STUDY
                </span>
                <span className="h-px w-14 bg-lime-400" />
              </div>

              <div className="mb-6 flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-lime-400/30 bg-lime-400/10 text-lime-400">
                  <Trophy size={30} />
                </div>

                <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl">
                  Active<span className="text-lime-400">Arena</span>
                </h1>
              </div>

              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Sports Equipment Booking & Management App
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/60">
                An academic mobile application project designed to
                simplify sports equipment reservations through a
                centralized booking experience for users and
                administrators.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "FlutterFlow",
                  "Firebase",
                  "Cloud Firestore",
                  "UI/UX Design",
                  "Mobile Development",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-code text-xs text-white/65"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#ui-showcase"
                  className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-4 text-sm font-bold text-black transition hover:bg-lime-300"
                >
                  View App Screens
                  <ArrowUpRight size={17} />
                </a>

                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm text-white transition hover:border-lime-400/60"
                >
                  Explore Case Study
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>

            {/* Hero phones */}
            <div className="relative flex min-h-[430px] items-center justify-center sm:min-h-[560px]">
              <div className="absolute h-[330px] w-[330px] rounded-full bg-lime-400/10 blur-[100px]" />

              <PhoneMockup
                image="welcome.png"
                alt="ActiveArena welcome screen"
                className="absolute left-[8%] top-[5%] z-10 aspect-[9/19.5] w-[45%] max-w-[250px] -rotate-[8deg] sm:left-[12%]"
              />

              <PhoneMockup
                image="home.png"
                alt="ActiveArena home screen"
                className="absolute right-[5%] top-[11%] z-20 aspect-[9/19.5] w-[45%] max-w-[250px] rotate-[7deg] sm:right-[9%]"
              />
            </div>
          </div>

          {/* Project metadata */}
          <div className="mt-12 grid gap-6 border-y border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["PROJECT TYPE", "Academic Group Project"],
              ["YEAR", "2026"],
              ["TEAM", "4 Members"],
              ["MY INVOLVEMENT", "Collaborative Development"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="font-code text-[11px] tracking-[0.18em] text-lime-400">
                  {label}
                </p>
                <p className="mt-3 text-sm font-medium text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* =================================================
              01 — OVERVIEW
          ================================================= */}
          <section id="overview" className="py-20 sm:py-28">
            <SectionLabel number="01">PROJECT OVERVIEW</SectionLabel>

            <SectionHeading description="A mobile application concept developed to address common challenges in managing sports equipment reservations.">
              Making sports bookings{" "}
              <span className="text-lime-400">simpler.</span>
            </SectionHeading>

            <div className="grid gap-6 lg:grid-cols-3">
              <GlassCard className="lg:col-span-2">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
                  <Smartphone size={24} />
                </div>

                <h3 className="text-xl font-semibold">About the Project</h3>

                <p className="mt-5 leading-8 text-white/60">
                  ActiveArena is a sports equipment booking mobile
                  application developed as a group assignment for
                  ICM661: Mobile Application and Content Development.
                </p>

                <p className="mt-4 leading-8 text-white/60">
                  The project focuses on creating a structured
                  reservation experience where users can discover
                  sports items, submit booking requests, and monitor
                  booking statuses. Administrators can review requests,
                  manage sports equipment, and access booking records.
                </p>

                <p className="mt-4 leading-8 text-white/60">
                  The application was developed collaboratively using
                  FlutterFlow, with Firebase technologies incorporated
                  into its system design and implementation work.
                </p>
              </GlassCard>

              <GlassCard>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
                  <Users size={24} />
                </div>

                <h3 className="text-xl font-semibold">Target Users</h3>

                <div className="mt-6 space-y-6">
                  <div>
                    <p className="font-semibold text-lime-400">
                      General Users
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/55">
                      Individuals who want to browse and reserve
                      sports equipment for activities.
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <p className="font-semibold text-lime-400">
                      Administrators
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/55">
                      Personnel responsible for managing inventory,
                      reviewing requests, and monitoring bookings.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </section>

          {/* =================================================
              02 — PROBLEM & SOLUTION
          ================================================= */}
          <section className="py-20 sm:py-28">
            <SectionLabel number="02">PROBLEM & SOLUTION</SectionLabel>

            <SectionHeading>
              From manual processes to{" "}
              <span className="text-lime-400">digital booking.</span>
            </SectionHeading>

            <div className="grid gap-6 md:grid-cols-2">
              <GlassCard className="border-red-400/15">
                <div className="mb-5 flex items-center gap-3">
                  <AlertCircle className="text-red-400" size={24} />
                  <h3 className="text-xl font-bold">The Problem</h3>
                </div>

                <p className="leading-8 text-white/60">
                  Traditional sports equipment reservations may
                  depend on manual records or direct communication
                  with administrators. This creates difficulties
                  when managing multiple requests and maintaining
                  consistent information.
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    "Unclear equipment availability",
                    "Risk of overlapping bookings",
                    "Difficulty tracking reservation statuses",
                    "Fragmented booking and inventory records",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                      <p className="text-sm leading-7 text-white/60">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="border-lime-400/20">
                <div className="mb-5 flex items-center gap-3">
                  <CheckCircle2 className="text-lime-400" size={24} />
                  <h3 className="text-xl font-bold">
                    The Proposed Solution
                  </h3>
                </div>

                <p className="leading-8 text-white/60">
                  ActiveArena brings equipment information and
                  booking requests into one application, supporting
                  a clearer reservation workflow for users and
                  administrative staff.
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    "Centralized sports item listings",
                    "Structured booking request forms",
                    "Booking status and history views",
                    "Administrative review and item management",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0 text-lime-400"
                      />
                      <p className="text-sm leading-7 text-white/60">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </section>

          {/* =================================================
              03 — KEY FEATURES
          ================================================= */}
          <section className="py-20 sm:py-28">
            <SectionLabel number="03">KEY FEATURES</SectionLabel>

            <SectionHeading description="The main application modules were designed around the needs of both users and administrators.">
              Built around the{" "}
              <span className="text-lime-400">booking journey.</span>
            </SectionHeading>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <GlassCard
                    key={feature.title}
                    className="group transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
                        <Icon size={23} />
                      </div>

                      <span className="font-code text-xs text-white/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/55">
                      {feature.description}
                    </p>
                  </GlassCard>
                );
              })}
            </div>
          </section>

          {/* =================================================
              04 — USER WORKFLOW
          ================================================= */}
          <section className="py-20 sm:py-28">
            <SectionLabel number="04">USER WORKFLOW</SectionLabel>

            <SectionHeading description="A structured journey from accessing the application to reviewing a submitted booking.">
              How the <span className="text-lime-400">system works.</span>
            </SectionHeading>

            <div className="grid gap-4 md:grid-cols-5">
              {bookingSteps.map((step, index) => (
                <div key={step.number} className="relative">
                  <GlassCard className="h-full">
                    <span className="font-code text-3xl font-bold text-lime-400/60">
                      {step.number}
                    </span>

                    <h3 className="mt-6 text-base font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/55">
                      {step.description}
                    </p>
                  </GlassCard>

                  {index < bookingSteps.length - 1 && (
                    <ArrowRight
                      size={18}
                      className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-lime-400 md:block"
                    />
                  )}
                </div>
              ))}
            </div>

            <GlassCard className="mt-6">
              <div className="flex items-start gap-4">
                <LayoutDashboard
                  size={24}
                  className="mt-1 shrink-0 text-lime-400"
                />

                <div>
                  <h3 className="text-lg font-semibold">
                    Administrator Workflow
                  </h3>

                  <p className="mt-3 leading-8 text-white/60">
                    Administrators review submitted booking requests,
                    approve or reject reservations, monitor booking
                    records, and manage sports equipment through
                    administrative interfaces.
                  </p>
                </div>
              </div>
            </GlassCard>
          </section>

          {/* =================================================
              05 — TECHNOLOGIES & SYSTEM DESIGN
          ================================================= */}
          <section className="py-20 sm:py-28">
            <SectionLabel number="05">TECHNICAL APPROACH</SectionLabel>

            <SectionHeading description="The project combines visual mobile application development with a Firebase-based architecture and structured system documentation.">
              Behind the <span className="text-lime-400">application.</span>
            </SectionHeading>

            <div className="grid gap-5 sm:grid-cols-2">
              {technologies.map((tech) => {
                const Icon = tech.icon;

                return (
                  <GlassCard key={tech.name}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
                        <Icon size={23} />
                      </div>

                      <div>
                        <p className="font-code text-xs uppercase tracking-widest text-lime-400">
                          {tech.category}
                        </p>

                        <h3 className="mt-2 text-lg font-semibold">
                          {tech.name}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-white/55">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <GlassCard>
                <h3 className="text-xl font-semibold">
                  System Documentation
                </h3>

                <p className="mt-4 leading-8 text-white/60">
                  During the planning and design stages, our team
                  documented the system architecture, context diagram,
                  Entity Relationship Diagram (ERD), Data Flow Diagram
                  (DFD), and interface wireframes.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Architecture",
                    "Context Diagram",
                    "ERD",
                    "DFD",
                    "Wireframes",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-lime-400/20 bg-lime-400/5 px-3 py-2 text-xs text-lime-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-xl font-semibold">
                  Data Model
                </h3>

                <p className="mt-4 leading-8 text-white/60">
                  The database design organizes information into
                  four main entities to support booking operations
                  and user communication.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    "Users",
                    "Sports_Items",
                    "Bookings",
                    "Notifications",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-center font-code text-xs text-lime-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            <p className="mt-5 text-sm leading-7 text-white/40">
              Note: The project report documents Firebase-based
              architecture and integration work, while also identifying
              incomplete backend integration and data persistence
              limitations during testing.
            </p>
          </section>

          {/* =================================================
              06 — UI SHOWCASE
          ================================================= */}
          <ActiveArenaShowcase />

          {/* =================================================
              07 — TESTING & CHALLENGES
          ================================================= */}
          <section className="py-20 sm:py-28">
            <SectionLabel number="07">TESTING & CHALLENGES</SectionLabel>

            <SectionHeading description="Testing helped us evaluate the application's interface, interactions, and areas requiring further development.">
              What we <span className="text-lime-400">learned from testing.</span>
            </SectionHeading>

            <div className="grid gap-6 lg:grid-cols-2">
              <GlassCard>
                <h3 className="mb-6 text-xl font-semibold">
                  Test Results
                </h3>

                <div className="space-y-3">
                  {testResults.map((test) => (
                    <div
                      key={test.name}
                      className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/20 px-4 py-4"
                    >
                      <span className="text-sm text-white/75">
                        {test.name}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 font-code text-xs ${
                          test.result === "Pass"
                            ? "bg-lime-400/10 text-lime-400"
                            : "bg-amber-400/10 text-amber-300"
                        }`}
                      >
                        {test.result}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="mb-6 text-xl font-semibold">
                  Challenges & Limitations
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      title: "Backend Data Persistence",
                      text: "Testing identified inconsistent long-term data saving and incomplete backend integration.",
                    },
                    {
                      title: "Responsive Layout",
                      text: "Some interface elements required additional adjustment across different screen sizes.",
                    },
                    {
                      title: "Error Handling",
                      text: "Validation feedback and error messages were not consistently displayed for all scenarios.",
                    },
                    {
                      title: "Project Scope",
                      text: "Online payments, facility reservations, and offline access were outside the project scope.",
                    },
                  ].map((challenge) => (
                    <div
                      key={challenge.title}
                      className="flex items-start gap-3"
                    >
                      <AlertCircle
                        size={19}
                        className="mt-1 shrink-0 text-amber-300"
                      />

                      <div>
                        <h4 className="font-semibold text-white">
                          {challenge.title}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-white/55">
                          {challenge.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </section>

          {/* =================================================
              08 — MY CONTRIBUTION
          ================================================= */}
          <section className="py-20 sm:py-28">
            <SectionLabel number="08">MY CONTRIBUTION</SectionLabel>

            <SectionHeading description="ActiveArena was developed collaboratively by a four-member project team. I participated across the project lifecycle rather than owning a single isolated module.">
              A collaborative{" "}
              <span className="text-lime-400">development experience.</span>
            </SectionHeading>

            <GlassCard>
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  {
                    title: "System Analysis & Planning",
                    description:
                      "Contributed to discussing project requirements, target users, application features, and booking workflows.",
                  },
                  {
                    title: "UI/UX Design",
                    description:
                      "Collaborated on application layouts, navigation, wireframes, and user-facing interfaces.",
                  },
                  {
                    title: "Mobile App Development",
                    description:
                      "Participated in building application screens and configuring workflows using FlutterFlow.",
                  },
                  {
                    title: "Firebase & Data Integration",
                    description:
                      "Participated in Firebase-related development, data structure planning, and integration work.",
                  },
                  {
                    title: "Testing & Troubleshooting",
                    description:
                      "Helped evaluate application navigation, form interactions, responsiveness, and identified issues.",
                  },
                  {
                    title: "Technical Documentation",
                    description:
                      "Collaborated on system diagrams, implementation documentation, testing results, and the final project report.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-lime-400"
                    />

                    <div>
                      <h3 className="font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-white/55">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </section>

          {/* =================================================
              09 — REFLECTION
          ================================================= */}
          <section className="py-20 sm:py-28">
            <SectionLabel number="09">REFLECTION</SectionLabel>

            <SectionHeading>
              Beyond the <span className="text-lime-400">interface.</span>
            </SectionHeading>

            <div className="grid gap-6 lg:grid-cols-5">
              <GlassCard className="lg:col-span-3">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
                  <Lightbulb size={24} />
                </div>

                <h3 className="text-xl font-semibold">
                  What I Learned
                </h3>

                <p className="mt-5 leading-8 text-white/60">
                  Developing ActiveArena helped me understand the mobile application development process, from identifying user needs and designing interfaces to building features and testing the application.
                </p>

                <p className="mt-4 leading-8 text-white/60">
                  Working with my teammates improved my communication, teamwork, and problem-solving skills. I also learned that a good mobile application is not just about its design, but also how well its features work, how it handles data, and how easy it is for users to navigate.
                </p>
              </GlassCard>

              <GlassCard className="lg:col-span-2">
                <h3 className="text-xl font-semibold">
                  Future Improvements
                </h3>

                <div className="mt-6 space-y-5">
                  {[
                    "Complete and verify backend data persistence.",
                    "Improve validation and error messages.",
                    "Refine layouts across mobile screen sizes.",
                    "Expand booking conflict and availability testing.",
                    "Consider automated testing for critical workflows.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <ArrowUpRight
                        size={18}
                        className="mt-1 shrink-0 text-lime-400"
                      />
                      <p className="text-sm leading-7 text-white/60">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </section>

          {/* =================================================
              FINAL CTA
          ================================================= */}
          <section className="pb-24 pt-12 sm:pb-32">
            <div className="relative overflow-hidden rounded-3xl border border-lime-400/20 bg-gradient-to-br from-lime-400/10 via-emerald-500/5 to-transparent p-8 text-center sm:p-14">
              <div className="pointer-events-none absolute left-1/2 top-0 h-52 w-72 -translate-x-1/2 rounded-full bg-lime-400/10 blur-[90px]" />

              <div className="relative">
                <span className="font-code text-xs tracking-[0.3em] text-lime-400">
                  END OF CASE STUDY
                </span>

                <h2 className="mt-6 text-3xl font-bold sm:text-5xl">
                  Thanks for exploring{" "}
                  <span className="text-lime-400">ActiveArena.</span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl leading-8 text-white/55">
                  Explore more projects to see how I approach
                  application development, information systems,
                  and data-driven solutions.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href="/#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-4 text-sm font-bold text-black transition hover:bg-lime-300"
                  >
                    <ArrowLeft size={17} />
                    Back to Projects
                  </a>

                  <a
                    href="https://active-arena-mujdvm.flutterflow.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm text-white transition hover:border-lime-400/60"
                  >
                    View App Preview
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
          <Link to="/" className="text-xl font-bold">
            wrdyyna<span className="text-lime-400">.</span>
          </Link>

          <p className="font-code text-xs text-white/35">
            ActiveArena — Academic Group Project, 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
