import { BriefcaseBusiness, FileText, Mail, UserRound } from "lucide-react"

export function SideRails() {
  const links = [
    { label: "Work", href: "#projects", icon: BriefcaseBusiness },
    { label: "About", href: "#about", icon: UserRound },
    { label: "Resume", href: "#resume", icon: FileText },
    { label: "Contact", href: "#contact", icon: Mail },
  ]

  return (
    <>
      <div className="fixed bottom-0 left-10 z-30 hidden flex-col items-center gap-6 text-muted-foreground 2xl:flex">
        {links.map((item) => {
          const Icon = item.icon

          return (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="transition-transform hover:-translate-y-1 hover:text-primary"
            >
              <Icon className="size-5" />
            </a>
          )
        })}
        <div className="h-24 w-px bg-border" />
      </div>
      <div className="fixed bottom-0 right-10 z-30 hidden flex-col items-center gap-6 text-muted-foreground 2xl:flex">
        <a
          href="#contact"
          className="font-mono text-sm [writing-mode:vertical-rl] transition-transform hover:-translate-y-1 hover:text-primary"
        >
          Dublin, Ireland
        </a>
        <div className="h-24 w-px bg-border" />
      </div>
    </>
  )
}
