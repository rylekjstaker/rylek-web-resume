import { SectionHeading } from "@/components/sections/section-heading";
import { Timeline } from "@/components/sections/timeline";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />
      <Timeline items={experience} />
    </section>
  );
}
