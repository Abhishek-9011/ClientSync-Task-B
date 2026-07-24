# ClinetSync — Lead Management SaaS Frontend

A modern, premium SaaS frontend for **ClinetSync**, built with React (JavaScript), Vite, Tailwind CSS v4, and shadcn/ui-style components. Pairs with your existing Node.js/Express/MongoDB backend.

## Tech Stack

- React 19 (JavaScript only, no TypeScript)
- Vite
- React Router DOM
- Axios
- Tailwind CSS v4 (`@tailwindcss/vite`)
- shadcn/ui-style components built on Radix primitives (Button, Card, Input, Select, Table, Badge, Textarea, Dialog, Label)
- Lucide React icons
- Self-hosted fonts via `@fontsource` (Sora for display, Inter for body)

## Getting Started

```bash
npm install
cp .env.example .env   # then set VITE_API_BASE_URL to your backend URL
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
├── assets/
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── sections/       # Hero, Features, WhyChoose, LeadForm, Testimonials, CTA
│   └── ui/              # shadcn-style primitives (button, card, input, select, table, badge, textarea, dialog, label)
├── pages/
│   ├── Home.jsx          # Landing page
│   └── Admin.jsx          # Admin dashboard at /admin
├── services/
│   ├── api.js            # Centralized Axios instance
│   └── leads.js           # Lead API calls (create, list, update)
├── hooks/
│   └── useLeads.js         # Admin data-fetching hook (search, status updates)
├── utils/
│   └── cn.js                # Tailwind class-merging helper
├── App.jsx
├── main.jsx
└── index.css                 # Design tokens (colors, type, shadows) + Tailwind
```

## API Integration

The frontend expects these backend endpoints (adjust `VITE_API_BASE_URL` in `.env` to match your Express server):

| Method | Endpoint              | Purpose                      |
|--------|------------------------|-------------------------------|
| POST   | `/api/leads`            | Create a new lead             |
| GET    | `/api/leads`             | List all leads                |
| GET    | `/api/leads?search=`     | Search leads by name/email    |
| PATCH  | `/api/leads/:id`         | Update a lead (e.g. status)   |

A lead object is expected to look like:

```json
{
  "_id": "...",
  "name": "Rohan Mehta",
  "email": "rohan@example.com",
  "budget": "10k-50k",
  "message": "Interested in the CRM plan.",
  "status": "New",
  "createdAt": "2026-07-01T10:00:00.000Z"
}
```

`GET /api/leads` can return either a raw array or `{ "leads": [...] }` — both are handled.

## Pages

- **`/`** — Landing page: hero with dashboard mockup, features, why-choose section, lead capture form, testimonials, CTA, footer.
- **`/admin`** — Admin dashboard: summary cards (Total / New / Contacted / Closed), searchable leads table, inline status updates via a Select, and a details dialog per lead.

## Notes

- `lucide-react` is pinned to `0.383.0` because newer releases (1.x) removed brand icons (Twitter, LinkedIn, Instagram, GitHub) used in the footer.
- Fonts are bundled locally via `@fontsource` rather than loaded from Google Fonts CDN, so the app works fully offline.
- All UI primitives are hand-built (not pulled from the shadcn CLI/registry) so the project has no external registry dependency — they follow the same API and styling conventions as shadcn/ui.
