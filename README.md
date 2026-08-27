# Career Atlas

Career Atlas is a responsive, editorial-style personal portfolio designed to explain experience through products, integrations, partner ecosystems and operating systems rather than a conventional résumé timeline.

## Stack

V1 deliberately uses no framework or runtime dependency: semantic HTML, modern CSS and small ES modules. This keeps deployment and maintenance simple while preserving reusable components and a structured content layer.

## Run locally

Because ES modules are used, serve the folder over HTTP rather than opening `index.html` directly.

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Edit content

All portfolio copy and structured content lives in one file:

`src/data/portfolio.js`

Edit that file to update:

- hero positioning
- profile / contact information
- atlas territories
- case studies
- partner / platform groups
- working principles

The UI renderer is in `src/components/render.js`. Most content updates should not require changing it.

### Placeholders

V1 intentionally keeps unverified career content inside square-bracket placeholders such as `[Add verified adoption evidence.]`. Replace these only with facts you can substantiate.

## Profile photo

The About section currently uses a visual placeholder. When you have a final image, replace the `.profile-frame` placeholder in `src/main.js` with an `<img>` element and keep meaningful alt text.

## CV

Replace `public/cv-placeholder.pdf` with the real CV (or update `profile.cv` in the data file to a different filename).

## Metadata

Basic SEO, Open Graph and Twitter metadata is in `index.html`. Replace the placeholder social preview if you want a custom raster image for production.

## Deploy

This project is static and can be deployed to any static host, including Netlify, Vercel, Cloudflare Pages, GitHub Pages or an S3-style static bucket. Configure the site root as the repository root; no build command is required.

## Checks

Run JavaScript syntax checks:

```bash
node --check src/main.js
node --check src/components/render.js
node --check src/data/portfolio.js
```

Serve the site locally and verify that `index.html`, CSS, JavaScript and public assets return successfully.
