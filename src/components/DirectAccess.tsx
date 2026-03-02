import ScrollReveal from "./ScrollReveal";

const teamMembers = [
  {
    name: "Tyler McDaniel",
    role: "Managing Partner, MAC Insurance",
    bio: "Built the agency\u2019s tech stack, marketing systems, and growth strategies from the ground up.",
    initials: "TM",
  },
  {
    name: "Jessica McDaniel",
    role: "Partner, MAC Insurance",
    bio: "Hands-on with agent development, sales strategy, and the day-to-day systems that drive results.",
    initials: "JM",
  },
];

export default function DirectAccess() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 glow-teal pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            What Makes Us Different
          </span>
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-text-heading mb-4">
            Direct Access to Proven Producers
          </h2>
          <p className="max-w-2xl text-lg text-text-muted mb-16">
            Most uplines hand you a contract and disappear. We work alongside
            you — teaching you exactly how we built our agency.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - text */}
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-bg-card p-8 sm:p-10">
              <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-text-heading mb-4">
                Not just an upline. A real partnership.
              </h3>
              <p className="text-text-muted leading-relaxed">
                When you join MAC Partners, you don&apos;t get shuffled to a
                support team or stuck in a Facebook group hoping someone answers
                your question. You work directly with Tyler and Jessica — the
                same people running the agency, closing deals, and testing new
                strategies every single day. What works for us, we teach to you.
              </p>
            </div>
          </ScrollReveal>

          {/* Right - team cards */}
          <div className="space-y-6">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <div className="rounded-2xl border border-border bg-bg-card p-6 flex gap-5 items-start hover:border-border-hover transition-colors">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-outfit)] text-lg font-bold text-primary">
                      {member.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-text-heading">
                      {member.name}
                    </h4>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
