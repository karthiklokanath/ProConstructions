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

If you want, I can:
- Scaffold a starter UI with Tailwind + Framer Motion + shadcn/ui components.
- Create `Button`, `Card`, and `Navbar` components as a starting kit.

---

Created on: 2026-05-12
Author: Project UI guidelines (claude.md)
