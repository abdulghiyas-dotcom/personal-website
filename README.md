# Abdul Kamyar — Personal Website

Source for [abdulghiyas-dotcom.github.io/personal-website](https://abdulghiyas-dotcom.github.io/personal-website/), the bilingual (English / Italian) personal website and blog of Abdul Kamyar: founder of SheConnects and researcher in social innovation, innovation management, entrepreneurship, artificial intelligence and macroeconomics.

## How the site works

- Built with [Jekyll](https://jekyllrb.com/), which GitHub Pages runs automatically on every push to `main`. No build step on your side.
- **English** lives at `/`, **Italian** at `/it/`.
- Visitors arriving at `/` from Italy are redirected to `/it/`. Detection runs in the browser using a free IP-geolocation lookup (ipapi.co, falling back to ipwho.is, then to the browser language). A visitor who clicks the EN / IT switch has their choice remembered, and it always wins over detection.
- Light and dark themes, responsive layout, RSS feed at `/feed.xml`, sitemap, SEO and `hreflang` tags.

## Writing a blog post

1. Create a Markdown file in `_posts/en/` (English) or `_posts/it/` (Italian), named `YYYY-MM-DD-your-title.md`.
2. Start it with front matter:

   ```yaml
   ---
   title: "Your post title"
   description: "One sentence shown in the post list and under the title."
   tags: [AI, Entrepreneurship]
   ref: my-post          # optional, see below
   ---
   ```

3. Write the post in Markdown below the front matter. Put `<!--more-->` after the first paragraph if you want to control the excerpt.
4. Commit and push. The post appears at `/blog/YYYY/MM/DD/your-title/` (or `/it/blog/...` for Italian) within a minute or two.

**Translations.** To link an English post and its Italian version, give both files the same `ref` value. The site then shows a "Read this post in Italian / English" link at the top of each, and the EN / IT switch jumps straight to the translation. Posts without a matching `ref` are simply listed only in their own language.

**Images.** Put them in `assets/images/` and reference them as `![Caption]({{ "/assets/images/photo.jpg" | relative_url }})`.

The two welcome posts in `_posts/en/` and `_posts/it/` show the full format. Edit or delete them as you like.

## Editing the home page

The English home page is `index.html`; the Italian one is `it/index.html`. Navigation labels, footer text and blog UI strings for both languages live in `_data/strings.yml`.

To change the accent color, edit `--accent`, `--accent-strong`, `--accent-soft` and `--accent-ink` at the top of `css/style.css`.

## Local preview

Requires Ruby. Install once with `bundle install`, then:

```bash
bundle exec jekyll serve --livereload
```

Open <http://localhost:4000/personal-website/>.

## Moving to the root URL

If you rename the repository to `abdulghiyas-dotcom.github.io`, set `baseurl: ""` in `_config.yml` and the site will be served at <https://abdulghiyas-dotcom.github.io/>.

## Structure

```
_config.yml         Site settings, languages, post defaults
_data/strings.yml   UI text in English and Italian
_layouts/           default.html (frame, nav, geo-detection) and post.html
_includes/          post-list.html, date.html
_posts/en, _posts/it  Blog posts by language
index.html          English home page
it/index.html       Italian home page
blog/, it/blog/     Blog index pages
css/, js/, assets/  Styles, scripts, favicon
```
