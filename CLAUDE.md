# SynBio LATAM — Claude Instructions

## Workflow
- Make the requested changes, commit, and push directly to `main` without asking for confirmation.
- No builds, no `npm run build`, no `ng build`, no Docker, no registry pushes.
- Deployment is handled externally (Firebase). Never run deploy commands.

## Stack
- Angular 21 standalone components, lazy-loaded routes
- Tailwind CSS v4 — custom palette: `#085041`, `#1D9E75`, `#5DCAA5`, `#04342C`, `#E1F5EE`
- Angular signals for state

## Repo
- Remote: `https://github.com/fazozela/synbiolatam.git`
- Branch: `main`
- Git user: `fazozela` / `fazozela@gmail.com`

## Assets
- Team photos: `public/equipo/` — filenames must match exactly what's in the `.ts` files
- Ally logos: `public/aliados/`
- Member data lives in `src/app/pages/home/home.ts` and `src/app/components/latam-map/latam-map.ts`
