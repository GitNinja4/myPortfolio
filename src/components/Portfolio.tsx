import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import portrait from "@/assets/aditya-portrait.jpeg";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
  Code2,
  Database,
  Server,
  Wrench,
  Cpu,
  Trophy,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Terminal,
  Sparkles,
  Loader2,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { initEmailJS, sendContactEmail } from "@/lib/emailjs-service";
import { toast } from "sonner";

const TECH = ["Python", "Node.js", "FastAPI", "React", "Docker", "MongoDB", "Linux"];

const TYPED = [
  "Backend Engineer",
  "Distributed Systems",
  "API Design",
  "Problem Solver",
];

function Typed() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = TYPED[i % TYPED.length];
    const speed = del ? 40 : 90;
    const t = setTimeout(() => {
      const next = del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
      setText(next);
      if (!del && next === word) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") {
        setDel(false);
        setI((x) => x + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return <span className="text-gradient blink font-mono">{text}</span>;
}

function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-18 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        className="absolute inset-x-0 top-0 h-[600px] pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="relative mx-auto max-w-6xl px-4 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-mono text-muted-foreground mb-6">
            <span className="size-1.5 rounded-full bg-[var(--color-cyan)] animate-pulse" />
            open to opportunities
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
            Aditya <span className="text-gradient">Anand</span>
          </h1>
          <div className="mt-5 text-lg sm:text-xl text-muted-foreground min-h-[1.75rem]">
            <Typed />
          </div>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Backend-focused Computer Science undergraduate passionate about building
            scalable systems, secure APIs, and high-performance applications.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
            >
              View Projects
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glow-border bg-secondary px-5 py-2.5 text-sm font-medium hover:bg-accent transition"
            >
              <Mail className="size-4" /> Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1WivYU3O0mo9HapYG8hZkyYL3Z2DPxgYF/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition"
            >
              <Download className="size-4" /> Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {TECH.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-3 py-1.5 rounded-full bg-secondary/70 border border-border text-muted-foreground hover:text-foreground hover:border-[var(--color-cyan)]/40 transition"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-40"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="relative rounded-[2rem] glass p-3 shadow-[var(--shadow-glow)]">
              <div className="rounded-[1.5rem] overflow-hidden border border-border">
                <img
                  src={portrait}
                  alt="Portrait of Aditya Anand"
                  width={896}
                  height={1152}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 glass rounded-2xl px-3 py-2 font-mono text-xs flex items-center gap-2">
                <Terminal className="size-3.5 text-[var(--color-cyan)]" />
                <span className="text-muted-foreground">~/aditya</span>
                <span className="text-foreground">$</span>
                <span className="blink" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
}) {
  return (
    <Reveal>
      <div className="mb-10 max-w-2xl">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-cyan)] mb-3">
          {eyebrow}
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
        {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
      </div>
    </Reveal>
  );
}

const STATS = [
  { k: 8, suffix: ".26", v: "Current CGPA" },
  { k: 10, suffix: "+", v: "Projects Built" },
  { k: 20, suffix: "+", v: "Technologies" },
  { k: 5, suffix: "+", v: "Hackathons" },
];

