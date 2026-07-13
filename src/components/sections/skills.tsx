import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="Skills" title="What I work with" />
      <div className="space-y-8">
        {skills.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.08}>
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
