import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { creativeKeySource } from "@/content/design-portfolio"
import type { Locale } from "@/content/focused-portfolio"
import { creativeKeyCase } from "@/content/portfolio-v2"
import styles from "./creative-key-case-study.module.css"

const imageRoot = "/portfolio/images/creative-key"

export function CreativeKeyCaseStudy({ locale }: { locale: Locale }) {
  const copy = creativeKeyCase[locale]
  const homeHref = locale === "zh" ? "/zh#projects" : "/#projects"
  const alt = (en: string, zh: string) => locale === "zh" ? zh : en

  return (
    <main className={styles.page}>
      <a className={styles.skip} href="#case-content">{locale === "zh" ? "跳到案例内容" : "Skip to case study"}</a>
      <header className={styles.header}>
        <Link href={homeHref} className={styles.backLink}>
          <ArrowLeft size={17} aria-hidden="true" />{copy.back}
        </Link>
        <Link href={copy.languageHref} className={styles.language}>{copy.languageLabel}</Link>
      </header>

      <div id="case-content" className={styles.container}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h1>{copy.title}<span>.</span></h1>
          <p className={styles.heroSummary}>{copy.summary}</p>
          <div className={styles.meta}>{copy.meta.map((item) => <span key={item}>{item}</span>)}</div>
          <div className={styles.heroVisual}>
            <Image
              src={`${imageRoot}/ecosystem.webp`}
              alt={alt("Creative Key physical and digital service ecosystem", "Creative Key 实体与数字服务系统")}
              width={1536}
              height={1024}
              sizes="100vw"
              priority
            />
          </div>
        </section>

        <section className={styles.overview} aria-labelledby="overview-title">
          <p className={styles.eyebrow}>{copy.overviewLabel}</p>
          <div>
            <h2 id="overview-title">{copy.overviewTitle}</h2>
            <p>{copy.overviewText}</p>
          </div>
        </section>

        <section className={styles.splitSection} aria-labelledby="problem-title">
          <div className={styles.sectionCopy}>
            <p className={styles.eyebrow}>{copy.problemLabel}</p>
            <h2 id="problem-title">{copy.problemTitle}</h2>
            <p>{copy.problemText}</p>
          </div>
          <figure className={styles.mediaFrame}>
            <Image src={`${imageRoot}/context.webp`} alt={alt("Students exploring a creative learning context", "学生探索创意学习场景")} width={1448} height={1086} sizes="(max-width: 760px) 92vw, 48vw" />
          </figure>
        </section>

        <section className={styles.research} aria-labelledby="research-title">
          <div className={styles.researchImage}>
            <Image src={`${imageRoot}/team-co-creation.jpg`} alt={alt("Creative Key team during a co-creation session", "Creative Key 团队共创工作坊现场")} width={1800} height={1346} sizes="(max-width: 760px) 92vw, 48vw" />
          </div>
          <div className={styles.researchCopy}>
            <p className={styles.eyebrow}>{copy.researchLabel}</p>
            <h2 id="research-title">{copy.researchTitle}</h2>
            <p>{copy.researchText}</p>
            <div className={styles.metrics}>
              {copy.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
            </div>
          </div>
        </section>

        <section className={styles.insights} aria-labelledby="insights-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>{copy.insightsLabel}</p>
            <h2 id="insights-title">{copy.insightsTitle}</h2>
          </div>
          <div className={styles.insightGrid}>
            {copy.insights.map((item, index) => (
              <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>
            ))}
          </div>
        </section>

        <section className={styles.decisions} aria-labelledby="decisions-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>{copy.decisionsLabel}</p>
            <h2 id="decisions-title">{copy.decisionsTitle}</h2>
          </div>
          <div className={styles.decisionList}>
            {copy.decisions.map((item) => (
              <article key={item.title}>
                <header><span>{item.index}</span><h3>{item.title}</h3></header>
                <dl>
                  <div><dt>{copy.need}</dt><dd>{item.need}</dd></div>
                  <div><dt>{copy.decision}</dt><dd>{item.decision}</dd></div>
                  <div><dt>{copy.guardrail}</dt><dd>{item.guardrail}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.solution} aria-labelledby="solution-title">
          <div className={styles.solutionText}>
            <p className={styles.eyebrow}>{copy.solutionLabel}</p>
            <h2 id="solution-title">{copy.solutionTitle}</h2>
            <p>{copy.solutionText}</p>
          </div>
          <div className={styles.solutionVisuals}>
            <figure className={styles.ecosystemImage}><Image src={`${imageRoot}/ecosystem.webp`} alt={alt("Service ecosystem connecting kiosk, Creative Key and mobile companion", "连接自助终端、Creative Key 与移动端伴侣的服务系统")} width={1536} height={1024} sizes="(max-width: 760px) 92vw, 64vw" /></figure>
            <figure className={styles.mobileImage}><Image src={`${imageRoot}/mobile.webp`} alt={alt("Creative Key mobile companion", "Creative Key 移动端伴侣")} width={462} height={900} sizes="(max-width: 760px) 44vw, 20vw" /></figure>
          </div>
          <div className={styles.userJourney}>
            <p>{copy.journeyTitle}</p>
            <ol>{copy.journey.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol>
          </div>
        </section>

        <section className={styles.prototype} aria-labelledby="prototype-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>{copy.prototypeLabel}</p>
            <h2 id="prototype-title">{copy.prototypeTitle}</h2>
            <p>{copy.prototypeText}</p>
          </div>
          <div className={styles.prototypeImages}>
            <figure><Image src={`${imageRoot}/meiyu-making-keys.jpg`} alt={alt("Meiyu making physical Creative Key variants", "宋美玉制作实体 Creative Key 版本")} width={1800} height={1344} sizes="(max-width: 760px) 92vw, 50vw" /></figure>
            <figure><Image src={`${imageRoot}/handoff.webp`} alt={alt("Hands holding the physical Creative Key handoff", "手持实体 Creative Key 的交接场景")} width={1264} height={848} sizes="(max-width: 760px) 92vw, 42vw" /></figure>
          </div>
        </section>

        <section className={styles.evaluation} aria-labelledby="evaluation-title">
          <figure><Image src={`${imageRoot}/testing.webp`} alt={alt("Creative Key prototype evaluation session", "Creative Key 原型评估现场")} width={1600} height={1200} sizes="(max-width: 760px) 92vw, 50vw" /></figure>
          <div>
            <p className={styles.eyebrow}>{copy.evaluationLabel}</p>
            <h2 id="evaluation-title">{copy.evaluationTitle}</h2>
            <p>{copy.evaluationText}</p>
            <aside>
              <p className={styles.eyebrow}>{copy.iterationLabel}</p>
              <h3>{copy.iterationTitle}</h3>
              <ul>{copy.iterationPoints.map((point) => <li key={point}>{point}</li>)}</ul>
            </aside>
          </div>
        </section>

        <section className={styles.contribution} aria-labelledby="contribution-title">
          <p className={styles.eyebrow}>{copy.contributionLabel}</p>
          <h2 id="contribution-title">{copy.contributionTitle}</h2>
          <div className={styles.contributionGrid}>
            <article><h3>{copy.personalTitle}</h3><ul>{copy.personal.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article><h3>{copy.teamTitle}</h3><ul>{copy.team.map((item) => <li key={item}>{item}</li>)}</ul></article>
          </div>
        </section>

        <section className={styles.nextSteps}>
          <p className={styles.eyebrow}>{copy.nextLabel}</p>
          <h2>{copy.nextTitle}</h2>
          <p>{copy.nextText}</p>
          <div>
            <a href={creativeKeySource} target="_blank" rel="noreferrer">{copy.sourceLabel}<ArrowUpRight size={17} aria-hidden="true" /></a>
            <Link href={homeHref}>{copy.backHome}<ArrowLeft size={17} aria-hidden="true" /></Link>
          </div>
        </section>
      </div>
    </main>
  )
}

