import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "1",
    title: "Apply",
    text: "Fill out a quick application and schedule a call with Tyler or Jessica to see if we\u2019re a good fit.",
  },
  {
    number: "2",
    title: "Get Contracted",
    text: "Complete your required carrier contracts through MAC. We guide you through every step.",
  },
  {
    number: "3",
    title: "Get Access",
    text: "Once contracted, you\u2019re plugged into the full MAC Partners ecosystem \u2014 CRM, website, AI caller, training, and direct mentorship.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Getting Started
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-text-heading">
              How It Works
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 100}>
              <div className="relative rounded-2xl border border-border bg-bg-card p-8 h-full hover:border-border-hover transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <span className="font-[family-name:var(--font-outfit)] text-sm font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text-heading mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {step.text}
                </p>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-3 w-6 border-t border-dashed border-primary/30" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
