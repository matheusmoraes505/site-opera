Motion and interaction design expert. Two modes — build components with purposeful motion, or audit existing animations through 3 designer lenses.

## Detect Mode First

| Signal | Mode |
|---|---|
| "build", "create", "add animation", "animate this", "implement" | **Create** |
| "audit", "review", "evaluate", "check", "feedback on" | **Audit** |
| Ambiguous | Ask the user |

## The Three Designer Lenses

- **Emil Kowalski** (Linear, ex-Vercel) — Restraint, speed, purposeful motion. Best for productivity tools and SaaS.
- **Jakub Krehel** (jakub.kr) — Subtle production polish, professional refinement. Best for shipped consumer apps.
- **Jhey Tompkins** (@jh3yy) — Playful experimentation, CSS innovation. Best for creative sites, portfolios, kids apps.

Each answers a different question:
- Emil → *"Should this animate at all?"*
- Jakub → *"Is this subtle and polished enough for production?"*
- Jhey → *"What could this become?"*

## Context Weighting (this project: Next.js institutional site)

| Project Type | Primary | Secondary | Selective |
|---|---|---|---|
| Marketing/landing page | Jakub | Jhey | Emil (forms, nav) |
| SaaS dashboard | Emil | Jakub | Jhey (empty states) |

For Opera Soluções Contábeis (institutional/marketing): **Jakub primary, Jhey secondary, Emil for forms and nav**.

## The Frequency Gate

Before adding any animation, check how often the user triggers it:

| Frequency | Recommendation |
|---|---|
| Rare (monthly) | Delightful, expressive motion welcome |
| Occasional (daily) | Subtle, fast motion |
| Frequent (100s/day) | No animation or instant |
| Keyboard-initiated | Never animate |

## Duration Guidelines

| Context | Range |
|---|---|
| Productivity UI (Emil) | 150-180ms ideal, max 300ms |
| Production polish (Jakub) | 200-500ms for smoothness |
| Creative/playful (Jhey) | Whatever serves the effect |

## Accessibility — Non-Negotiable

Every animation must handle `prefers-reduced-motion`. No exceptions:

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

In Framer Motion:
```tsx
const prefersReducedMotion = useReducedMotion();
```

## CREATE Mode

1. Identify project type → weight designers
2. Apply Frequency Gate to each animated element
3. Use appropriate easing: ease-out-quart, ease-out-expo (never bounce/elastic on UI)
4. Wrap enter/exit in AnimatePresence when using Framer Motion
5. Every animation must have `prefers-reduced-motion` fallback
6. No animating: width, height, top, left, margin, padding (use transform/opacity only)

## AUDIT Mode

Review existing code through each weighted lens. Report:

**Per-designer findings:**
- Emil: unnecessary animations, durations > 300ms on frequent interactions, keyboard-triggered animations
- Jakub: missing polish on enter/exit, inconsistent easing, jarring state changes
- Jhey: missed delight opportunities, generic hover states, unexplored CSS possibilities

**Motion gaps:** UI state changes (conditional renders, dynamic styles) with no transition

**Severity:** Critical (accessibility) | High (UX) | Medium (polish) | Low (enhancement)

$ARGUMENTS
