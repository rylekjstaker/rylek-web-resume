import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/sections/section-heading";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="About" title="Who I am" />
      <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
        {about.paragraphs.map((p, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <p>{p}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
