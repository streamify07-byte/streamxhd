import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, X, ArrowRight, Zap, Diamond, Server } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import type { Plan } from "@shared/schema";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const durationMap: Record<string, string> = {
  "1 Month": "Month",
  "3 Months": "3 Months",
  "6 Months": "6 Months",
  "12 Months": "12 Months",
};

const comparisonFeatures = [
  { name: "Live TV Channels", standard: "46,000+", premium: "46,000+", pro: "46,000+", ultimate: "46,000+" },
  { name: "Movies", standard: "Unlimited", premium: "Unlimited", pro: "Unlimited", ultimate: "Unlimited" },
  { name: "Web Series", standard: "Unlimited", premium: "Unlimited", pro: "Unlimited", ultimate: "Unlimited" },
  { name: "Video Quality", standard: "Full HD & 4K", premium: "Full HD & 4K", pro: "Full HD & 4K", ultimate: "Full HD & 4K" },
  { name: "Connections", standard: "1", premium: "1", pro: "1", ultimate: "2" },
  { name: "EPG Included", standard: true, premium: true, pro: true, ultimate: true },
  { name: "Anti-Buffer Technology", standard: true, premium: true, pro: true, ultimate: true },
  { name: "Priority Support", standard: false, premium: false, pro: true, ultimate: true },
  { name: "24/7 Priority Support", standard: false, premium: false, pro: false, ultimate: true },
];

export default function Pricing() {
  const { data: plans = [], isLoading } = useQuery<Plan[]>({
    queryKey: ["/api/plans"],
  });

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <Badge variant="secondary" className="text-xs mb-4">
              <Zap className="w-3 h-3 mr-1" />
              Simple Pricing
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-pricing-title">
              Plans That Fit{" "}
              <span className="gradient-text">Every Budget</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              No hidden fees, no contracts. Start your free 24 hours trial today and cancel anytime. 
              All plans include access to our core channel lineup.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              {[
                { icon: Diamond, text: "No Cutting" },
                { icon: Diamond, text: "No Freezing" },
                { icon: Server, text: "Amazing Servers" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-4 max-w-xl mx-auto">
              Everything added at the demand of our precious customers
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="p-6 animate-pulse">
                <div className="h-6 bg-muted rounded w-1/3 mx-auto mb-4" />
                <div className="h-10 bg-muted rounded w-1/2 mx-auto mb-6" />
                <div className="space-y-3">
                  {Array.from({ length: 6 }).map((_, j) => (
                    <div key={j} className="h-4 bg-muted rounded" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  className={`p-6 h-full relative ${
                    plan.isPopular ? "gradient-border" : ""
                  }`}
                  data-testid={`card-plan-${plan.name.toLowerCase()}`}
                >
                  {plan.isPopular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs">
                      Best Value
                    </Badge>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl sm:text-4xl font-bold text-primary">${plan.price}</span>
                      <span className="text-sm text-muted-foreground">/{durationMap[plan.description] || plan.description}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/923137287777" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant={plan.isPopular ? "default" : "outline"}
                      className="w-full"
                      data-testid={`button-subscribe-${plan.name.toLowerCase()}`}
                    >
                      Get Plan
                    </Button>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <section className="py-16 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" data-testid="text-comparison-title">
              Plan <span className="gradient-text">Comparison</span>
            </h2>
            <p className="text-muted-foreground mt-3">
              See exactly what each plan includes
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full" data-testid="table-comparison">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-sm font-semibold">Feature</th>
                      <th className="text-center p-4 text-sm font-semibold">Standard<br/><span className="text-xs text-muted-foreground font-normal">1 Month</span></th>
                      <th className="text-center p-4 text-sm font-semibold">
                        <span className="text-primary">Premium</span><br/><span className="text-xs text-muted-foreground font-normal">3 Months</span>
                      </th>
                      <th className="text-center p-4 text-sm font-semibold">Pro<br/><span className="text-xs text-muted-foreground font-normal">6 Months</span></th>
                      <th className="text-center p-4 text-sm font-semibold">Ultimate<br/><span className="text-xs text-muted-foreground font-normal">1 Year</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, i) => (
                      <tr key={feature.name} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                        <td className="p-4 text-sm">{feature.name}</td>
                        {(["standard", "premium", "pro", "ultimate"] as const).map((tier) => (
                          <td key={tier} className="p-4 text-center text-sm text-muted-foreground">
                            {typeof feature[tier] === "boolean" ? (
                              feature[tier] ? (
                                <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />
                              )
                            ) : (
                              feature[tier]
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-16 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <h3 className="text-xl font-semibold mb-3">Have questions about our plans?</h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Check out our FAQ page or contact our sales team for more information.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/faq">
              <Button variant="outline" data-testid="button-pricing-faq">
                View FAQ
              </Button>
            </Link>
            <Link href="/contact">
              <Button data-testid="button-pricing-contact">
                Contact Sales
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
