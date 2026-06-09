Project UI Design & Implementation Instructions

Goal

Create a premium modern UI using React, Tailwind, Framer Motion and shadcn/ui. Follow a clean Apple/Vercel-inspired aesthetic: minimal, spacious, highly readable, and fast with smooth micro-interactions.

Principles

- Clean aesthetic: lots of white/neutral space, subtle borders/shadows, restrained color palette.
- Responsive: mobile-first, breakpoints for sm/md/lg/xl.
- Smooth animations: use Framer Motion for entrance/exit and micro-interactions.
- Reusable components: small, focused, composable UI primitives.
- Accessible: semantic HTML, focus states, aria attributes, color contrast >= WCAG AA.
- Modern typography: system stack + refined web font (e.g., Inter or Commercial+), good font-sizing scale.
- Subtle hover effects: gentle scale, color/opacity shifts, smooth transitions.
- Uncluttered layouts: meaningful hierarchy, generous spacing, clear CTAs.

Suggested Architecture

- src/
  - components/  (atoms, molecules, layout primitives)
  - primitives/   (Button, Card, Input, Modal, Icon)
  - hooks/        (usePrefersReducedMotion, useTheme)
  - pages/        (Home, About, Services, Contact)
  - styles/       (tailwind overrides, theme tokens)

Design Tokens & Tailwind

- Use Tailwind for utility-first styling. Centralize color/spacing/typography tokens in `tailwind.config.js`.
- Provide CSS variables for runtime theming (light/dark).

Accessibility

- All interactive elements keyboard-focusable with visible focus rings.
- Use `aria-*` attributes for complex widgets and `role` where appropriate.
- Respect `prefers-reduced-motion` and provide `usePrefersReducedMotion` hook.

Animation Guidelines (Framer Motion)

- Entrance: subtle fade + translateY (e.g., y: 6 → 0, opacity 0 → 1).
- Hover: scale 1 → 1.02 and shadow/opacity tweak.
- Use shared motion variants for consistency.
- Disable or simplify animations when `prefers-reduced-motion` is enabled.

Component Guidance (reusable + accessible)

- `Button` (variants: primary, ghost, outline): support `as` prop, loading state, aria-label.
- `Card`: header, body, footer slots. Hover lift and subtle shadow.
- `Navbar` / `Layout`: responsive navigation, mobile collapse, accessible focus trap for mobile menu.
- `Form` primitives: labeled inputs, error states, helper text, accessible validation.

Typography

- Use a modern, highly-readable variable font (e.g., Inter Variable). Establish scale: 14/16/18/24/32/48.
- Use generous line-height and letter-spacing for headings.

Subtle Effects

- Use very light shadows and translucent backgrounds for depth.
- Use 1–2 accent colors for CTAs, otherwise monochrome palette.

Developer Setup (example commands)

1) Install Tailwind CSS (PostCSS) and initialize:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2) Install runtime libs:

```bash
npm install framer-motion clsx @radix-ui/react-icons @headlessui/react
```

3) shadcn/ui (scaffold components) — follow shadcn's installer/README:

```bash
npx shadcn-ui@latest init
# then run the component generator per their docs
```

Notes: adjust `npx` CLI usage per project conventions.

Tailwind config highlights

- Extend theme with custom colors, spacing, and fontFamily.
- Enable JIT mode if using older Tailwind versions.
- Add `safelist` for dynamic classnames if needed.

Developer Patterns

- Keep components small and compose them.
- Prefer props for behavior over hard-coded styles.
- Centralize variants (use `class-variance-authority` or `clsx` patterns).
- Include unit/UI tests for critical components.

Deliverables Checklist

- Design tokens in `tailwind.config.js`.
- Reusable primitive components (`Button`, `Input`, `Card`, `Modal`).
- Layout and responsive nav.
- Motion variants and `usePrefersReducedMotion` hook.
- Accessibility audit: keyboard nav, focus states, ARIA roles.

UX Hints

- Keep CTAs prominent but restrained.
- Use whitespace to group related content.
- Use meaningful microcopy for buttons and form fields.

## Implemented Changes & Current State (Updated June 2026)

### 1. Typography & Casing
- Updated all occurrences of the company brand name to **`Pro Constructions`** (using proper camel/cased notation with spaces).
- Styled brand text to use **`Century Gothic`** (`"Century Gothic", sans-serif`) in both the navbar and the home page hero heading.
- Increased the hero heading size to `101px` (a total 30% increase) and adjusted spacing/margins to bring it down slightly below the logo.

### 2. Logo Configuration
- **Browser Tab (Favicon)**: Replaced the default Vite favicon with the official golden brand logo (`public/logo.png`), which is automatically served at the root `/logo.png`.
- **Navbar**: Configured to display the official golden brand logo (`src/Images/logo.png`).
- **Hero Section**: Configured to render the new landing logo (`Logo for landing .jpeg` copied to [landing_logo.jpeg](file:///D:/agy_cli_ws/src/Images/landing_logo.jpeg)) centered above the title text at `420px` height.

### 3. Navigation & Route Adjustments
- Removed the **"Our Work"** page and its links from the navigation bar ([Navbar.jsx](file:///D:/agy_cli_ws/src/components/Navbar.jsx)) and the application routes ([App.jsx](file:///D:/agy_cli_ws/src/App.jsx)).
- Configured the **"Get in Touch"** button on the home page to navigate directly to the Contact page.

### 4. Contact Page Redesign
- Implemented a premium, responsive 3-column layout on the [Contact.jsx](file:///D:/agy_cli_ws/src/pages/Contact.jsx) page:
  - **Our Office**: Features the physical address in Shivamogga with clickable links and a "View on Google Maps" link that redirects to [maps.app.goo.gl/oXg2Y2HQwkEQewRt5](https://maps.app.goo.gl/oXg2Y2HQwkEQewRt5) in a new tab.
  - **Call & Email**: Contains phone links for Naveen.L (`+91-9611585497`) and Vijay.M (`+91-9632509455`), along with a direct `mailto:` link for `admin@proconstructionsandinteriors.com`.
  - **Connect Online**: Contains direct links to the website and Instagram (`@proconstructionss`).
- **Layout Adjustments**:
  - The cards utilize `alignItems: 'stretch'` so they always remain equal in height.
  - The internal padding was adjusted to `40px 20px` with slightly smaller font sizes for the long links to fit the content perfectly on all devices.
  - The container's max-width is set to `1280px` for optimal viewing on desktop displays.
- **Google Maps Integration**:
  - Embedded an interactive Google Maps iframe pointing to the exact coordinates (`13.9496667, 75.5626111`) with the label `Pro constructions and interiors`.

### 5. Repository Cleanup & Build
- Created a [.gitignore](file:///D:/agy_cli_ws/.gitignore) file to properly ignore `node_modules/` and the built `dist/` directory.
- Confirmed a successful production build with no warnings using `npm run build`.
- Local preview server running at **`http://localhost:4173/`**.

---

Last Updated: 2026-06-09
Author: Project UI guidelines (claude.md)

