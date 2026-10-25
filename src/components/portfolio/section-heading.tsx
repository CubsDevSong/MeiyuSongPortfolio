type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  number?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  number,
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-5">
        <h2 className="flex shrink-0 items-baseline gap-2 text-2xl font-semibold text-foreground md:text-3xl">
          {number ? (
            <span className="font-mono text-base font-normal text-primary">
              {number}.
            </span>
          ) : null}
          {title}
        </h2>
        <div className="h-px w-full max-w-xs bg-border" />
      </div>
      <p className="mt-3 font-mono text-sm text-primary">{eyebrow}</p>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  )
}
