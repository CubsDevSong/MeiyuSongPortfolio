# Portfolio redesign

The homepage helps a hiring manager understand Meiyu's design skills through her work. Its primary action opens the Creative Key case study on the page, followed by the complete Canva project.

## Design decisions

- Lead with Creative Key, rather than a portrait and a long professional summary.
- Use a neutral paper background, charcoal type, a single red accent, generous spacing and small monospace labels. References: Apple's restrained product presentation and Nothing's editorial, technical typography.
- Keep body copy left aligned and group content with spacing. Use thin rules for section divisions and expandable secondary material.
- Use a 1280px maximum content width; 56px desktop and 20px mobile outer spacing; 4px media corners; rounded action buttons; no card shadows except the creator screenshots.
- Collapse the navigation below 700px. Keep the English/Chinese switch available at every width. Support keyboard focus, Escape to close the mobile menu and reduced motion.
- Preserve supporting project details, experience, education, awards, CV and contact destinations.

## Project evidence and media

Source: [Creative Key Ecosystem](https://www.canva.com/design/DAHK_USWu18/-VJqJ66vtUyXT7pntRIbkw/edit), inspected 25 October 2026. Selected pages were exported via Canva's download interface; their original embedded images were extracted from the PDF and converted to WebP.

- `ecosystem.webp`: kiosk concept sheet, page 135. The homepage frames its first kiosk rendering with CSS.
- `mobile.webp`: mobile companion concept visual, page 135.
- `handoff.webp`: Creative Key physical–digital handoff concept visual, page 145.
- `testing.webp`: low-fidelity prototype testing photograph, page 126.
- `prototype.webp`: physical proof of concept photograph, page 150.
- `context.webp`: project context visual, page 140, retained as an additional source asset.

The concept imagery represents the team's proposed experience. The physical prototype is a proof of concept. Neither is presented as a deployed service. Meiyu's individual contributions are distinguished from the team's prototype and interface work. The Creative Key is a journey guide, not an access credential or booking confirmation.

## Creator evidence

The three screenshots provided on 25 October 2026 show **Douyin** and **Rednote**, rather than an international TikTok account. The design labels them accordingly. The dated snapshot shows 7,301 Douyin followers, 146K profile likes, approximately 1.25 million views on one featured video, and 726 Rednote followers with 14.8K likes and saves. Figures are not live counters.

The screenshots were cropped to relevant profile/video areas and converted to WebP. Drafts and private-work lists are excluded from the site assets. No verified direct profile URL was supplied or located, so the Douyin action copies the exact displayed ID, `Richgirl998.`; it does not invent a profile URL. Rednote's displayed ID is `547355558`.

## Source files

- `src/components/portfolio/design-portfolio-page.tsx`: active bilingual layout and small client interactions.
- `src/components/portfolio/design-portfolio.module.css`: scoped visual system and responsive rules.
- `src/content/design-portfolio.ts`: new English and Chinese presentation copy.
- `src/content/focused-portfolio.ts`: existing project, career and contact content, plus current metadata.

The site retains its Next.js static export and existing Vercel packaging workflow.

## Validation

- `npm run lint`, `npx tsc --noEmit` and `npm run vercel-build` passed.
- Both exported language routes returned HTTP 200 at 1440, 960, 768, 390 and 320px, with no horizontal overflow, broken images or missing internal anchor targets.
- Browser checks covered opening and closing the mobile menu, Escape and focus restoration, section navigation, copying the Douyin ID, project disclosures and switching to Chinese. No browser page errors were observed.
- The repository has no `make check` target; its own lint, TypeScript and export commands were used instead.
