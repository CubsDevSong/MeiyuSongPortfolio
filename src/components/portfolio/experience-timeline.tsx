"use client"

import Image from "next/image"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { useEffect, useRef } from "react"
import type { Locale } from "@/content/focused-portfolio"
import { experienceTimelineCopy, getExperienceEntries, salesFxReference } from "@/content/experience-timeline"
import { afyMonthlySales, afySalesSummary } from "@/content/afy-sales"
import styles from "./experience-timeline.module.css"

const clamp = (value: number) => Math.max(0, Math.min(1, value))

function SalesSparkline({ locale }: { locale: Locale }) {
  const copy = experienceTimelineCopy[locale]
  const peakIndex = afyMonthlySales.indexOf(afySalesSummary.peak)
  const points = afyMonthlySales.map((point, index) => ({
    x: 8 + index * (304 / (afyMonthlySales.length - 1)),
    y: 112 - point.value / 500_000 * 100,
  }))
  const path = points.map(point => `${point.x.toFixed(2)},${point.y.toFixed(2)}`).join(" ")
  return (
    <figure className={styles.sparkline} aria-label={copy.monthly}>
      <svg viewBox="0 0 320 124" aria-hidden="true" focusable="false">
        <line x1="8" y1="112" x2="312" y2="112" className={styles.baseline} />
        <polygon points={`8,112 ${path} 312,112`} className={styles.area} />
        <polyline points={path} className={styles.salesLine} />
        <circle cx={points[peakIndex].x.toFixed(2)} cy={points[peakIndex].y.toFixed(2)} r="4" className={styles.peak} />
      </svg>
      <figcaption><span>{locale === "zh" ? afyMonthlySales[0].shortLabelZh : afyMonthlySales[0].shortLabel}</span><span>{locale === "zh" ? afyMonthlySales.at(-1)?.shortLabelZh : afyMonthlySales.at(-1)?.shortLabel}</span></figcaption>
    </figure>
  )
}

function SalesAchievement({ locale }: { locale: Locale }) {
  const copy = experienceTimelineCopy[locale]
  const eur = Math.round(afySalesSummary.total / salesFxReference.cnyPerEur / 10_000) * 10_000
  return (
    <aside className={styles.salesAchievement} aria-label={copy.annual}>
      <p className={styles.metricLabel}>{copy.annual}</p>
      <p className={styles.salesValue}>¥{(afySalesSummary.total / 1_000_000).toFixed(1)}<span>M</span></p>
      <p className={styles.euroValue}>≈ €{eur / 1_000}<span>K</span></p>
      <SalesSparkline locale={locale} />
      <p className={styles.currencyNote}>{copy.approximate}</p>
    </aside>
  )
}

function SalesDetails({ locale }: { locale: Locale }) {
  const copy = experienceTimelineCopy[locale]
  const formatter = new Intl.NumberFormat(locale === "zh" ? "zh-CN" : "en-IE")
  const currency = (value: number) => `¥${formatter.format(value)}`
  return (
    <div className={styles.salesDetails}>
      <div className={styles.exactSales}>
        <div><span>{copy.total}</span><strong>{currency(afySalesSummary.total)}</strong><small>{copy.salesPeriod}</small></div>
        <div><span>{copy.peak}</span><strong>{currency(afySalesSummary.peak.value)}</strong><small>{locale === "zh" ? afySalesSummary.peak.monthZh : afySalesSummary.peak.month}</small></div>
      </div>
      <ul className={styles.monthlyRecords} aria-label={copy.monthly}>
        {afyMonthlySales.map(point => <li key={point.month}><span>{locale === "zh" ? point.monthZh : point.month}</span><strong>{currency(point.value)}</strong></li>)}
      </ul>
      <p className={styles.source}>{copy.source} {copy.rate}: 1 EUR = {salesFxReference.cnyPerEur} CNY · 27 Oct 2026. <a href={salesFxReference.url} target="_blank" rel="noreferrer">{salesFxReference.source}<ArrowUpRight size={13} aria-hidden="true" /></a></p>
    </div>
  )
}

