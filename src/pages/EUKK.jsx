
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Smartphone,
  Monitor,
  Layers,
  ClipboardList,
  CheckCircle2,
  Check,
  Users,
  Bell,
  ShieldCheck,
  Database,
  Code2,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  CalendarDays,
  Camera,
  Gift,
  Lightbulb,
} from "lucide-react";

const BASE = "/images/projects/e-ukk";

const images = {
  logo: `${BASE}/logo-eukk.png`,
  dashboard: `${BASE}/admin-dashboard.png`,
  mobile: `${BASE}/home-page.png`,
};




const showcase = {
  mobile: {
    authentication: [
      {
        title: "Welcome Screen",
        images: [`${BASE}/welcome-page.png`],
        description:
          "The introductory screen that welcomes staff to the e-UKK mobile application.",
        features: [
          "Application Introduction",
          "Login Access", "Sign Up Access",
        ],
      },
      {
        title: "Login",
        images: [`${BASE}/login.png`],
        description:
          "Allows registered staff to securely access the e-UKK mobile application using their UiTM email accounts.",
        features: [
          "Google Sign-In",
          "UiTM Email Restriction",
          "User Authentication",
          "Password Recovery",
        ],
      },
      {
        title: "Sign Up",
        images: [`${BASE}/sign-up.png`],
        description:
          "Allows new staff members to register an account using their UiTM email address..",
        features: [
          "User Registration",
          "UiTM Email Restriction",
          "Firebase Authentication",
        ],
      },
      {
        title: "Forgot Password",
        images: [`${BASE}/forgot-password.png`],
        description:
          "Allows registered users to reset their password if they forget their login credentials.",
        features: [
          "Password Reset",
          "Email Verification",
          "Account Recovery",
        ],
      },
      {
        title: "Create Profile",
        images: [`${BASE}/create-profile.png`],
        description:
          "Allows staff to complete their personal and department information before accessing the e-UKK application.",
        features: [
          "Staff Information",
          "Department Details",
          "Profile Completion",
        ],
      },
    ],

    pages: [
      {
        title: "Home Dashboard",
        images: [`${BASE}/home-page.png`],
        description:
          "The main page where staff can access e-UKK services, view request updates, and navigate through the application.",
        features: [
          "Service Shortcuts",
          "Request Update",
          "Notifications",
          "Application Navigation",
        ],
      },
      {
        title: "My Requests",
        images: [`${BASE}/my-requests.png`],
        description:
          "Allows staff to view previously submitted requests and monitor their current status.",
        features: [
          "Submitted Request History",
          "Request Status Tracking",
          "Request Information",
        ],
      },
      {
        title: "Notifications",
        images: [`${BASE}/notifications.png`],
        description:
          "Displays updates and notifications related to submitted service requests.",
        features: [
          "Request Updates",
          "Status Notifications",
          "Notification History",
        ],
      },
      {
        title: "My Profile",
        images: [`${BASE}/profile.png`],
        description:
          "Displays staff account information and profile details.",
        features: [
          "Personal Information",
          "Department Information",
          "Account Management",
        ],
      },
    ],

    subpages: [
      {
        title: "Publicity Request",
        images: [
          `${BASE}/publicity-1.png`,
          `${BASE}/publicity-2.png`,
        ],
        description:
          "Allows staff to submit publicity requests by providing programme details, promotional content, and preferred publication platforms.",
        features: [
          "Programme Details",
          "Publicity Content Submission",
          "Platform Selection", 
          "Supporting Documents",
        ],
      },
      {
        title: "Media Coverage Request",
        images: [`${BASE}/media-coverage.png`],
        description:
          "Allows staff to request media coverage services for programmes and events by providing event details and coverage requirements.",
        features: [
          "Event Details",
          "Coverage Selection",
          "Additional Information",
          "Supporting Documents",
        ],
      },
      {
        title: "Corporate Souvenir Request",
        images: [
          `${BASE}/souvenir-1.png`,
          `${BASE}/souvenir-2.png`,
        ],
        description:
          "Allows staff to request corporate souvenirs by specifying required items, request justification, and supporting information.",
        features: [
          "Event Details",
          "Souvenir Details",
          "Request Justification",
          "Supporting Documents",
        ],
      },
    ],
  },

  web: [
    {
      title: "Admin Dashboard",
      images: [`${BASE}/admin-dashboard.png`],
      description:
        "Provides administrators with an overview of service requests, assigned tasks, and upcoming programmes through the e-UKK Admin Web Application.",
      features: [
        "Request overview",
        "Task monitoring", "Upcoming Programmes",
        "Administrative insights",
      ],
    },
    {
      title: "Request Management",
      images: [`${BASE}/admin-requests-management.png`],
      description:
        "Allows administrators to review, approve, reject, and track service requests submitted by staff through the e-UKK Admin Web Application..",
      features: [
        "Request Review",
        "Approval and Rejection",
        "Request Status Management", "Search and Filter",
      ],
    },
    {
      title: "Task Management",
      images: [`${BASE}/admin-tasks-management.png`],
      description:
        "Allows administrators to manage assigned tasks, monitor progress, and communicate with Persons in Charge (PICs)..",
      features: [
        "Task Assignment Tracking",
        "Progress Monitoring",
        "Task Status Management", "Quick Communication", "Task Reminders",
      ],
    },
    {
      title: "PIC Management",
      images: [`${BASE}/admin-pic-management.png`],
      description:
        "Allows administrators to manage Persons in Charge (PICs), their information, and assigned responsibilities..",
      features: [
        "PIC Directory",
        "Responsibility Management ",
        "Assignment Support", "Task Overview",
      ],
    },
    {
      title: "User Management",
      images: [`${BASE}/admin-user-management.png`],
      description:
        "Allows administrators to manage registered users, view account information, and control user access to the e-UKK system.",
      features: [
        "User Directory",
        "Account Information",
        "Account Status Managemen", "User Administration",
      ],
    },
    {
      title: "Admin Notifications",
      images: [`${BASE}/admin-notifications.png`],
      description:
        "Allows administrators to view notifications about service requests, assigned tasks, and system activities.",
      features: [
        "System Notifications",
        "Request Updates", "Task Updates",
        "Administrative Alerts",
      ],
    },
    {
      title: "Admin Settings",
      images: [`${BASE}/admin-settings.png`],
      description:
        "Allows administrators to manage system settings and customize preferences in the e-UKK Admin Web Application.",
      features: [
        "System Configuration",
        "Account Recovery", "Account Settings ",
      ],
    },
  ],
};




