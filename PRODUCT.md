# Impeccable — Project Context

## Project Identity

**Name:** Opera Soluções Contábeis  
**Type:** Landing page / institutional site for an accounting firm  
**Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion

## Target Audience

- **Primary:** Small and medium business owners in Brazil (PMEs)
- **Secondary:** Entrepreneurs looking for specialized accounting services
- **Tertiary:** Companies needing tax recovery and fiscal auditing (ICMS, PIS/COFINS)

## Brand Personality

**Tone:** Professional authority with editorial sophistication — NOT generic corporate  
**Feeling:** Confident, precise, trustworthy. Like a high-end law firm, but warmer.  
**Adjective:** *Institucional-editorial* — gravidade com elegância. Nunca morno.

## Aesthetic Direction

- **DO:** Strong typographic hierarchy, generous whitespace, editorial layouts, purposeful asymmetry
- **DO:** Color palette with authority (deep navy, warm white, accent gold or teal)
- **DO:** Micro-interactions that feel deliberate, not decorative
- **DO NOT:** Purple gradients, generic card layouts, Inter font as default, emoji icons
- **DO NOT:** Anything that looks like a SaaS startup from 2019
- **DO NOT:** Rounded everything — use sharp or subtly rounded with intention

## Typography Rules

- Avoid Inter and Roboto as primary fonts
- Prefer editorial choices: Playfair Display, DM Serif Display, Fraunces, or similar for headings
- Body: DM Sans, Plus Jakarta Sans, or equivalent with excellent legibility
- Scale: Strict typographic hierarchy — no ambiguous heading levels

## Motion Principles

- Framer Motion is available — use it meaningfully
- Prefer: Emil Kowalski style for utility interactions (fast, purposeful, 150-200ms)
- Prefer: Jakub Krehel style for page reveals (polished, subtle, professional)
- Avoid: gratuitous animation that delays interaction
- Avoid: `transition: all 0.3s ease` as a lazy default

## Color Guidance

- Base: near-white or soft warm white (#F9F7F4 range)
- Text: near-black with warmth (#1A1A1A or similar)
- Accent: one strong color — teal (#0D9488 range) OR deep gold (#B8860B range)
- Avoid: multiple competing accent colors

## Components in Scope

- Hero section
- Services/solutions cards
- Trust signals (clients, certifications)
- CTA sections
- Contact / form
- Navigation (sticky, minimal)

## Anti-Patterns to Flag

- Generic "gradient text" headings
- Background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
- Cards with identical padding, border-radius, and shadow stacked in a 3-col grid
- Emoji used as icons
- `font-family: Inter` without typographic intent
- Animations longer than 600ms without reason
