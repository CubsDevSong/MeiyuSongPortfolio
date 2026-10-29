"use client"

import Image from "next/image"
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react"
import { useCallback, useEffect, useRef, useState, type RefObject } from "react"
import type { Locale } from "@/content/focused-portfolio"
import { interactivePortfolio } from "@/content/interactive-portfolio"
import styles from "./scroll-story.module.css"

const clamp = (value: number) => Math.max(0, Math.min(1, value))

/** Transient animation values stay on the element; React changes only at stage boundaries. */
function useScrollStory(ref: RefObject<HTMLElement | null>, update: (element: HTMLElement, progress: number) => void) {
  useEffect(() => {
    const element = ref.current
    if (!element) return
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0
    let visible = true
    const paint = () => {
      frame = 0
      if (media.matches || !visible) return
      const rect = element.getBoundingClientRect()
      const header = window.innerWidth < 768 ? 68 : 80
      const travel = Math.max(1, rect.height - window.innerHeight + header)
      update(element, clamp((header - rect.top) / travel))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint)
    }
    const configure = () => {
      element.dataset.motion = media.matches ? "reduced" : "scroll"
      if (media.matches) element.removeAttribute("style")
      schedule()
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) schedule()
    }, { rootMargin: "100px" })
    observer.observe(element)
    configure()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule, { passive: true })
    media.addEventListener("change", configure)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      media.removeEventListener("change", configure)
      delete element.dataset.motion
    }
  }, [ref, update])
}

export function HeroIntroduction({ locale, cvLabel }: { locale: Locale; cvLabel: string }) {
  const copy = interactivePortfolio[locale].hero
  const section = useRef<HTMLElement>(null)
  const animate = useCallback((element: HTMLElement, progress: number) => {
    element.style.setProperty("--portrait-progress", String(clamp(progress / 0.42)))
    element.style.setProperty("--identity-progress", String(clamp((progress - 0.06) / 0.23)))
    element.style.setProperty("--motto-progress", String(clamp((progress - 0.38) / 0.23)))
    element.style.setProperty("--value-progress", String(clamp((progress - 0.54) / 0.2)))
  }, [])
  useScrollStory(section, animate)

  return (
    <section id="about" ref={section} className={styles.hero} aria-labelledby="identity-title">
      <div className={styles.heroScene}>
        <div className={styles.heroMeta}><span>{copy.label}</span><span>{copy.location}</span></div>
        <figure className={styles.portrait}>
          <div className={styles.portraitFrame}>
            <Image src="/portfolio/images/meiyu-park-profile.webp" alt={locale === "zh" ? "身穿彩色针织衫、坐在公园草地上的宋美玉" : "Meiyu Song sitting on the grass in a park, wearing her patterned cardigan"} width={1200} height={1799} sizes="(max-width: 767px) 72vw, 40vw" loading="eager" fetchPriority="high" />
          </div>
          <figcaption>MEIYU SONG — DUBLIN, IRELAND</figcaption>
        </figure>
        <div className={styles.identity}>
          <p className={styles.identityKicker}>{locale === "zh" ? "从好奇出发，为人而设计。" : "Curious by nature. Human by design."}</p>
          <h1 id="identity-title">{copy.greeting}</h1>
          <p className={styles.role}>{copy.role}</p>
          <div className={styles.philosophy}>
            <h2><span>{copy.motto[0]}</span><span>{copy.motto[1]}</span></h2>
            <p>{copy.intro}</p>
            <p className={styles.support}>{copy.support}</p>
          </div>
          <div className={styles.heroActions}>
            <a href="#projects">{copy.work}<ArrowUpRight size={17} aria-hidden="true" /></a>
            <a href="/portfolio/docs/meiyu-song-cv.pdf" download>{cvLabel}<ArrowDown size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <a className={styles.scrollCue} href="#process"><span>{copy.scroll}</span><ArrowDown size={17} aria-hidden="true" /></a>
        <a className={styles.heroEdition} href="#projects">{copy.work}<ArrowUpRight size={15} aria-hidden="true" /></a>
      </div>
    </section>
  )
}

const colours = ["#f7d0c5", "#efa8a0", "#e7c8ad", "#c8bfd4", "#edb98f"]
const polar = (radius: number, angle: number) => {
  const radians = angle * Math.PI / 180
  // Fixed SVG precision avoids server/Chromium trigonometry rounding mismatches at hydration.
  return [300 + radius * Math.cos(radians), 300 + radius * Math.sin(radians)].map(value => Math.round(value * 1000) / 1000)
}
const segment = (index: number) => {
  const a = -index * 72 - 33
  const b = a + 66
  const outerA = polar(260, a)
  const outerB = polar(260, b)
  const innerB = polar(179, b)
  const innerA = polar(179, a)
  return `M ${outerA} A 260 260 0 0 1 ${outerB} L ${innerB} A 179 179 0 0 0 ${innerA} Z`
}

