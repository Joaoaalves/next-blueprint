This is a [Next.js](https://nextjs.org/) blueprint code.

## Getting Started

First, add a .env.local file with this variables:

```.env
AUTH0_AUTH_DOMAIN=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
AUTH0_AUDIENCE=
AUTH0_GRANT_TYPE=
AWS_API_URL=
ANALYTICS_APP_ID=
ON_PROD=false
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.url

You can start editing the page by modifying `pages/index.js`. The page
auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are
treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead
of React pages.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
[`TailwindCSS`](https://tailwindcss.com/) as a utility-first CSS framework.