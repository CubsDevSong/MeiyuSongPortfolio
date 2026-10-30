"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { ArrowUpRight, Menu, Plus, X } from "lucide-react"
import type { FocusedPortfolioContent } from "@/content/focused-portfolio"
import { designPortfolio } from "@/content/design-portfolio"
import { portfolioV2 } from "@/content/portfolio-v2"
import { interactivePortfolio } from "@/content/interactive-portfolio"
import {
  EducationSummary,
  ProfessionalJourney,
} from "./portfolio-v2-sections"
import { HeroIntroduction, DesignProcessSection } from "./scroll-story"
import { InteractiveProjects } from "./interactive-projects"
import styles from "./design-portfolio.module.css"

const imageRoot = "/portfolio/images/creative-key"

export function DesignPortfolioPage({ content }: { content: FocusedPortfolioContent }) {
  const copy = designPortfolio[content.locale]
  const v2 = portfolioV2[content.locale]
  const story = interactivePortfolio[content.locale]
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  return (
    <main id="home" className={styles.portfolio}>
      <a className={styles.skip} href="#content">{copy.skip}</a>
      <header
        className={styles.header}
        onKeyDown={(event) => {
          if (menuOpen && event.key === "Escape") {
            setMenuOpen(false)
            menuButton.current?.focus()
          }
        }}
      >
        <a className={styles.wordmark} href="#home" aria-label={content.name}>
          <span className={styles.mark} aria-hidden="true">m<span>.</span></span>
          <span>MEIYU SONG</span>
        </a>
        <nav className={styles.desktopNav} aria-label={content.locale === "zh" ? "主导航" : "Main navigation"}>
          {story.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className={styles.headerActions}>
          <div className={styles.languages} aria-label={content.languageSwitchLabel}>
            {content.languageLinks.map((link) => (
              <a key={link.locale} href={link.href} aria-label={link.ariaLabel} aria-current={link.locale === content.locale ? "page" : undefined}>{link.label}</a>
            ))}
          </div>
          <a className={styles.headerContact} href="#contact">{copy.hello}<ArrowUpRight size={15} aria-hidden="true" /></a>
          <button
            ref={menuButton}
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls={menuOpen ? "mobile-navigation" : undefined}
            aria-label={menuOpen ? copy.close : copy.menu}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" className={styles.mobileNav} aria-label={copy.menu}>
            {story.nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={20} aria-hidden="true" /></a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}>{copy.hello}<ArrowUpRight size={20} aria-hidden="true" /></a>
          </nav>
        )}
      </header>

      <div id="content">
        <HeroIntroduction locale={content.locale} cvLabel={copy.downloadCv} />
        <DesignProcessSection locale={content.locale} />
        <div className={styles.container}>
        <section id="projects" aria-labelledby="work-title" className={styles.workIntro}>
          <p className={styles.eyebrow}>{story.work.label}</p>
          <div><h2 id="work-title">{story.work.title}</h2><p>{story.work.intro}</p></div>
        </section>
        <section aria-labelledby="featured-title" className={styles.feature}>
          <div className={styles.featureText}>
            <p className={styles.eyebrow}><span className={styles.redDot} />{story.work.featured}</p>
            <div>
              <p className={styles.partner}>{copy.partner}</p>
              <h2 id="featured-title">Creative<br />Key<span className={styles.redPeriod}>.</span></h2>
              <p className={styles.featureSub}>{story.work.headline}</p>
              <p className={styles.featureSummary}>{story.work.description}</p>
            </div>
            <div>
              <div className={styles.tags}>{copy.projectTags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className={styles.darkButton} href={v2.caseLink}>{v2.caseLinkLabel}<ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
          <div className={styles.featureVisual}>
            <span className={styles.visualIndex} aria-hidden="true">CK—01</span>
            <div className={styles.kioskCrop}>
              <Image
                src={`${imageRoot}/ecosystem.webp`}
                alt={content.locale === "zh" ? "Creative Key 自助终端的团队概念视觉" : "Team concept visual of the Creative Key kiosk"}
                width={1536}
                height={1024}
                sizes="(max-width: 700px) 100vw, 55vw"
                className={styles.ecosystem}
              />
            </div>
            <Image
              src={`${imageRoot}/mobile.webp`}
              alt={content.locale === "zh" ? "手持 Creative Key 移动端伴侣的概念视觉" : "Concept visual of the mobile companion held in a hand"}
              width={462}
              height={900}
              sizes="(max-width: 700px) 45vw, 24vw"
              className={styles.mobileCompanion}
            />
            <p className={styles.imageCaption}>{copy.imageCaption}</p>
          </div>
        </section>
        <div className={styles.featureFoot}><span>{copy.prototype}</span><span>RESEARCH / PRODUCT / SERVICE</span></div>
        <div className={styles.researchStrip} aria-label={story.work.researchLabel}><span>{story.work.researchLabel}</span>{story.work.research.map(item => <span key={item}>{item}</span>)}</div>
        <InteractiveProjects content={content} />
        <section id="background" className={styles.background} aria-labelledby="journey-title">
          <ProfessionalJourney locale={content.locale} />
          <details>
            <summary>{content.locale === "zh" ? "教育与专业训练" : "Education & training"}<Plus size={20} aria-hidden="true" /></summary>
            <EducationSummary content={content} />
          </details>
        </section>
        </div>
      </div>

      <footer id="contact" className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>{copy.contactLabel}</p>
          <div className={styles.footerHeading}>
            <h2>{copy.contactTitle}</h2>
            <a href="mailto:songmeiyu033@gmail.com" className={styles.contactCircle} aria-label={copy.email}><ArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className={styles.contactLinks}>
            {content.contactLinks.map((link) => (
              <a key={link.href} href={link.href} download={link.kind === "download" || undefined} target={link.kind === "external" ? "_blank" : undefined} rel={link.kind === "external" ? "noopener noreferrer" : undefined} aria-label={link.kind === "external" ? `${link.label} — ${content.locale === "zh" ? "在新标签页打开" : "opens in a new tab"}` : undefined}>
                {link.kind === "email" ? "songmeiyu033@gmail.com" : link.label}<ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className={styles.footerBottom}><span>© 2026 MEIYU SONG</span><span>{copy.footer}</span><a href="#home">{copy.back} ↑</a></div>
        </div>
      </footer>
    </main>
  )
}
