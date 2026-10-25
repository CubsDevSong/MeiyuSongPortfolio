import Image from "next/image"
import { ArrowRight, FileText } from "lucide-react"

import type { ProfileContent } from "@/content/types"

export function HeroSection({ profile }: { profile: ProfileContent }) {
  return (
    <section
      id="home"
      className="flex min-h-[88svh] scroll-mt-24 items-center px-5 pb-16 pt-28 sm:px-8 lg:px-0"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[minmax(0,1fr)_300px] lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-primary">
            {profile.secondaryHeadline}
          </p>
          <h1 className="mt-5 text-5xl font-semibold text-foreground sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {profile.headline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {profile.primaryCta.href ? (
              <a
                href={profile.primaryCta.href}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-md border border-primary bg-primary px-7 font-mono text-sm text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {profile.primaryCta.label}
                <ArrowRight className="size-4" />
              </a>
            ) : null}
            {profile.secondaryCta.href ? (
              <a
                href={profile.secondaryCta.href}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-md border border-accent px-7 font-mono text-sm text-primary transition-colors hover:bg-secondary"
              >
                <FileText className="size-4" />
                {profile.secondaryCta.label}
              </a>
            ) : null}
          </div>
          <div className="mt-7 flex max-w-2xl flex-wrap gap-2 font-mono text-xs text-primary sm:text-sm">
            {profile.expertise.map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary/20 bg-card px-3 py-1.5"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {profile.photo ? (
          <aside className="mx-auto w-full max-w-xs lg:max-w-none">
            <div className="overflow-hidden rounded-md bg-card shadow-sm ring-1 ring-border">
              <Image
                src={profile.photo.src}
                alt={profile.photo.alt}
                width={1050}
                height={1400}
                priority
                className="aspect-[3/4] w-full object-cover"
                style={{
                  objectPosition: profile.photo.objectPosition ?? "center",
                }}
              />
              <div className="border-t border-border bg-card/92 p-5">
                <p className="font-mono text-sm text-primary">
                  Human-centred UX designer based in Dublin
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Research-led design with a background in performance art,
                  sustainability communication, and ethical AI.
                </p>
              </div>
            </div>
          </aside>
        ) : null}
      </div>
    </section>
  )
}
