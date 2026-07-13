import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="Education" title="Where I studied" />
      <div className="space-y-4">
        {education.map((item, i) => (
          <FadeIn key={item.school} delay={i * 0.08}>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold">{item.school}</h3>
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                </div>
                <p className="mb-2 text-accent-brand">{item.degree}</p>
                <p className="text-sm text-muted-foreground">{item.details}</p>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