const features = [
  {
    icon: ClipboardList,
    title: "Request Submission",
    description:
      "Staff can submit publicity, media coverage, and corporate souvenir requests through a structured form.",
  },
  {
    icon: CheckCircle2,
    title: "Request Approval",
    description:
      "Administrators can review submitted requests and approve or reject them.",
  },
  {
    icon: Users,
    title: "PIC Assignment",
    description:
      "Approved requests can be assigned to the appropriate Person in Charge for further action.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description:
      "Users can view updates related to their requests and assigned activities.",
  },
  {
    icon: CalendarDays,
    title: "Programme Tracking",
    description:
      "Programme details and upcoming activities can be monitored through the admin dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access",
    description:
      "Separate interfaces support staff request submission and administrator management.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Submit Request",
    description:
      "Staff select a service and fill in the required details.",
  },
  {
    step: "02",
    title: "Review Request",
    description:
      "The administrator reviews the submitted request and its information.",
  },
  {
    step: "03",
    title: "Approve or Reject",
    description:
      "The administrator approves or rejects the request.",
  },
  {
    step: "04",
    title: "Assign PIC",
    description:
      "Approved requests are assigned to the appropriate Person in Charge.",
  },
  {
    step: "05",
    title: "Track Progress",
    description:
      "The administrator monitors assigned tasks and request progress.",
  },
  {
    step: "06",
    title: "Complete Request",
    description:
      "The request is marked as completed once the work is finished.",
  },
];

const technologies = [
  { icon: Smartphone, name: "FlutterFlow", detail: "Staff Mobile App" },
  { icon: Code2, name: "HTML, CSS & JavaScript", detail: "Admin Web App" },
  { icon: Database, name: "Cloud Firestore", detail: "Database" },
  { icon: ShieldCheck, name: "Firebase Authentication", detail: "Authentication" },
  { icon: Monitor, name: "Firebase Hosting", detail: "Web Deployment" },
  { icon: FileText, name: "Google Drive", detail: "Supporting Documents" },
];
function SectionLabel({ number, children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-mono text-xs uppercase tracking-[0.28em] text-violet-400">
        {number && `${number} / `}{children}
      </span>
      <span className="h-px w-12 bg-violet-500/50" />
    </div>
  );
}

