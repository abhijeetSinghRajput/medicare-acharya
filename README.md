# Medicare Acharya

Full-stack app with React (Vite + Tailwind) frontend and Express + MongoDB backend.

## Setup

Install dependencies:

```bash
npm run setup
cd ./frontend
npm run dev
```

## Structure

```
medicare-acharya/
├─ backend/       # Express server (ES modules)
│  ├─ index.js    # App entry
│  ├─ db.js       # Mongoose connection
│  ├─ controllers/ models/ routes/ services/
│  └─ package.json
├─ frontend/      # React app (Vite)
│  ├─ index.html
│  ├─ src/ (App.jsx, main.jsx, components/, pages/)
│  ├─ public/
│  ├─ tailwind.config.js
│  ├─ vite.config.js
│  └─ package.json
└─ package.json   # Root metadata
```

## Tech

- Frontend: React 19, Vite 7, Tailwind 3, Radix UI, Framer Motion, Zustand, React Router 7
- Backend: Node.js, Express 5, Mongoose 8

## Prerequisites

- Node.js 18+
- MongoDB (local or cloud)

Create `backend/.env`:

```
PORT=5000
DB_URI=mongodb://localhost:27017/medicare
JWT_SECRET=change-me
```

Note: `connectDB()` exists but is commented in `backend/index.js`. Uncomment when DB is ready.

## Run

Backend (nodemon):

```bash
cd backend
npm run dev
```

Frontend (Vite):

```bash
cd frontend
npm run dev
```

- Frontend: http://localhost:5173
- Backend:  http://localhost:5000

## Build (frontend)

```bash
cd frontend
npm run build
npm run preview
```

## Scripts

- Backend: `npm run dev`
- Frontend: `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`

## Routes (frontend)

Defined in `frontend/src/App.jsx`:
- `/` (Homepage)
- `/doctor/:doctorId`
- `/admin` (layout)
  - `/admin` (dashboard)
  - `/admin/apointments`
  - `/admin/users`
  - `/admin/customization`

## Backend

- `GET /` returns `{ message: "Hello from server" }`
- DB connection in `backend/db.js` using `DB_URI`

## Troubleshooting

- If API calls fail in dev, verify ports and CORS.
- If MongoDB fails, check `DB_URI` and enable `connectDB()`.

---

© Medicare Acharya