export function ExperienceTimeline({ locale }: { locale: Locale }) {
  const copy = experienceTimelineCopy[locale]
  const entries = getExperienceEntries(locale)
  const timeline = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = timeline.current
    if (!element) return
    const rows = [...element.querySelectorAll<HTMLElement>("[data-experience]")]
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0
    const paint = () => {
      frame = 0
      const rect = element.getBoundingClientRect()
      const cursor = window.innerHeight * 0.65
      const progress = clamp((cursor - rect.top - 25) / Math.max(1, rect.height - 50))
      element.style.setProperty("--timeline-progress", String(reduced.matches ? 1 : progress))
      let activeIndex = 0
      rows.forEach((row, index) => { if (row.getBoundingClientRect().top + 25 <= cursor) activeIndex = index })
      rows.forEach((row, index) => { row.dataset.active = String(index === activeIndex) })
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint) }
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const row = entry.target as HTMLElement
          row.dataset.revealed = "true"
          observer.unobserve(row)
        }
      }
    }, { threshold: 0.1 })
    rows.forEach(row => observer.observe(row))
    const resizeObserver = new ResizeObserver(schedule)
    resizeObserver.observe(element)
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule, { passive: true })
    reduced.addEventListener("change", schedule)
    schedule()
    return () => {
      observer.disconnect()
      resizeObserver.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      reduced.removeEventListener("change", schedule)
    }
  }, [])

  return (
    <section id="journey" className={styles.journey} aria-labelledby="journey-title">
      <header className={styles.heading}>
        <p className={styles.kicker}>{copy.label}</p>
        <h2 id="journey-title">{copy.title}</h2>
        <p className={styles.intro}>{copy.intro}</p>
      </header>
      <div ref={timeline} className={styles.timeline}>
        <span className={styles.track} aria-hidden="true"><span /></span>
        {entries.map((entry, index) => (
          <article key={entry.key} data-experience={entry.key} className={`${styles.entry} ${index > 1 ? styles.foundation : ""}`} aria-labelledby={`experience-${entry.key}`}>
            <div className={styles.milestone}>
              <span className={styles.number} aria-hidden="true">0{index + 1}</span>
              <p>{entry.dates}</p>
            </div>
            <div className={styles.content}>
              <div className={styles.entryBody}>
                <div className={styles.summary}>
                  <p className={styles.mobileDates}>{entry.dates}</p>
                  {index < 2 && <p className={styles.capability}>{entry.capability}</p>}
                  <h3 id={`experience-${entry.key}`}>{entry.role}</h3>
                  <p className={styles.organisation}>{entry.organisation}{entry.key === "jianglan" && <span> · {copy.internship}</span>}</p>
                  <p className={styles.description}>{entry.description}</p>
                  {index > 1 && <p className={styles.foundationHighlight}>{entry.achievement}</p>}
                  <ul className={styles.skills}>{entry.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
                  <details className={styles.details}>
                    <summary>{entry.key === "afy" ? copy.salesDetails : copy.details}<ChevronDown size={17} aria-hidden="true" /></summary>
                    <div className={styles.expanded}>
                      {entry.details.map(detail => <p key={detail}>{detail}</p>)}
                      {entry.key === "afy" && <SalesDetails locale={locale} />}
                      {entry.key === "museum" && <Image className={styles.sciencePhoto} src="/portfolio/images/journey/science-stage.jpg" alt={copy.photo} width={1800} height={1012} sizes="(max-width: 760px) 85vw, 600px" />}
                    </div>
                  </details>
                </div>
                {entry.key === "jianglan" && <aside className={styles.designAchievement}>
                  <p className={styles.designValue}>7<span>{copy.pages}</span></p>
                  <p>{copy.directions}</p>
                  <a href="#projects" className={styles.designPreview} aria-label={copy.project} onClick={event => {
                    const tile = document.querySelector<HTMLButtonElement>('button[data-project="jianglan"]')
                    if (tile) {
                      event.preventDefault()
                      tile.scrollIntoView({ block: "center", behavior: "instant" })
                      tile.click()
                    }
                  }}><Image src="/portfolio/images/jianglan/from-waste-to-wing.jpg" alt={locale === "zh" ? "蒋蓝能源网站首页设计" : "Jianglan Energy homepage design"} width={1600} height={1236} sizes="(max-width: 760px) 85vw, 280px" /><span>{copy.project}<ArrowUpRight size={15} aria-hidden="true" /></span></a>
                </aside>}
                {entry.key === "afy" && <SalesAchievement locale={locale} />}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
