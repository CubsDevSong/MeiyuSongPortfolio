import { SectionHeading } from "@/components/portfolio/section-heading"
import type { SnapshotContent } from "@/content/types"

export function SnapshotSection({ items }: { items: SnapshotContent[] }) {
  return (
    <section
      id="capabilities"
      className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-0"
    >
      <SectionHeading
        number="01"
        eyebrow="What I Do"
        title="Research-led design for human problems"
        description="A clear snapshot of the capabilities I want recruiters to see first: UX research, product thinking, ethical AI, and communication."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-md bg-card p-6 shadow-sm ring-1 ring-border transition-transform hover:-translate-y-1"
          >
            <p className="font-mono text-sm text-primary">{item.value}</p>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
