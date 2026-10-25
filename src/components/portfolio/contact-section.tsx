import type { ContactContent } from "@/content/types"

export function ContactSection({ contact }: { contact: ContactContent }) {
  return (
    <section
      id="contact"
      className="mx-auto max-w-2xl scroll-mt-24 px-5 py-28 text-center sm:px-8 lg:px-0"
    >
      <p className="font-mono text-sm text-primary">05. Contact</p>
      <h2 className="mt-4 text-4xl font-semibold text-foreground">
        Let&apos;s work together
      </h2>
      <p className="mt-5 text-base leading-8 text-muted-foreground">
        {contact.statement}
      </p>
      <div className="mt-4 space-y-2 font-mono text-sm text-primary">
        <p>Location: {contact.location}</p>
        {contact.availability ? (
          <p>Availability: {contact.availability}</p>
        ) : null}
      </div>
      {contact.links.length ? (
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {contact.links.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md border border-primary px-7 py-4 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
              >
                {link.label}
              </a>
            ) : null
          )}
        </div>
      ) : null}
    </section>
  )
}
