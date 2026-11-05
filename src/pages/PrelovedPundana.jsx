import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Database,
  Heart,
  ShoppingBag,
  Users,
  ShieldCheck,
  Layers,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  Recycle,
  Code2,
} from "lucide-react";

const screenshots = [
  {
    title: "Marketplace Homepage",
    category: "Product Discovery",
    image: "/images/projects/preloved-pundana/marketplace.png",
    description:
      "A marketplace displaying preloved items with product images, prices, availability status and quick access to item details.",
  },
  {
    title: "Preloved Item Listings",
    category: "Product Catalogue",
    image: "/images/projects/preloved-pundana/listings.png",
    description:
      "A catalogue of second-hand items showing available, reserved and sold statuses, alongside item details and favourites.",
  },
  {
    title: "User Login",
    category: "Authentication",
    image: "/images/projects/preloved-pundana/login.png",
    description:
      "A dedicated login interface allowing registered users to access their marketplace accounts.",
  },
];

const features = [
  {
    icon: ShoppingBag,
    title: "Item Management",
    description:
      "Users can create and manage preloved-item listings with product descriptions, prices, categories, conditions and images.",
  },
  {
    icon: Users,
    title: "User Accounts",
    description:
      "Registration and login support user access and account-based listing management.",
  },
  {
    icon: Heart,
    title: "Favourites",
    description:
      "Users and guests can save items they are interested in and revisit them through the favourites feature.",
  },
  {
    icon: ShieldCheck,
    title: "Availability Tracking",
    description:
      "Product listings communicate whether an item is available, reserved or sold.",
  },
  {
    icon: Database,
    title: "Relational Database",
    description:
      "MySQL stores user accounts, item listings and favourites through related database tables.",
  },
  {
    icon: Recycle,
    title: "Sustainable Marketplace",
    description:
      "The platform encourages students to reuse items and find more affordable alternatives.",
  },
];

const flow = [
  {
    step: "01",
    title: "Register / Login",
    description: "Users create an account or sign in.",
  },
  {
    step: "02",
    title: "Explore Marketplace",
    description: "Browse preloved items and check their availability.",
  },
  {
    step: "03",
    title: "View Details",
    description: "Review item information, price and condition.",
  },
  {
    step: "04",
    title: "Save or List Items",
    description: "Save favourites or manage personal item listings.",
  },
  {
    step: "05",
    title: "Contact Seller",
    description:
      "Interested buyers can arrange purchases directly with sellers.",
  },
];

