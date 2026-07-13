import Image from "next/image";
import {
  academicIntro,
  academicProjects,
  connectIntro,
  internshipIntro,
  internships,
  personalIntro,
  personalProjects,
  profile,
  summaryColumns,
  type Internship,
  type Project,
} from "@/data/content";

const navLinks = [
  { href: "#intro", label: "Intro" },
  { href: "#internship", label: "Internship" },
  { href: "#academic", label: "Academic" },
  { href: "#personal", label: "Personal" },
  { href: "#connect", label: "Connect" },
  { href: "#summary", label: "Summary" },
];

function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-alice/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <a
          href="#intro"
          className="font-display text-2xl font-bold tracking-wide md:text-3xl"
        >
          {profile.name}.
        </a>
        <div className="hidden gap-8 text-sm font-medium uppercase tracking-widest md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="decoration-sun decoration-[3px] underline-offset-8 transition-all hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Intro() {
  return (
    <section
      id="intro"
      className="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-32 pb-20 md:pt-44 md:pb-28 lg:grid-cols-[7fr_5fr] lg:px-12"
    >
      <div>
        <span className="mb-6 inline-block rounded-full bg-sun px-3 py-1 text-xs font-semibold uppercase tracking-widest">
          {profile.role}
        </span>
        <h1 className="mb-8 font-display text-5xl font-bold leading-tight md:text-7xl">
          Hi, I&rsquo;m {profile.name}{" "}
          <span className="inline-block animate-bounce">👋</span>
        </h1>
        <div className="space-y-6 text-lg font-light text-navy/85 md:text-xl">
          {profile.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
        <div
          aria-hidden
          className="absolute -inset-3 rotate-2 rounded-[2.5rem] bg-sun"
        />
        <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-navy/10">
          <Image
            src={profile.portrait}
            alt={`Portrait of ${profile.name}`}
            width={1280}
            height={1600}
            preload
            sizes="(min-width: 1024px) 36vw, (min-width: 640px) 24rem, 100vw"
            className="aspect-[4/5] w-full object-cover object-[52%_45%]"
          />
          <p className="absolute right-5 bottom-5 rounded-full bg-alice/90 px-4 py-2 text-xs font-medium shadow-sm backdrop-blur">
            {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <hr className="border-navy/10" />
    </div>
  );
}

function SectionHeading({ title, intro }: { title: string; intro: string }) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
      <span className="mx-auto mb-6 block h-1.5 w-16 rounded-full bg-sun" />
      <h2 className="mb-6 font-display text-4xl font-bold md:text-5xl">
        {title}
      </h2>
      <p className="text-lg text-navy/75">{intro}</p>
    </div>
  );
}

const cardClass =
  "group block rounded-3xl border border-navy/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-sun hover:shadow-xl hover:shadow-navy/10";

