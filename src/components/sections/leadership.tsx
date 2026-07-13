import { SectionHeading } from "@/components/sections/section-heading";
import { Timeline } from "@/components/sections/timeline";
import { leadership } from "@/lib/data";

export function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="Leadership & Service" title="Beyond the classroom" />
      <Timeline items={leadership} />
    </section>
  );
}
