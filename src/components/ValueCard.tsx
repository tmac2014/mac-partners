import ScrollReveal from "./ScrollReveal";

interface ValueCardProps {
  number: string;
  title: string;
  text: string;
  badge: string;
  features: string[];
  savings?: { othersCharge: string; youPay: string };
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ValueCard({
  number,
  title,
  text,
  badge,
  features,
  savings,
}: ValueCardProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="rounded-2xl border border-border bg-bg-card overflow-hidden">
            <div className="p-8 sm:p-10 lg:p-12">
              {/* Number badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6">
                <span className="font-[family-name:var(--font-outfit)] text-sm font-bold text-primary">
                  {number}
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold text-text-heading mb-4">
                {title}
              </h2>

              <p className="max-w-3xl text-text-muted leading-relaxed mb-8">
                {text}
              </p>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 border border-primary/20 px-4 py-2.5 mb-8">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-semibold text-primary">
                  {badge}
                </span>
              </div>

              {/* Features grid */}
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-text-muted">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Savings callout */}
              {savings && (
                <div className="rounded-xl border border-border bg-bg/50 p-6 max-w-md">
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-text-muted mb-1">
                        What others charge
                      </div>
                      <div className="font-[family-name:var(--font-outfit)] text-xl font-bold text-red-400 line-through">
                        {savings.othersCharge}
                      </div>
                    </div>
                    <div className="w-px h-12 bg-border" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-text-muted mb-1">
                        Your cost
                      </div>
                      <div className="font-[family-name:var(--font-outfit)] text-xl font-bold text-primary">
                        {savings.youPay}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
