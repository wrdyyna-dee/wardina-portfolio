
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  X,
  Maximize2,
  Smartphone,
  Images,
} from "lucide-react";

const imagePath = "/images/projects/active-arena/";

const screens = [
  {
    title: "Welcome Screen",
    category: "Getting Started",
    image: "welcome.png",
    description:
      "An introduction to Active Arena, welcoming users to the sports booking experience.",
  },
  {
    title: "Sign In",
    category: "Authentication",
    image: "sign-in.png",
    description:
      "A login interface designed for users to access their Active Arena accounts.",
  },
  {
    title: "Sign Up",
    category: "Authentication",
    image: "sign-up.png",
    description:
      "A registration interface for creating a new user account.",
  },
  {
    title: "Home Screen",
    category: "Sports Discovery",
    image: "home.png",
    description:
      "The main dashboard displaying sports categories, popular sports, and navigation options.",
  },
  {
    title: "List Sport",
    category: "Sports Discovery",
    image: "list-sport.png",
    description:
      "A sports listing interface where users can browse available sports items.",
  },
  {
    title: "Book Sport Item",
    category: "Booking Process",
    image: "booking-sport.png",
    description:
      "A booking form for selecting a sport item, preferred date, time, and duration.",
  },
  {
    title: "Booking Confirmation",
    category: "Booking Process",
    image: "booking-confirmation.png",
    description:
      "A confirmation interface displaying a booking summary and an option to navigate to My Booking.",
  },
  {
    title: "My Booking",
    category: "Booking Management",
    image: "my-booking.png",
    description:
      "A booking management interface with status filters and options to view, cancel, or rebook.",
  },
  {
    title: "Booking Details",
    category: "Booking Management",
    image: "booking-details.png",
    description:
      "A detailed booking view showing the selected item, schedule, duration, reason, and booking status.",
  },
  {
    title: "Notifications",
    category: "Booking Updates",
    image: "notifications.png",
    description:
      "A notification interface designed to display booking-related messages and timestamps.",
  },
  {
    title: "My Account",
    category: "Profile Management",
    image: "my-account.png",
    description:
      "A personal profile screen displaying user information, profile editing access, and logout.",
  },
  {
    title: "Admin Dashboard",
    category: "Administration",
    image: "admin dashboard.png",
    description:
      "An administrative interface for monitoring booking requests, reviewing booking statuses, and accessing management tools.",
  },
];

const getImageUrl = (image) =>
  imagePath + encodeURIComponent(image);

