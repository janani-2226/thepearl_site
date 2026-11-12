# The Pearl — Pearl Edu Ventures

React + Vite + Tailwind CSS site for The Pearl.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Pages

| Route | File |
|---|---|
| `/` | `src/pages/Home.jsx` (matches approved template) |
| `/brands` | `src/pages/Brands.jsx` |
| `/brands/:slug` | `src/pages/BrandDetail.jsx` — beehive, project-punch, smart3-tuitions, abacus-of-english, shyamraj |
| `/founders` | `src/pages/Founders.jsx` |
| `/team` | `src/pages/Team.jsx` |
| `/contact` | `src/pages/Contact.jsx` (`?type=careers` preselects faculty enquiry) |

## Editing content

All copy lives in two files — pages read from them:

- `src/data/site.js` — contact details, stats, founders, timeline, values, team
- `src/data/brands.js` — every brand's summary, programmes, audience, outcomes

Anything in `[square brackets]` is a placeholder to replace with real content.
Grey striped boxes (`.placeholder-img`) mark where photos go.

## Theme

Colours and fonts are in `tailwind.config.js` (navy, gold, mist, brand colours; Fraunces + Karla).

## Before launch

- Wire the contact form in `Contact.jsx` (`onSubmit`) to Formspree / EmailJS / your API.
- Replace the map placeholder with a Google Maps iframe.
- For hosting on Netlify/Vercel, add an SPA rewrite so `/brands/beehive` etc. load on refresh
  (`public/_redirects` for Netlify is already included).
