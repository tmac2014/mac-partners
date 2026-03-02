import ScrollReveal from "./ScrollReveal";

const tiers = [
  {
    name: "MAC Partners",
    tagline: "Your Direct Team",
    description:
      "The tools and mentorship we built our agency on.",
    items: [
      "Professional SEO-optimized website",
      "AI-powered caller system",
      "MACPartners.io CRM",
      "Pre-built email & SMS automations",
      "Cross-selling strategy training",
      "GBP & SEO domination training",
      "Direct access to Tyler & Jessica",
    ],
    highlight: true,
  },
  {
    name: "Seven Figure Agency",
    tagline: "Upline Support",
    description:
      "Top-level training and mentorship from our upline.",
    items: [
      "Seven Figure University",
      "Dedicated agent support team",
      "Lead purchasing options",
      "VA support (discounted rates)",
      "Premier agent program",
    ],
    highlight: false,
  },
  {
    name: "Integrity",
    tagline: "National Platform",
    description:
      "Industry-leading tech, carriers, and resources.",
    items: [
      "IntegrityCONNECT platform",
      "MedicareCENTER",
      "Sunfire enrollment",
      "Connecture plan comparison",
      "CSG Medigap quoting",
      "Integrity Leads",
      "Top-level commissions",
      "E&O discounts up to 50%",
      "Exclusive carrier access & bonuses",
    ],
    highlight: false,
  },
];

export default function ThreeTierStack() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 glow-teal pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              The Full Picture
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-text-heading mb-4">
              Three Layers of Support No Other Upline Can Match
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-muted">
              You&apos;re not just getting one company behind you. You&apos;re
              getting three.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 100}>
              <div
                className={`rounded-2xl border p-8 h-full flex flex-col ${
                  tier.highlight
                    ? "border-primary/40 bg-bg-card shadow-[0_0_40px_rgba(46,196,165,0.08)]"
                    : "border-border bg-bg-card"
                } hover:border-border-hover transition-colors`}
              >
                {tier.highlight && (
                  <span className="inline-block self-start rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary mb-4">
                    Core
                  </span>
                )}
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-text-heading">
                  {tier.name}
                </h3>
                <p className="text-sm text-primary mb-2">{tier.tagline}</p>
                <p className="text-sm text-text-muted mb-6">
                  {tier.description}
                </p>
                <ul className="space-y-3 mt-auto">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
