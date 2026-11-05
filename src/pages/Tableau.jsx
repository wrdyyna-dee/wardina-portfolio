import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, ArrowUp, BarChart3, Database, PieChart,
  Activity, Target, Lightbulb, AlertCircle, ExternalLink, CheckCircle2,
  FileSpreadsheet, Search, TrendingUp, Monitor,
} from "lucide-react";

const BASE = "/images/projects/tableau/";
// Optional: put a transparent 3D analytics illustration at public/images/projects/tableau/analytics-3d.png
const HERO_IMAGE = `${BASE}analytics-3d.png`;
const TABLEAU_PUBLIC_URL = ""; // Add your published Tableau Public link when available.

const dashboards = [
  {
    number: "01", title: "Food Intake & Calories Profile", category: "Dietary behaviour",
    image: `${BASE}food-intake.png`,
    question: "How does fast-food consumption frequency relate to calorie intake across demographic groups?",
    description: "Explores fast-food meal frequency, daily calorie intake, age, and gender through comparative visualizations.",
    finding: "Average daily calorie intake appears similar between females and males. The dashboard also shows how calorie values are distributed across the dataset.",
    tags: ["Consumption frequency", "Calories", "Demographics"],
  },
  {
    number: "02", title: "BMI & Physical Health Analysis", category: "Physical wellbeing",
    image: `${BASE}bmi-physical-health.png`,
    question: "How do fast-food habits, activity, and sleep relate to BMI and energy levels?",
    description: "Compares BMI, physical activity, sleep duration, and reported energy levels across groups.",
    finding: "Average BMI across the fast-food frequency groups shown is generally in the mid-20s. These comparisons do not show that fast food causes changes in BMI.",
    tags: ["BMI", "Activity", "Sleep"],
  },
  {
    number: "03", title: "Health Impact & Symptoms", category: "Health indicators",
    image: `${BASE}health-impact.png`,
    question: "What patterns appear in digestive issues, health scores, and healthcare visits?",
    description: "Examines reported digestive symptoms, overall health scores, and doctor visits alongside dietary characteristics.",
    finding: "Of the 766 records shown in the digestive issues chart, 292 reported digestive issues and 474 did not. This is a descriptive count, not evidence of a cause.",
    tags: ["Symptoms", "Health score", "Doctor visits"],
  },
  {
    number: "04", title: "Lifestyle Correlation & Overall Health", category: "Lifestyle relationships",
    image: `${BASE}lifestyle-correlation.png`,
    question: "How do overall health indicators vary across demographic and lifestyle groups?",
    description: "Combines demographic comparisons with lifestyle and health-related measures to examine differences between groups.",
    finding: "Average overall health scores were close for females (4.96) and males (4.94). This small difference alone does not establish a meaningful gender effect.",
    tags: ["Overall health", "Energy", "Demographics"],
  },
];

const steps = [
  { icon: Search, title: "Understand the Data", description: "Review dietary, demographic, lifestyle, and health variables." },
  { icon: FileSpreadsheet, title: "Prepare in OpenRefine", description: "Clean and organize the dataset, check values, and improve consistency before analysis." },
  { icon: Database, title: "Structure in Tableau", description: "Explore the variables and set up comparisons using Tableau dimensions and measures." },
  { icon: BarChart3, title: "Build Dashboards", description: "Create four themed dashboards with charts and interactive elements." },
  { icon: Lightbulb, title: "Interpret Findings", description: "Summarize visible patterns and explain what the analysis cannot conclude." },
];

function Label({ children }) {
  return (
    <div className="mb-7 flex items-center gap-5">
      <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-purple-400">{children}</span>
      <span className="h-px w-16 bg-purple-500/50" />
    </div>
  );
}
function Heading({ label, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <Label>{label}</Label>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-8 text-slate-400">{description}</p>}
    </div>
  );
}
function Panel({ children, className = "" }) {
  return <div className={`rounded-[22px] border border-purple-400/15 bg-purple-500/[0.035] ${className}`}>{children}</div>;
}

