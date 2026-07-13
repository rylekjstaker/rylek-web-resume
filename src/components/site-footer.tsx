import { profile } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 px-6 py-8 text-center text-sm text-muted-foreground">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js,
        Tailwind CSS, and shadcn/ui.
      </p>
    </footer>
  );
}
