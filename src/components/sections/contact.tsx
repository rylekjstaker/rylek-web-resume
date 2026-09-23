import { Mail } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <FadeIn>
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent-brand">
          Contact
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Open to part-time internships and entry-level roles in AI automation,
          business systems, and software development.
          The fastest way to reach me is email.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            nativeButton={false}
            render={<a href={`mailto:${profile.email}`} />}
          >
            <Mail className="mr-1.5 size-4" />
            {profile.email}
          </Button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-accent-brand"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-accent-brand"
          >
            <LinkedinIcon className="size-5" />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
