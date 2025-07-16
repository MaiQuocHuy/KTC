This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Authentication

This project uses NextAuth.js for authentication with the following features:

### Available Authentication Methods

1. **Email/Password (Credentials)**

   - Use any email and password combination for demo purposes
   - In production, this should validate against a real database

2. **GitHub OAuth** (optional)

   - Configure `GITHUB_ID` and `GITHUB_SECRET` in `.env.local`
   - Register your app at https://github.com/settings/applications/new

3. **Google OAuth** (optional)
   - Configure `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in `.env.local`
   - Register your app at https://console.cloud.google.com/

### Environment Variables

Create a `.env.local` file with:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-in-production

# Optional OAuth providers
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### Protected Routes

- `/dashboard` - Requires authentication
- `/login` - Public route with authentication forms
- Other routes are publicly accessible

### Features

- **Dashboard Layout**: Professional sidebar navigation with task management
- **Task Management**: Create, view, and manage tasks using existing API
- **Multiple Authentication**: Email/password, GitHub, and Google OAuth
- **Protected Routes**: Middleware-level and component-level protection
- **Session Management**: Automatic session handling with NextAuth
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [NextAuth.js Documentation](https://next-auth.js.org/) - learn about authentication.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/    # NextAuth API routes
│   │   └── tasks/                 # Task management API
│   ├── dashboard/                 # Protected dashboard pages
│   ├── login/                     # Authentication page
│   └── layout.tsx                 # Root layout with providers
├── components/
│   ├── Navigation.tsx             # Main navigation
│   ├── ProtectedRoute.tsx         # Route protection component
│   └── TaskList.tsx               # Task display component
├── contexts/
│   └── AuthContext.tsx            # Authentication context
├── lib/
│   ├── api.ts                     # API client functions
│   └── auth.ts                    # NextAuth configuration
├── types/
│   ├── next-auth.d.ts             # NextAuth type declarations
│   └── task.ts                    # Task type definitions
└── middleware.ts                  # Route protection middleware
```
