"use client"

import { useEffect, useMemo, useState } from "react"
import {
  BriefcaseBusiness,
  GraduationCap,
  Home,
  Mail,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

export type SectionRailItem = {
  label: string
  href: string
}

type SectionRailProps = {
  ariaLabel: string
  items: SectionRailItem[]
}

const sectionIcons: Record<string, LucideIcon> = {
  "#about": UserRound,
  "#contact": Mail,
  "#education": GraduationCap,
  "#experience": Sparkles,
  "#home": Home,
  "#projects": BriefcaseBusiness,
}

export function SectionRail({ ariaLabel, items }: SectionRailProps) {
  const sectionItems = useMemo(
    () => items.filter((item) => item.href.startsWith("#")),
    [items],
  )
  const [activeHref, setActiveHref] = useState(sectionItems[0]?.href ?? "")

  useEffect(() => {
    if (sectionItems.length === 0) {
      return
    }

    let animationFrame: number | null = null

    const updateActiveSection = () => {
      animationFrame = null

      const anchorY = window.innerHeight * 0.4
      const sectionMetrics = sectionItems.flatMap((item) => {
        const section = document.getElementById(item.href.slice(1))

        if (!section) {
          return []
        }

        const rect = section.getBoundingClientRect()

        return [
          {
            bottom: rect.bottom,
            href: item.href,
            top: rect.top,
          },
        ]
      })

      const activeSection =
        sectionMetrics.find(
          (section) => section.top <= anchorY && section.bottom > anchorY,
        ) ??
        [...sectionMetrics]
          .reverse()
          .find((section) => section.top <= anchorY) ??
        sectionMetrics[0]

      if (!activeSection) {
        return
      }

      setActiveHref((current) =>
        current === activeSection.href ? current : activeSection.href,
      )
    }

    const scheduleUpdate = () => {
      if (animationFrame !== null) {
        return
      }

      animationFrame = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener("hashchange", updateActiveSection)
    window.addEventListener("resize", scheduleUpdate)
    window.addEventListener("scroll", scheduleUpdate, { passive: true })

    return () => {
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame)
      }

      window.removeEventListener("hashchange", updateActiveSection)
      window.removeEventListener("resize", scheduleUpdate)
      window.removeEventListener("scroll", scheduleUpdate)
    }
  }, [sectionItems])

  if (sectionItems.length === 0) {
    return null
  }

  return (
    <nav
      aria-label={ariaLabel}
      className="fixed left-3 top-1/2 z-30 hidden -translate-y-1/2 xl:flex 2xl:left-10"
    >
      <TooltipProvider delayDuration={120}>
        <ul className="flex flex-col items-center gap-1 rounded-full border border-border/80 bg-background/80 p-1.5 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/70">
          {sectionItems.map((item) => {
            const Icon = sectionIcons[item.href] ?? Sparkles
            const isActive = item.href === activeHref

            return (
              <li key={item.href}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={item.href}
                      aria-current={isActive ? "location" : undefined}
                      aria-label={item.label}
                      onClick={(event) => {
                        if (
                          event.altKey ||
                          event.ctrlKey ||
                          event.metaKey ||
                          event.shiftKey ||
                          event.button !== 0
                        ) {
                          return
                        }

                        const section = document.getElementById(
                          item.href.slice(1),
                        )

                        if (!section) {
                          return
                        }

                        event.preventDefault()
                        setActiveHref(item.href)
                        window.scrollTo({
                          behavior: "auto",
                          top: Math.max(
                            0,
                            item.href === "#home"
                              ? 0
                              : section.getBoundingClientRect().top +
                                  window.scrollY -
                                  96,
                          ),
                        })
                        window.history.pushState(null, "", item.href)
                      }}
                      className={cn(
                        "flex size-10 items-center justify-center rounded-full border border-transparent text-muted-foreground transition-colors hover:bg-secondary hover:text-primary focus-visible:border-ring focus-visible:bg-secondary focus-visible:text-primary",
                        isActive &&
                          "border-primary/20 bg-primary text-primary-foreground shadow-sm hover:bg-primary hover:text-primary-foreground",
                      )}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                      <span className="sr-only">{item.label}</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="right" sideOffset={10}>
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              </li>
            )
          })}
        </ul>
      </TooltipProvider>
    </nav>
  )
}
