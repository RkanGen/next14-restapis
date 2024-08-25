This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
# next14-restapis

Brief description .

## Table of Contents

- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)

![Blog api](https://github.com/user-attachments/assets/bd5e6e77-896f-473a-8e74-36879a8c47d8)

## Installation

1. Clone the repository:
## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
```
## Environment Setup

1. Create a `.env` file in the root directory of the project.

2. Add the following environment variables to the `.env` file:
- MONGODB_URI=your_mongodb_connection_string
* NEXTAUTH_SECRET=your_nextauth_secret
+ NEXTAUTH_URL=http://localhost:3000
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

The application will be available at `http://localhost:3000`.

## API Endpoints

- `GET /api/users`: Fetch all users|category|blog
- `POST /api/users`: Create a new user|category|blog
- `PATCH /api/users`: Update a user|category|blog
- `DELETE /api/users`: Delete a user|category|blog

Note: All endpoints require authentication.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
