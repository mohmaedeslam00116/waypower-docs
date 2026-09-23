# waypower-docs

Documentation site for **[waypower](https://github.com/mohmaedeslam00116/waypower)** —
13 pressure-tested agent skills forming an idea-to-ship pipeline for coding agents.

Built with [Docusaurus](https://docusaurus.io/). Design system in
[`PRODUCT.md`](PRODUCT.md) + [`DESIGN.md`](DESIGN.md). The site itself was
built through the waypower pipeline —
[read how](https://mohmaedeslam00116.github.io/waypower-docs/blog/building-these-docs-with-waypower).

## Develop

```bash
npm install
npm start        # local dev server at http://localhost:3000/waypower-docs/
```

## Build

```bash
npm run build    # static output in build/
npm run serve    # preview the production build
```

## Deploy

Deploys to GitHub Pages from the `gh-pages` branch:

```bash
cmd /c "set GIT_USER=mohmaedeslam00116&& npm run deploy"
```

or via CI on push to `main`.

## Structure

| Path | What lives there |
|------|------------------|
| `docs/` | Intro, getting started, pipeline, and the 13-skill reference |
| `blog/` | Release notes and the dogfooding story |
| `src/pages/` | Landing page |
| `src/css/custom.css` | The waypower theme (OKLCH palette, Infima overrides) |
