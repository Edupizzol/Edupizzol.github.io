---
name: Eduardo Jesus Dal Pizzol · Portfólio
description: A component datasheet for one engineer's AI work, where every value sits next to its test condition.
colors:
  paper: "#f8f8f5"
  ink: "#121417"
  ink-2: "#444a52"
  rule: "#c4c8ce"
  accent: "#1d4fa3"
  accent-hover: "#163d80"
  on-accent: "#ffffff"
  select: "#c9d8f2"
  tile-blue: "#1d4fa3"
  tile-white: "#f4f4f0"
  paper-dark: "#0f1114"
  ink-dark: "#e8eaed"
  ink-2-dark: "#a8afb9"
  rule-dark: "#30353d"
  accent-dark: "#8fb3f2"
  accent-hover-dark: "#b4cdf7"
  on-accent-dark: "#0f1114"
  select-dark: "#29426e"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 1.3rem + 4vw, 4.5rem)"
    fontWeight: 720
    lineHeight: 0.98
    letterSpacing: "-0.022em"
    fontVariation: "'wdth' 86"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 1.3rem + 1.4vw, 2.375rem)"
    fontWeight: 720
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 86"
  section:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 80"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)"
    fontWeight: 680
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 92"
  value:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)"
    fontWeight: 700
    lineHeight: 1.3
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 90"
  lede:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'tnum' 1"
  small:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 80"
  label-micro:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 80"
rounded:
  none: "0px"
  hair: "2px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  max: "1240px"
  row: "0.75rem"
  block: "1rem"
  group: "1.5rem"
  column: "clamp(2rem, 5vw, 4rem)"
  section: "clamp(3.5rem, 2.5rem + 4vw, 6.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.hair}"
    padding: "0.625rem 1.125rem"
    height: "2.875rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.on-accent}"
  seal:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    typography: "{typography.small}"
    rounded: "{rounded.none}"
    padding: "0.3rem 0.625rem"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    typography: "{typography.label-micro}"
    rounded: "{rounded.none}"
    padding: "0.1rem 0.45rem"
  nav-link:
    textColor: "{colors.ink-2}"
    typography: "{typography.small}"
  nav-link-hover:
    textColor: "{colors.ink}"
  spec-value:
    textColor: "{colors.accent}"
    typography: "{typography.value}"
---

# Design System: Eduardo Jesus Dal Pizzol · Portfólio

## Overview

**Creative North Star: "The Component Datasheet"**

The site reads as a printed technical datasheet for one engineer. Every result is a parameter with its value and its test condition set side by side, so a caveat is a column, not a footnote. The ground is paper-white with black ink; in dark mode the sheet inverts to graphite ink on near-black. Structure comes from rules, not containers: hairlines separate rows, and a heavy 3px ink rule opens every section, table and paper the way a document rule opens a clause.

There is exactly one hue, an azulejo blue, and it marks evidence and action: values, links, the primary button, the seal, the bullet squares and the focus ring. One grotesque family (Archivo, variable weight and width) carries everything, using its width axis to condense headings and labels and tabular figures so numbers align. The only ornament is a small 2×2 Athos Bulcão–style azulejo tile in blue and white, used as the header mark, the favicon and the marker beside every section and table title.

Density is that of a reference document: scannable rows, short measures (60 to 72ch), generous section spacing, no motion beyond color and underline transitions.

**Key Characteristics:**
- Paper and ink, with one azulejo blue reserved for values, links and actions.
- Rules instead of boxes: 1px hairlines between rows, 3px ink rules at heads.
- Parameter · Valor · Condição tables as the primary content structure.
- One variable grotesque, width axis for condensed uppercase heads, tabular numerals everywhere.
- The azulejo tile as the single, repeated ornament.
- Flat: no shadows, no fills behind content, square corners.

## Colors

A near-monochrome paper-and-ink palette with a single azulejo blue; every token has a dark-mode counterpart except the tile, which is a physical object and keeps its colors in both themes.

### Primary
- **Azulejo Blue** (accent / accent-dark): the value column of every datasheet table, all inline links, the primary button fill, the seal border and text, the square list bullets, the focus outline and the skip link. Darkens to **Deep Azulejo** (accent-hover) on hover in light mode; in dark mode the hover lightens (accent-hover-dark).
- **On Accent** (on-accent / on-accent-dark): text on the solid blue button and skip link; white in light mode, near-black in dark.

