import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import type { Faq } from "@shared/schema";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function FaqPage() {
  const { data: faqs = [], isLoading } = useQuery<Faq[]>({
    queryKey: ["/api/faqs"],
  });

  const generalFaqs = faqs.filter((f) => f.category === "general");
  const technicalFaqs = faqs.filter((f) => f.category === "technical");
  const billingFaqs = faqs.filter((f) => f.category === "billing");

  const renderFaqSection = (title: string, items: Faq[], testId: string) => {
    if (items.length === 0) return null;
    return (
      <motion.div {...fadeUp} className="mb-12">
        <h2 className="text-xl font-semibold mb-6">{title}</h2>
        <Accordion type="single" collapsible className="space-y-3" data-testid={testId}>
          {items.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`faq-${faq.id}`}
              className="bg-card rounded-md border border-border px-4"
              data-testid={`accordion-faq-${faq.id}`}
            >
              <AccordionTrigger className="text-sm font-medium text-left py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <Badge variant="secondary" className="text-xs mb-4">
              <HelpCircle className="w-3 h-3 mr-1" />
              Help Center
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-faq-title">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about StreamXHD services, billing, 
              technical support, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {isLoading ? (
          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-card rounded-md border border-border p-4 animate-pulse">
                <div className="h-5 bg-muted rounded w-3/4 mb-2" />
                <div className="h-4 bg-muted rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <>
            {renderFaqSection("General Questions", generalFaqs, "section-faq-general")}
            {renderFaqSection("Technical Support", technicalFaqs, "section-faq-technical")}
            {renderFaqSection("Billing & Plans", billingFaqs, "section-faq-billing")}
          </>
        )}
      </section>

      {/* Still have questions? */}
      <section className="py-16 bg-card/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="text-2xl font-bold">
              Still Have <span className="gradient-text">Questions?</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Our support team is here to help you 24/7. Don't hesitate to reach out!
            </p>
            <Link href="/contact">
              <Button data-testid="button-faq-contact">
                Contact Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
