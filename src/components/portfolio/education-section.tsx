import { SectionHeading } from "@/components/portfolio/section-heading"
import type { AwardContent, EducationContent } from "@/content/types"

export function EducationSection({
  education,
  awards,
}: {
  education: EducationContent[]
  awards: AwardContent[]
}) {
  return (
    <section
      id="education"
      className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-0"
    >
      <SectionHeading
        number="04"
        eyebrow="Education"
        title="Academic Context"
        description="Education is framed as capability: research design, critical analysis, storytelling, public expression, and human-centred thinking."
      />
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="space-y-6">
          {education.map((item) => (
            <article
              key={item.degree}
              className="rounded-md bg-card p-6 shadow-sm ring-1 ring-border"
            >
              <p className="font-mono text-sm text-primary">{item.dates}</p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                {item.degree}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.institution} | {item.location}
              </p>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                {item.summary}
              </p>
              {item.thesis ? (
                <p className="mt-5 border-l-2 border-primary pl-4 text-sm leading-7 text-muted-foreground">
                  {item.thesis}
                </p>
              ) : null}
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-primary">
                {[...item.focusAreas, ...item.skills].map((detail) => (
                  <span key={detail}>{detail}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <aside className="rounded-md bg-card p-6 shadow-sm ring-1 ring-border">
          <p className="font-mono text-sm text-primary">
            Awards & certifications
          </p>
          <div className="mt-6 space-y-5">
            {awards.map((award) => (
              <div key={`${award.title}-${award.context}`}>
                <p className="font-semibold text-foreground">{award.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {award.context}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
