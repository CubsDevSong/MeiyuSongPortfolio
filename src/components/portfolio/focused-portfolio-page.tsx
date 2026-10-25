"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import {
  ArrowDown,
  Award,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
} from "lucide-react"
import { SectionRail } from "@/components/portfolio/section-rail"
import type { FocusedPortfolioContent } from "@/content/focused-portfolio"

export function FocusedPortfolioPage({
  content,
}: {
  content: FocusedPortfolioContent
}) {
  const {
    awards,
    capabilities,
    contactLinks,
    contactSlides,
    education,
    experience,
    hero,
    labels,
    locale,
    navigation,
    projects,
    sections,
  } = content
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0)
  const [activeContactSlideIndex, setActiveContactSlideIndex] = useState(0)
  const activeExperience =
    experience[activeExperienceIndex] ?? experience[0]
  const activeContactSlide =
    contactSlides[activeContactSlideIndex] ?? contactSlides[0]
  const sectionNavigation = useMemo(
    () => {
      const navigationByHref = new Map(
        navigation.map((item) => [item.href, item]),
      )

      return [
        { label: locale === "zh" ? "首页" : "Home", href: "#home" },
        ...["#about", "#projects", "#experience", "#education", "#contact"]
          .map((href) => navigationByHref.get(href))
          .filter((item): item is (typeof navigation)[number] =>
            Boolean(item),
          ),
      ]
    },
    [locale, navigation],
  )

  useEffect(() => {
    document.documentElement.lang = content.htmlLang
  }, [content.htmlLang])

  useEffect(() => {
    if (contactSlides.length <= 1) {
      return
    }

    const interval = window.setInterval(() => {
      setActiveContactSlideIndex(
        (current) => (current + 1) % contactSlides.length,
      )
    }, 4200)

    return () => window.clearInterval(interval)
  }, [contactSlides.length])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/88 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-0">
          <a
            href="#home"
            className="font-mono text-sm font-semibold text-primary"
          >
            {content.name}
          </a>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-5 font-mono text-xs text-foreground sm:text-sm md:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div
              className="flex rounded-md border border-border bg-card p-1 font-mono text-xs text-foreground"
              aria-label={content.languageSwitchLabel}
            >
              {content.languageLinks.map((item) => {
                const isActive = item.locale === content.locale

                return (
                  <a
                    key={item.locale}
                    href={item.href}
                    aria-label={item.ariaLabel}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded px-2.5 py-1 transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>
          </div>
        </nav>
      </header>
      <SectionRail
        ariaLabel={locale === "zh" ? "分区导航" : "Section navigation"}
        items={sectionNavigation}
      />

      <section
        id="home"
        className="mx-auto grid min-h-svh max-w-6xl items-center gap-10 px-5 pb-20 pt-28 sm:px-8 md:grid-cols-[minmax(0,1fr)_300px] lg:grid-cols-[minmax(0,1fr)_340px] lg:px-0"
      >
        <div>
          <p className="font-mono text-sm text-primary">{hero.eyebrow}</p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
            {content.name}
          </h1>
          <p className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
            {hero.headline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {hero.summary}
          </p>
          <p className="mt-5 max-w-2xl font-mono text-sm leading-6 text-primary">
            {hero.availability}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-md border border-primary bg-primary px-7 font-mono text-sm text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {hero.primaryCta}
              <ArrowDown className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-md border border-accent px-7 font-mono text-sm text-primary transition-colors hover:bg-secondary"
            >
              <Mail className="size-4" />
              {hero.secondaryCta}
            </a>
          </div>
          <div className="mt-7 flex max-w-2xl flex-wrap gap-2 font-mono text-xs text-primary sm:text-sm">
            {hero.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-primary/20 bg-card px-3 py-1.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <aside className="mx-auto w-full max-w-xs lg:max-w-none">
          <div className="overflow-hidden rounded-md bg-card shadow-sm ring-1 ring-border">
            <Image
              src="/portfolio/images/meiyu-song-profile.jpg"
              alt={hero.photoAlt}
              width={1050}
              height={1400}
              priority
              className="aspect-[3/4] w-full object-cover object-center"
            />
            <div className="border-t border-border bg-card/92 p-5">
              <p className="font-mono text-sm text-primary">
                {hero.cardKicker}
              </p>
              {hero.cardSummary ? (
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {hero.cardSummary}
                </p>
              ) : null}
            </div>
          </div>
        </aside>
      </section>

      <section
        id="about"
        className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-0"
      >
        <div className="mb-10">
          <p className="font-mono text-sm text-primary">
            {sections.aboutEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">
            {sections.aboutTitle}
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-8 text-muted-foreground">
            {sections.aboutSummary}
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <figure className="overflow-hidden rounded-md bg-card shadow-sm ring-1 ring-border">
            <Image
              src="/portfolio/images/meiyu-storytelling.jpg"
              alt={
                locale === "zh"
                  ? "宋美玉在舞台上手持麦克风展示"
                  : "Meiyu Song presenting with a microphone on stage"
              }
              width={1600}
              height={1066}
              className="aspect-[4/5] w-full object-cover object-center"
            />
            <figcaption className="border-t border-border bg-card/92 p-5">
              <p className="font-mono text-sm text-primary">
                {locale === "zh"
                  ? "从舞台叙事到人本体验"
                  : "From stage storytelling to human-centred UX"}
              </p>
            </figcaption>
          </figure>

          <div className="space-y-4 lg:self-center">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="rounded-md bg-card p-6 shadow-sm ring-1 ring-border"
              >
                <p className="font-mono text-sm text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {capability.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-0"
      >
        <div className="mb-10">
          <p className="font-mono text-sm text-primary">
            {sections.projectsEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">
            {sections.projectsTitle}
          </h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid items-start gap-8 md:grid-cols-12"
            >
              <div className="rounded-md border bg-card p-3 shadow-sm md:col-span-6">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={1280}
                  height={800}
                  className="aspect-[16/10] w-full rounded object-cover object-top"
                  priority={index === 0}
                />
                <div className="p-5">
                  <p className="font-mono text-sm text-primary">
                    {String(index + 1).padStart(2, "0")} / {project.subtitle}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-foreground">
                    {project.title}
                  </h3>
                  <div className="mt-6 grid gap-2 font-mono text-sm text-muted-foreground sm:grid-cols-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http") ? "noreferrer" : undefined
                        }
                        className="inline-flex min-h-10 items-center gap-2 rounded-md border border-primary px-4 py-2 font-mono text-xs text-primary transition-colors hover:bg-secondary"
                      >
                        {link.label}
                        <ExternalLink className="size-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-6">
                <p className="text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>
                <dl className="mt-5 space-y-4 text-sm leading-7">
                  <div>
                    <dt className="font-mono text-primary">
                      {labels.problem}
                    </dt>
                    <dd className="text-muted-foreground">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-primary">
                      {labels.process}
                    </dt>
                    <dd className="text-muted-foreground">{project.process}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-primary">
                      {labels.outcome}
                    </dt>
                    <dd className="text-muted-foreground">{project.outcome}</dd>
                  </div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.evidence.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {project.details?.length ? (
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {project.details.map((detail) => (
                      <section
                        key={detail.title}
                        className="rounded-md border border-border bg-card p-4"
                      >
                        <h4 className="font-mono text-sm text-primary">
                          {detail.title}
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                          {detail.items.map((item) => (
                            <li
                              key={item}
                              className="grid grid-cols-[0.75rem_1fr] gap-2"
                            >
                              <span className="mt-1.5 size-1.5 rounded-full bg-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-0"
      >
        <div className="mb-10">
          <p className="font-mono text-sm text-primary">
            {sections.experienceEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">
            {sections.experienceTitle}
          </h2>
        </div>

        <div className="grid overflow-hidden rounded-md bg-card shadow-sm ring-1 ring-border md:grid-cols-[15rem_1fr]">
          <div
            className="flex overflow-x-auto border-b border-border bg-background/45 md:block md:overflow-visible md:border-b-0 md:border-r"
            role="tablist"
            aria-label={labels.experienceRoles}
          >
            {experience.map((item, index) => (
              <button
                key={item.organization}
                type="button"
                role="tab"
                aria-selected={index === activeExperienceIndex}
                onClick={() => setActiveExperienceIndex(index)}
                className={`min-w-max border-b-2 px-5 py-4 text-left font-mono text-sm transition-colors md:block md:w-full md:min-w-0 md:border-b-0 md:border-l-2 ${
                  index === activeExperienceIndex
                    ? "border-primary bg-secondary font-semibold text-primary"
                    : "border-transparent text-foreground/80 hover:bg-secondary/60 hover:text-primary"
                }`}
              >
                {item.tabLabel}
              </button>
            ))}
          </div>

          <article className="p-6 sm:p-8">
            <h3 className="text-2xl font-semibold leading-tight text-foreground">
              {activeExperience.role}
              <span className="text-primary">
                {" "}
                @ {activeExperience.organization}
              </span>
            </h3>
            <p className="mt-3 font-mono text-sm text-muted-foreground">
              {activeExperience.dates} | {activeExperience.location}
            </p>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              {activeExperience.summary}
            </p>

            <ul className="mt-6 space-y-4">
              {activeExperience.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="grid grid-cols-[1rem_1fr] gap-3 text-sm leading-7 text-muted-foreground"
                >
                  <span className="mt-1 font-mono text-primary">▹</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div
              className="mt-6 flex flex-wrap gap-2"
              aria-label={labels.experienceSkills}
            >
              {activeExperience.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section
        id="education"
        className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-0"
      >
        <div className="mb-10 flex items-start gap-4">
          <div className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-card text-primary">
            <GraduationCap className="size-5" />
          </div>
          <div>
            <p className="font-mono text-sm text-primary">
              {sections.educationEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              {sections.educationTitle}
            </h2>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]">
          <div className="space-y-5">
            {education.map((item) => (
              <article
                key={`${item.degree}-${item.institution}`}
                className="rounded-md bg-card p-6 shadow-sm ring-1 ring-border"
              >
                <p className="font-mono text-sm text-primary">{item.dates}</p>
                <h3 className="mt-3 text-xl font-semibold leading-tight text-foreground">
                  {item.degree}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.institution} / {item.location}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {item.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.focus.map((focus) => (
                    <span
                      key={focus}
                      className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="rounded-md bg-card p-6 shadow-sm ring-1 ring-border">
            <div className="flex items-center gap-3 text-primary">
              <Award className="size-5" />
              <p className="font-mono text-sm">{sections.awardsTitle}</p>
            </div>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
              {awards.map((award) => (
                <li key={award} className="border-l border-primary/20 pl-4">
                  {award}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-5xl scroll-mt-24 px-5 py-28 sm:px-8 lg:px-0"
      >
        <div className="grid overflow-hidden rounded-md bg-card text-left shadow-sm ring-1 ring-border md:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
          <div className="relative min-h-[300px] bg-muted md:min-h-[420px]">
            {contactSlides.map((slide, index) => (
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`object-cover transition-opacity duration-700 ${
                  index === activeContactSlideIndex
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                priority={index === 0}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/55 to-transparent p-5">
              <p className="font-mono text-sm text-primary-foreground">
                {activeContactSlide.caption}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10">
            <p className="font-mono text-sm text-primary">
              {sections.contactEyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-foreground">
              {sections.contactTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              {sections.contactSummary}
            </p>

            <div className="mt-6 space-y-3 font-mono text-sm">
              <p className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <span className="text-muted-foreground">
                  {locale === "zh" ? "地点" : "Location"}
                </span>
                <span className="text-primary">{sections.contactLocation}</span>
              </p>
              <p className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <span className="text-muted-foreground">
                  {locale === "zh" ? "机会" : "Availability"}
                </span>
                <span className="text-primary">
                  {sections.contactAvailability}
                </span>
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.kind === "external" ? "_blank" : undefined}
                  rel={
                    link.kind === "external"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  download={link.kind === "download" ? true : undefined}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-primary px-5 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
                >
                  {link.kind === "email" ? (
                    <Mail className="size-4" />
                  ) : link.kind === "download" ? (
                    <Download className="size-4" />
                  ) : (
                    <ExternalLink className="size-4" />
                  )}
                  {link.label}
                </a>
              ))}
            </div>

            <div
              className="mt-8 flex flex-wrap gap-2"
              aria-label={labels.slideshowProgress}
            >
              {contactSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`${labels.showSlide} ${slide.caption}`}
                  onClick={() => setActiveContactSlideIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeContactSlideIndex
                      ? "w-7 bg-primary"
                      : "w-2.5 bg-border hover:bg-accent"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
