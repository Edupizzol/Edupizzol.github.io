---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["projetos/mcti.html","projetos/pmi-krilltech.html","projetos/civicwater-sentinel.html","projetos/artigos.html"]
---

# Surface: portfolio (index.html + projetos/*.html)

Mode: Persuade. Audience: AI/Data internship evaluators (iFood genAI, Serasa Experian). Job: find ML evidence (competitions, papers + code, MCTI LLM work) in seconds, trust the numbers, open CV or contact. Constraints: content fixed by owner, caveats mandatory, pt-BR, static, light/dark by system, AA.

## Direction contract

THESIS: The portfolio is a component datasheet: every result is a parameter with its value and its test condition side by side, so caveats ("do time", "em andamento", "calibração de desenvolvimento", "indício para o servidor") are structure, not footnotes. Refuses the dev-portfolio default of hero + equal card grid + skill badges.

OWN-WORLD: Paper-white ground (dark: graphite ink-on-black inversion), black ink, hairline table rules, heavy 3px document rules at section heads, one azulejo blue (#1d4fa3 family) for values and links only. One grotesque family (Archivo, width axis for condensed labels, tabular figures) with system fallback. Document header strip (no revision line: a date would be invented copy; section numbers dropped per craft floor). A single small Athos-Bulcão-style 2×2 azulejo module (blue/white SVG) is the only ornament: the mark in the header and the section marker. No patterns, no gradients, no shadows, no rounded cards.

STORY: Visitor reads the name and title, sees the Destaques table with value + condition, scans sections (Experiência, Competições de IA, Pesquisa e artigos, Engenharia de software, Programação competitiva, Contato), opens a detail page ("ver detalhes") that reads as the full datasheet for one project, downloads the CV.

FIRST VIEWPORT: Top strip: azulejo mark + "Eduardo Jesus Dal Pizzol" left, section index right (collapses). Below: document title block — name at display scale (clamp ~3–4.5rem), title line, hero paragraph (max 60ch), then action row: Currículo (PDF) as the solid blue primary, GitHub, LinkedIn, E-mail, Codeforces as text links. Right column on desktop / below on mobile: the Destaques datasheet table (Parâmetro · Valor · Condição), 4 rows, values in tabular blue.

FORM: Datasheet (Impeccable's pick, position 1 of my ordered list; assigned candidate was Brasília azulejo panel, kept only as the small tile module per the owner). seed:71a2eac7e1da08d2. Signature interaction: the Codeforces row is a live measurement — value read from the public API with "lido agora, HH:MM" as its condition; on failure the row shows only the profile link. Motion: none beyond color/underline transitions; reduced-motion honored.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
