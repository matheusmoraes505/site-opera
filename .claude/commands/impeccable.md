Design and iterate production-grade frontend interfaces. Real working code, committed design choices, exceptional craft.

## Project Context (Opera Soluções Contábeis)

Load `.impeccable.md` from project root for brand context before any design work.

## Available Sub-commands

Call with `/impeccable <command> [target]`:

| Command | What it does |
|---|---|
| `audit` | Audit code against design anti-patterns |
| `polish` | Final quality pass — typography, spacing, contrast |
| `critique` | Honest senior-designer review |
| `typeset` | Fix typography hierarchy, scale, rhythm |
| `layout` | Fix spacing, rhythm, visual hierarchy |
| `colorize` | Adjust palette, contrast, color harmonies |
| `animate` | Add/fix animations and transitions |
| `bolder` | Make the piece more daring and expressive |
| `quieter` | Remove noise, calm the design |
| `delight` | Add micro-interactions and surprises |
| `distill` | Strip to essence, remove complexity |
| `harden` | Reinforce accessibility and robustness |
| `clarify` | Improve UX copy, labels, error messages |
| `adapt` | Adapt for different devices/screen sizes |

If no sub-command: show this table and ask what to do.

## Shared Design Laws

### Color (OKLCH)
- Never `#000` or `#fff` — tint every neutral toward brand hue
- Reduce chroma as lightness approaches 0 or 100
- Choose a strategy: Restrained (accent ≤10%) | Committed (30-60%) | Full palette | Drenched

### Typography
- Body line length: 65-75ch max
- Hierarchy via scale + weight contrast (≥1.25 ratio between steps)
- No flat scales

### Layout
- Vary spacing for rhythm — same padding everywhere is monotony
- Cards only when truly the best affordance. Nested cards: always wrong
- Don't wrap everything in a container

### Motion
- Don't animate CSS layout properties
- Ease out with exponential curves (ease-out-quart/quint/expo)
- No bounce, no elastic on UI elements

## Absolute Bans

Refuse and rewrite if about to produce:
- `border-left` > 1px as colored accent → use background tints or full borders
- `background-clip: text` + gradient → single solid color, emphasis via weight
- Glassmorphism decoratively → rare and purposeful or nothing
- Hero-metric template (big number + gradient) → SaaS cliché
- Identical card grids → vary structure
- Em dashes (— or --) → use commas, colons, semicolons

## AI Slop Test

If someone could look at this and say "AI made that" without doubt — it failed. Rework until both first-order (domain reflex) and second-order (aesthetic family reflex) answers are non-obvious.

$ARGUMENTS
