import { FadeIn } from "@/components/fade-in";

type TimelineEntry = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="relative space-y-10 border-l border-border pl-8">
      {items.map((item, i) => (
        <FadeIn key={item.role} delay={i * 0.08} className="relative">
          <span className="absolute -left-[2.35rem] top-1.5 size-3 rounded-full bg-accent-brand ring-4 ring-background" />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-semibold">{item.role}</h3>
            <span className="text-sm text-muted-foreground">{item.period}</span>
          </div>
          <p className="mb-3 text-accent-brand">{item.org}</p>
          <ul className="list-disc space-y-1.5 pl-5 text-muted-foreground">
            {item.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
        </FadeIn>
      ))}
    </div>
  );
}