function InternshipCard({ job }: { job: Internship }) {
  const inner = (
    <>
      <h3 className="mb-2 font-display text-2xl font-bold">{job.role}</h3>
      <p className="mb-4">
        <span className="inline-block rounded-full bg-sun px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
          {job.org} · {job.period}
        </span>
      </p>
      {job.client && (
        <p className="mb-1 text-sm font-semibold text-navy/90">{job.client}</p>
      )}
      {job.note && (
        <p className="mb-4 text-xs italic text-navy/60">{job.note}</p>
      )}
      <ul className="ml-4 list-outside list-disc space-y-2 text-sm text-navy/85">
        {job.bullets.map((bullet) => (
          <li key={bullet.slice(0, 32)}>{bullet}</li>
        ))}
      </ul>
    </>
  );

  return job.url ? (
    <a
      href={job.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cardClass} p-8 md:p-10`}
    >
      {inner}
    </a>
  ) : (
    <article className={`${cardClass} p-8 md:p-10`}>{inner}</article>
  );
}

function InternshipSection() {
  return (
    <section
      id="internship"
      className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20 md:py-32 lg:px-12"
    >
      <SectionHeading title="Internship Experience" intro={internshipIntro} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        {internships.map((job) => (
          <InternshipCard key={job.org} job={job} />
        ))}
      </div>
    </section>
  );
}

function DetailBlock({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
        <span className="inline-block h-[3px] w-5 rounded-full bg-sun" />
        {heading}
      </h4>
      {children}
    </div>
  );
}

function ProjectCard({ project, label }: { project: Project; label: string }) {
  const inner = (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
      <div className="lg:w-1/3">
        <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl ring-1 ring-navy/10">
          <Image
            src={project.cover}
            alt={`${project.title} — cover slide`}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 90vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <span className="mb-3 inline-block rounded-full bg-sun px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
          {label}
        </span>
        <h3 className="mb-4 font-display text-3xl font-bold">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-navy/75">
          {project.description}
        </p>
        {project.pdfUrl && (
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold underline decoration-sun decoration-[3px] underline-offset-4">
            View full deck <span aria-hidden>↗</span>
          </span>
        )}
      </div>
      <div className="space-y-6 lg:w-2/3">
        <DetailBlock heading="Objective">
          <p className="text-sm leading-relaxed text-navy/85">
            {project.objective}
          </p>
        </DetailBlock>
        <DetailBlock heading="Strategic Steps">
          <ul className="ml-4 list-outside list-disc space-y-2 text-sm leading-relaxed text-navy/85">
            {project.steps.map((step) => (
              <li key={step.slice(0, 32)}>{step}</li>
            ))}
          </ul>
        </DetailBlock>
        <DetailBlock heading="Conclusion">
          <p className="text-sm italic leading-relaxed text-navy/85">
            {project.conclusion}
          </p>
        </DetailBlock>
      </div>
    </div>
  );

  return project.pdfUrl ? (
    <a
      href={project.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cardClass} p-8 md:p-12`}
    >
      {inner}
    </a>
  ) : (
    <article className={`${cardClass} p-8 md:p-12`}>{inner}</article>
  );
}

function ProjectSection({
  id,
  title,
  intro,
  projects,
  labelPrefix,
}: {
  id: string;
  title: string;
  intro: string;
  projects: Project[];
  labelPrefix: string;
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20 md:py-32 lg:px-12"
    >
      <SectionHeading title={title} intro={intro} />
      <div className="space-y-12 md:space-y-20">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            label={`${labelPrefix} ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function Connect() {
  const channels = [
    { icon: "📧", label: profile.email, href: `mailto:${profile.email}` },
    {
      icon: "📞",
      label: profile.phone,
      href: `tel:${profile.phone.replaceAll(" ", "")}`,
    },
    { icon: "🔗", label: "LinkedIn Profile", href: profile.linkedin },
  ];

  return (
    <section
      id="connect"
      className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20 text-center lg:px-12"
    >
      <h2 className="mb-4 font-display text-4xl font-bold">
        Let&rsquo;s Connect
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-base text-navy/75 md:text-lg">
        {connectIntro}
      </p>
      <div className="flex flex-col items-center justify-center gap-6 text-sm font-medium tracking-wide sm:flex-row">
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={
              channel.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="flex w-full items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3 shadow-sm transition-colors hover:border-navy hover:bg-sun sm:w-auto"
          >
            <span className="text-base">{channel.icon}</span> {channel.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function SummaryFooter() {
  return (
    <footer
      id="summary"
      className="scroll-mt-20 bg-navy px-6 py-20 text-alice lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-sun md:text-4xl">
          Strategic Portfolio Summary
        </h2>
        <div className="grid grid-cols-1 gap-12 text-sm leading-relaxed md:grid-cols-3 md:text-base">
          {summaryColumns.map((column) => (
            <div key={column.heading}>
              <h4 className="border-b border-sun/30 pb-3 text-xs font-semibold uppercase tracking-widest text-sun">
                {column.heading}
              </h4>
              <p className="mt-4 opacity-90">{column.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-alice/10 pt-8 text-center text-xs font-light tracking-wide opacity-60">
          © {new Date().getFullYear()} · Portfolio by {profile.name} ·{" "}
          {profile.location}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <Nav />
      <Intro />
      <Divider />
      <InternshipSection />
      <Divider />
      <ProjectSection
        id="academic"
        title="Academic Projects"
        intro={academicIntro}
        projects={academicProjects}
        labelPrefix="Project"
      />
      <Divider />
      <ProjectSection
        id="personal"
        title="Personal Projects"
        intro={personalIntro}
        projects={personalProjects}
        labelPrefix="Personal"
      />
      <Divider />
      <Connect />
      <SummaryFooter />
    </main>
  );
}
