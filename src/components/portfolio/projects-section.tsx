import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { SectionHeading } from "@/components/portfolio/section-heading"
import type { ProjectContent } from "@/content/types"

export function ProjectsSection({ projects }: { projects: ProjectContent[] }) {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-0"
    >
      <SectionHeading
        number="02"
        eyebrow="Selected Work"
        title="Five projects that show the portfolio story"
        description="The order is intentional: real company work first, then a complete UX process, followed by the HCI / AI and platform-research work that makes the portfolio more distinctive."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => {
          const linkedEvidence = project.evidence?.filter((item) => item.href)
          const supportingEvidence = project.evidence?.filter(
            (item) => !item.href
          )

          return (
            <article
              key={project.title}
              className={`group rounded-md bg-card shadow-sm ring-1 ring-border transition-transform hover:-translate-y-1 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className={index === 0 ? "grid gap-0 lg:grid-cols-2" : ""}>
                <div className="overflow-hidden rounded-t-md bg-muted lg:rounded-t-none lg:rounded-l-md">
                  {project.image ? (
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      width={1280}
                      height={800}
                      priority={index < 2}
                      className="aspect-[16/10] w-full object-cover"
                      style={{
                        objectPosition:
                          project.image.objectPosition ?? "center",
                      }}
                    />
                  ) : (
                    <div className="flex aspect-[16/10] items-center justify-center bg-primary/10 px-6 text-center">
                      <p className="max-w-sm font-mono text-sm text-primary">
                        Visual material can be added here as the project
                        develops.
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex h-full flex-col p-6">
                  <p className="font-mono text-sm text-primary">
                    {String(index + 1).padStart(2, "0")} / {project.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                  <dl className="mt-5 grid gap-3 text-sm leading-6">
                    <div>
                      <dt className="font-mono text-primary">Problem</dt>
                      <dd className="text-muted-foreground">
                        {project.problem}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-primary">Process</dt>
                      <dd className="text-muted-foreground">{project.action}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-primary">Outcome</dt>
                      <dd className="text-muted-foreground">{project.result}</dd>
                    </div>
                  </dl>
                  {supportingEvidence?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {supportingEvidence.slice(0, 4).map((item) => (
                        <span
                          key={item.label}
                          className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground"
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-primary/20 px-3 py-1.5 font-mono text-xs text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {linkedEvidence?.length ? (
                    <div className="mt-auto flex flex-wrap gap-3 pt-6">
                      {linkedEvidence.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          target={
                            item.href?.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.href?.startsWith("http")
                              ? "noreferrer"
                              : undefined
                          }
                          className="inline-flex min-h-10 items-center gap-2 rounded-md border border-primary px-4 py-2 font-mono text-xs text-primary transition-colors hover:bg-secondary"
                        >
                          {item.label}
                          <ArrowUpRight className="size-3" />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
