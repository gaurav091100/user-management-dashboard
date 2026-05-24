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

---

## Screenshots

### <img width="20" height="20" alt="9224277" src="https://github.com/user-attachments/assets/e11f10f4-cfdf-42b4-a9cc-8269b2760350" /> Mobile Screen and Dark Mode

---
<img width="440" height="794" alt="Screenshot 2026-05-24 170105" src="https://github.com/user-attachments/assets/6dca0f17-78dc-4469-82f1-95c30ca7cd06" />
<img width="442" height="784" alt="Screenshot 2026-05-24 170042" src="https://github.com/user-attachments/assets/1e6057b9-3296-4931-a98c-58c1175011a7" />
<img width="434" height="797" alt="Screenshot 2026-05-24 170030" src="https://github.com/user-attachments/assets/4ed7c592-8f4c-48dc-b979-a0e0f5f446f9" />
<img width="437" height="802" alt="Screenshot 2026-05-24 170012" src="https://github.com/user-attachments/assets/4648a1b0-6fc1-4e24-a831-a87b21ee5038" />

### <img width="20" height="20" alt="3553947" src="https://github.com/user-attachments/assets/f168de7d-b6ef-46c8-9fd7-7489ec6c85a3" /> Dekstop Screen and Light Mode

---
<img width="1596" height="904" alt="Screenshot 2026-05-24 170145" src="https://github.com/user-attachments/assets/e9324eff-ac03-454d-8bf2-68eec8e35b42" />
<img width="1891" height="890" alt="Screenshot 2026-05-24 165920" src="https://github.com/user-attachments/assets/cf1e13f2-16fa-43e9-8546-e717d661318b" />
<img width="1900" height="908" alt="Screenshot 2026-05-24 165910" src="https://github.com/user-attachments/assets/91c3cd0e-06c1-4eac-bf44-2aaca0d3dade" />
<img width="1892" height="898" alt="Screenshot 2026-05-24 165857" src="https://github.com/user-attachments/assets/8973efd4-42b6-49e5-a178-ad123b585aaf" />
<img width="1893" height="901" alt="Screenshot 2026-05-24 165839" src="https://github.com/user-attachments/assets/bc5ecb7a-3f75-4d38-8a42-62d941ab9a5a" />
<img width="1898" height="899" alt="Screenshot 2026-05-24 165818" src="https://github.com/user-attachments/assets/bffc9ec5-8c13-4a50-9e4e-4d9eece3f6ea" />
<img width="1901" height="904" alt="Screenshot 2026-05-24 165753" src="https://github.com/user-attachments/assets/54c2df35-963e-4d0d-8b9b-105867d19119" />

---