function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="mb-10">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-xs tracking-[0.3em] text-violet-400">
          {number} / {eyebrow}
        </span>
        <span className="h-px w-12 bg-violet-500/50" />
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function PrelovedPundana() {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % screenshots.length);
  };

  const previousImage = () => {
    setActiveImage(
      (current) =>
        (current - 1 + screenshots.length) % screenshots.length
    );
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080609] text-white">
      {/* HEADER */}
      <header className="relative z-20 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
          <Link to="/" className="text-2xl font-extrabold tracking-tight">
            wrdyyna<span className="text-violet-400">.</span>
          </Link>

          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 px-4 py-2.5 text-xs text-white transition hover:border-violet-400 hover:bg-violet-500/10 sm:px-6 sm:text-sm"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 top-0 h-[600px] w-[600px] rounded-full bg-violet-700/20 blur-[150px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-fuchsia-700/10 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pt-8 pb-16 sm:px-8 sm:pt-10 lg:grid-cols-2 lg:gap-8 lg:pt-10 lg:pb-20">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.35em] text-violet-400">
                CASE STUDY
              </span>
              <span className="h-px w-16 bg-violet-500" />
            </div>

            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl border border-violet-400/30 bg-violet-500/10 p-4 text-violet-400">
                <ShoppingBag size={34} />
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Preloved
                <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
                  Pundana.
                </span>
              </h1>
            </div>

            <h2 className="mb-6 text-xl font-semibold text-zinc-200 sm:text-2xl">
              Student Preloved Marketplace System
            </h2>

            <p className="max-w-xl text-base leading-8 text-zinc-400">
              A web-based marketplace designed for UiTM Puncak Perdana
              students to discover, list and manage affordable second-hand
              items while promoting sustainable consumption.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["PHP", "MySQL", "phpMyAdmin", "Web Development", "Database Design"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-2 font-mono text-xs text-violet-200"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#showcase"
                className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400"
              >
                View UI Showcase
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:border-violet-400"
              >
                Explore Case Study
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          {/* HERO PREVIEW */}
          <div className="relative flex min-h-[300px] items-center justify-center sm:min-h-[420px]">
            <div className="absolute inset-8 rounded-full bg-violet-600/20 blur-[90px]" />

            <div className="relative w-full max-w-[620px] overflow-hidden rounded-2xl border border-violet-400/30 bg-[#161020] p-2 shadow-[0_30px_100px_rgba(100,40,180,0.25)] sm:rounded-3xl sm:p-3">
              <div className="mb-3 flex items-center gap-2 px-2 pt-1">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-3 truncate font-mono text-[10px] text-zinc-500">
                  prelovedpundana / marketplace
                </span>
              </div>

              <img
                src={screenshots[0].image}
                alt="Preloved Pundana marketplace interface"
                className="aspect-[16/10] w-full rounded-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="01"
            eyebrow="OVERVIEW"
            title="About the Project."
            description="A database-driven academic group project developed for the Advanced Database Management System course."
          />

          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <h3 className="mb-5 text-xl font-semibold">
                Making Second-Hand Shopping More Accessible
              </h3>

              <p className="leading-8 text-zinc-400">
                Preloved Pundana was developed to provide students with a
                centralised platform for buying and selling second-hand
                items such as clothing, shoes, accessories and electronics.
              </p>

              <p className="mt-5 leading-8 text-zinc-400">
                The system brings item listings, availability information,
                user accounts and favourites into a structured web
                environment. It also supports the reuse of items and
                more affordable shopping within the campus community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["PROJECT TYPE", "Academic Group Project"],
                ["YEAR", "2025"],
                ["PLATFORM", "Web Application"],
                ["FOCUS", "Database & Web Development"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="mb-3 font-mono text-[10px] tracking-widest text-violet-400">
                    {label}
                  </p>
                  <p className="text-sm font-medium leading-6 text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM AND SOLUTION */}
      <section className="bg-white/[0.015] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="02"
            eyebrow="THE CHALLENGE"
            title="Problem & Solution."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-rose-500/20 bg-rose-500/[0.04] p-8">
              <p className="mb-5 font-mono text-xs tracking-widest text-rose-300">
                THE PROBLEM
              </p>

              <h3 className="mb-5 text-2xl font-semibold">
                Scattered Listings. Limited Visibility.
              </h3>

              <p className="leading-8 text-zinc-400">
                Students often use WhatsApp or Telegram groups to sell their preloved items. However, product listings can be difficult to find, organize, and track, making it harder for buyers to check available items.
              </p>
            </div>

            <div className="rounded-3xl border border-violet-500/20 bg-violet-500/[0.05] p-8">
              <p className="mb-5 font-mono text-xs tracking-widest text-violet-300">
                OUR SOLUTION
              </p>

              <h3 className="mb-5 text-2xl font-semibold">
                One Centralised Student Marketplace.
              </h3>

              <p className="leading-8 text-zinc-400">
                We designed a dedicated marketplace where students can browse preloved items, check prices and availability, manage their listings, and save favorite products in one organized platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="03"
            eyebrow="FUNCTIONALITY"
            title="Core Features."
            description="The system combines marketplace functionality with structured information management."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/[0.05]"
              >
                <div className="mb-6 inline-flex rounded-xl border border-violet-400/20 bg-violet-500/10 p-3 text-violet-300">
                  <Icon size={23} />
                </div>

                <h3 className="mb-3 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-7 text-zinc-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="border-y border-white/10 bg-white/[0.015] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="04"
            eyebrow="USER JOURNEY"
            title="How It Works."
            description="A simplified overview of the student marketplace experience."
          />

          <div className="grid gap-4 md:grid-cols-5">
            {flow.map((item, index) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-violet-400/15 bg-[#14101c] p-5"
              >
                <span className="font-mono text-3xl font-bold text-violet-400/60">
                  {item.step}
                </span>

                <h3 className="mb-3 mt-6 font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>

                {index < flow.length - 1 && (
                  <ArrowRight
                    size={18}
                    className="absolute -right-3 top-1/2 z-10 hidden text-violet-400 md:block"
                  />
                )}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-zinc-500">
            Note: Buyer-seller communication and payment arrangements
            take place outside the marketplace system.
          </p>
        </div>
      </section>

      {/* DATABASE */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="05"
            eyebrow="TECHNICAL DESIGN"
            title="Database Architecture."
            description="A relational database structure designed to organise users, marketplace listings and saved items."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                name: "users",
                icon: Users,
                fields: [
                  "user_id (PK)",
                  "full_name",
                  "email",
                  "password",
                  "student_id",
                  "user_type",
                ],
                text: "Stores user information and account details.",
              },
              {
                name: "items",
                icon: ShoppingBag,
                fields: [
                  "item_id (PK)",
                  "user_id (FK)",
                  "item_title",
                  "category",
                  "price",
                  "item_status",
                ],
                text: "Stores product listings and links items to sellers.",
              },
              {
                name: "favourites",
                icon: Heart,
                fields: [
                  "favourite_id (PK)",
                  "user_id (FK)",
                  "item_id (FK)",
                  "favourited_date",
                  "guest_id",
                  "status",
                ],
                text: "Tracks items saved by registered users or guests.",
              },
            ].map(({ name, icon: Icon, fields, text }) => (
              <div
                key={name}
                className="overflow-hidden rounded-2xl border border-violet-400/20 bg-[#110d19]"
              >
                <div className="flex items-center gap-3 border-b border-violet-400/20 bg-violet-500/10 px-6 py-5">
                  <Icon size={20} className="text-violet-300" />
                  <h3 className="font-mono text-lg font-semibold text-violet-200">
                    {name}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="mb-5 text-sm leading-7 text-zinc-400">
                    {text}
                  </p>

                  <div className="space-y-3">
                    {fields.map((field) => (
                      <div
                        key={field}
                        className="flex items-center gap-3 border-b border-white/5 pb-2 font-mono text-xs text-zinc-300"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                        {field}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <div className="mb-3 flex items-center gap-3">
              <Database className="text-violet-400" size={20} />
              <h3 className="font-semibold">Database Relationships</h3>
            </div>

            <p className="text-sm leading-7 text-zinc-400">
              One user can create multiple item listings. Users can also
              save multiple items to favourites, while the favourites
              table connects users and items through foreign keys.
              The project database was documented and implemented
              using MySQL and phpMyAdmin.
            </p>
          </div>
        </div>
      </section>

      {/* UI SHOWCASE */}
      <section
        id="showcase"
        className="border-y border-white/10 bg-white/[0.015] py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="06"
            eyebrow="UI SHOWCASE"
            title="Inside Preloved Pundana."
            description="A closer look at the actual marketplace interfaces captured during development."
          />

          <div className="overflow-hidden rounded-3xl border border-violet-400/20 bg-[#120d1b]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 p-5 sm:p-7">
              <div>
                <p className="mb-2 font-mono text-xs tracking-widest text-violet-400">
                  {String(activeImage + 1).padStart(2, "0")} /{" "}
                  {String(screenshots.length).padStart(2, "0")}
                </p>

                <h3 className="text-lg font-semibold sm:text-xl">
                  {screenshots[activeImage].title}
                </h3>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous screenshot"
                  className="rounded-full border border-white/20 p-3 transition hover:border-violet-400 hover:text-violet-300"
                >
                  <ChevronLeft size={19} />
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next screenshot"
                  className="rounded-full border border-white/20 p-3 transition hover:border-violet-400 hover:text-violet-300"
                >
                  <ChevronRight size={19} />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="group block w-full cursor-zoom-in bg-[#090610] p-4 sm:p-8"
              aria-label="Open screenshot"
            >
              <img
                src={screenshots[activeImage].image}
                alt={screenshots[activeImage].title}
                className="mx-auto max-h-[600px] w-full rounded-xl object-contain shadow-2xl transition duration-300 group-hover:scale-[1.01]"
              />
            </button>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 p-5 sm:p-7">
              <div className="max-w-2xl">
                <p className="mb-2 font-mono text-xs text-violet-400">
                  {screenshots[activeImage].category}
                </p>
                <p className="text-sm leading-7 text-zinc-400">
                  {screenshots[activeImage].description}
                </p>
              </div>

              <div className="flex gap-2">
                {screenshots.map((item, index) => (
                  <button
                    type="button"
                    key={item.title}
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show ${item.title}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeImage === index
                        ? "w-8 bg-violet-400"
                        : "w-2 bg-zinc-600 hover:bg-violet-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {screenshots.map((item, index) => (
              <button
                type="button"
                key={item.title}
                onClick={() => setActiveImage(index)}
                className={`overflow-hidden rounded-xl border text-left transition ${
                  activeImage === index
                    ? "border-violet-400 bg-violet-500/10"
                    : "border-white/10 bg-white/[0.02] hover:border-violet-400/50"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-video w-full object-cover object-top"
                />
                <p className="p-4 text-sm font-medium">{item.title}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNINGS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="07"
            eyebrow="REFLECTION"
            title="What We Learned."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="mb-5 flex items-center gap-3">
                <Code2 className="text-violet-400" size={24} />
                <h3 className="text-xl font-semibold">
                  Technical Experience
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  "Designing relational tables and entity relationships",
                  "Working with primary keys, foreign keys and indexes",
                  "Connecting marketplace requirements with database design",
                  "Understanding how PHP and MySQL support dynamic web applications",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-violet-400"
                    />
                    <p className="text-sm leading-7 text-zinc-400">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="mb-5 flex items-center gap-3">
                <Layers className="text-violet-400" size={24} />
                <h3 className="text-xl font-semibold">
                  Project & Teamwork Experience
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  "Translating a campus problem into system requirements",
                  "Planning the user journey and marketplace functionality",
                  "Collaborating as a group on system development",
                  "Documenting the database, business rules and process flow",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-violet-400"
                    />
                    <p className="text-sm leading-7 text-zinc-400">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs tracking-[0.25em] text-violet-400">
              EXPLORE MORE
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              More Selected Works.
            </h2>
          </div>

          <Link
            to="/#projects"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-violet-400/40 px-6 py-3 text-sm font-medium transition hover:bg-violet-500/10"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

        {/* FOOTER */}
        <footer className="border-t border-violet-400/15 bg-[#080609]">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-12 sm:flex-row sm:px-8">
            {/* LEFT - BRAND */}
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-tight text-white transition hover:opacity-80"
            >
              wrdyyna<span className="text-violet-400">.</span>
            </Link>

            {/* RIGHT - PROJECT INFO */}
            <p className="text-center font-mono text-xs font-medium tracking-wide text-violet-300/45 sm:text-right sm:text-sm">
              Preloved Pundana — Academic Group Project, 2025
            </p>
          </div>
        </footer>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot preview"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close preview"
            className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 p-3 hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 rounded-full bg-white/10 p-3 hover:bg-white/20 sm:left-8"
          >
            <ChevronLeft size={22} />
          </button>

          <img
            src={screenshots[activeImage].image}
            alt={screenshots[activeImage].title}
            className="max-h-[85vh] max-w-[85vw] object-contain"
          />

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 rounded-full bg-white/10 p-3 hover:bg-white/20 sm:right-8"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </main>
  );
}