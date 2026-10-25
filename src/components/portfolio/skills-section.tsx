import { SectionHeading } from "@/components/portfolio/section-heading"
import type { SkillGroupContent } from "@/content/types"

export function SkillsSection({ skills }: { skills: SkillGroupContent[] }) {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-0"
    >
      <SectionHeading
        number="05"
        eyebrow="Capabilities"
        title="Skills & Tools"
        description="The skills are grouped around the same three directions as the case studies: B2B web UX, complete product design process, and human-centred AI storytelling."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.label}
            className="rounded-md bg-card p-6 shadow-sm ring-1 ring-border transition-transform hover:-translate-y-1"
          >
            <h3 className="font-mono text-sm text-primary">{group.label}</h3>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-3 text-sm leading-6 text-muted-foreground">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