function HeroArtwork() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <div className="relative mx-auto flex min-h-[310px] w-full max-w-[600px] items-center justify-center md:min-h-[440px]">
      <div className="pointer-events-none absolute inset-12 rounded-full bg-purple-600/25 blur-[95px]" />
      {imageLoaded && !imageFailed ? (
        <img
  src={HERO_IMAGE}
  alt="3D data analytics illustration"
  className="relative z-10 w-full max-w-[400px] object-contain drop-shadow-[0_24px_50px_rgba(139,92,246,0.25)] transition-transform duration-700 hover:scale-105"
/>
      ) : (
        <div className="relative z-10 w-full max-w-[460px] -rotate-2 transition-transform duration-700 hover:rotate-0">
          <div className="absolute -left-5 top-16 z-20 rounded-2xl border border-purple-200/40 bg-gradient-to-br from-white to-blue-100 p-4 shadow-2xl md:-left-10">
            <CheckCircle2 size={35} className="text-emerald-500" />
          </div>
          <div className="rounded-3xl border border-purple-300/30 bg-gradient-to-br from-[#faf5ff] via-[#dbeafe] to-[#ddd6fe] p-7 shadow-[0_25px_80px_rgba(90,40,170,0.35)] md:p-9">
            <div className="mb-5 flex items-center justify-between text-purple-900">
              <div className="flex items-center gap-2"><BarChart3 size={22} /><span className="text-sm font-bold">Data Analytics</span></div>
              <Activity size={21} className="text-emerald-500" />
            </div>
            <div className="flex h-40 items-end gap-3 border-b border-purple-200 pb-2">
              {[48, 75, 59, 89, 66, 100, 80].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-purple-500 to-pink-300 shadow-sm" style={{height: `${h}%`}} />
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3 text-purple-800">
              <TrendingUp size={23} className="text-emerald-500" />
              <span className="text-xs font-medium">Explore patterns · Discover insights</span>
            </div>
          </div>
          <div className="absolute -bottom-10 -left-5 z-20 flex h-36 w-36 items-center justify-center rounded-full border-[15px] border-[#6da9e8] border-r-[#ff818f] border-b-[#86d4a3] bg-[#b7d5fa] shadow-[0_20px_30px_rgba(0,0,0,0.35)] md:-left-14 md:h-44 md:w-44">
            <PieChart size={66} strokeWidth={1.5} className="text-[#265f9e]" />
          </div>
          <div className="absolute -bottom-9 right-0 z-20 rounded-2xl border border-white/60 bg-gradient-to-br from-white to-blue-100 p-4 shadow-xl md:-right-6">
            <TrendingUp size={44} className="text-pink-500" strokeWidth={1.6} />
          </div>
        </div>
      )}
      <img src={HERO_IMAGE} alt="" className="hidden" onLoad={() => setImageLoaded(true)} onError={() => setImageFailed(true)} />
    </div>
  );
}

