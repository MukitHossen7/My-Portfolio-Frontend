# My Portfolio

- This project is my **personal portfolio website** designed to showcase Mukit Hossen’s work, projects, and blogs. It includes both **public-facing pages** for visitors and a **private dashboard** for the portfolio owner to manage content securely.

---

## Live Link

```
https://mukit-hossen-portfolio.vercel.app/
```

## Features

- Public users can view all blogs and individual blog pages
- Blogs are dynamically generated using ISR with getStaticPaths + revalidate for efficient content fetching
- Public section displaying personal projects with thumbnail, live link, description, and key features
- Uses ISR (Incremental Static Regeneration) for dynamic content updates without rebuilding the entire site

- Private, owner-only dashboard for managing blogs and projects
- JWT-based authentication ensures secure login and access control
- Mobile-first and fully responsive across all devices

## Technologies Used

- **Frontend:**
- Next.js
- TypeScript
- Tailwind CSS
- **Backend:**
- Node.js
- Express.js
- PostgreSQL
- Prisma
- JWT (secure authentication)

## Installation & Setup

```
git clone https://github.com/MukitHossen7/My-Portfolio-Frontend.git
```

```
cd My-Portfolio-Frontend
```

```
npm install
```

Create a **.env.local** file and add:

```
NEXT_PUBLIC_BASE_API=http://localhost:5000/api/v1
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db
JWT_SECRET=your_jwt_secret
```

```
npm run dev
```

## Folder Structure

```bash
b5a7-portfolio/
├── app/
│   ├── modules/
│   │   ├── auth/
│   │   ├── blog/
│   │   ├── project/
│   │   └── user/
│   ├── routes/
│   └── services/
├── components/
│   ├── common/
│   ├── modules/
│   └── layouts/
├── pages/
│   ├── api/
│   ├── dashboard/
│   └── public/
├── prisma/
├── public/
├── styles/
└── package.json

```

## Author

- Developed by **Mukit Hossen**
- **FullStack Developer**

---

## Dependencies

- "jsonwebtoken": "^9.0.2",
- "next": "15.5.4",
- "next-auth": "^4.24.11",
- "next-themes": "^0.4.6",
- "ogl": "^1.0.11",
- "radix-ui": "^1.4.3",
- "react": "19.1.0",
- "react-dom": "19.1.0",
- "react-hook-form": "^7.63.0",
- "react-icons": "^5.5.0",
- "react-type-animation": "^3.2.0",
- "sonner": "^2.0.7",
- "tailwind-merge": "^3.3.1",
- "three": "^0.180.0",
- "zod": "^4.1.11"

## DevDependencies

- "@eslint/eslintrc": "^3",
- "@tailwindcss/postcss": "^4",
- "@types/jsonwebtoken": "^9.0.10",
- "@types/node": "^20",
- "@types/react": "^19",
- "@types/react-dom": "^19",
- "@types/three": "^0.180.0",
- "eslint": "^9",
- "eslint-config-next": "15.5.4",
- "tailwindcss": "^4",
- "tw-animate-css": "^1.4.0",
- "typescript": "^5"
