"use client"

import Image from "next/image"
import { Dialog } from "radix-ui"
import { ArrowUpRight, X } from "lucide-react"
import { useState } from "react"
import type { FocusedPortfolioContent } from "@/content/focused-portfolio"
import { interactivePortfolio, supportingProjects, type SupportingProject } from "@/content/interactive-portfolio"
import styles from "./interactive-projects.module.css"

type ProjectSource = FocusedPortfolioContent["projects"][number]

const jianglanScreens = [
  { key: "home", en: "Home", zh: "首页", height: 5443 },
  { key: "home-exploration", en: "Home · alternative", zh: "首页 · 另一设计方向", height: 5199 },
  { key: "about", en: "About", zh: "关于企业", height: 7016 },
  { key: "products", en: "Products", zh: "产品信息", height: 5497 },
  { key: "supply-chain", en: "Supply chain", zh: "供应链", height: 4924 },
  { key: "sustainability", en: "Sustainability", zh: "可持续发展", height: 6071 },
  { key: "contact", en: "Contact", zh: "商务联系", height: 1887 },
]

function JianglanDesignGallery({ locale }: { locale: FocusedPortfolioContent["locale"] }) {
  const [selected, setSelected] = useState(jianglanScreens[0])
  const zh = locale === "zh"
  const label = zh ? selected.zh : selected.en
  return (
    <section className={styles.screenGallery} aria-labelledby="jianglan-screens-title">
      <div className={styles.galleryHeader}><div><p className={styles.label}>{zh ? "真实项目设计稿" : "WEBSITE DESIGN EXPLORATIONS"}</p><h3 id="jianglan-screens-title">{zh ? "从整体体验，到每个页面。" : "From the first impression to the next step."}</h3></div><span>JIANGLAN ENERGY</span></div>
      <div className={styles.screenPicker} role="group" aria-label={zh ? "选择网站设计页面" : "Choose a website design screen"}>
        {jianglanScreens.map(screen => <button key={screen.key} type="button" aria-pressed={selected.key === screen.key} onClick={() => setSelected(screen)}>{zh ? screen.zh : screen.en}</button>)}
      </div>
      <p className={styles.galleryHint}>{zh ? "在画面内向下滚动，可查看完整长页设计。" : "Scroll within the preview to explore the full page design."}</p>
      <div className={styles.screenWindow} key={selected.key} tabIndex={0} role="region" aria-label={`${label} — ${zh ? "完整页面设计" : "full page design"}`}>
        <Image src={`/portfolio/images/jianglan/${selected.key}.jpg`} alt={`${zh ? "蒋蓝能源网站设计" : "Jianglan Energy website design"} — ${label}`} width={1280} height={selected.height} sizes="(max-width: 767px) 90vw, 850px" />
      </div>
      <a className={styles.openScreen} href={`/portfolio/images/jianglan/${selected.key}.jpg`} target="_blank" rel="noreferrer">{zh ? "查看原始完整设计稿" : "Open the full design screen"}<ArrowUpRight size={16} aria-hidden="true" /></a>
    </section>
  )
}

function ProjectModal({ project, source, locale }: { project: SupportingProject; source: ProjectSource; locale: FocusedPortfolioContent["locale"] }) {
  const copy = interactivePortfolio[locale].work
  const visual = project.cover ?? { src: source.image, alt: source.alt, width: 900, height: 650 }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className={styles.projectTile} data-project={project.id} aria-label={`${copy.explore}: ${project.title}`}>
          <div className={styles.tileImage}>
            <div className={styles.previewFrame}><span className={styles.browserBar} aria-hidden="true"><i /><i /><i /><span>{project.title}</span></span><Image src={visual.src} alt={visual.alt} width={visual.width} height={visual.height} sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 30vw" /></div>
            {project.archive && <span className={styles.studyModules} aria-hidden="true"><span>Quiz</span><span>Plan</span><span>Explore</span></span>}
            <span className={styles.tileArrow}><ArrowUpRight size={22} aria-hidden="true" /></span>
          </div>
          <span className={styles.tileCategory}>{project.category}</span>
          <span className={styles.tileTitle}>{project.title}</span>
          <span className={styles.tileHeadline}>{project.headline}</span>
          <span className={styles.tileDescription}>{project.preview}</span>
          <span className={styles.tileExplore}>{copy.explore}<ArrowUpRight size={15} aria-hidden="true" /></span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.modal} aria-describedby={`project-${project.id}-description`}>
          <div className={styles.modalTop}><span>{locale === "zh" ? "项目详情" : "PROJECT NOTES"} / {project.title}</span><Dialog.Close className={styles.close} aria-label={copy.close}><X size={22} aria-hidden="true" /></Dialog.Close></div>
          <div className={styles.modalBody}>
            <div className={styles.modalHero} data-project={project.id}><Image src={visual.src} alt={visual.alt} width={visual.width} height={visual.height} sizes="(max-width: 767px) 100vw, 85vw" /></div>
            <header className={styles.modalHeader}>
              <p className={styles.label}>{project.category}</p>
              <Dialog.Title className={styles.modalTitle}>{project.title}</Dialog.Title>
              <Dialog.Description id={`project-${project.id}-description`} className={styles.modalDescription}>{project.headline}</Dialog.Description>
              <div className={styles.role}><span>{copy.role}</span><p>{project.role}</p></div>
              {project.archive && <p className={styles.archive}>{copy.archive}: {project.archive}</p>}
            </header>
            {project.id === "jianglan" && <JianglanDesignGallery locale={locale} />}
            <section className={styles.challenge}>
              <h3>{copy.challenge}</h3><p>{source.problem}</p>
            </section>
            <section className={styles.process}>
              <h3>{copy.process}</h3>
              <ol>{project.steps.map((step, index) => <li key={step.name}><span className={styles.number}>0{index + 1}</span><div><h4>{step.name}</h4><p>{step.text}</p></div></li>)}</ol>
            </section>
            <section className={styles.solution}><h3>{copy.solution}</h3><p>{project.solution}</p><div className={styles.tags}>{source.tags.map(tag => <span key={tag}>{tag}</span>)}</div></section>
            <section className={styles.outcome}><h3>{copy.evidence}</h3><p>{project.outcome}</p><ul>{source.evidence.map(item => <li key={item}>{item}</li>)}</ul></section>
            <section className={styles.further}><h3>{copy.further}</h3><div>{source.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={17} aria-hidden="true" /></a>)}</div></section>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export function InteractiveProjects({ content }: { content: FocusedPortfolioContent }) {
  const copy = interactivePortfolio[content.locale].work
  return (
    <section className={styles.supporting} aria-labelledby="supporting-title">
      <div className={styles.supportingHeading}><span>{content.locale === "zh" ? "延伸项目 / 03" : "FURTHER EXPLORATIONS / 03"}</span><h2 id="supporting-title">{copy.supporting}</h2></div>
      <div className={styles.grid}>{supportingProjects(content.locale).map(project => <ProjectModal key={project.id} locale={content.locale} project={project} source={content.projects[project.sourceIndex]} />)}</div>
      <noscript><div className={styles.further}><h3>{copy.further}</h3><div>{content.projects.flatMap(project => project.links.map(link => <a key={`${project.subtitle}-${link.href}`} href={link.href}>{project.subtitle} · {link.label}</a>))}</div></div></noscript>
    </section>
  )
}