export default function Tableau() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }));
    } else window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0d0716] text-white">
      <header className="border-b border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-7 md:px-10">
          <Link to="/" className="bg-gradient-to-r from-[#cb80dd] via-[#A855F7] to-[#7C3AED] bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">wrdyyna.</Link>
          <Link to="/#projects" className="inline-flex items-center gap-2 rounded-full border border-purple-400/25 px-4 py-2.5 text-sm text-white transition-colors hover:border-purple-400 hover:bg-purple-500/10"><ArrowLeft size={17} /> Back to Projects</Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/[0.07] bg-gradient-to-br from-[#0d0716] via-[#150a23] to-[#1c0b31] px-5 pt-8 pb-16 sm:px-8 sm:pt-10 lg:px-12 lg:pt-10 lg:pb-20">
          <div className="pointer-events-none absolute -right-48 top-0 h-[650px] w-[650px] rounded-full bg-purple-700/15 blur-[130px]" />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
            <div className="min-w-0">
              <Label>CASE STUDY · DATA VISUALIZATION</Label>
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.2] tracking-tight md:text-5xl xl:text-[3.5rem]">Fast Food Consumption <span className="block text-purple-400">&amp; Health Impact</span></h1>
              <p className="mt-9 max-w-2xl text-base leading-9 text-slate-400 md:text-lg">An academic data analytics project exploring fast-food habits, lifestyle factors, and health indicators using OpenRefine and Tableau.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#dashboard-showcase" className="inline-flex items-center gap-3 rounded-full bg-[#9148f6] px-6 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-purple-500"><BarChart3 size={19} /> Explore Dashboards <ArrowRight size={18} /></a>
                <a href="#project-overview" className="inline-flex items-center gap-3 rounded-full border border-purple-400/30 px-6 py-3.5 font-semibold text-white transition-all hover:border-purple-400 hover:bg-purple-500/10">Explore Case Study <ArrowRight size={18} /></a>
              </div>
              <div className="mt-11 flex flex-wrap gap-2.5">{["Tableau", "OpenRefine", "Data Analytics", "Data Visualization"].map(t => <span key={t} className="rounded-full border border-purple-400/20 bg-purple-500/5 px-4 py-2 font-mono text-xs text-purple-200">{t}</span>)}</div>
            </div>
            <HeroArtwork />
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <section id="project-overview" className="scroll-mt-8 border-b border-white/[0.07] py-20 md:py-24">
            <Heading label="01 / PROJECT OVERVIEW" title={<>Exploring the <span className="text-purple-400">problem.</span></>} description="Understanding lifestyle patterns through descriptive data analysis and Tableau dashboards." />
            <div className="grid gap-5 lg:grid-cols-2">
              <Panel className="p-7 md:p-9"><Target size={25} className="mb-5 text-purple-400" /><h3 className="mb-4 text-xl font-semibold">The Problem</h3><p className="leading-8 text-slate-400">Lifestyle and health data contain many related variables. Looking at fast-food consumption alone may miss differences in calorie intake, physical activity, sleep, and other health indicators.</p></Panel>
              <Panel className="p-7 md:p-9"><Lightbulb size={25} className="mb-5 text-purple-400" /><h3 className="mb-4 text-xl font-semibold">Project Objective</h3><p className="leading-8 text-slate-400">Explore the dataset through four Tableau dashboards, compare lifestyle and health measures, and identify patterns that could be investigated further.</p></Panel>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">{[{label:"Project Type",value:"Academic Group Project"},{label:"Primary Tool",value:"Tableau Public"},{label:"Supporting Tool",value:"OpenRefine"}].map(x=><Panel key={x.label} className="p-5"><p className="mb-2 font-mono text-xs uppercase tracking-widest text-purple-400">{x.label}</p><p className="font-medium">{x.value}</p></Panel>)}</div>
          </section>

          <section className="border-b border-white/[0.07] py-20 md:py-24">
            <Heading label="02 / DATASET OVERVIEW" title={<>Understanding the <span className="text-purple-400">data.</span></>} description="A structured dataset combining dietary, demographic, lifestyle, and self-reported health variables." />
            <Panel className="grid gap-8 p-7 md:grid-cols-2 md:p-9">
              <div><Database size={27} className="mb-5 text-purple-400" /><h3 className="mb-4 text-xl font-semibold">Dataset Context</h3><p className="leading-8 text-slate-400">OpenRefine was used for data cleaning to improve data quality and consistency. The cleaned dataset was then analyzed and visualized in Tableau to identify patterns, trends, and insights.</p></div>
              <div><h3 className="mb-5 text-xl font-semibold">Variables Explored</h3><div className="flex flex-wrap gap-2">{["Age", "Gender", "Fast-food frequency", "Daily calories", "BMI", "Physical activity", "Sleep duration", "Energy level", "Health score", "Digestive issues", "Doctor visits"].map(v=><span key={v} className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-2 text-xs text-purple-200">{v}</span>)}</div></div>
            </Panel>
          </section>

          <section className="border-b border-white/[0.07] py-20 md:py-24">
            <Heading label="03 / ANALYTICAL WORKFLOW" title={<>From data to <span className="text-purple-400">insights.</span></>} description="A five-step process from understanding the dataset to interpreting dashboard findings." />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">{steps.map((s,i)=>{const Icon=s.icon;return <div key={s.title} className="relative"><Panel className="h-full p-6"><span className="font-mono text-3xl font-bold text-purple-500/70">{String(i+1).padStart(2,"0")}</span><Icon size={24} className="my-5 text-purple-400"/><h3 className="mb-3 font-semibold">{s.title}</h3><p className="text-sm leading-7 text-slate-400">{s.description}</p></Panel>{i<steps.length-1&&<ArrowRight size={20} className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-purple-400 lg:block"/>}</div>})}</div>
          </section>

          <section id="dashboard-showcase" className="scroll-mt-8 border-b border-white/[0.07] py-20 md:py-24">
            <Heading label="04 / DASHBOARD SHOWCASE" title={<>Exploring the <span className="text-purple-400">visualizations.</span></>} description="Four original Tableau dashboards, presented with short explanations to make the analysis easier to follow." />
            <div className="space-y-8">{dashboards.map(d=><Panel key={d.number} className="overflow-hidden"><div className="grid lg:grid-cols-[1.1fr_0.9fr]"><div className="flex items-center justify-center bg-[#170e27] p-5 md:p-8"><img src={d.image} alt={`${d.title} Tableau dashboard`} loading="lazy" className="max-h-[520px] w-full rounded-lg object-contain shadow-xl" /></div><div className="p-7 md:p-9"><span className="font-mono text-xs tracking-widest text-purple-400">DASHBOARD {d.number} · {d.category.toUpperCase()}</span><h3 className="mt-4 text-2xl font-bold">{d.title}</h3><p className="mt-5 leading-8 text-slate-400">{d.description}</p><h4 className="mt-7 text-xs font-bold uppercase tracking-widest text-purple-300">Analytical Question</h4><p className="mt-2 leading-7 text-slate-300">{d.question}</p><div className="mt-7 rounded-xl border border-purple-400/20 bg-purple-500/[0.07] p-5"><div className="mb-2 flex items-center gap-2 text-sm font-semibold text-purple-300"><TrendingUp size={17}/> Key Finding</div><p className="text-sm leading-7 text-slate-300">{d.finding}</p></div><div className="mt-6 flex flex-wrap gap-2">{d.tags.map(t=><span key={t} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400">{t}</span>)}</div></div></div></Panel>)}</div>
          </section>

          <section className="border-b border-white/[0.07] py-20 md:py-24">
            <Heading label="05 / KEY FINDINGS" title={<>What the data <span className="text-purple-400">revealed.</span></>} description="Selected descriptive observations from the academic analysis, presented with appropriate context." />
            <div className="grid gap-5 md:grid-cols-3">{[{value:"292 / 766",label:"Reported digestive issues",description:"292 of 766 records reported digestive issues (about 38%)."},{value:"4.96 vs 4.94",label:"Average health score",description:"Female and male averages were nearly identical in this dataset."},{value:"Mid-20s",label:"Average BMI",description:"Average BMI across displayed fast-food frequency groups was generally in the mid-20s."}].map(x=><Panel key={x.label} className="p-7"><p className="mb-5 text-3xl font-bold text-purple-400 md:text-4xl">{x.value}</p><h3 className="mb-3 font-semibold">{x.label}</h3><p className="text-sm leading-7 text-slate-400">{x.description}</p></Panel>)}</div>
            <p className="mt-5 flex items-start gap-2 text-sm leading-7 text-slate-500"><AlertCircle size={17} className="mt-1 shrink-0"/> These observations are descriptive and do not establish cause-and-effect relationships.</p>
          </section>

          <section className="border-b border-white/[0.07] py-20 md:py-24">
            <Heading label="06 / EVALUATION" title={<>Challenges &amp; <span className="text-purple-400">improvements.</span></>} description="What I would improve if I revisited this earlier academic project." />
            <div className="grid gap-5 md:grid-cols-2">{[{title:"Reduce visual clutter",text:"Show fewer charts at once and highlight the most useful comparison in each dashboard."},{title:"Improve dense comparisons",text:"Use clearer chart types and group values when individual marks become difficult to read."},{title:"Standardize presentation",text:"Make labels, units, colours, and measures easier to compare across dashboards."},{title:"Extend analytical depth",text:"Check aggregation choices and use additional analysis before making stronger claims about relationships."}].map((x,i)=><Panel key={x.title} className="p-7"><p className="mb-4 font-mono text-xs text-purple-400">IMPROVEMENT 0{i+1}</p><h3 className="mb-3 text-lg font-semibold">{x.title}</h3><p className="leading-7 text-slate-400">{x.text}</p></Panel>)}</div>
            <Panel className="mt-6 p-7"><div className="mb-3 flex items-center gap-2 text-purple-300"><AlertCircle size={20}/><h3 className="font-semibold text-white">Analytical Limitations</h3></div><p className="leading-8 text-slate-400">These dashboards show descriptive comparisons, not cause-and-effect relationships. The screenshots alone do not establish statistical significance. Stronger conclusions would require additional checks and analysis.</p></Panel>
          </section>

          <section className="border-b border-white/[0.07] py-20 md:py-24">
            <Heading label="07 / REFLECTION" title={<>What I <span className="text-purple-400">learned.</span></>} />
            <Panel className="p-8 md:p-12"><Lightbulb size={30} className="mb-6 text-purple-400"/><div className="max-w-4xl space-y-5 text-base leading-9 text-slate-300"><p> This project helped me better understand the data analytics process, from cleaning and preparing data using OpenRefine to exploring and visualizing it in Tableau.  </p><p> I gained experience exploring structured data, comparing variables, and building dashboards. Looking back, I can also see where clearer chart labels, simpler layouts, and more careful use of averages would make the findings easier to understand.</p><p>Most importantly, I learned that data storytelling is more than creating charts. It means asking useful questions, checking the evidence, and explaining what the data shows without making claims it cannot support.</p></div><div className="mt-8 flex flex-wrap gap-2">{["Data Preparation", "Tableau", "Exploratory Analysis", "Dashboard Design", "Data Storytelling"].map(x=><span key={x} className="rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs text-purple-200">{x}</span>)}</div></Panel>
          </section>

          <section className="py-20 md:py-24">
            <Panel className="relative overflow-hidden px-7 py-14 text-center md:px-12 md:py-16"><div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-600/[0.04] to-purple-500/[0.09]"/><div className="relative"><div className="mb-8 flex items-center justify-start gap-4"><span className="font-mono text-[11px] uppercase tracking-[0.3em] text-purple-400">08 / EXPLORE THE PROJECT</span><span className="h-px w-16 bg-purple-500/40"/></div><h2 className="text-3xl font-bold md:text-5xl">Explore <span className="text-purple-400">the dashboards.</span></h2><p className="mx-auto mt-6 max-w-2xl text-base leading-9 text-slate-400">View the original dashboards alongside their analytical questions and key observations.</p><div className="mt-10 flex flex-wrap justify-center gap-4"><a href="#dashboard-showcase" className="inline-flex items-center gap-3 rounded-full bg-[#9148f6] px-7 py-4 font-semibold text-white transition-all hover:bg-purple-500"><BarChart3 size={19}/> View Dashboard Showcase <ArrowRight size={18}/></a>{TABLEAU_PUBLIC_URL && <a href={TABLEAU_PUBLIC_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border border-purple-400/40 px-7 py-4 font-semibold transition-all hover:bg-purple-500/10"><Monitor size={19}/> Tableau Public <ExternalLink size={17}/></a>}</div></div></Panel>
          </section>
        </div>
      </main>

      <footer className="border-t border-purple-400/10 bg-[#0c0613]"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-9 md:flex-row md:px-10"><Link to="/" className="bg-gradient-to-r from-[#cb80dd] via-[#A855F7] to-[#7C3AED] bg-clip-text text-2xl font-extrabold text-transparent">wrdyyna.</Link><p className="font-mono text-xs tracking-wide text-slate-500">Tableau Data Visualization — Academic Project 2026</p><button type="button" onClick={scrollToTop} className="group flex cursor-pointer items-center gap-3 font-mono text-xs tracking-widest text-white transition-colors hover:text-fuchsia-300"><span>BACK TO TOP</span><span className="flex h-11 w-11 items-center justify-center rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-300 transition-all group-hover:-translate-y-1 group-hover:border-fuchsia-400 group-hover:bg-fuchsia-500/20"><ArrowUp size={20}/></span></button></div></footer>
    </div>
  );
}
