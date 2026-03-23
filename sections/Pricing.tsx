import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ExternalLink, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "For small businesses & startups",
    features: [
      "3-page custom website (Home, About, Contact)",
      "Responsive mobile design",
      "Basic SEO setup",
      "Contact form integration",
      "1 month free support",
      "SSL certificate included",
      "Basic analytics setup",
    ],
  },
  {
    name: "Professional",
    desc: "For growing companies",
    popular: true,
    features: [
      "Everything in Starter",
      "8-10 page custom website",
      "Custom UI/UX design",
      "Advanced SEO optimization",
      "CMS integration",
      "3 months free support",
      "E-commerce ready",
      "Social media integration",
      "Performance optimization",
    ],
  },
  {
    name: "Enterprise",
    desc: "For large organizations",
    features: [
      "Everything in Professional",
      "Unlimited pages",
      "Custom web/mobile app development",
      "API integrations",
      "Priority 24/7 support",
      "IT infrastructure setup",
      "Ongoing maintenance included",
      "Dedicated project manager",
    ],
  },
];

const addons = [
  { name: "Mobile App Development", desc: "Cross-platform iOS & Android app" },
  {
    name: "Computer Maintenance Plan",
    desc: "Monthly IT support & maintenance",
  },
  {
    name: "E-Commerce Integration",
    desc: "Online store with payment processing",
  },
  {
    name: "Cloud Hosting & Management",
    desc: "Managed hosting with 99.9% uptime",
  },
];

export default function Pricing() {
  return (
    <div className="pt-20">
      <header className="py-16 md:py-24 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Transparent Pricing</span> for Every
            Business
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your business. No hidden fees, no
            surprises. All prices include design, development, and launch.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border p-8 transition-all hover:shadow-md ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium text-primary-foreground bg-primary rounded-full px-4 py-1">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`text-2xl font-bold text-center mb-1 ${plan.popular ? "gradient-text" : ""}`}
                >
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm text-center mb-6">
                  {plan.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        size={16}
                        className="text-primary shrink-0 mt-0.5"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full gap-2"
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link href="/contact">
                    Get Started <ExternalLink size={12} />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-2">
            Available <span className="gradient-text">Add-ons</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Enhance your package with additional services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="bg-card rounded-xl border border-border p-6 flex items-start gap-4 hover:border-primary/50 transition-colors"
              >
                <CheckCircle2
                  size={20}
                  className="text-primary shrink-0 mt-0.5"
                />
                <div>
                  <h4 className="font-bold">{addon.name}</h4>
                  <p className="text-sm text-muted-foreground">{addon.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Need a Custom Quote?
          </h2>
          <p className="mb-8 text-foreground/80">
            Every business is unique. Let's discuss a solution tailored to your
            specific needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 gap-2"
          >
            <Link href="/contact">
              Get a Custom Quote <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
