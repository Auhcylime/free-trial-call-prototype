# Free Vet Call Prototype

Interactive prototype for the free vet call onboarding flow — both **web** (desktop signup) and **app** (mobile experience).

This is a **design reference**, not production code. No backend, no real auth/payments.

## Quick Start

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + Framer Motion
- Radix UI (accordion)
- DotLottie (animations)

## Two Surfaces

### Web Flow (4 screens)
Signup → Plan Page → Card Verification → Success

### App Flow (10 screens)
Login → Permissions → Cat Profile → Tutorial → Pre-Call Dashboard → Number Select → Post-Call Summary → Vet Notes → Rewards → Profile

Use the **Extended toggle** at the bottom to switch between pre-call and post-call screen variants.

## Screen Registry

All app screens are defined in `src/app/AppPrototype.tsx`:

| Screen | Description |
|--------|-------------|
| `login` | Account login |
| `permissions` | App permissions request |
| `catprofile` | Pet profile creation |
| `prep` | Tutorial/onboarding |
| `precall` | Pre-call dashboard |
| `dashboard` | Post-call dashboard |
| `postcall` | Post-call summary (variant 1) |
| `postcall2` | Post-call summary (variant 2) |
| `numberselect` | Phone number selection |
| `vetnotes` | Vet case notes |

## Key Components

- **`PhoneFrame`** — iPhone frame container (dark/light theme)
- **`AddCatOverlay`** — Shared 2-step form (name/DOB/photo → breed selection)
- **`MochiMessage`** — Chat bubble for Mochi AI responses
- **`SwipeableCatRow`** — Horizontal carousel of pets
- **Case notes hero** — User-level Airvet notes feed (not filtered by Meow cat profile)

## Build

```bash
npm run build    # Type-check + bundle → dist/
npm run preview  # Preview production build locally
```

Output in `dist/` is ready for static hosting (Vercel, Netlify, etc).
