import { AboutSection } from "@/components/portfolio/about-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { HeroSection } from "@/components/portfolio/hero-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ResumeSection } from "@/components/portfolio/resume-section"
import { SideRails } from "@/components/portfolio/side-rails"
import { SiteHeader } from "@/components/portfolio/site-header"
import { SnapshotSection } from "@/components/portfolio/snapshot-section"
import type { PortfolioContent } from "@/content/types"

export function PortfolioPage({ content }: { content: PortfolioContent }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader
        name={content.profile.name}
        navigation={content.navigation}
      />
      <SideRails />
      <main>
        <HeroSection profile={content.profile} />
        <SnapshotSection items={content.snapshot} />
        <ProjectsSection projects={content.projects} />
        <AboutSection paragraphs={content.about} />
        <ResumeSection
          experience={content.experience}
          education={content.education}
          skills={content.skills}
          awards={content.awards}
        />
        <ContactSection contact={content.contact} />
      </main>
      <footer className="px-5 py-8 text-center font-mono text-sm text-muted-foreground sm:px-8 lg:px-0">
        <p>
          {content.profile.name} | UX, Product & HCI portfolio |{" "}
          {content.profile.location}
        </p>
      </footer>
    </div>
  )
}
