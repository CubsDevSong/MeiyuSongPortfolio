import Image from "next/image"
import type { FocusedPortfolioContent, Locale } from "@/content/focused-portfolio"
import { portfolioV2 } from "@/content/portfolio-v2"
import { ExperienceTimeline } from "./experience-timeline"
import styles from "./portfolio-v2.module.css"

export function AboutSnapshot({ content }: { content: FocusedPortfolioContent }) {
  const copy = portfolioV2[content.locale]

  return (
    <section id="about" className={styles.about} aria-labelledby="about-v2-title">
      <div className={styles.aboutPortrait}>
        <Image
          src="/portfolio/images/meiyu-song-profile.jpg"
          alt={content.hero.photoAlt}
          width={1050}
          height={1400}
          sizes="(max-width: 700px) 90vw, 34vw"
        />
        <p>MEIYU SONG · DUBLIN, IRELAND</p>
      </div>
      <div className={styles.aboutCopy}>
        <p className={styles.kicker}>{copy.about.label}</p>
        <h2 id="about-v2-title">{copy.about.title}</h2>
        <p className={styles.aboutIntro}>{copy.about.text}</p>
        <ol className={styles.careerPath} aria-label={copy.about.title}>
          {copy.about.path.map((step, index) => (
            <li key={step}>
              <span>0{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function PortfolioCompetencies({ locale }: { locale: Locale }) {
  const copy = portfolioV2[locale].competencies

  return (
    <section className={styles.competencies} aria-labelledby="competencies-title">
      <div className={styles.sectionIntro}>
        <div>
          <p className={styles.kicker}>{copy.label}</p>
          <h2 id="competencies-title">{copy.title}</h2>
        </div>
        <p>{copy.intro}</p>
      </div>
      <div className={styles.competencyGrid}>
        {copy.items.map((item, index) => (
          <article key={item.title}>
            <div><span>0{index + 1}</span><i aria-hidden="true" /></div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <small>{item.evidence}</small>
          </article>
        ))}
      </div>
    </section>
  )
}

export function AILiteracySection({ locale }: { locale: Locale }) {
  const copy = portfolioV2[locale].ai

  return (
    <section className={styles.aiSection} aria-labelledby="ai-title">
      <div className={styles.aiLead}>
        <p className={styles.kicker}>{copy.label}</p>
        <h2 id="ai-title">{copy.title}</h2>
        <p>{copy.intro}</p>
      </div>
      <div className={styles.aiStages}>
        {copy.stages.map((stage) => (
          <article key={stage.index}>
            <span>{stage.index}</span>
            <h3>{stage.title}</h3>
            <p>{stage.text}</p>
            <small>{stage.evidence}</small>
          </article>
        ))}
      </div>
      <div className={styles.aiWorkflow}>
        <div>
          <p className={styles.kicker}>{copy.problemSolvingTitle}</p>
          <p>{copy.problemSolvingText}</p>
        </div>
        <ul>
          {copy.guardrails.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  )
}

export function ProfessionalJourney({ locale }: { locale: Locale }) {
  return <ExperienceTimeline locale={locale} />
}

export function EducationSummary({ content }: { content: FocusedPortfolioContent }) {
  const copy = portfolioV2[content.locale]

  return (
    <section className={styles.education} aria-labelledby="education-v2-title">
      <p className={styles.kicker}>{copy.about.educationLabel}</p>
      <h2 id="education-v2-title">{copy.educationTitle}</h2>
      <div>
        {content.education.map((item) => (
          <article key={item.institution}>
            <span>{item.dates}</span>
            <h3>{item.degree}</h3>
            <p>{item.institution} · {item.location}</p>
            <small>{item.summary}</small>
          </article>
        ))}
      </div>
    </section>
  )
}

