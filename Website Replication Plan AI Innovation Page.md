# Website Replication Plan: AI Innovation Page

This plan covers rebuilding the layout, structure, and styling shown in the screenshots, using original copy and branding rather than copying the source site's text or logo.

## A Note on Copying

The layout, fonts, and colors can be reproduced freely. The text, logo, and branding should be original. The copy on the AI Innovation page reads like marketing material from another company (it names a third-party product), so reproducing it verbatim could create legal problems. Original copy is also better for SEO.

## What the Screenshots Show

- **Header:** logo at left, a horizontal nav of six items (Home, My Admission, Overseas Investment, AI Innovation, Risk Council & Advisory, Contact) in small bold uppercase navy sans-serif, apparently Raleway, separated by thin vertical dividers, with a soft shadow under the bar.
- **Hero:** a large bold serif H1 in dark gray.
- **Tab row:** four text tabs (LLM evaluation, Data labeling & annotation, LLM fine-tuning, RAG optimization) with a magenta underline running beneath them.
- **Content sections:** a large bold black Raleway H2 followed by a narrow (about 430px) light-gray paragraph, repeated four times with generous vertical spacing.
- **Footer:** a full-width light gray bar, right-aligned, with an envelope icon plus contact email and a copyright icon plus legal line.
- **Wix banner:** the "Built on Wix" bar only appears on Wix's free plan and can be ignored.

## Implementation Plan

### 1. Decide the platform

The quickest route is to build directly in Wix, since the original is a Wix site. Alternatively, use plain HTML/CSS (or Next.js/Astro) for full control and free hosting on Netlify or Vercel. For a six-page brochure site, plain HTML/CSS is plenty.

### 2. Set up design tokens

- **Body and nav font:** Raleway (Google Fonts, free)
- **Hero heading font:** a bold high-contrast serif such as Fraunces or DM Serif Display
- **Colors:** navy for nav text (about #1B3A57), near-black for H2s, dark gray for the H1, mid-gray (about #888) for paragraphs, magenta accent (about #D6177F) for the tab underline, light gray (about #BDBDBD) for the footer
- **Layout:** content max-width of about 1100px, left-aligned with fixed side padding

### 3. Build the shared shell

- Sticky header with logo, the six nav links, and dividers (border-left on each item except the first)
- Footer component with your own contact email and copyright
- Responsive nav with a hamburger menu under about 768px

### 4. Build the AI Innovation page

- H1 hero
- Tab component that scrolls to or switches between the four sections, with an active-state underline
- Four repeated section blocks (H2 plus a short paragraph, max-width about 430px)

### 5. Create the other five pages

Home, My Admission, Overseas Investment, Risk Council & Advisory, and Contact all use the same shell. You will need to supply their content, since the screenshots only show one page.

### 6. Write your own content and branding

Draft original headlines and paragraphs for each service, and use your own logo and company name.

### 7. QA and launch

Test on mobile and tablet, check contrast and alt text, add meta tags, then deploy and connect your domain.

## Next Steps

- Choose a platform (Wix or plain HTML/CSS).
- Provide your company name, logo, and what each of the four services should say.
- Optionally, have a working HTML/CSS version of the AI Innovation page built with this layout and placeholder copy to replace.
