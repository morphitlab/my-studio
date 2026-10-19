# My creative studio

Astro static site for GitHub Pages. Content lives in `src/content/*` (Markdown), photos in `public/uploads`.

## Run locally
`npm install` then `npm run dev` (http://localhost:4321). `npm run build` makes the site in `dist/`.

## Deploy
1. Create a GitHub repo and push this folder to the `main` branch.
2. Repo Settings > Pages > Source: **GitHub Actions**.
3. Each push to `main` runs `.github/workflows/deploy.yml` and publishes the site. Check the Actions tab.
   If you use a user site repo named `<you>.github.io`, change `BASE` in the workflow to `/`.

## Publish without code (Pages CMS)
1. Open https://pagescms.org and sign in with GitHub, then pick this repo. It reads `.pages.yml`.
2. Choose Writing, Photos, Videos, Thoughts or Timelines, fill the form, save. The save is a commit, which triggers a deploy.
3. Set `draft: true` (Draft toggle) to keep something off the site.
Photos you upload are public. Videos: upload to YouTube/Vimeo and paste only the ID.

## Edit your details
Email address: `src/pages/about.astro`. Palette: CSS variables at the top of `src/layouts/Base.astro`.

## Status
Not yet run or tested. First step: `npm install && npm run build`. The CMS connection and live deploy need your GitHub account.
Not built yet: search, tag pages, archives, related content, book-flip mode, individual photo/video/thought/timeline pages, image resizing, sitemap.
