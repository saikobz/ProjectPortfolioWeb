# ProjectPortfolioWeb — Agent Instructions

Bilingual junior Full Stack portfolio (Next.js 15, TypeScript, Tailwind). Domain terms live in `CONTEXT.md` — read it when copy, projects, or product decisions are involved.

## Skills (auto — read before acting)

Project skills are in `.agents/skills/`. **Do not guess workflows — open and follow the matching `SKILL.md` first.**

| When | Skill | Path |
|------|-------|------|
| Any code change (default) | ponytail | `.agents/skills/ponytail/SKILL.md` |
| New UI, layout, visual polish | frontend-design | `.agents/skills/frontend-design/SKILL.md` |
| React / Next.js write or refactor | vercel-react-best-practices | `.agents/skills/vercel-react-best-practices/SKILL.md` |
| UI review, a11y, UX audit, pre-deploy check | web-design-guidelines | `.agents/skills/web-design-guidelines/SKILL.md` |
| Plan / spec / architecture grilling | grill-me | `.agents/skills/grill-me/SKILL.md` |
| User asks for a skill or “how do I…” | find-skills | `.agents/skills/find-skills/SKILL.md` |

### Combined workflows

- **Implement UI** → `frontend-design` + `ponytail` + `vercel-react-best-practices`
- **Ship / deploy / final pass** → `web-design-guidelines` on touched UI files
- **Add dependency or abstraction** → `ponytail` first; justify if skipping

## Project conventions

- Copy and project data: `src/content/site.ts` (TH/EN)
- i18n: `src/lib/i18n.tsx` — toggle locale, no `/th` `/en` routes
- Light minimal theme — see `CONTEXT.md` → Visual design
- No CMS, DB, auth, or contact form in v1
- Content edits only in `site.ts` unless adding new UI for media (screenshots, etc.)

## Stack

Next.js App Router · TypeScript · Tailwind CSS v4 · Vercel deploy