export default function ActiveArenaShowcase() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedScreen, setSelectedScreen] = useState(null);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(4);
      }
    };

    updateCardsPerPage();

    window.addEventListener("resize", updateCardsPerPage);

    return () =>
      window.removeEventListener(
        "resize",
        updateCardsPerPage
      );
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [cardsPerPage]);

  useEffect(() => {
    if (selectedScreen === null) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedScreen(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedScreen]);

  const totalPages = Math.ceil(
    screens.length / cardsPerPage
  );

  const visibleScreens = screens.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const previousPage = () => {
    setCurrentPage(
      (prev) => (prev - 1 + totalPages) % totalPages
    );
  };

  const openPreview = (screen) => {
    setSelectedScreen(screen);
  };

  const closePreview = () => {
    setSelectedScreen(null);
  };

  return (
    <>
      <section
        id="showcase"
        className="relative scroll-mt-20 overflow-hidden bg-[#06100c] px-6 py-20 text-white sm:py-28"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="pointer-events-none absolute -left-40 top-40 h-[450px] w-[450px] rounded-full bg-lime-500/10 blur-[130px]" />

        <div className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* SECTION HEADER */}
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.35em] text-lime-400">
                  UI / UX SHOWCASE
                </span>

                <span className="h-px w-16 bg-lime-400" />
              </div>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Explore the{" "}
                <span className="bg-gradient-to-r from-lime-300 to-green-500 bg-clip-text text-transparent">
                  App.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
                Explore the Active Arena mobile application,
                from sports discovery and booking management
                to user profiles and administration.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-lime-400/20 bg-lime-400/5 px-5 py-3">
              <Images
                size={17}
                className="text-lime-400"
              />

              <span className="font-mono text-xs text-lime-300">
                12 APP SCREENS
              </span>
            </div>
          </div>

          {/* SCREEN CARDS */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {visibleScreens.map((screen, index) => {
              const screenNumber =
                currentPage * cardsPerPage + index + 1;

              return (
                <button
                  key={screen.image}
                  type="button"
                  onClick={() => openPreview(screen)}
                  className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.035] text-left transition-all duration-500 hover:-translate-y-2 hover:border-lime-400/50 hover:bg-lime-400/[0.055] hover:shadow-[0_20px_60px_rgba(163,230,53,0.08)]"
                >

                  {/* IMAGE AREA */}
                  <div className="relative flex h-[420px] items-center justify-center overflow-hidden bg-gradient-to-b from-[#102016] to-[#050907] p-5">

                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.12),transparent_70%)]" />

                    {/* PHONE FRAME */}
                    <div className="relative w-[195px] rounded-[29px] border-[6px] border-[#252b2b] bg-black p-[3px] shadow-[0_20px_50px_rgba(0,0,0,0.65)] transition-transform duration-500 group-hover:scale-[1.04]">

                      <div className="overflow-hidden rounded-[21px] bg-black">
                        <img
                          src={getImageUrl(screen.image)}
                          alt={`${screen.title} screenshot`}
                          loading="lazy"
                          className="aspect-[9/19.5] w-full object-contain"
                        />
                      </div>

                    </div>

                    {/* SCREEN NUMBER */}
                    <span className="absolute left-5 top-5 font-mono text-xs text-lime-400/70">
                      {String(screenNumber).padStart(2, "0")}
                    </span>

                    {/* EXPAND ICON */}
                    <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/60 transition-all duration-300 group-hover:border-lime-400/40 group-hover:bg-lime-400 group-hover:text-black">
                      <Maximize2 size={16} />
                    </div>
                  </div>

                  {/* CARD INFORMATION */}
                  <div className="p-5">

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-lime-400">
                      {screen.category}
                    </span>

                    <h3 className="mt-3 text-lg font-semibold text-white">
                      {screen.title}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-white/50">
                      {screen.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">

                      <span className="text-xs font-medium text-lime-400">
                        View Screen
                      </span>

                      <ArrowRight
                        size={17}
                        className="text-lime-400 transition-transform duration-300 group-hover:translate-x-1"
                      />

                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* CAROUSEL NAVIGATION */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 sm:flex-row">

            {/* PAGE INDICATORS */}
            <div className="flex items-center gap-3">

              {Array.from(
                { length: totalPages },
                (_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentPage(index)}
                    aria-label={`Go to page ${index + 1}`}
                    aria-current={
                      currentPage === index
                        ? "page"
                        : undefined
                    }
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentPage === index
                        ? "w-9 bg-lime-400"
                        : "w-2.5 bg-white/20 hover:bg-lime-400/50"
                    }`}
                  />
                )
              )}

              <span className="ml-4 font-mono text-xs text-white/40">
                {String(currentPage + 1).padStart(2, "0")}
                {" / "}
                {String(totalPages).padStart(2, "0")}
              </span>
            </div>

            {/* PREVIOUS / NEXT BUTTONS */}
            <div className="flex items-center gap-3">

              <button
                type="button"
                onClick={previousPage}
                aria-label="Previous screens"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                type="button"
                onClick={nextPage}
                aria-label="Next screens"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-400 text-black transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_25px_rgba(163,230,53,0.25)]"
              >
                <ArrowRight size={20} />
              </button>

            </div>
          </div>

          {/* FOOTER NOTE */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7">

            <div className="flex items-center gap-2">
              <Smartphone
                size={16}
                className="text-lime-400"
              />

              <p className="text-sm text-white/40">
                Active Arena — Sports Booking Mobile Application
              </p>
            </div>

            <p className="font-mono text-xs text-white/30">
              Prototype UI Screens
            </p>
          </div>
        </div>
      </section>

      {/* FULL SCREEN IMAGE PREVIEW */}
      {selectedScreen && (
        <div
          role="presentation"
          onClick={closePreview}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
        >

          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={closePreview}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-lime-400 hover:text-black"
          >
            <X size={22} />
          </button>

          {/* PREVIEW CONTENT */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedScreen.title} preview`}
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-full w-full max-w-3xl flex-col items-center gap-5"
          >

            <div className="min-h-0 max-h-[75vh] overflow-hidden rounded-[24px] border border-white/15 bg-black p-2 shadow-[0_0_70px_rgba(163,230,53,0.12)]">

              <img
                src={getImageUrl(selectedScreen.image)}
                alt={selectedScreen.title}
                className="max-h-[72vh] max-w-full object-contain"
              />

            </div>

            <div className="max-w-xl text-center">

              <span className="font-mono text-xs uppercase tracking-[0.2em] text-lime-400">
                {selectedScreen.category}
              </span>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {selectedScreen.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {selectedScreen.description}
              </p>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
