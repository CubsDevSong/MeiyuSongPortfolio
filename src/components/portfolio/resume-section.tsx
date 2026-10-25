import { SectionHeading } from "@/components/portfolio/section-heading"
import type {
  AwardContent,
  EducationContent,
  ExperienceContent,
  SkillGroupContent,
} from "@/content/types"

export function ResumeSection({
  experience,
  education,
  skills,
  awards,
}: {
  experience: ExperienceContent[]
  education: EducationContent[]
  skills: SkillGroupContent[]
  awards: AwardContent[]
}) {
  return (
    <section
      id="resume"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-0"
    >
      <SectionHeading
        number="04"
        eyebrow="Resume"
        title="Experience, education, and skills"
        description="A concise hiring view of my background: applied UX practice, HCI education, communication-heavy work experience, and practical design research skills."
      />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-md bg-card p-6 shadow-sm ring-1 ring-border">
          <p className="font-mono text-sm text-primary">Experience</p>
          <div className="mt-6 space-y-7">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.organization}`}
                className="border-b border-border pb-6 last:border-b-0 last:pb-0"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.organization} | {item.location}
                    </p>
                  </div>
                  <p className="font-mono text-sm text-primary">
                    {item.dates}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {item.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-md bg-card p-6 shadow-sm ring-1 ring-border">
            <p className="font-mono text-sm text-primary">Education</p>
            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <article key={item.degree}>
                  <p className="font-mono text-sm text-primary">
                    {item.dates}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.institution} | {item.location}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-md bg-card p-6 shadow-sm ring-1 ring-border">
            <p className="font-mono text-sm text-primary">Skills</p>
            <div className="mt-6 grid gap-5">
              {skills.map((group) => (
                <div key={group.label}>
                  <h3 className="font-semibold text-foreground">
                    {group.label}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-primary/20 px-3 py-1.5 text-xs text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md bg-card p-6 shadow-sm ring-1 ring-border">
            <p className="font-mono text-sm text-primary">
              Awards & certifications
            </p>
            <div className="mt-5 space-y-4">
              {awards.map((award) => (
                <div key={`${award.title}-${award.context}`}>
                  <p className="font-semibold text-foreground">{award.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {award.context}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
