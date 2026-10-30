# Local Street Barber

Prototype workspace for a barbershop customer and operations app. The product scope is still under discovery; see [the audit and product plan](docs/plan/audit-and-product-plan.md).

## Project layout

```text
backend/   Express + TypeScript API scaffold
frontend/  React + TypeScript + Vite app
docs/plan/ Product audit, discovery questions, and proposed roadmap
```

## Requirements

- Node.js 20.19+ (or 22.12+)
- npm

## Run locally

Open two terminals from the repository root.

```powershell
cd frontend
npm install
npm run dev
```

```powershell
cd backend
npm install
Copy-Item .env.example .env
npm run dev
```

The Vite development server runs at `http://localhost:5173`. The API health endpoint is `http://localhost:3001/api/health`.

The API is only a scaffold at this stage. Supabase credentials, database schema, authentication, booking, and queue behavior have not been connected yet. Keep real secrets in local environment files and out of Git.
