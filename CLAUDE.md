# CLAUDE.md

This file provides context and guidance for AI assistants (Claude and others) working in this repository.

## Repository Overview

**daehwann.github.io** is a personal GitHub Pages static website hosted at [www.daehwan.dev](https://www.daehwan.dev). It serves as:

- A personal homepage built with Jekyll
- A collection of marketing/analytics technology demonstration pages
- Sample apps for IBM Watson Content Hub integration
- A revenue dashboard prototype

**No build system, package manager, or test framework** is configured — this is a plain static site deployed automatically by GitHub Pages.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Static site generator | Jekyll 3.7.4 |
| Jekyll theme | jekyll-theme-modernist |
| JavaScript framework | AngularJS 1.5.8 (wch/ only) |
| CSS | Bootstrap 4, custom CSS |
| Charts | Chart.js (revenue-dashboard) |
| CDN dependencies | jQuery, Bootstrap, Chart.js (all loaded from CDN) |
| Hosting | GitHub Pages (auto-deploy from `master`) |
| Custom domain | www.daehwan.dev (via CNAME) |

## Directory Structure

```
/
├── _config.yml              # Jekyll config (theme + title only)
├── CNAME                    # Custom domain: www.daehwan.dev
├── robots.txt               # SEO — allows all crawlers
├── index.html               # Homepage (Jekyll layout, Google AdSense)
├── SUMMARY.md               # GitBook-style table of contents
├── mm-inject-mmapi.js       # Maxymiser/Adobe Target personalization script
├── revenue-dashboard.html   # Revenue dashboard (Chart.js, Korean restaurant data)
├── revenue-dashboard        # Duplicate of revenue-dashboard.html
├── naverdac0c008d8f64166c45a6a35532c407e.html  # Naver search verification
├── abc/
│   └── release-notes.md     # Sample release notes content
├── aatest/
│   └── index.html           # A/B test page
├── ensighten/               # Ensighten analytics tracking samples
│   ├── CgsCtglCnts0100.html
│   └── sample.html
├── rtptest/
│   └── index.html           # Realtime Personalization (RTP) test page
└── wch/                     # IBM Watson Content Hub magazine demo (AngularJS SPA)
    ├── app.js               # AngularJS app — components, ui-router, WCH API calls
    ├── index.html           # Magazine UI shell
    ├── styles.css           # Bootstrap 4 + custom animations
    └── images/
        └── bg.jpg           # Background image
```

## Key Files

### `_config.yml`
Minimal Jekyll configuration:
```yaml
theme: jekyll-theme-modernist
title: Daehwan
```

### `wch/app.js`
The most complex JS file in the repo (286 lines). It is an AngularJS 1.5.8 single-page application with:
- **ui-router** for client-side routing
- Three components: `taxonomyNavigation`, `articleCards`, `articleDetails`
- IBM Watson Content Hub REST API integration for fetching article taxonomy and content items

### `revenue-dashboard.html`
Standalone HTML page using **Chart.js** to visualize revenue data for "또바기삼계탕" (a Korean restaurant). Contains inline JS with hardcoded data arrays.

### `index.html`
Jekyll-rendered homepage using the `modernist` theme layout, with embedded Google AdSense tags.

## Development Workflow

### Local Development (Jekyll)

```bash
# Install dependencies (first time)
gem install bundler jekyll

# Serve site locally with live reload
bundle exec jekyll serve

# Or without bundler
jekyll serve
```

The site is served at `http://localhost:4000` by default.

### Deployment

Deployment is fully automatic:
1. Push changes to `master` branch
2. GitHub Pages detects the push and runs Jekyll build
3. Site goes live at www.daehwan.dev within ~1 minute

**No manual build step is required.**

### Branch Conventions

- `master` — production branch; deploys automatically to GitHub Pages
- `claude/<description>-<id>` — AI-generated feature branches (e.g., `claude/add-claude-documentation-Py5a9`)

## Conventions & Guidelines

### HTML Pages
- Pages are plain HTML5 with no build pipeline
- External dependencies (jQuery, Bootstrap, Chart.js, AngularJS) are loaded from public CDNs
- No module bundler; scripts are included via `<script>` tags

### Jekyll Pages
- Use Jekyll front matter (`---` blocks) when the page needs Jekyll layout/templating
- The `modernist` theme provides the base layout; override with `layout: default` or no layout as needed

### AngularJS (`wch/` directory)
- Follow AngularJS 1.x component syntax (`.component()`, not `.directive()`)
- Keep API base URLs in a constant or at the top of `app.js`
- The WCH API endpoint pattern: `GET /delivery/v1/content/{id}` and `/delivery/v1/search`

### Inline Scripts & Marketing Tags
- Marketing/analytics tags (Ensighten, Maxymiser, RTP) are intentional and site-specific
- Do not remove or modify tracking tags unless explicitly requested

### No Linting or Formatting Enforcement
- No ESLint, Prettier, Stylelint, or similar tools are configured
- Follow the style already present in each file when making edits

## Third-Party Integrations

| Service | File(s) | Purpose |
|---------|---------|---------|
| Google AdSense | `index.html` | Display ads |
| Maxymiser (Adobe Target) | `mm-inject-mmapi.js` | A/B testing / personalization |
| Adobe DTM (satellite) | `wch/index.html` | Tag management / data layer |
| Ensighten | `ensighten/` | Conversion tracking pixels |
| RTP (Realtime Personalization) | `rtptest/index.html` | Personalization testing |
| Naver verification | `naverdac0c008d8f64166c45a6a35532c407e.html` | Korean search engine SEO |

## Testing

There is **no automated test suite**. The `aatest/` and `rtptest/` directories are content pages for manual testing of marketing tools, not software tests.

Manual verification steps after making changes:
1. Run Jekyll locally (`jekyll serve`) and open `http://localhost:4000`
2. Verify AngularJS app in `wch/` by opening `wch/index.html` in a browser (requires a running WCH backend or mocked responses)
3. Check `revenue-dashboard.html` renders charts correctly by opening it directly in a browser

## Common Tasks

### Add a New Static Page
1. Create a new `.html` file in the repo root or a subdirectory
2. Add Jekyll front matter if you need the site layout, otherwise plain HTML works
3. Commit and push to `master`; GitHub Pages deploys automatically

### Update Jekyll Theme
Edit `_config.yml`:
```yaml
theme: jekyll-theme-<theme-name>
```
Only [GitHub Pages–supported themes](https://pages.github.com/themes/) work without a custom Gemfile.

### Modify the WCH AngularJS App
- All logic lives in `wch/app.js`
- Styles are in `wch/styles.css`
- The HTML template is `wch/index.html`
- Test by serving the directory locally (e.g., `python3 -m http.server` inside `wch/`)

### Update Revenue Dashboard
- All chart data is hardcoded inline in `revenue-dashboard.html`
- Chart.js is loaded from CDN — no npm install needed
- Update the data arrays directly in the `<script>` block of the file
