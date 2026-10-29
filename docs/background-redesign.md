# Background / experience redesign

Scope: only the Background/Professional Journey section. The approved palette, hero, process wheel, project cards, project dialogs, case studies and footer remain unchanged. No new dependencies or Git commits are needed.

## Presentation

- The four experiences are visible by default, in the required order: Jianglan UX design → AFY sales/education consulting → Zhejiang Science & Technology Museum → Hangzhou Youth Activity Centre.
- Employment dates and organisation names are read from the existing bilingual `portfolioV2` content, including overlapping periods.
- Short contribution summaries and selective achievements replace the default Challenge/Action/Outcome blocks.
- The numbered timeline uses a scroll-progress connector and subtle once-only reveals. Entries remain readable after revealing; reduced motion disables the reveal animation.
- Per-role native details preserve supporting material. Education retains its existing content in a separate disclosure.
- The AFY headline is the main sales visual; its supporting chart is 110px high, sourced from the unchanged 12-month dataset. Exact totals and every monthly figure are available in sales details.

## Data verification

- Original month values total CNY 2,591,688. `¥2.6M` is the rounded display of that total; the underlying records have not been changed to CNY 2,600,000.
- Peak remains CNY 439,012 in April 2024; July remains CNY 171,082 and August CNY 79,000.
- EUR equivalent is derived from the same original total. The ECB reference rate published by the Bank of Lithuania on 27 October 2026 is 1 EUR = 7.4343 CNY. The amount is approximately EUR 348,612, displayed as `≈ €350K` rounded to the nearest EUR 10,000. It is a present-day comparison, not historical EUR sales or profit.
- Reference: https://www.lb.lt/en/currency?class=Eu&currency=CNY&date_from_day=2026-10-27&date_to_day=2026-10-27&type=day
- A legacy `portfolio.ts` entry mentions 500+ science sessions, but the previously supplied domestic resume does not establish that count or its scope. It is not promoted into the new public metric pending confirmation. Qualitative public-engagement evidence and the real stage photo are used instead.
- Jianglan retains internship context. Two design directions/seven-page scope comes from the approved project brief; no launch, conversion or revenue improvement is claimed.

## Changed files

- `src/content/experience-timeline.ts`: concise bilingual narrative and dated FX reference.
- `src/components/portfolio/experience-timeline.tsx` and `.module.css`: compact timeline, sales achievement, mini chart and native disclosures.
- `src/components/portfolio/portfolio-v2-sections.tsx`: delegates the existing ProfessionalJourney export to the new view.
- `src/components/portfolio/design-portfolio-page.tsx`: makes the journey visible, with education in a separate disclosure.

Existing uncommitted changes from earlier redesign work are preserved.

## Validation

- ESLint, TypeScript (`tsc --noEmit`) and `git diff --check` pass.
- Production build passes with `npm run build -- --webpack`, including both language routes and both Creative Key routes. The default Turbopack build encountered a Google Fonts download failure; no font configuration was changed.
- Chrome browser checks cover 1440px desktop, 834px tablet and 390/375px mobile, English and Chinese, default and expanded disclosures, sales records, project-dialog access, loaded images and internal anchors.
- Keyboard Enter opens the native sales disclosure; mobile click opens it. Expanded monthly records fit the mobile viewport.
- Timeline progress advances and reverses, previous entries remain readable, and reduced motion disables reveals.
- The final fresh browser run reports no JavaScript errors during these flows. These are focused section checks, not a full-site Lighthouse or screen-reader audit.
- Local preview: http://127.0.0.1:3002/#background and http://127.0.0.1:3002/zh#background.
