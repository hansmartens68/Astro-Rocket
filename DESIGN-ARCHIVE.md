# Design archive — the brand-consistency design (issue #551)

This branch is a frozen snapshot of Astro Rocket with the design-consistency
system from [issue #551](https://github.com/hansmartensdev/Astro-Rocket/issues/551)
fully applied, as of 16 July 2026. It is kept as an official design variant
for anyone who prefers this look; the theme's default design on `main`
follows the original, more varied colour scheme.

## What this design does

One idea, applied everywhere: **brand colour signals interactivity.**

- Brand-tinted backgrounds for every current/selected state (nav, tabs,
  table of contents, footer current-page pill, theme/colour/language pickers)
- Brand foreground colour on clickable elements (brand-700 in light mode,
  brand-400 in dark, verified for WCAG AA across all 12 themes)
- Brand borders on header controls and form fields
- Hand cursor on all interactive controls; consistent sentence casing
- Solid brand primary CTAs in both modes

## How to use this branch

Build your site directly on this branch:

    git clone -b archive/brand-consistency-design https://github.com/hansmartensdev/Astro-Rocket.git

Or bring individual parts of this design onto a site built from `main`:

    git diff main archive/brand-consistency-design -- src/
    git checkout archive/brand-consistency-design -- <path>

## Related

The counterpart branch `archive/original-design` holds a snapshot of the
theme immediately *before* #551 was applied.

Do not merge or delete this branch — it exists as a reference point and
design variant.
