import Image from "next/image";
import {
  academicIntro,
  academicProjects,
  experiences,
  personalIntro,
  personalProjects,
  profile,
  type Project,
} from "@/data/content";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#academic", label: "Academic" },
  { href: "#competitions", label: "Competitions" },
  { href: "#experience", label: "Experience" },
];

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl italic tracking-tight">
          {profile.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-clay md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-berry px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-berry-deep"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const stats = [
    { value: academicProjects.length, label: "Academic projects" },
    { value: personalProjects.length, label: "Competition cases" },
    { value: experiences.length, label: "Internships" },
  ];

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 pt-20 pb-24 sm:pt-28 lg:grid-cols-[7fr_5fr] lg:items-center">
      <div>
      <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-clay">
        <span className="h-1.5 w-1.5 rounded-full bg-berry" />
        {profile.role} · {profile.school}
      </p>
      <h1 className="max-w-4xl font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
        Hi, I&rsquo;m {profile.name} <span className="align-middle">👋</span>
        <br />
        Turning complex inputs into{" "}
        <em className="text-berry">clear, compelling narratives</em>.
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-clay">
        I thrive at the intersection of consumer insights, data-driven
        strategy, and structured communication — and I love making every pitch,
        deck, and campaign carry a clear value proposition.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#academic"
          className="rounded-full bg-ink px-7 py-3 text-sm font-medium text-cream transition-colors hover:bg-berry"
        >
          Explore my work ↓
        </a>
        <a
          href="#contact"
          className="rounded-full border border-ink/25 px-7 py-3 text-sm font-medium transition-colors hover:border-berry hover:text-berry"
        >
          Get in touch
        </a>
      </div>
      <dl className="mt-16 flex flex-wrap gap-x-14 gap-y-6 border-t border-line pt-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-display text-4xl text-berry">{stat.value}</dd>
            <dd className="mt-1 text-sm text-clay">{stat.label}</dd>
          </div>
        ))}
      </dl>
      </div>
      <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] bg-sand shadow-2xl shadow-ink/15 lg:max-w-none">
        <Image
          src={profile.portrait}
          alt={`Portrait of ${profile.name}`}
          width={1280}
          height={960}
          priority
          sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 100vw"
          className="aspect-[4/5] w-full object-cover object-[52%_45%]"
        />
        <p className="absolute right-5 bottom-5 rounded-full bg-cream/90 px-4 py-2 text-xs font-medium text-ink shadow-sm backdrop-blur">
          {profile.location}
        </p>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-berry">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-clay">{intro}</p>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-line bg-sand">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[5fr_7fr]">
        <div>
          <SectionHeading
            eyebrow="About"
            title="Creative lens, logical structure."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {profile.strengths.map((strength) => (
              <span
                key={strength}
                className="rounded-full border border-ink/15 bg-cream px-4 py-1.5 text-xs font-medium text-ink/80"
              >
                {strength}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-ink/80">
          {profile.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-line transition-shadow hover:shadow-xl hover:shadow-ink/10">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.cover}
          alt={`${project.title} — ${project.brand} cover slide`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-berry">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-2xl leading-snug">
          {project.title} <span className="text-clay">—</span> {project.brand}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-clay">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-sand px-3 py-1 text-[11px] font-medium text-ink/70"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.pdfUrl && (
          <a
            href={project.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-berry transition-colors hover:text-berry-deep"
          >
            View full deck <span aria-hidden>↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

function ProjectSection({
  id,
  eyebrow,
  title,
  intro,
  projects,
  tinted = false,
  columns = 3,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  projects: Project[];
  tinted?: boolean;
  columns?: 2 | 3;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 ${tinted ? "border-y border-line bg-sand" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <div
          className={`mt-12 grid gap-8 sm:grid-cols-2 ${
            columns === 3 ? "lg:grid-cols-3" : ""
          }`}
        >
          {projects.map((project) => (
            <ProjectCard
              key={`${project.title}-${project.brand}`}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've learned by doing."
        />
        <div className="mt-12 divide-y divide-line border-t border-line">
          {experiences.map((experience) => (
            <div
              key={`${experience.role}-${experience.org}`}
              className="grid gap-4 py-10 md:grid-cols-[4fr_8fr]"
            >
              <div>
                <h3 className="font-display text-2xl">{experience.role}</h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-berry">
                  {experience.org}
                </p>
              </div>
              <p className="text-base leading-relaxed text-ink/80">
                {experience.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const socials = [
    { label: "LinkedIn", href: profile.linkedin },
    { label: "Facebook", href: profile.facebook },
    { label: "Behance", href: profile.behance },
  ].filter((social) => social.href);

  return (
    <footer id="contact" className="scroll-mt-24 bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-berry">
          Contact
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          Let&rsquo;s tell the next story{" "}
          <em className="text-berry">together</em>.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70">
          I&rsquo;m stepping into the professional space and looking forward to
          driving high-impact engagement within corporate and B2B communication
          landscapes. Say hello — I&rsquo;d love to connect.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-cream px-7 py-3 text-sm font-medium text-ink transition-colors hover:bg-berry hover:text-cream"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replaceAll(" ", "")}`}
            className="rounded-full border border-cream/30 px-6 py-3 text-sm font-medium transition-colors hover:border-berry hover:text-berry"
          >
            {profile.phone}
          </a>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/30 px-6 py-3 text-sm font-medium transition-colors hover:border-berry hover:text-berry"
            >
              {social.label}
            </a>
          ))}
        </div>
        <p className="mt-20 border-t border-cream/15 pt-8 text-xs text-cream/50">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main id="top" className="flex-1">
      <Nav />
      <Hero />
      <About />
      <ProjectSection
        id="academic"
        eyebrow="Academic Projects"
        title="Frameworks, made hands-on."
        intro={academicIntro}
        projects={academicProjects}
      />
      <ProjectSection
        id="competitions"
        eyebrow="Personal Projects"
        title="Competitions & creator campaigns."
        intro={personalIntro}
        projects={personalProjects}
        tinted
        columns={2}
      />
      <Experience />
      <Contact />
    </main>
  );
}
