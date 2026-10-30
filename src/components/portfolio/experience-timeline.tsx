"use client"

import Image from "next/image"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { useEffect, useRef } from "react"
import type { Locale } from "@/content/focused-portfolio"
import { experienceTimelineCopy, getExperienceEntries, salesFxReference } from "@/content/experience-timeline"
import { afySalesSummary } from "@/content/afy-sales"
import styles from "./experience-timeline.module.css"

const clamp = (value: number) => Math.max(0, Math.min(1, value))

function SalesAchievement({ locale }: { locale: Locale }) {
  const copy = experienceTimelineCopy[locale]
  const eur = Math.round(afySalesSummary.total / salesFxReference.cnyPerEur / 10_000) * 10_000
  return (
    <aside className={styles.salesAchievement} aria-label={copy.annual}>
      <p className={styles.metricLabel}>{copy.annual}</p>
      <p className={styles.salesValue}>{locale === "zh" ? "约260" : "≈ ¥2.6"}<span>{locale === "zh" ? "万元" : "M"}</span></p>
      <p className={styles.euroValue}>≈ €{eur / 1_000}<span>K</span></p>
      <p className={styles.salesPeriod}>{copy.salesPeriod}</p>
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
      </div>
    </div>
  )
}

function ExperienceMedia({ entry, locale }: { entry: string; locale: Locale }) {
  const zh = locale === "zh"
  const photos = entry === "afy" ? [{
    file: `afy-profile-${locale}.jpg`, width: 1672, height: 941,
    alt: zh ? "宋美玉的 AFY 教育咨询个人介绍海报，包含服务介绍与联系二维码" : "Meiyu Song’s AFY education consulting profile with service information and contact QR code",
    caption: zh ? "AFY 教育咨询 · 个性化规划与客户沟通" : "AFY education consulting · Personalised planning and client communication",
  }, {
    file: "afy-work-photo.jpg", width: 1529, height: 2400,
    alt: zh ? "宋美玉在 AFY 工作期间与另一人的合影" : "Meiyu Song pictured with another person during her time at AFY",
    caption: zh ? "AFY 工作期间合影 · 沟通与协作" : "Photograph from my time at AFY · Communication and collaboration",
  }] : entry === "museum" ? [
    { file: "science-stage.jpg", width: 1800, height: 1012, alt: experienceTimelineCopy[locale].photo, caption: zh ? "科学传播展示" : "Science communication demonstration" },
    { file: "science-conference.jpg", width: 1708, height: 1280, alt: zh ? "宋美玉在会议会场的活动照片" : "Meiyu Song pictured at a conference venue", caption: zh ? "会议活动照片" : "Conference event photograph" },
  ] : entry === "drama" ? [
    { file: "youth-teaching.jpg", width: 2400, height: 1800, alt: zh ? "宋美玉借助屏幕向儿童及家庭进行互动讲解" : "Meiyu Song using a screen to explain a topic to children and families", caption: zh ? "教学与互动讲解" : "Teaching and interactive explanation" },
    { file: "youth-storytelling.jpg", width: 2400, height: 1600, alt: zh ? "宋美玉在带有传统生活道具的场景中进行表演" : "Meiyu Song performing in a scene with traditional household props", caption: zh ? "情境表演与故事讲述" : "Performance and storytelling" },
  ] : []
  if (!photos.length) return null
  return (
    <div className={styles.experienceMedia}>
      {photos.map(photo => <figure key={photo.file}>
        <a href={`/portfolio/images/journey/${photo.file}`} data-media-kind={photo.file.startsWith("afy-profile-") ? "poster" : photo.file === "afy-work-photo.jpg" ? "portrait" : "photo"} target="_blank" rel="noopener noreferrer" aria-label={`${photo.caption} — ${zh ? "在新标签页查看完整图片" : "view full image in a new tab"}`}>
          <Image src={`/portfolio/images/journey/${photo.file}`} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 600px) 85vw, 38vw" />
          <span className={styles.imageAction}>{zh ? "查看大图" : "View full image"}<ArrowUpRight size={15} aria-hidden="true" /></span>
        </a>
        <figcaption>{photo.caption}</figcaption>
      </figure>)}
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
                  <a className={styles.liveWebsite} href="https://www.jl-bioenergy.com/#/home" target="_blank" rel="noopener noreferrer">{locale === "zh" ? "查看已上线官网" : "View live website"}<ArrowUpRight size={15} aria-hidden="true" /></a>
                </aside>}
                {entry.key === "afy" && <SalesAchievement locale={locale} />}
              </div>
              <details className={styles.details}>
                <summary>{copy.details}<ChevronDown size={17} aria-hidden="true" /></summary>
                <div className={styles.expanded}>
                  {entry.details.map(detail => <p key={detail}>{detail}</p>)}
                  {entry.key === "afy" && <SalesDetails locale={locale} />}
                  <ExperienceMedia entry={entry.key} locale={locale} />
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
