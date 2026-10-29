# Interactive homepage redesign

## Scope and source

Implemented locally on `feature/portfolio-v2-phase3`, based on the user's October 27 interactive master prompt. Starting HEAD: `e90a8ec`. Working tree was clean before implementation. No new dependencies, commits, pushes or deployments are required by this change.

Existing stack: Next.js 16.2.6, React 19.2.4, TypeScript, CSS Modules, npm/package-lock.json, Radix Dialog. Existing site has no active theme switcher; the redesign uses a warm light palette and preserves language switching.

## Content and components

- `interactive-portfolio.ts`: typed EN/ZH narrative, five process stages and supporting project content.
- `scroll-story.tsx` / CSS: portrait reveal; five-segment SVG wheel; progress, active stage, direct navigation and continuous full-circle reveal.
- `interactive-projects.tsx` / CSS: three tiles and shared Radix dialog presentation with retained source links.
- `design-portfolio-page.tsx` / CSS: integrates the three-section narrative, preserves the featured Creative Key composition and full case-study routes, and retains professional journey, AFY chart and education in an expandable background section.
- Homepage metadata uses the new UX/UI / Human-Centred AI positioning.

Scroll transforms are CSS variables written through requestAnimationFrame. React state updates only when stage/complete status changes. Media listeners, scroll/resize listeners and observers clean up on unmount. One scroll progress value controls the wheel, text and direct-stage navigation. Reduced motion removes pinned progression and displays all five stage descriptions as a readable list. Core content also renders without animation JavaScript.

## Factual boundaries

- Creative Key research totals are explicitly team research/evaluation scope; university concept and prototype status remains visible.
- Global Study Hub is the requested presentation name. Its available original archive is titled Immigration Cheat Sheets. This provenance and the original PDF links remain visible in the dialog. No separate Global Study Hub research has been invented.
- Jianglan's two directions / seven-page scope comes from the approved master prompt; no conversion or revenue effect is claimed.
- ElliQ's archived website descriptions conflict about implementation technology (HTML/CSS/JS versus React/TypeScript). New copy deliberately refers to a front-end interactive prototype without asserting an unverified framework. Evaluation results are not invented.
- Supporting project year labels are omitted where the current repository does not establish a reliable project year.
- AI support describes a considered design approach, not retrospective claims that every listed AI task happened in every project.
- Existing project assets, deeper Creative Key pages, CV, PDFs, social links, and professional history are retained. Existing content files remain available.

See `phase3-content-todos.md` for pending source verification already recorded before this redesign.

## Verification

- ESLint, standalone TypeScript check and production static export passed.
- Chrome checked 1440×1000 desktop, 834×1112 tablet, 390×844 mobile and 375×667 mobile layouts. No page-level horizontal overflow or broken loaded images was observed.
- Nineteen browser behaviour assertions passed: clean hydration; direct stage selection; reverse scroll; all three project dialogs; focus confinement; Escape and returned focus; EN/ZH anchors and matching 5-stage/3-tile structure; short-screen controls; mobile navigation; actual touch dispatch; reduced motion and clean console.
- Direct Test selection reached approximately 216° and reverse scroll returned Discover to 0°. Full-circle state reaches 288° with completion 1.
- Reduced motion exposes all five stages. Static server rendering includes all essential content, and no-JS source links are available for supporting projects.
- An initial SVG precision hydration warning was fixed by rounding geometry consistently to three decimals. Fresh-page browser console verification then passed.
- Local screenshots and detailed QA results: `/tmp/meiyu-interactive-review/` (`qa-results.json`). Temporary browser scripts are not added to the repository.
- No Lighthouse score or comprehensive screen-reader audit is claimed. External Figma/hosted story availability is not certified by local route checks.

## Review revisions — Peach Sorbet

- Applied the supplied palette across home, project dialogs, Creative Key, professional journey and AFY chart: ivory `#FFF8F3`, peach `#F7D0C5`, coral `#EFA8A0`, sand `#E7C8AD`, navy `#333449`. Dark terracotta is the readable text/focus accent; navy carries text on pastel buttons.
- Replaced the arched park portrait with the user's transparent `Subject.png`, displayed within a CSS circle. The optimized WebP preserves transparency and reduces the hero asset to approximately 250 KB. The supplied PNG and original park portrait remain available.
- Removed the process bridge markup and its spacer entirely. The measured gap between process and project section boundaries is zero; ordinary project-header padding provides the transition.
- Increased primary home body text to 17–18px on desktop and 16px on mobile; enlarged supporting text, navigation, project-dialog copy, Creative Key narrative and background/education text. Large headings remain broadly unchanged.
- Rebuilt project previews as actual-design compositions. Jianglan uses the supplied “From Waste to Wing” crop. Its dialog contains seven selectable full-page design views, with internal scrolling and original-image links. These remain design explorations; no launch or business-metric claim was added.
- For short mobile viewports, the process uses a static readable five-stage layout instead of compressing text to fit a pinned scene. Standard mobile/tablet/desktop keep the scroll-led interaction; reduced motion remains supported.
- Chrome review at 1440×1000, 834×1112, 390×844 and 375×667 found no horizontal page overflow, broken loaded images or console errors. Checked circular bounds, computed font sizes, bridge removal, Jianglan cover/gallery selection and Escape/focus return. Screenshots: `/tmp/meiyu-peach-review/`.

### Profile photo follow-up

The user subsequently selected the full park photograph `CF5F6378-1450-4C83-92FE-52D23D1B2B82.jpeg` instead of the transparent cutout. The shared EN/ZH hero now uses `meiyu-park-profile.webp`, with a circular CSS crop at `center 60%`. The scroll reveal, palette and other content are unchanged. Original photo and previous assets are preserved.