### Neutral
- **Datasheet Paper** (paper / paper-dark): page ground and `theme-color`.
- **Ink** (ink / ink-dark): body text, headings, the 3px document rules, table header underline, row-header links.
- **Graphite Ink** (ink-2 / ink-2-dark): secondary text: lede, table conditions, column headers, metadata, nav links, tags, footer.
- **Hairline** (rule / rule-dark): 1px row and entry dividers, tag borders, link underlines on row headers, the middle-dot stack separators, the nav scrollbar.
- **Selection Blue** (select / select-dark): text selection background only.
- **Tile Blue / Tile White** (tile-blue, tile-white): the azulejo tile fills; fixed across themes.

### Named Rules
**The One Blue Rule.** Azulejo Blue is the only hue. It means "this is a measured value or something you can act on"; never use it for decoration, backgrounds of content areas, or headings.

**The Fixed Tile Rule.** The azulejo tile always renders in tile-blue on tile-white, in both themes. It is an object, not a themed surface.

**The Text-Not-Color Rule.** Status is always written (a seal, a tag, a condition cell), never conveyed by color alone.

## Typography

**Display Font:** Archivo (variable, weight 100–900, width 62–125%, self-hosted, SIL OFL), with ui-sans-serif / system-ui fallback
**Body Font:** Archivo, same stack

**Character:** A single sober grotesque doing all the work. Hierarchy comes from weight (400 to 720) and the width axis (80 to 92% for heads and labels), not from a second family.

### Hierarchy
- **Display** (720, step-4, 0.98, width 86%): the name on the home page only.
- **Headline** (720, step-3, 1.05, width 86%): the project title on detail pages.
- **Section** (700, step-2, uppercase, width 80%): section heads, set beside the tile under a 3px ink rule.
- **Title** (680, step-2, width 92%): entry titles and paper titles; drops to step-1 in the two-column software grid.
- **Value** (700, step-1, width 90%, tabular, accent): the value cell of datasheet tables; never wraps on desktop.
- **Lede** (400, step-1, 1.6): hero and detail-head introduction, ink-2, max 60ch. The role line under the name uses the same size at 500 in ink, max 38ch.
- **Body** (400, step-0, 1.6, tabular figures): running text, max 68 to 72ch.
- **Small** (400 to 600, step--1): conditions, metadata values, nav, org lines, notes, footer.
- **Label** (700, step--1, uppercase, 0.04em, width 80%): table titles (spec-title), set beside the tile over a 3px ink rule.
- **Label Micro** (650 to 700, 0.75rem, uppercase, 0.04 to 0.05em, width 80 to 85%): definition-list terms in entry metadata and status tags.

### Named Rules
**The Tabular Figures Rule.** `font-variant-numeric: tabular-nums` is set on the body; numbers must align in every table and list.

**The Width-Axis Rule.** Condense with Archivo's width axis (80 to 92%), never with a second condensed family or with letter-spacing alone. Uppercase is reserved for headings and labels that name a block of data.

## Layout

A single centered sheet (max 1240px) with a fluid gutter (16 to 48px). The home hero is a two-column grid from 1024px (1.08fr name block, 1fr Destaques table); detail heads split 1.3fr / 1fr at the same breakpoint. Entries use a meta/body grid from 900px (15rem metadata column, body max 72ch); below 900px the body is unwrapped so the title comes first, then metadata in an auto-fit grid, then text and links. The software projects sit in a two-column list from 900px. Sections are separated by the fluid section space (3.5 to 6.5rem); column gaps use clamp(2rem, 5vw, 4rem); rows breathe at 0.75rem; groups at 1 to 1.5rem.

Below 640px datasheet tables collapse into rows: value in a 6.5rem left column spanning two lines, parameter and condition stacked to its right; the header row is visually hidden but kept for assistive tech. Below 1100px the section index wraps under the brand and scrolls horizontally, with a mask fade on its right edge. Works 360 to 1920px without horizontal page scroll.

## Elevation & Depth

Entirely flat. There are no shadows, no layered surfaces and no fills behind content. Depth and grouping come only from rule weight: 1px hairlines between rows and entries, a 1px ink line under table headers, and a 3px ink rule at the head of every section, table, detail metadata block and paper.

