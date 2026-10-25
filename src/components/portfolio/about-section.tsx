import { SectionHeading } from "@/components/portfolio/section-heading"

export function AboutSection({ paragraphs }: { paragraphs: string[] }) {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-0"
    >
      <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <SectionHeading
          number="03"
          eyebrow="About"
          title="From performance art to HCI"
          description="The interdisciplinary background is part of the value: emotional sensitivity, research discipline, and clear communication."
        />
        <div className="space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
