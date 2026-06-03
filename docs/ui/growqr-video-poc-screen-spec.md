# GrowQR Video POC Screen Spec

## 1) Intent Profile

- **Primary user:** Early-career learner or job seeker exploring fast, practical growth content.
- **Primary task:** Find a relevant video quickly, decide short vs long format, and open/save it with confidence.
- **Desired feeling:** Fast and motivating like short-video products, but trustworthy and career-oriented like GrowQR.

## 2) Creative Direction

- **Design direction:** Warmth and Approachability blended with Boldness and Clarity.
- **Theme mode:** Light mode default.
- **Depth strategy:** Subtle single-shadow system only (no mixed depth patterns).
- **Interface personality:** Clean, high-scannability mobile layout with one clear primary decision per viewport.

## 3) Domain Exploration Outputs

- **Domain concepts:** readiness, growth, mentor guidance, skill pathways, trusted outcomes.
- **Color world:** paper white, soft slate text, trust blue, readiness amber, success green, low-noise neutral cards.
- **Signature element:** `GrowthSwitch` (Shorts/Longs segmented control framed as a growth-readiness selector).
- **Defaults rejected:**
  - Generic social feed clone -> Intent header plus structured filter chips.
  - Endless undifferentiated cards -> Format-specific card architecture with explicit duration/source context.
  - Multi-accent visual noise -> One accent hierarchy with semantic support only.

## 4) Screen Scope (POC v1)

- One mobile-first screen in two display modes:
  - **Shorts default mode**
  - **Longs mode**
- Third-party video listing and discovery only (no playback page design in this phase).

## 5) First-Screen Anatomy

## Top Rail (Sticky)
- App title: `GrowQR Videos`
- Subtext: `Learn. Verify. Grow.`
- Utility action: bookmark list icon

## Primary Control Row
- `GrowthSwitch` with options:
  - `Shorts` (default active)
  - `Longs`

## Secondary Control Row
- Horizontally scrollable chips:
  - `Career Path`
  - `Skill Level`
  - `Duration`
  - `Source`

## Main Content Region
- Shows `VideoCardShort` list in Shorts mode.
- Shows `VideoCardLong` list in Longs mode.

## Bottom Safe Area
- Optional future extension: mini-player dock and quick nav.

## 6) Information Hierarchy

1. Mode selection (`GrowthSwitch`)
2. Current video card (thumbnail + title + duration + source trust indicator)
3. Action row (`Save`, `Share`, `Open Source`)
4. Supporting metadata (`Skill tags`, creator/source label, relevance)
5. Filters (discoverability refinement)

## 7) Layout Specs (Mobile First)

- **Canvas width target:** 390px (iPhone baseline for POC mock spec).
- **Horizontal page padding:** 16px.
- **Top spacing:** 12px under status bar safe inset.
- **Section gaps:** 12px or 16px based on hierarchy.
- **Card corner radius:** 16px.
- **Tap target minimum:** 44x44px.

## 8) Mode Behavior

## Shorts Mode
- Full-width vertical cards, visual-first.
- Compact metadata:
  - 1-2 line title
  - Duration pill (`00:45`, `01:10`)
  - Source badge
  - Skill tag chips (max 2 visible, overflow as `+N`)
- Action row anchored below metadata.

## Longs Mode
- Denser informational cards.
- 16:9 thumbnail + stacked text.
- Extra text allowed:
  - 2-line description preview
  - Long duration context (`12m`, `24m`)
  - Why-relevant line (`Matches Interview Prep`)

## 9) Component Inventory (v1)

- `GrowthSwitch`
- `VideoCardShort`
- `VideoCardLong`
- `DurationPill`
- `SourceBadge`
- `SkillTagChip`
- `ActionButton` (`Save`, `Share`, `Open`)
- `FilterChip`
- `SectionHeader` (`For Your Goal`, optional in expanded state)

## 10) Core Content and Microcopy

- Header subtitle: `Learn. Verify. Grow.`
- Empty list state:
  - Title: `No videos match these filters`
  - Body: `Try widening Skill Level or Source`
  - CTA: `Reset filters`
- Loading state:
  - Card skeletons matching final card dimensions
- Error state:
  - Title: `Could not load videos`
  - Body: `Check your internet and retry`
  - CTA: `Try again`

## 11) Visual Guardrails

- Keep one dominant accent in control and action highlights.
- Do not use decorative gradients behind text-heavy card areas.
- Preserve strict spacing rhythm; avoid arbitrary one-off spacing.
- Keep chip count visible per row to max 5-7 options for low cognitive load.
