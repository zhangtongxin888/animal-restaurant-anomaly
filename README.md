# Animal Restaurant (Anomaly) Guide

Independent beginner guide and wiki for `animalrestaurantanomaly.wiki`.

The site leads with a first-shift tutorial, then continues through anomaly checks, progression, common mistakes, FAQs, and a transparent source record. Game-specific claims are limited to facts verified against the live Roblox listing, official game media, and current gameplay walkthroughs.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
npm test
npm run build:vercel
```

`npm test` builds the vinext worker and verifies the beginner-first homepage, internal guide routes, `robots.txt`, and `sitemap.xml`.

## Publishing model

- This repository is the only long-term source for the site.
- Sites is used only for design review.
- The production domain is hosted through Cloudflare or Vercel.
- Production DNS, Search Console, and sitemap submission are handled separately from source development.
