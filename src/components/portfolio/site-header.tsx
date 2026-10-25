"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

import type { PortfolioContent } from "@/content/types"

type SiteHeaderProps = Pick<PortfolioContent, "navigation"> & {
  name: string
}

export function SiteHeader({ name, navigation }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-background/88 backdrop-blur supports-[backdrop-filter]:bg-background/72">
      <div className="mx-auto flex h-20 w-full items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#home"
          className="group flex size-12 items-center justify-center"
          aria-label={`${name} home`}
        >
          <span className="relative flex size-11 items-center justify-center font-mono text-sm font-semibold text-primary">
            <span className="absolute inset-0 rotate-30 border border-primary transition-transform group-hover:rotate-0" />
            MS
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-mono text-sm transition-colors hover:text-primary ${
                item.href === "#contact"
                  ? "rounded-md border border-primary px-4 py-2 text-primary hover:bg-primary/10"
                  : "text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="lg:hidden">
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="relative z-50 flex size-11 items-center justify-center rounded-md border border-border bg-background text-primary"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden">
          <nav
            className="ml-auto flex h-svh w-[min(78vw,22rem)] flex-col justify-center gap-7 border-l bg-card px-10 shadow-xl"
            aria-label="Mobile primary"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
