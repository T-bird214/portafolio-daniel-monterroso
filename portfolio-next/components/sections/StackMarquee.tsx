import { Marquee } from "@/components/ui/marquee";
import { stack } from "@/data/portfolio";

export default function StackMarquee() {
  return (
    <section aria-labelledby="stack-title" className="border-border bg-card/40 border-y py-5">
      <h2 id="stack-title" className="sr-only">
        Herramientas con las que trabajo
      </h2>
      <p className="sr-only">{stack.join(", ")}.</p>
      <div
        aria-hidden
        className="relative [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
      >
        <Marquee pauseOnHover repeat={3} className="[--duration:45s] [--gap:2.5rem]">
          {stack.map((item) => (
            <span
              key={item}
              className="text-muted-foreground flex items-center gap-2.5 font-mono text-sm whitespace-nowrap"
            >
              <span className="bg-brand size-1.5 rounded-full" />
              {item}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
