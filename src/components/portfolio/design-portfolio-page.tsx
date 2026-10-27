"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Copy,
  Menu,
  Plus,
  X,
} from "lucide-react";
import type { FocusedPortfolioContent } from "@/content/focused-portfolio";
import { creativeKeySource, designPortfolio } from "@/content/design-portfolio";
import styles from "./design-portfolio.module.css";

const sectionIds = ["projects", "approach", "proof", "about"];
const imageRoot = "/portfolio/images/creative-key";
const projectGallery = [
  { file: "handoff.webp", width: 1264, height: 848 },
  { file: "meiyu-making-keys.jpg", width: 1800, height: 1344 },
  { file: "prototype.webp", width: 901, height: 1600 },
];
const contentCaseImages = [
  {
    src: "/portfolio/images/creator/rednote-question.jpg",
    width: 1206,
    height: 2622,
  },
  {
    src: "/portfolio/images/creator/rednote-offer.jpg",
    width: 1206,
    height: 2622,
  },
  {
    src: "/portfolio/images/creator/douyin-work-life.jpg",
    width: 1206,
    height: 2622,
  },
];

export function DesignPortfolioPage({
  content,
}: {
  content: FocusedPortfolioContent;
}) {
  const copy = designPortfolio[content.locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const [activeGallery, setActiveGallery] = useState<number | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const galleryButtons = useRef<Array<HTMLButtonElement | null>>([]);
  const galleryClose = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeGallery === null) return;

    const galleryIndex = activeGallery;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    galleryClose.current?.focus();

    function handleGalleryKeyboard(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveGallery(null);
        galleryButtons.current[galleryIndex]?.focus();
      } else if (event.key === "Tab") {
        event.preventDefault();
        galleryClose.current?.focus();
      }
    }

    window.addEventListener("keydown", handleGalleryKeyboard);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleGalleryKeyboard);
    };
  }, [activeGallery]);

  function closeGallery() {
    const previousGallery = activeGallery;
    setActiveGallery(null);
    if (previousGallery !== null) {
      requestAnimationFrame(() => galleryButtons.current[previousGallery]?.focus());
    }
  }

  async function copyHandle() {
    try {
      await navigator.clipboard.writeText("Richgirl998");
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <main id="home" className={styles.portfolio}>
      <a className={styles.skip} href="#content">
        {copy.skip}
      </a>
      <header
        className={styles.header}
        onKeyDown={(event) => {
          if (menuOpen && event.key === "Escape") {
            setMenuOpen(false);
            menuButton.current?.focus();
          }
        }}
      >
        <a className={styles.wordmark} href="#home" aria-label={content.name}>
          <span className={styles.mark} aria-hidden="true">
            m<span>.</span>
          </span>
          <span>MEIYU SONG</span>
        </a>
        <nav
          className={styles.desktopNav}
          aria-label={content.locale === "zh" ? "主导航" : "Main navigation"}
        >
          {copy.nav.map((label, i) => (
            <a key={label} href={`#${sectionIds[i]}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className={styles.headerActions}>
          <div
            className={styles.languages}
            aria-label={content.languageSwitchLabel}
          >
            {content.languageLinks.map((link) => (
              <a
                key={link.locale}
                href={link.href}
                aria-label={link.ariaLabel}
                aria-current={
                  link.locale === content.locale ? "page" : undefined
                }
              >
                {link.label}
              </a>
            ))}
          </div>
          <a className={styles.headerContact} href="#contact">
            {copy.hello}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
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
          <nav
            id="mobile-navigation"
            className={styles.mobileNav}
            aria-label={copy.menu}
          >
            {copy.nav.map((label, i) => (
              <a
                key={label}
                href={`#${sectionIds[i]}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              {copy.hello}
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </nav>
        )}
      </header>
      <div id="content" className={styles.container}>
        <section className={styles.intro} aria-labelledby="intro-title">
          <div className={styles.introTop}>
            <p className={styles.eyebrow}>{copy.role}</p>
            <p className={styles.availability}>
              <span />
              {copy.available}
            </p>
          </div>
          <h1 id="intro-title">
            {copy.headline[0]}
            <br />
            <span>{copy.headline[1]}</span>
          </h1>
          <div className={styles.introBottom}>
            <p>{copy.intro}</p>
            <div className={styles.introActions}>
              <a href="#projects" className={styles.darkButton}>
                {copy.selected}
                <ArrowDown size={17} aria-hidden="true" />
              </a>
              <a
                href="/portfolio/docs/meiyu-song-cv.pdf"
                className={styles.secondaryButton}
                download
              >
                {copy.downloadCv}
                <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        <section
          id="projects"
          aria-labelledby="featured-title"
          className={styles.feature}
        >
          <div className={styles.featureText}>
            <p className={styles.eyebrow}>
              <span className={styles.redDot} />
              {copy.featured}
            </p>
            <div>
              <p className={styles.partner}>{copy.partner}</p>
              <h2 id="featured-title">
                Creative
                <br />
                Key<span className={styles.redPeriod}>.</span>
              </h2>
              <p className={styles.featureSub}>{copy.projectSub}</p>
              <p className={styles.featureSummary}>{copy.projectSummary}</p>
            </div>
            <div>
              <div className={styles.tags}>
                {copy.projectTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className={styles.darkButton} href="#creative-key">
                {copy.explore}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className={styles.featureVisual}>
            <span className={styles.visualIndex} aria-hidden="true">
              CK—01
            </span>
            <div className={styles.kioskCrop}>
              <Image
                src={`${imageRoot}/ecosystem.webp`}
                alt={
                  content.locale === "zh"
                    ? "Creative Key 自助终端的团队概念视觉"
                    : "Team concept visual of the Creative Key kiosk"
                }
                width={1536}
                height={1024}
                sizes="1600px"
                preload
                className={styles.ecosystem}
              />
            </div>
            <Image
              src={`${imageRoot}/mobile.webp`}
              alt={
                content.locale === "zh"
                  ? "手持 Creative Key 移动端伴侣的概念视觉"
                  : "Concept visual of the mobile companion held in a hand"
              }
              width={462}
              height={900}
              sizes="(max-width: 700px) 45vw, 24vw"
              preload
              className={styles.mobileCompanion}
            />
            <p className={styles.imageCaption}>{copy.imageCaption}</p>
          </div>
        </section>
        <div className={styles.featureFoot}>
          <span>{copy.prototype}</span>
          <span>RESEARCH / PHYSICAL / DIGITAL</span>
        </div>
        <section
          id="creative-key"
          className={styles.caseStudy}
          aria-labelledby="case-title"
        >
          <p className={styles.eyebrow}>{copy.caseLabel}</p>
          <div className={styles.caseHeading}>
            <h2 id="case-title" className={styles.sectionTitle}>
              {copy.caseTitle}
            </h2>
            <a
              href={creativeKeySource}
              target="_blank"
              rel="noreferrer"
              className={styles.textLink}
            >
              {copy.fullProject}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className={styles.caseContext}>
            <div>
              <h3>{copy.challenge}</h3>
              <p>{copy.challengeText}</p>
            </div>
            <div>
              <h3>{copy.contribution}</h3>
              <p>{copy.contributionText}</p>
            </div>
          </div>
          <div className={styles.researchEvidence}>
            <p className={styles.eyebrow}>{copy.researchEvidenceLabel}</p>
            <div>
              {copy.researchEvidence.map((item) => (
                <article key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
          <div className={styles.touchpoints}>
            {copy.touchpoints.map((point, i) => (
              <article key={point.title}>
                <span className={styles.number}>0{i + 1}</span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
          <div className={styles.projectGallery}>
            {projectGallery.map((image, i) => (
              <figure key={image.file}>
                <button
                  ref={(node) => {
                    galleryButtons.current[i] = node;
                  }}
                  type="button"
                  onClick={() => setActiveGallery(i)}
                  aria-label={`${copy.galleryHint}: ${copy.gallery[i]}`}
                >
                  <Image
                    src={`${imageRoot}/${image.file}`}
                    alt={copy.gallery[i]}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 700px) 90vw, 33vw"
                  />
                  <span className={styles.galleryArrow}>
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </span>
                </button>
                <figcaption>
                  <span className={styles.eyebrow}>0{i + 1}</span>
                  {copy.gallery[i]}
                </figcaption>
              </figure>
            ))}
          </div>
          {activeGallery !== null && (
            <div
              className={styles.galleryDialogBackdrop}
              role="presentation"
              onMouseDown={(event) => {
                if (event.currentTarget === event.target) closeGallery();
              }}
            >
              <section
                className={styles.galleryDialog}
                role="dialog"
                aria-modal="true"
                aria-labelledby="gallery-dialog-title"
              >
                <button
                  ref={galleryClose}
                  type="button"
                  className={styles.galleryDialogClose}
                  onClick={closeGallery}
                  aria-label={copy.closeGallery}
                >
                  <X size={20} aria-hidden="true" />
                </button>
                <div className={styles.galleryDialogImage}>
                  <Image
                    src={`${imageRoot}/${projectGallery[activeGallery].file}`}
                    alt={copy.gallery[activeGallery]}
                    width={projectGallery[activeGallery].width}
                    height={projectGallery[activeGallery].height}
                    sizes="(max-width: 700px) 92vw, 52vw"
                  />
                </div>
                <div className={styles.galleryDialogContent}>
                  <p className={styles.eyebrow}>
                    0{activeGallery + 1} / {copy.galleryDetailLabel}
                  </p>
                  <h3 id="gallery-dialog-title">
                    {copy.galleryDetails[activeGallery].title}
                  </h3>
                  <p className={styles.galleryDialogIntro}>
                    {copy.galleryDetails[activeGallery].intro}
                  </p>
                  <div className={styles.galleryDialogSections}>
                    {copy.galleryDetails[activeGallery].sections.map((section) => (
                      <div key={section.label}>
                        <h4>{section.label}</h4>
                        <p>{section.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          )}
        </section>
        <section
          id="approach"
          className={styles.approach}
          aria-labelledby="approach-title"
        >
          <p className={styles.eyebrow}>{copy.methodLabel}</p>
          <div className={styles.sectionHeading}>
            <h2 id="approach-title" className={styles.sectionTitle}>
              {copy.methodTitle}
            </h2>
            <p>{copy.methodIntro}</p>
          </div>
          <div className={styles.methods}>
            {copy.methods.map((method, i) => (
              <article key={method.title}>
                <div className={styles.methodTop}>
                  <span>0{i + 1}</span>
                  <Plus size={20} aria-hidden="true" />
                </div>
                <h3>{method.title}</h3>
                <p>{method.text}</p>
                <span className={styles.eyebrow}>{method.detail}</span>
              </article>
            ))}
          </div>
        </section>
        <section className={styles.moreWork} aria-labelledby="more-title">
          <p className={styles.eyebrow}>{copy.moreLabel}</p>
          <h2 id="more-title" className={styles.sectionTitle}>
            {copy.moreTitle}
          </h2>
          <div className={styles.projectCards}>
            {content.projects.map((project, i) => (
              <article className={styles.projectCard} key={project.subtitle}>
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={900}
                    height={650}
                    sizes="(max-width: 700px) 90vw, 33vw"
                  />
                </div>
                <p className={styles.eyebrow}>{copy.moreTypes[i]}</p>
                <h3>{copy.moreNames[i]}</h3>
                <p>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.projectOutcome}>
                  <span className={styles.eyebrow}>{copy.projectOutcome}</span>
                  <p>{project.outcome}</p>
                </div>
                <details>
                  <summary>
                    {copy.moreDetail}
                    <Plus size={18} aria-hidden="true" />
                  </summary>
                  <div className={styles.projectNotes}>
                    {(["problem", "process"] as const).map((key) => (
                      <div key={key}>
                        <h4>{content.labels[key]}</h4>
                        <p>{project[key]}</p>
                      </div>
                    ))}
                    {project.details?.map((detail) => (
                      <div key={detail.title}>
                        <h4>{detail.title}</h4>
                        <ul>
                          {detail.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className={styles.projectLinks}>
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </section>
        <section
          id="proof"
          className={styles.proof}
          aria-labelledby="proof-title"
        >
          <p className={styles.eyebrow}>{copy.proofLabel}</p>
          <div className={styles.sectionHeading}>
            <h2 id="proof-title" className={styles.sectionTitle}>
              {copy.proofTitle}
            </h2>
            <p>{copy.proofIntro}</p>
          </div>
          <div className={styles.proofGrid}>
            {copy.proofs.map((proof, i) => (
              <article className={styles.proofCard} key={proof.title}>
                <div className={styles.proofTop}>
                  <span className={styles.number}>0{i + 1}</span>
                  <strong>{proof.value}</strong>
                </div>
                <h3>{proof.title}</h3>
                <p>{proof.text}</p>
                <span className={styles.eyebrow}>{proof.skill}</span>
              </article>
            ))}
          </div>
        </section>
      </div>
      <section
        id="creator"
        className={styles.creator}
        aria-labelledby="creator-title"
      >
        <div className={styles.container}>
          <div className={styles.creatorLayout}>
            <div className={styles.creatorText}>
              <p className={styles.eyebrow}>
                <span className={styles.redDot} />
                {copy.socialLabel}
              </p>
              <h2 id="creator-title" className={styles.sectionTitle}>
                {copy.socialTitle}
              </h2>
              <p className={styles.creatorIntro}>{copy.socialIntro}</p>
              <div className={styles.creatorIdentity}>
                <span className={styles.musicMark} aria-hidden="true">
                  ♪
                </span>
                <div>
                  <p className={styles.eyebrow}>{copy.socialPlatform}</p>
                  <h3>{copy.socialName}</h3>
                  <p className={styles.handle}>{copy.socialHandle}</p>
                </div>
              </div>
              <button className={styles.copyButton} onClick={copyHandle}>
                {copyState === "copied" ? (
                  <Check size={16} aria-hidden="true" />
                ) : (
                  <Copy size={16} aria-hidden="true" />
                )}
                {copyState === "copied" ? copy.copied : copy.copy}
              </button>
              <p className={styles.copyFeedback} aria-live="polite">
                {copyState === "failed"
                  ? copy.copyFailed
                  : copyState === "copied"
                    ? copy.copied
                    : ""}
              </p>
            </div>
            <div className={styles.creatorSummary}>
              <strong>1.25M</strong>
              <p>{copy.stats[0]}</p>
              <span>{copy.snapshot}</span>
            </div>
          </div>
          <div className={styles.socialStats}>
            {["1.25M", "7,301", "146K"].map((stat, i) => (
              <div key={stat}>
                <strong>{stat}</strong>
                <span>{copy.stats[i]}</span>
              </div>
            ))}
          </div>
          <div className={styles.creatorChannels}>
            <p>
              <span className={styles.eyebrow}>{copy.rednote}</span>
              <strong>{copy.rednoteName}</strong>
              <span>{copy.rednoteDetail}</span>
            </p>
          </div>
          <div className={styles.contentCaseGrid}>
            {contentCaseImages.map((image, i) => (
              <figure className={styles.contentCase} key={image.src}>
                <div className={styles.contentCaseImage}>
                  <Image
                    src={image.src}
                    alt={copy.contentCases[i].title}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 700px) 88vw, 30vw"
                  />
                </div>
                <figcaption>
                  <strong>{copy.contentCases[i].metric}</strong>
                  <h3>{copy.contentCases[i].title}</h3>
                  <p>{copy.contentCases[i].text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <div className={styles.container}>
        <section
          id="about"
          className={styles.about}
          aria-labelledby="about-title"
        >
          <div className={styles.aboutVisual}>
            <Image
              src="/portfolio/images/meiyu-song-profile.jpg"
              alt={content.hero.photoAlt}
                width={1050}
                height={1400}
              sizes="(max-width: 700px) 90vw, 38vw"
            />
            <p className={styles.eyebrow}>
              {content.name} / {copy.location}
            </p>
          </div>
          <div className={styles.aboutText}>
            <p className={styles.eyebrow}>{copy.aboutLabel}</p>
            <h2 id="about-title" className={styles.sectionTitle}>
              {copy.aboutTitle}
            </h2>
            <p>{copy.aboutText}</p>
            <a
              href="/portfolio/docs/meiyu-song-cv.pdf"
              className={styles.textLink}
              download
            >
              {
                content.contactLinks.find((link) => link.kind === "download")
                  ?.label
              }
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
        </section>
        <div className={styles.backgroundGrid}>
          <section id="experience">
            <h3 className={styles.eyebrow}>{copy.experience}</h3>
            {content.experience.map((item) => (
              <details
                className={styles.backgroundItem}
                key={item.organization}
              >
                <summary>
                  <span>
                    <strong>{item.role}</strong>
                    <span>{item.organization}</span>
                  </span>
                  <Plus size={17} aria-hidden="true" />
                </summary>
                <p className={styles.eyebrow}>
                  {item.dates} / {item.location}
                </p>
                <p>{item.summary}</p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </details>
            ))}
          </section>
          <section id="education">
            <h3 className={styles.eyebrow}>{copy.education}</h3>
            {content.education.map((item) => (
              <div className={styles.educationItem} key={item.institution}>
                <h4>{item.degree}</h4>
                <p>{item.institution}</p>
                <span className={styles.eyebrow}>{item.dates}</span>
              </div>
            ))}
            <details className={styles.awards}>
              <summary>
                {copy.awards}
                <Plus size={17} aria-hidden="true" />
              </summary>
              <ul>
                {content.awards.map((award) => (
                  <li key={award}>{award}</li>
                ))}
              </ul>
            </details>
          </section>
        </div>
      </div>
      <footer id="contact" className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>{copy.contactLabel}</p>
          <div className={styles.footerHeading}>
            <h2>{copy.contactTitle}</h2>
            <a
              href="mailto:songmeiyu033@gmail.com"
              className={styles.contactCircle}
              aria-label={copy.email}
            >
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className={styles.contactLinks}>
            {content.contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                download={link.kind === "download" || undefined}
                target={link.kind === "external" ? "_blank" : undefined}
                rel={link.kind === "external" ? "noreferrer" : undefined}
              >
                {link.kind === "email" ? "songmeiyu033@gmail.com" : link.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className={styles.footerBottom}>
            <span>© 2026 MEIYU SONG</span>
            <span>{copy.footer}</span>
            <a href="#home">{copy.back} ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