export function DesignProcessSection({ locale }: { locale: Locale }) {
  const copy = interactivePortfolio[locale].process
  const motto = interactivePortfolio[locale].hero.motto
  const section = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const [complete, setComplete] = useState(false)
  const previousStage = useRef(0)
  const previousComplete = useRef(false)
  const animate = useCallback((element: HTMLElement, progress: number) => {
    const phase = Math.min(4, progress * 5.6)
    const completion = clamp((progress - 0.8) / 0.2)
    element.style.setProperty("--rotation", `${phase * 72}deg`)
    element.style.setProperty("--complete", String(completion))
    for (let i = 0; i < 5; i++) {
      element.style.setProperty(`--stage-${i}`, String(clamp(1 - Math.abs(phase - i) * 1.5)))
    }
    const nextStage = Math.round(phase)
    const nextComplete = completion > 0.6
    if (previousStage.current !== nextStage) {
      previousStage.current = nextStage
      setActive(nextStage)
    }
    if (previousComplete.current !== nextComplete) {
      previousComplete.current = nextComplete
      setComplete(nextComplete)
    }
  }, [])
  useScrollStory(section, animate)

  const selectStage = (index: number) => {
    const element = section.current
    if (!element) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.querySelector(`#process-stage-${index}`)?.scrollIntoView({ block: "center" })
      return
    }
    const header = window.innerWidth < 768 ? 68 : 80
    const rect = element.getBoundingClientRect()
    const travel = rect.height - window.innerHeight + header
    const progress = index === 5 ? 1 : index / 5.6
    // Scroll remains the single source of truth for both direct selection and rotation.
    window.scrollTo({ top: rect.top + window.scrollY - header + travel * progress, behavior: "smooth" })
  }

  return (
    <section ref={section} id="process" className={styles.process} aria-labelledby="process-title">
      <div className={styles.processScene}>
        <header className={styles.processHeader}>
          <div><p className={styles.label}>{copy.label}</p><h2 id="process-title">{copy.title}</h2></div>
          <div><p className={styles.processSubtitle}>{copy.subtitle}</p><p className={styles.processIntro}>{copy.intro}</p></div>
        </header>
        <div className={styles.processComposition}>
          <div className={styles.wheelViewport} aria-hidden="true">
            <div className={styles.wheelAssembly}>
              <div className={styles.wheelRotation}>
                <svg viewBox="0 0 600 600" className={styles.wheel}>
                  <circle cx="300" cy="300" r="283" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  {copy.stages.map((stage, index) => {
                    const position = polar(219, -index * 72)
                    return <g key={stage.name} className={styles.wheelSegment} data-active={active === index || complete}>
                      <path d={segment(index)} fill={colours[index]} />
                      <g style={{ transformOrigin: `${position[0]}px ${position[1]}px` }} className={styles.wheelWord}>
                        <text x={position[0]} y={position[1] - 8} textAnchor="middle" className={styles.wheelNumber}>0{index + 1}</text>
                        <text x={position[0]} y={position[1] + 12} textAnchor="middle">{stage.name}</text>
                      </g>
                    </g>
                  })}
                  <circle cx="300" cy="300" r="156" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 7" opacity="0.45" />
                </svg>
              </div>
              <div className={styles.wheelCentre}><Sparkles size={21} /><span>{copy.centre}</span><small>HUMAN × AI</small></div>
            </div>
          </div>
          <div className={styles.stageCopy}>
            {copy.stages.map((stage, index) => (
              <article key={stage.name} id={`process-stage-${index}`} className={styles.stage} data-stage={index} data-active={active === index}>
                <p className={styles.stageCount}>0{index + 1} <span>/ 05</span><i style={{ background: colours[index] }} />{stage.name}</p>
                <h3>{stage.title}</h3>
                <p className={styles.question}>{stage.question}</p>
                <p className={styles.stageDescription}>{stage.description}</p>
                <div className={styles.aiSupport}><Sparkles size={15} aria-hidden="true" /><p><span>{copy.aiLabel}</span>{stage.ai}</p></div>
                <ul>{stage.keywords.map(keyword => <li key={keyword}>{keyword}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className={styles.cycleSummary} aria-hidden={!complete}>
            <h3>{motto[0]}<br /><span>{motto[1]}</span></h3>
            <p>{copy.summary}</p>
          </div>
        </div>
        <nav className={styles.processNavigation} aria-label={copy.navigation}>
          {copy.stages.map((stage, index) => <button key={stage.name} type="button" aria-current={!complete && active === index ? "step" : undefined} onClick={() => selectStage(index)}><span>0{index + 1}</span>{stage.name}</button>)}
          <button type="button" className={styles.cycleButton} aria-label={copy.complete} aria-current={complete ? "step" : undefined} onClick={() => selectStage(5)}>↻</button>
        </nav>
      </div>
    </section>
  )
}
