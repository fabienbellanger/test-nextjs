# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `bun dev` - Start dev server (port 3000)
- `bun run build` - Production build
- `bun run lint` - Lint with Biome (`biome check`)
- `bun run format` - Format with Biome (`biome format --write`)
- `bun run fix` - Lint + fix with Biome (`biome check --fix`)

Package manager: **bun** (uses `bun.lock`)

## Architecture

Next.js 16 app with App Router. Source code lives in `src/`.

- `src/app/` - App Router pages and layouts
- `src/utils/` - Shared utilities
- `@/*` path alias maps to `./src/*`

## Styling

- Tailwind CSS v4 via `@tailwindcss/postcss`
- DaisyUI v5 plugin (themes: `dim` default, `light`)
- Configured in `src/app/globals.css`

## Code Style (Biome)

- Indent: 4 spaces
- Linter: recommended rules + Next.js/React domains
- Auto-organize imports enabled
- CSS: Tailwind directives support enabled
