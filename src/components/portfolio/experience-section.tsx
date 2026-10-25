"use client"

import { useState } from "react"

import { SectionHeading } from "@/components/portfolio/section-heading"
import type { ExperienceContent } from "@/content/types"

export function ExperienceSection({
  experience,
}: {
  experience: ExperienceContent[]
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = experience[activeIndex] ?? experience[0]

  if (!active) {
    return null
  }

  return (
    <section
      id="experience"
      className="mx-auto max-w-4xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-0"
    >
      <SectionHeading
        number="03"
        eyebrow="Experience"
        title="Where I’ve Worked"
        description="The experience timeline supports the portfolio story: real stakeholder communication, applied research, education, facilitation, and public-facing communication."
      />

      <div className="grid gap-8 md:grid-cols-[14rem_1fr]">
        <div
          className="flex overflow-x-auto border-b border-primary/25 bg-background/95 md:block md:overflow-visible md:border-b-0 md:border-l"
          role="tablist"
          aria-label="Experience roles"
        >
          {experience.map((role, index) => (
            <button
              key={role.organization}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`min-w-max border-b-2 px-5 py-3 text-left font-mono text-sm transition-colors focus-visible:bg-primary/10 focus-visible:text-primary md:block md:w-full md:min-w-0 md:border-b-0 md:border-l-2 ${
                index === activeIndex
                  ? "border-primary bg-primary/15 font-semibold text-primary shadow-[inset_0_0_0_1px_color-mix(in_oklch,var(--primary)_18%,transparent)]"
                  : "border-transparent text-foreground/85 hover:bg-primary/8 hover:text-primary"
              }`}
            >
              <span className="block truncate">{role.tabLabel}</span>
            </button>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground">
            {active.role}
            <span className="text-primary"> @ {active.organization}</span>
          </h3>
          <p className="mt-2 font-mono text-sm text-muted-foreground">
            {active.dates} | {active.location}
          </p>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            {active.summary}
          </p>
          <ul className="mt-6 space-y-4">
            {active.achievements.map((achievement) => (
              <li
                key={achievement}
                className="grid grid-cols-[1rem_1fr] gap-3 text-sm leading-7 text-muted-foreground"
              >
                <span className="mt-1 font-mono text-primary">▹</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-primary">
            {active.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