function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="// about"
          title={<>Engineering <span className="text-gradient">scalable</span> systems with care.</>}
        />
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8">
          <Reveal>
            <div className="glass rounded-2xl p-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm a backend-focused Computer Science student with a strong foundation in
                data structures, system design, and distributed backend architecture. I love
                turning hard problems into clean, observable, and high-throughput services.
              </p>
              <p>
                My focus is on building real-time platforms and modern APIs — with thoughtful
                architecture, performance optimization, and an obsession for clean code.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 pt-2 font-mono text-sm text-foreground/90">
                {[
                  "DSA & System Design",
                  "REST API Development",
                  "Distributed Backends",
                  "Real-Time Systems",
                  "Performance Tuning",
                  "Clean Architecture",
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <span className="text-[var(--color-cyan)]">▸</span> {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.v}
                  className="rounded-2xl glass p-6 text-center hover:border-[var(--color-cyan)]/30 transition"
                >
                  <div className="text-4xl font-bold text-gradient">
                    <AnimatedCounter target={s.k} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const EDU = [
  {
    school: "Maharishi Markandeshwar Engineering College",
    deg: "B.Tech, Computer Science and Engineering",
    when: "2024 – 2027",
    cgpa: "CGPA 8.26",
    where: "Mullana, India",
  },
  {
    school: "Government Polytechnic, Darbhanga",
    deg: "Diploma, Computer Science and Engineering",
    when: "2021 – 2024",
    cgpa: "CGPA 8.58",
    where: "Darbhanga, India",
  },
];

function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="// education" title="Academic foundations." />
        <div className="relative pl-6 sm:pl-8">
          <div
            className="absolute left-0 top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(to bottom, var(--color-cyan), transparent)" }}
          />
          <div className="space-y-8">
            {EDU.map((e, i) => (
              <Reveal key={e.school} delay={i * 100}>
                <div className="relative glass rounded-2xl p-6 sm:p-8 hover:border-[var(--color-cyan)]/30 transition">
                  <span
                    className="absolute -left-[33px] sm:-left-[37px] top-8 size-3 rounded-full"
                    style={{ background: "var(--gradient-primary)", boxShadow: "0 0 20px oklch(0.78 0.16 220 / 0.6)" }}
                  />
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-[var(--color-cyan)]">
                        <GraduationCap className="size-4" />
                        <span className="font-mono text-xs">{e.when}</span>
                      </div>
                      <h3 className="mt-2 text-xl font-semibold">{e.school}</h3>
                      <p className="text-muted-foreground">{e.deg}</p>
                      <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="size-3.5" /> {e.where}
                      </p>
                    </div>
                    <span className="font-mono text-sm rounded-full border border-border px-3 py-1 text-foreground">
                      {e.cgpa}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILLS = [
  { icon: Code2, title: "Languages", items: ["Python", "C++", "JavaScript", "C"] },
  { icon: Server, title: "Frameworks", items: ["Node.js", "Express.js", "Flask", "FastAPI", "React.js", "REST APIs"] },
  { icon: Database, title: "Databases", items: ["MongoDB", "MySQL", "Supabase", "Firebase"] },
  { icon: Cpu, title: "Core Concepts", items: ["DSA", "OOP", "DBMS", "OS", "Networks", "System Design"] },
  { icon: Wrench, title: "Tools & Platforms", items: ["Git", "Docker", "Linux", "Postman", "WebRTC", "Socket.IO", "Vercel"] },
];

function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative border-t border-border">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="// skills"
          title={<>The <span className="text-gradient">stack</span> I build with.</>}
          desc="A pragmatic toolset focused on backend depth, systems thinking, and modern web."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="rounded-2xl glass p-6 h-full hover:border-[var(--color-cyan)]/30 transition">
                <div className="flex items-center gap-3 mb-5">
                  <div className="size-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-[var(--color-cyan)]">
                    <s.icon className="size-5" />
                  </div>
                  <h3 className="font-semibold tracking-tight">{s.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-secondary/70 border border-border text-muted-foreground"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    name: "BragBoard",
    sub: "Real-Time Employee Recognition Platform",
    desc: "Full-stack employee recognition platform with real-time activity feed, shout-outs, reactions, and gamified leaderboards.",
    impact: ["~80% fewer DB calls (N+1 fix)", "Optimistic UI updates", "~50% faster interaction"],
    stack: ["Node.js", "Express", "MongoDB", "Socket.IO", "React"],
    github: "https://github.com/springboardmentor182e/bragboard-feb-26",
    live: "https://bragboard-client.onrender.com",
  },
  {
    name: "CapabilityMap",
    sub: "Student Readiness & Skill Gap Analyzer",
    desc: "Full-stack platform mapping student skills to job role requirements with readiness scores and skill gap analysis.",
    impact: ["40% improved accuracy", "30% less redundant learning", "35% faster evaluation"],
    stack: ["FastAPI", "Python", "PostgreSQL", "React"],
    github: "https://github.com/shanus0007/CapabilityGap",
    live: "https://capability-gap.vercel.app/",
  },
  {
    name: "OSINT Recon Dashboard",
    sub: "Real-Time Reconnaissance & Threat Analysis",
    desc: "Automated recon dashboard integrating WHOIS, crt.sh, IP intelligence, and port scanning for unified threat analysis.",
    impact: ["60% reduced manual effort", "Async Flask backend", "40% faster workflows"],
    stack: ["Flask", "Async", "Python", "WebSockets"],
    github: "https://github.com/GitNinja4/Bug-Bounty-Recon-webApp",
    live: "https://bug-bounty-recon-webapp.onrender.com/",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="// projects"
          title={<>Selected <span className="text-gradient">work</span>.</>}
          desc="Backend-heavy systems where architecture decisions translated into measurable impact."
        />
        <div className="grid lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article className="group relative glow-border rounded-2xl glass p-6 h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(120,119,198,0.2)] transition-all duration-300">
                <div className="aspect-[16/10] rounded-xl border border-border bg-gradient-to-br from-secondary/80 to-secondary/40 mb-5 overflow-hidden relative group-hover:border-[var(--color-cyan)]/40 transition-colors">
                  <div className="absolute inset-0 grid-bg opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-mono text-xs text-muted-foreground/80 px-3 py-1.5 rounded-md glass group-hover:bg-secondary/80 transition">
                      $ ./{p.name.toLowerCase()} --start
                    </div>
                  </div>
                  <div
                    className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-50 blur-3xl group-hover:opacity-70 transition-opacity"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                </div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-cyan)] group-hover:text-cyan-300 transition">
                  {p.sub}
                </div>
                <h3 className="mt-2 text-xl font-semibold group-hover:text-gradient transition">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition">{p.desc}</p>

                <ul className="mt-4 space-y-1.5">
                  {p.impact.map((m) => (
                    <li key={m} className="text-xs flex items-start gap-2 text-foreground/90 group-hover:text-foreground transition">
                      <Sparkles className="size-3.5 shrink-0 mt-0.5 text-[var(--color-cyan)] group-hover:animate-spin" />
                      {m}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] px-2 py-0.5 rounded border border-border text-muted-foreground group-hover:border-[var(--color-cyan)]/40 group-hover:text-cyan-400 transition"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground hover:text-cyan-400 transition"
                  >
                    <Github className="size-4" /> Code
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition"
                  >
                    <ExternalLink className="size-4" /> Live
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const EXP = [
  {
    co: "Infosys Springboard",
    role: "Virtual Intern · Batch 13",
    when: "Jan 2026 – Apr 2026",
    bullets: [
      "Developed full-stack application using FastAPI (backend) and React (frontend).",
      "Implemented AI/ML-based features in team-based development environment.",
      "Worked with REST APIs, Git, and modular coding practices.",
    ],
  },
  {
    co: "EduSkills Academy (AICTE)",
    role: "Python Full-Stack Developer Intern",
    when: "Oct 2025 – Dec 2025",
    bullets: [
      "Completed 10-week AICTE-approved internship focused on full-stack development.",
      "Developed backend logic and REST APIs using Python.",
      "Improved debugging and system design skills.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="// experience" title="Where I've worked." />
        <div className="relative pl-6 sm:pl-8">
          <div
            className="absolute left-0 top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(to bottom, var(--color-cyan), transparent)" }}
          />
          <div className="space-y-8">
            {EXP.map((e, i) => (
              <Reveal key={e.co} delay={i * 100}>
                <div className="relative glass rounded-2xl p-6 sm:p-8 hover:border-[var(--color-cyan)]/30 transition">
                  <span
                    className="absolute -left-[33px] sm:-left-[37px] top-8 size-3 rounded-full"
                    style={{ background: "var(--gradient-primary)", boxShadow: "0 0 20px oklch(0.78 0.16 220 / 0.6)" }}
                  />
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-[var(--color-cyan)]">
                        <Briefcase className="size-4" />
                        <span className="font-mono text-xs">{e.when}</span>
                      </div>
                      <h3 className="mt-2 text-xl font-semibold">{e.co}</h3>
                      <p className="text-muted-foreground">{e.role}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-[var(--color-cyan)] mt-1">▸</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ACH = [
  { t: "HACKCHRONO Finalist", d: "Technicia'25 Hackathon" },
  { t: "SIH Internal Selection", d: "Smart India Hackathon 2024 & 2025" },
  { t: "GHCI 2025 Participant", d: "Unbound with GenAI" },
];

function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="// achievements" title="Milestones & recognition." />
        <div className="grid sm:grid-cols-3 gap-4">
          {ACH.map((a, i) => (
            <Reveal key={a.t} delay={i * 80}>
              <div className="rounded-2xl glass p-6 h-full hover:border-[var(--color-cyan)]/30 transition">
                <div className="size-11 rounded-xl bg-secondary border border-border flex items-center justify-center mb-4 text-[var(--color-cyan)]">
                  <Trophy className="size-5" />
                </div>
                <h3 className="font-semibold">{a.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{a.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    // Initialize EmailJS when component mounts
    initEmailJS();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        toast.success("Email sent successfully! I'll get back to you soon.", {
          description: "Thank you for reaching out!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send email", {
          description: result.message,
        });
      }
    } catch (error) {
      toast.error("Error sending email", {
        description: "Please try again later.",
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="// contact"
          title={<>Let's build something <span className="text-gradient">amazing</span> together.</>}
          desc="Have a project, role, or idea in mind? My inbox is always open."
        />
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <Reveal>
            <div className="space-y-3">
              {[
                { icon: MapPin, label: "Location", value: "Mullana, Haryana, India" },
                { icon: Mail, label: "Email", value: "adityaanandk1234@gmail.com", href: "mailto:adityaanandk1234@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91-9334823399", href: "tel:+919334823399" },
                { icon: Linkedin, label: "LinkedIn", value: "/in/aditya-26-anand", href: "https://www.linkedin.com/in/aditya-26-anand" },
                { icon: Github, label: "GitHub", value: "GitNinja4", href: "https://github.com/GitNinja4" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href ?? "#"}
                  className="group flex items-center gap-4 glass rounded-2xl p-4 hover:border-[var(--color-cyan)]/30 transition"
                >
                  <div className="size-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-[var(--color-cyan)]">
                    <c.icon className="size-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono">
                      {c.label}
                    </div>
                    <div className="text-sm truncate">{c.value}</div>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@domain.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <Field
                label="Subject"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
              />
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-muted-foreground font-mono mb-2">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me a bit about it..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 text-sm outline-none focus:border-[var(--color-cyan)]/60 transition resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <ArrowUpRight className="size-4" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-wider text-muted-foreground font-mono mb-2">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 text-sm outline-none focus:border-[var(--color-cyan)]/60 transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-mono text-sm">
            <span className="text-gradient font-semibold">aditya</span>
            <span className="text-muted-foreground">.dev</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Building scalable systems with clean engineering principles.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {[
            { icon: Github, href: "https://github.com/GitNinja4" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/aditya-26-anand" },
            { icon: Mail, href: "mailto:adityaanandk1234@gmail.com" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="size-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground transition"
            >
              <s.icon className="size-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aditya Anand. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function Portfolio() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
