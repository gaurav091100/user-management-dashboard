# User Management Dashboard

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-Private-lightgrey)

A modern, responsive admin dashboard for managing users. Built with React and TypeScript, it connects to the [DummyJSON](https://dummyjson.com) Users API to list, search, filter, create, update, and delete users—with a dedicated detail view, dark mode, and polished loading and error states.

---

## Features

- **User listing** — Paginated table (10 users per page) with avatar, contact info, company, and role badges
- **Search & filters** — Search by query; filter by gender or role; sort by name or age (ascending/descending)
- **Full CRUD** — Add users via modal form; edit existing users; delete with confirmation dialog
- **User details** — Dedicated profile page with address, company, and additional information
- **Dark / light mode** — Theme toggle in header with `localStorage` persistence
- **Form validation** — Client-side validation for required fields
- **Loading UX** — Table and detail-page skeleton loaders during fetch
- **Error handling** — Reusable error screen with retry; Axios-aware error messages for mutations
- **404 page** — Catch-all route with link back to the dashboard
- **Responsive layout** — Mobile-first grids, flexible headers, and horizontal scroll on tables

---

## Tech Stack

| Category | Technology |
|----------|------------|
| UI library | [React](https://react.dev/) 19 |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite](https://vite.dev/) 8 |
| Routing | [React Router DOM](https://reactrouter.com/) 7 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 3 + PostCSS + Autoprefixer |
| HTTP client | [Axios](https://axios-http.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Linting | ESLint 10 + TypeScript ESLint + React Hooks plugin |
| API | [DummyJSON](https://dummyjson.com/docs/users) Users API |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (20+ recommended)
- npm (or yarn / pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/gaurav091100/user-management-dashboard.git
cd user-management-dashboard

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the project root (see `.env.example`):

### Available Scripts

```bash
# Development
npm run dev

# Production build
npm run build
npm run preview
```

---

**Patterns:** Presentational components accept typed props; business logic lives in hooks and pages. Shared utilities handle validation, sorting, error messages, and role chip styling.

---

## Future Improvements

- [ ] Debounced search input to reduce API calls
- [ ] Toast notifications instead of `alert()` for mutation errors
- [ ] React Query or SWR for caching, deduplication, and background refetch
- [ ] Accessibility audit (ARIA labels, focus trap in modals, keyboard nav)
- [ ] Optimistic updates and rollback on failed mutations

