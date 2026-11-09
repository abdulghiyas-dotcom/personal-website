# Abdul Kamyar — Personal Website

Source for [abdulghiyas-dotcom.github.io/personal-website](https://abdulghiyas-dotcom.github.io/personal-website/), the personal academic and professional website of Abdul Kamyar: founder of SheConnects and researcher in social innovation, innovation management, entrepreneurship, artificial intelligence and macroeconomics.

## Stack

- Plain HTML, CSS and vanilla JavaScript. No build step, no framework.
- Hosted on GitHub Pages from the `main` branch.
- Light and dark themes (follows the system setting, with a manual toggle).
- Fully responsive, accessible navigation, reduced-motion friendly.

## Structure

```
index.html          Single-page site: hero, about, research, experience, education, awards, contact
css/style.css       Design tokens and all styles
js/main.js          Theme toggle, mobile menu, active nav link, reveal-on-scroll
assets/favicon.svg  Favicon
.nojekyll           Tells GitHub Pages to serve files as-is
```

## Editing content

All content lives in `index.html`. To add a publication, copy one `<li class="pub">` block in the Research section. To add a role, copy an `<article class="tl-item">` block in the Experience section.

To change the accent color, edit `--accent`, `--accent-strong`, `--accent-soft` and `--accent-ink` at the top of `css/style.css`.

## Local preview

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploying

Push to `main`. In the repository settings, under **Pages**, set the source to *Deploy from a branch*, branch `main`, folder `/ (root)`.
