import { defineConfig } from 'astro/config';
// SITE and BASE are set by the GitHub Actions workflow (withastro/action reads them from the repo).
export default defineConfig({ site: process.env.SITE || undefined, base: process.env.BASE || '/' });