function ImageWithFallback({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-[#21152f] text-violet-300 ${className}`}
      >
        <div className="flex flex-col items-center gap-2 p-4 text-center">
          <Camera size={26} />
          <span className="text-xs">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

function LaptopPhoneMockup() {
  return (
    <div className="relative mx-auto flex w-full min-w-0 items-center justify-center py-10 lg:py-0">
      <div className="relative w-full max-w-[540px]">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-violet-600/25 blur-[85px]" />

        {/* Laptop */}
        <div className="relative z-10 w-[88%]">
          <div className="overflow-hidden rounded-t-xl border-[5px] border-[#38303f] bg-[#170f20] shadow-[0_25px_80px_rgba(0,0,0,0.55)] sm:border-[7px]">
            <ImageWithFallback
              src={images.dashboard}
              alt="e-UKK Admin Dashboard"
              className="block aspect-[16/10] w-full object-cover object-top"
            />
          </div>

          {/* Laptop Base */}
          <div className="relative h-3 rounded-b-xl bg-gradient-to-b from-[#9a94a3] via-[#696371] to-[#35303f] sm:h-4">
            <div className="absolute left-1/2 top-0 h-1.5 w-1/4 -translate-x-1/2 rounded-b-lg bg-[#504958]" />
          </div>
        </div>

        {/* ONE Phone Only */}
        <div className="absolute -bottom-7 right-0 z-20 w-[25%] rotate-[5deg] sm:-bottom-10">
          <div className="overflow-hidden rounded-[20px] border-[5px] border-[#35303f] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.6)] sm:rounded-[28px] sm:border-[7px]">
            <div className="relative bg-white">
              <div className="absolute left-1/2 top-1 z-10 h-2 w-1/3 -translate-x-1/2 rounded-full bg-black sm:h-3" />

              <ImageWithFallback
                src={images.mobile}
                alt="e-UKK Staff Mobile Home"
                className="block aspect-[9/19] w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




function UIShowcase() {
  const [platform, setPlatform] = useState("mobile");
  const [category, setCategory] = useState("authentication");
  const [selected, setSelected] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const categories = [
    {
      id: "authentication",
      label: "Authentication",
      number: "01",
      description: "Account access and profile setup.",
    },
    {
      id: "pages",
      label: "Main Pages",
      number: "02",
      description: "Core application screens and navigation.",
    },
    {
      id: "subpages",
      label: "Service Request Forms",
      number: "03",
      description: "Publicity, media coverage and corporate souvenir requests.",
    },
  ];

  const activeCategory = categories.find(
    (item) => item.id === category
  );

const screens =
  platform === "mobile"
    ? [
        ...showcase.mobile.authentication.map((item) => ({
          ...item,
          tag: "Authentication",
        })),
        ...showcase.mobile.pages.map((item) => ({
          ...item,
          tag: "Main Page",
        })),
        ...showcase.mobile.subpages.map((item) => ({
          ...item,
          tag: "Service Request",
        })),
      ]
    : showcase.web;

  const activeScreen =
    selected !== null ? screens[selected] : null;

  const closeViewer = () => {
    setSelected(null);
    setImageIndex(0);
  };

  const openViewer = (index) => {
    setSelected(index);
    setImageIndex(0);
  };

  const nextScreen = () => {
    setSelected((current) =>
      (current + 1) % screens.length
    );
    setImageIndex(0);
  };

  const previousScreen = () => {
    setSelected((current) =>
      (current - 1 + screens.length) % screens.length
    );
    setImageIndex(0);
  };

  const nextImage = () => {
    if (!activeScreen) return;

    setImageIndex((current) =>
      (current + 1) % activeScreen.images.length
    );
  };

  const previousImage = () => {
    if (!activeScreen) return;

    setImageIndex((current) =>
      (current - 1 + activeScreen.images.length) %
      activeScreen.images.length
    );
  };

  // Keyboard navigation
  useEffect(() => {
    if (selected === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeViewer();
      }

      if (event.key === "ArrowRight") {
        nextScreen();
      }

      if (event.key === "ArrowLeft") {
        previousScreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected, screens.length]);

  return (
    <section
      id="ui-showcase"
      className="relative border-t border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <SectionLabel number="05">
          UI Showcase
        </SectionLabel>

        <div className="mb-12 max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Designed for{" "}
            <span className="text-violet-400">
              two experiences.
            </span>
          </h2>

          <p className="max-w-2xl leading-8 text-gray-400">
            Explore the e-UKK mobile application designed for staff, and the admin web application built for administrators. Both interfaces work together to make request management easier and more organized.
          </p>
        </div>

        {/* PLATFORM TABS */}
        <div className="mb-10 flex border-b border-white/10">
          {[
            { id: "mobile", label: "Mobile Application" },
            { id: "web", label: "Admin Web" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setPlatform(tab.id);
                closeViewer();
              }}
              className={`relative cursor-pointer px-5 pb-5 text-sm font-medium transition-colors sm:px-8 ${
                platform === tab.id
                  ? "text-violet-300"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {tab.label}

              {platform === tab.id && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-violet-400" />
              )}
            </button>
          ))}
        </div>

{platform === "mobile" && (
  <div className="mb-8">
    <p className="mb-2 font-mono text-xs tracking-widest text-violet-400">
      STAFF MOBILE EXPERIENCE
    </p>

    <h3 className="text-xl font-semibold text-white sm:text-2xl">
      Mobile Application Interfaces
    </h3>

    <p className="mt-2 text-sm text-gray-400">
      Explore the interfaces designed for staff to access services,
      submit requests, and track their progress.
    </p>
  </div>
)}

        {/* ADMIN WEB HEADER */}
        {platform === "web" && (
          <div className="mb-8">
            <p className="mb-2 font-mono text-xs tracking-widest text-violet-400">
              ADMIN WEB EXPERIENCE
            </p>

            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Administration & Management
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Explore the interfaces used by administrators
              to manage requests, tasks, users and system activities.
            </p>
          </div>
        )}

        {/* SCREENSHOT GALLERY */}
        <div
          className={`grid gap-5 ${
            platform === "mobile"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 md:grid-cols-2"
          }`}
        >
          {screens.map((screen, index) => (
            <button
              key={screen.title}
              type="button"
              onClick={() => openViewer(index)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] text-left transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.045]"
            >
              {/* IMAGE PREVIEW */}
              <div
                className={`relative flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.13),transparent_75%)] ${
                  platform === "mobile"
                    ? "h-[290px] sm:h-[330px]"
                    : "h-[240px] sm:h-[290px]"
                }`}
              >
                {platform === "mobile" ? (
                  <div className="relative h-[80%] aspect-[9/19] rounded-[20px] border-[5px] border-[#34303F] bg-[#17121F] p-[3px] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                    <div className="h-full overflow-hidden rounded-[13px] bg-white">
                      <img
                        src={screen.images[0]}
                        alt={screen.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-[90%] overflow-hidden rounded-lg border border-white/15 bg-[#17121F] shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                    <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#242033] px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-red-400/70" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                      <span className="h-2 w-2 rounded-full bg-green-400/70" />
                    </div>

                    <img
                      src={screen.images[0]}
                      alt={screen.title}
                      loading="lazy"
                      className="block aspect-video w-full object-contain object-top"
                    />
                  </div>
                )}

                {/* MULTIPLE SCREENSHOT INDICATOR */}
                {screen.images.length > 1 && (
                  <span className="absolute right-4 top-4 rounded-full border border-violet-400/20 bg-[#171021]/90 px-3 py-1.5 font-mono text-xs text-violet-200">
                    {screen.images.length} Screens
                  </span>
                )}
              </div>

              {/* SCREEN INFORMATION */}
              <div className="flex items-center justify-between gap-4 border-t border-white/10 p-5">
                <div>
                  <p className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-violet-400">
                    {platform === "mobile" ? screen.tag : "Admin Web"}
                  </p>

                  <h4 className="font-semibold text-white">
                    {screen.title}
                  </h4>
                </div>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-violet-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* FULLSCREEN SHOWCASE VIEWER */}
      {activeScreen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#080A14]/95 p-3 backdrop-blur-xl sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeScreen.title} screenshot viewer`}
          onClick={closeViewer}
        >
          <div
            className="relative flex max-h-[94dvh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-violet-400/20 bg-[#0D1020] shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* VIEWER HEADER */}
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.7)]" />

                <span className="font-mono text-xs tracking-wider text-violet-300">
                  e-UKK / UI EXPLORER
                </span>
              </div>

              <button
                type="button"
                onClick={closeViewer}
                aria-label="Close viewer"
                className="cursor-pointer rounded-full border border-white/10 p-2.5 text-gray-400 transition-colors hover:border-violet-400/40 hover:text-white"
              >
                <X size={19} />
              </button>
            </div>

            {/* VIEWER CONTENT */}
            <div className="grid min-h-0 flex-1 overflow-y-auto lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)]">

              {/* LEFT — SCREENSHOT */}
              <div className="flex min-h-[300px] flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_70%)] p-6 sm:p-10">

                <div className="flex w-full flex-1 items-center justify-center">
                  {platform === "mobile" ? (
                    <div className="relative w-[190px] max-w-full rounded-[30px] border-[7px] border-[#34303F] bg-[#17121F] p-[4px] shadow-[0_25px_70px_rgba(0,0,0,0.6)] sm:w-[225px]">
                      <div className="overflow-hidden rounded-[21px] bg-white">
                        <img
                          key={activeScreen.images[imageIndex]}
                          src={activeScreen.images[imageIndex]}
                          alt={`${activeScreen.title} - Screen ${imageIndex + 1}`}
                          className="block aspect-[9/19] w-full object-contain object-top"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-white/15 bg-[#17121F] shadow-[0_25px_70px_rgba(0,0,0,0.5)]">
                      <div className="flex items-center gap-2 border-b border-white/10 bg-[#242033] px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                      </div>

                      <img
                        src={activeScreen.images[imageIndex]}
                        alt={activeScreen.title}
                        className="block max-h-[55vh] w-full object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* MULTI-IMAGE NAVIGATION */}
                {activeScreen.images.length > 1 && (
                  <div className="mt-6 flex items-center gap-5">
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous page"
                      className="cursor-pointer rounded-full border border-white/15 p-2.5 text-white transition hover:border-violet-400/50 hover:bg-violet-500/10"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <span className="font-mono text-xs text-gray-400">
                      PAGE {imageIndex + 1} / {activeScreen.images.length}
                    </span>

                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next page"
                      className="cursor-pointer rounded-full border border-white/15 p-2.5 text-white transition hover:border-violet-400/50 hover:bg-violet-500/10"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </div>

              {/* RIGHT — INFORMATION PANEL */}
              <div className="flex flex-col border-t border-white/10 bg-[#101326] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">

                <div className="flex-1">
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-violet-400">
                    {platform === "mobile"
                      ? `Mobile Application / ${activeScreen.tag}`
                      : "Admin Web Application"}
                  </p>

                  <h3 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                    {activeScreen.title}
                  </h3>

                  <p className="leading-8 text-gray-400">
                    {activeScreen.description}
                  </p>

                  <div className="my-8 h-px bg-white/10" />

                  <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                    Key Features
                  </h4>

                  <div className="space-y-4">
                    {activeScreen.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                          <Check size={12} />
                        </span>

                        <span className="text-sm leading-6 text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SHOWCASE NAVIGATION */}
                <div className="mt-10 border-t border-white/10 pt-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-xs text-gray-500">
                      SCREEN {String(selected + 1).padStart(2, "0")} /{" "}
                      {String(screens.length).padStart(2, "0")}
                    </span>

                    <span className="font-mono text-xs text-violet-400">
                      {platform === "mobile" ? "MOBILE" : "WEB"}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={previousScreen}
                      className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm text-gray-300 transition hover:border-violet-400/40 hover:text-white"
                    >
                      <ArrowLeft size={17} />
                      Previous
                    </button>

                    <button
                      type="button"
                      onClick={nextScreen}
                      className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-violet-400/40 bg-violet-500/15 px-4 py-3 text-sm text-violet-200 transition hover:bg-violet-500/25"
                    >
                      Next
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}




export default function EUKK() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0610] text-white">
      {/* Navigation */}
      <header className="border-b border-violet-400/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-6 sm:px-8 lg:px-12">
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-white"
          >
            wrdyyna<span className="text-violet-400">.</span>
          </Link>

          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 px-4 py-2.5 text-sm text-white transition hover:border-violet-400 hover:bg-violet-500/10"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-8 pb-16 sm:px-8 sm:pt-10 lg:px-12 lg:pt-10 lg:pb-20">
        <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-violet-700/15 blur-[120px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[300px] w-[300px] rounded-full bg-fuchsia-700/10 blur-[100px]" />

<div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
  {/* LEFT CONTENT */}
  <div className="min-w-0">
    <SectionLabel>
      Case Study · Final Year Project
    </SectionLabel>
  <img
    src={images.logo}
    alt="e-UKK Logo"
    className="mb-6 h-auto w-36 object-contain sm:w-44"
  />


            <h2 className="mb-7 max-w-xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Corporate Communications Request Management System
            </h2>

            <p className="max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              A centralized request management system that connects staff and Corporate Communication Unit administrators through a mobile application and an admin web application.
            </p>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-nowrap lg:gap-2">
              <a
                href="https://e-ukk-fpy59d.flutterflow.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-violet-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
              >
                <Smartphone size={17} />
                Mobile App
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://e-ukk-fis.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-violet-400/40 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500/10"
              >
                <Monitor size={17} />
                Admin Web Application
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#overview"
                className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-violet-400/50"
              >
                Explore Case Study
                <ArrowRight size={17} />
              </a>
            </div>

            {/* TECH TAGS */}
            <div className="mt-9 flex flex-wrap gap-2">
              {["FlutterFlow", "Firebase", "JavaScript", "UI/UX"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-violet-400/20 bg-violet-400/[0.04] px-4 py-2 font-mono text-xs text-violet-300"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* RIGHT CONTENT — LAPTOP + ONE PHONE */}
          <LaptopPhoneMockup />
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section
        id="overview"
        className="scroll-mt-10 border-t border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="01">Project Overview</SectionLabel>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
                Making communication requests{" "}
                <span className="block text-violet-400">
                  easier to manage.
                </span>
              </h2>



              <p className="mb-5 leading-8 text-gray-400">
                e-UKK is my Final Year Project, developed to help the Corporate Communication Unit at the Faculty of Information Science, UiTM manage service requests more efficiently.
              </p>

              <p className="leading-8 text-gray-400">
                The system includes a mobile application for staff to submit requests and an admin web application for administrators to review requests, assign tasks, and track progress.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["Project Type", "Final Year Project"],
                ["Year", "2026"],
                ["Platforms", "Mobile + Web"],
                ["My Involvement", "System Design, Development & Testing"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-violet-400/15 bg-white/[0.035] p-5"
                >
                  <p className="mb-3 font-mono text-xs text-violet-400">
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
      <section className="border-t border-white/10 bg-white/[0.015] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="02">Problem & Solution</SectionLabel>

          <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
            From scattered requests to a{" "}
            <span className="text-violet-400">
              centralized workflow.
            </span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-rose-400/15 bg-rose-400/[0.035] p-7 sm:p-9">
              <span className="mb-5 inline-block font-mono text-xs uppercase tracking-widest text-rose-300">
                The Problem
              </span>

              <h3 className="mb-5 text-2xl font-semibold">
                Difficult to manage and track requests.
              </h3>

              <p className="leading-8 text-gray-400">
                Managing corporate communication requests involves different services, programme details, and staff responsibilities. Without a centralized system, tracking request status, managing tasks, and finding information can be challenging.
              </p>
            </div>

            <div className="rounded-3xl border border-violet-400/25 bg-violet-400/[0.055] p-7 sm:p-9">
              <span className="mb-5 inline-block font-mono text-xs uppercase tracking-widest text-violet-300">
                The Solution
              </span>

              <h3 className="mb-5 text-2xl font-semibold">
                A centralized request management system.
              </h3>

              <p className="leading-8 text-gray-400">
                e-UKK brings all requests into one system. Staff can submit requests through the mobile application, while administrators can review submissions, assign tasks, and monitor progress through the admin web application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="03">Key Features</SectionLabel>

          <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
            Designed around the{" "}
            <span className="text-violet-400">
              request lifecycle.
            </span>
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-violet-400/15 bg-white/[0.035] p-7 transition hover:border-violet-400/40 hover:bg-violet-400/[0.045]"
                >
                  <div className="mb-6 inline-flex rounded-2xl border border-violet-400/20 bg-violet-400/10 p-4 text-violet-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="border-t border-white/10 bg-white/[0.015] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="04">System Workflow</SectionLabel>

          <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
            How <span className="text-violet-400">e-UKK works.</span>
          </h2>

          <p className="mb-12 max-w-2xl leading-8 text-gray-400">
            The system follows six simple steps, from submitting a request to completing the assigned work.
          </p>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {workflow.map((item, index) => (
    <div
      key={item.step}
      className="relative rounded-2xl border border-violet-400/15 bg-[#150c20] p-7"
    >
      {/* STEP NUMBER */}
      <span className="mb-5 block font-mono text-3xl font-bold text-violet-400/60">
        {item.step}
      </span>

      {/* STEP TITLE */}
      <h3 className="mb-3 text-lg font-semibold">
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm leading-7 text-gray-400">
        {item.description}
      </p>

{/* ARROW BETWEEN CARDS */}
{index !== workflow.length - 1 && (
  <span
    className={`
      pointer-events-none absolute
      -right-[22px] top-1/2 z-20
      hidden -translate-y-1/2
      text-violet-400
      ${index % 2 === 0 ? "md:block" : ""}
      ${index % 3 !== 2 ? "lg:block" : "lg:hidden"}
    `}
  >
    <ArrowRight size={22} strokeWidth={2.2} />
  </span>
)}
    </div>
  ))}
</div>
        </div>
      </section>

      {/* UI SHOWCASE */}
      <UIShowcase />

      {/* TECHNOLOGIES */}
      <section className="border-t border-white/10 bg-white/[0.015] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="06">Technology Stack</SectionLabel>

          <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
            Tools behind{" "}
            <span className="text-violet-400">the system.</span>
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-4 rounded-2xl border border-violet-400/15 bg-white/[0.035] p-5"
                >
                  <div className="rounded-xl bg-violet-400/10 p-3 text-violet-300">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      {tech.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-400">
                      {tech.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="border-t border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="07">Lessons Learned</SectionLabel>

          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex rounded-2xl bg-violet-400/10 p-4 text-violet-300">
                <Lightbulb size={26} />
              </div>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                More than building{" "}
                <span className="text-violet-400">
                  an application.
                </span>
              </h2>
            </div>

            <div className="space-y-5 leading-8 text-gray-400">
              <p>
                Developing e-UKK strengthened my understanding of
                translating operational requirements into a
                functional digital system.
              </p>

              <p>
                I gained practical experience in designing user
                workflows, connecting interfaces to a database,
                handling authentication, and testing system
                functionality.
              </p>

              <p>
                The project also helped me improve my
                problem-solving skills through troubleshooting
                integration issues, refining user interactions,
                and evaluating the system from both staff and
                administrator perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT LINKS */}
      <section className="border-t border-white/10 bg-gradient-to-b from-violet-900/10 to-transparent px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl border border-violet-400/20 bg-violet-400/[0.045] p-8 text-center sm:p-12">
          <SectionLabel number="08">Explore the Project</SectionLabel>

          <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
            Explore <span className="text-violet-400">e-UKK.</span>
          </h2>

          <p className="mx-auto mb-8 max-w-xl leading-8 text-gray-400">
            Visit the e-UKK prototype through the staff mobile application and admin web application. Some features may require an authorized account to access.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://e-ukk-fpy59d.flutterflow.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 font-semibold text-white hover:bg-violet-400"
            >
              <Smartphone size={18} />
              Mobile Application
              <ExternalLink size={16} />
            </a>

            <a
              href="https://e-ukk-fis.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-violet-400/40 px-6 py-3.5 font-semibold text-white hover:bg-violet-500/10"
            >
              <Monitor size={18} />
              Admin Web Application
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      


{/* FOOTER */}
<footer className="border-t border-violet-400/15 bg-[#0b0610] px-5 py-8 sm:px-8 lg:px-12">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">

    {/* PORTFOLIO LOGO */}
    <Link
      to="/"
      className="text-2xl font-extrabold tracking-tight text-white"
    >
      wrdyyna<span className="text-violet-400">.</span>
    </Link>

    {/* PROJECT INFORMATION */}
    <p className="font-code text-xs text-gray-500">
      e-UKK — Final Year Project, 2026
    </p>

    {/* BACK TO TOP */}
    <button
      type="button"
      onClick={scrollToTop}
      className="group flex cursor-pointer items-center gap-3 font-code text-xs tracking-widest text-white transition-colors duration-300 hover:text-violet-300"
    >
      <span>BACK TO TOP</span>

      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/10 text-violet-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-violet-400 group-hover:bg-violet-500/20">
        <ArrowUp size={20} strokeWidth={1.8} />
      </span>
    </button>

  </div>
</footer>

    </div>
  );
}


