import { FadeIn } from "@/components/fade-in";

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <FadeIn className="mb-12">
      <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent-brand">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </FadeIn>
  );
}
