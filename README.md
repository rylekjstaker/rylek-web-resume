# Rylek Staker — Portfolio & Resume

Personal portfolio site built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Acts as a living resume and links out to [GitHub](https://github.com/rylekjstaker).

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (Base UI primitives)
- [Framer Motion](https://www.framer.com/motion/) for scroll animations
- Deployed on [Vercel](https://vercel.com)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All site copy — name, experience, skills, projects, education, contact info — lives in one file: [`src/lib/data.ts`](src/lib/data.ts). Edit that file to update the site; no need to touch component code for content changes.

To swap the downloadable resume, replace `public/resume.pdf`.
