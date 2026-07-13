import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { GithubIcon } from "@/components/icons";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile, projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="Projects" title="Things I've built" />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 0.08}>
            <a href={project.github} target="_blank" rel="noreferrer" className="group block h-full">
              <Card className="h-full transition-colors group-hover:border-accent-brand/50">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-base">
                    {project.title}
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-brand" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2} className="mt-8 text-center">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent-brand"
        >
          <GithubIcon className="size-4" />
          See everything on GitHub
        </a>
      </FadeIn>
    </section>
  );
}
