# Kashimari Youth Society — Website

A fully responsive, production-ready website for a youth-led social welfare
organization. Built with Next.js 15, React 19, TypeScript, Tailwind CSS,
Framer Motion, and Lucide icons.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

> Requires Node.js 18.18+ (Node 20+ recommended).

---

## Editing content — read this first

**All text, images, and data live in one file:**

```
src/data/site.ts
```

You never need to touch the components to update content. Open that file and
change the values. Each section is a clearly-labelled export:

| What you want to change        | Export to edit in `site.ts` |
| ------------------------------ | --------------------------- |
| Organization name, email, phone, address | `org`            |
| Navigation links               | `nav`                       |
| Hero headline / image          | `hero`                      |
| Who we are / vision / mission  | `about`                     |
| Statistics counters            | `stats`                     |
| Activities cards               | `activities`                |
| Projects                       | `projects`                  |
| Gallery photos                 | `gallery`                   |
| Leadership team                | `team`                      |
| Achievements timeline          | `achievements`              |
| Upcoming events                | `events`                    |
| Testimonials                   | `testimonials`              |
| Blog posts                     | `blog`                      |
| Donation impact cards          | `donationImpact`            |
| Social media links             | `socials`                   |

### Replacing images

Images currently use Unsplash and picsum.photos placeholder URLs. To use your
own photos:

1. Drop your image files into the `public/images/` folder.
2. In `site.ts`, change the URL to a local path, e.g.:
   ```ts
   image: "/images/our-hero-photo.jpg",
   ```

If you add a NEW remote image host, whitelist it in `next.config.ts` under
`images.remotePatterns`.

---

## Changing colors / branding

The full brand palette is defined in `tailwind.config.ts` under
`theme.extend.colors`:

```
ink     #0A1A2F   deep blue-black background anchor
deep    #0F2A4A   deep blue
royal   #1B4D8C   primary blue
sky     #3B82C4   accent blue
leaf    #1E8A5B   primary green
mint    #34B27B   light green
ember   #F2731C   orange CTA  <-- call-to-action buttons
sand    #F6F8FA   light gray surface
```

Change a hex here and it updates everywhere. Dark/light theme tokens (the
page background, card, border, muted text colors) live in
`src/app/globals.css` under `:root` and `.dark`.

---

## Fonts

The site pairs **Fraunces** (display serif) with **Sora** (body sans),
loaded via `next/font/google` in `src/app/layout.tsx`. They are fetched and
self-hosted automatically at build time — no extra setup. To swap fonts,
change the imports at the top of `layout.tsx`.

---

## Project structure

```
src/
  app/
    layout.tsx        Root layout: fonts, SEO metadata, theme bootstrap
    page.tsx          Assembles all sections in order
    globals.css       Theme tokens, base styles, accessibility
    robots.ts         SEO robots.txt
    sitemap.ts        SEO sitemap
  components/
    Navbar.tsx        Sticky nav, active highlighting, mobile menu
    sections/         One file per page section (Hero, About, ... Footer)
    ui/               Reusable bits: Section, Reveal, Counter, ThemeToggle,
                      BackToTop, Loader, useActiveSection
  data/
    site.ts           ← ALL CONTENT LIVES HERE
public/
  favicon.svg         Brand mark
  images/             Put your own images here
```

---

## Features included

- Fully responsive (mobile → desktop)
- Dark / light mode with saved preference
- Sticky navbar with active-section highlighting + mobile menu
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Animated statistics counters
- Photo gallery with lightbox
- Testimonials slider
- Volunteer + contact forms with validation
- Back-to-top button, loading animation, smooth scrolling
- SEO metadata, Open Graph tags, robots.txt, sitemap, favicon
- Lazy-loaded, optimized images via `next/image`
- Accessible: keyboard focus states, semantic HTML, alt text

---

## Deploying

This is a standard Next.js app. Easiest path is **Vercel**:

1. Push the project to a GitHub repo.
2. Import it at vercel.com — it auto-detects Next.js.
3. Deploy. Done.

It also runs on any Node host (DigitalOcean, Hostinger VPS, etc.):

```bash
npm run build
npm run start   # serves on port 3000; put Nginx in front
```

---

## Notes

- The Google Map in the Contact section is a styled placeholder. To embed a
  real map, replace the placeholder `div` in `src/components/sections/Contact.tsx`
  with a Google Maps `<iframe>` embed.
- Payment methods in the Donation section are display-only labels. No payment
  gateway is wired up, by design.
- Forms currently validate and show a success message client-side. To actually
  receive submissions, connect the `submit` handlers to your API or a service
  like Formspree.
