# Career Atlas

**[Explore Career Atlas →](https://lenkabr.github.io/career-atlas/)**

Career Atlas is my interactive portfolio covering the products, technology partnerships, integrations, APIs and ecosystems I have worked on and built.

## Why I built it

A standard one-page CV can summarize roles and responsibilities, but it cannot tell the full story behind the work: the problems I tackled, the systems I built, the decisions I made and the business outcomes they created.

I built Career Atlas to make those connections visible. It gives hiring managers, founders and product leaders a clearer view of how my experience brings together product management, technology partnerships, integrations, AI and business growth.

## How it was built

Career Atlas is a lightweight, responsive static website designed for clarity, speed and easy iteration. It was built with:

- Semantic HTML
- Modern CSS
- Vanilla JavaScript with ES modules
- Structured portfolio content in `src/data/portfolio.js`
- GitHub for version control
- GitHub Pages for hosting

The project deliberately uses no framework, database or build process. This keeps the site simple to maintain while supporting reusable components and interactive navigation.

## Working on the project

Most portfolio copy and structured content lives in `src/data/portfolio.js`. The interface rendering is handled in `src/components/render.js`, with the main styles in `src/styles.css`.

To preview changes locally, run:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173` in a browser.