### Named Rules
**The Rule-Weight Rule.** Use 3px ink to open a block, 1px ink to close a table header, 1px hairline to separate rows. Nothing else creates hierarchy between surfaces.

## Shapes

Square by default. Content containers, tags, seals and bullet markers have no radius; the primary button carries a barely-there 2px corner and the focus outline 1px. The only curves in the system are the quarter-circle arcs inside the azulejo tile, which belong to the ornament, not to UI chrome. List bullets are 0.5rem solid blue squares. Inline icons are stroked 16-unit SVG arrows (download, forward, back) at 1em, drawn in currentColor at 1.6 stroke.

## Components

### Buttons
Solid, quiet and singular: the CV download is the only solid button, once in the hero and once in Contato.
- **Shape:** nearly square (2px radius), min-height 2.875rem.
- **Primary:** accent fill and border, on-accent text, weight 600, padding 0.625rem 1.125rem, leading download icon at 1em.
- **Hover / Focus:** fill and border shift to accent-hover over 0.15s; focus is the global 2px accent outline at 3px offset.
- **Secondary actions:** plain text links at weight 550 in the same action row, never a ghost button.

### Links
- Accent, 1px underline at 0.2em offset; hover moves to accent-hover and a 2px underline. Row-header links inside tables are ink with a hairline underline that darkens to ink on hover. "Ver detalhes" and "Voltar ao início" links carry a trailing or leading stroked arrow and a 2rem minimum target.

### Datasheet Table (signature)
The core component: three columns, Parâmetro (40%) · Valor (22%) · Condição.
- Titled by a label-style heading with the tile, over a 3px ink rule.
- Column headers small, 600, ink-2, closed by a 1px ink line.
- Rows separated by 1px hairlines, 0.75rem vertical padding, no outer border, no zebra.
- Value cell in the Value style (accent, tabular, width 90%); condition cell small ink-2. The caveat lives in the condition cell, never dropped.
- Collapses to stacked rows under 640px (see Layout).
- Live variant: the Codeforces reading fills value and condition from the public API with "lido agora ... às HH:MM"; on failure the table stays hidden and only the profile link shows.

### Section Head
Tile (14px) plus uppercase condensed Section heading in a row, under a 3px ink rule, 0.875rem above the text.

### Entry
A list item with a metadata definition list (uppercase micro terms, ink values) and a body: title, org line in ink-2, short paragraph, optional datasheet table, stack line, links row. Entries are divided by hairlines; the first in a list has no top rule.

### Seal and Tag
- **Seal:** a 1px accent-bordered, square box with accent text at weight 650, for an achieved result ("1º lugar ...").
- **Tag:** a 1px hairline-bordered, square inline label in uppercase micro type, ink-2, for a status or restriction ("Em andamento", "Código não público", "Rede simulada").

### Stack Line
Inline technologies in small ink-2 type separated by hairline-colored middle dots; an optional bold ink lead label ("Stack").

### Navigation
Header strip under a 1px hairline, min-height 3.75rem: tile mark (22px) and name at 650 left, section index right in small 500 ink-2 links without underline; hover goes to ink and underlines. Under 1100px it wraps below the brand and scrolls horizontally with a right-edge mask fade.

### Bullets
Unordered detail lists with 0.5rem accent squares, hairline dividers between items, max 72ch.

## Do's and Don'ts

### Do:
- **Do** put every number in a Parâmetro · Valor · Condição row, with the condition written beside the value.
- **Do** open each section, table and paper with the 3px ink rule and the 14px azulejo tile.
- **Do** keep Azulejo Blue for values, links, the primary button, seals, bullet squares and focus.
- **Do** condense headings and labels with Archivo's width axis (80 to 92%) and keep tabular figures on.
- **Do** state status in words with a tag or seal (square, 1px border), never by color alone.
- **Do** keep text measures at 60 to 72ch and honor prefers-reduced-motion; motion is limited to 0.15s color and underline transitions.

### Don't:
- **Don't** add shadows, rounded cards or filled content boxes; separate with rules.
- **Don't** add decorative gradients or patterns; the only gradient in the system is the functional mask fade on the scrolling nav.
- **Don't** introduce a second hue, a second type family, or theme the azulejo tile's colors.
- **Don't** add ornaments beyond the single 2×2 azulejo tile, and don't enlarge it into a pattern or panel.
- **Don't** use more than one solid primary button per viewport (the CV download); other actions are text links.
