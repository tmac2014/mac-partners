import ScrollReveal from "./ScrollReveal";

const audiences = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "New Agents",
    text: "Whether you\u2019re just getting started, we give you the tools and training most agents spend years figuring out on their own.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Established Agents",
    text: "Already producing? Plug into our systems and multiply what you\u2019re already doing.",
  },
];

export default function WhoThisIsFor() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Who This Is For
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-text-heading">
              Built for Agents Who Want More
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audiences.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="rounded-2xl border border-border bg-bg-card p-8 hover:border-border-hover transition-colors h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                  {item.icon}
                </div>
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text-heading mb-3">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
