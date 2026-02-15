import { Link } from "wouter";
import heroFamilyImg from "@assets/Gemini_Generated_Image_i6komzi6komzi6ko_1770665890873.png";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Wifi, Monitor, Shield, Headphones, Play, ArrowRight,
  Star, Users, Tv, Globe, CheckCircle, ChevronRight, Zap, Smartphone
} from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import type { Plan, Testimonial } from "@shared/schema";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const stats = [
  { value: "46K+", label: "Live TV Channels", icon: Tv },
  { value: "10K+", label: "Active Users", icon: Users },
  { value: "99.9%", label: "Uptime", icon: Globe },
  { value: "4K", label: "Ultra HD", icon: Monitor },
];

const features = [
  {
    icon: Tv,
    title: "46,000+ Live TV Channels",
    description: "Access thousands of live TV channels from around the world including sports, news, entertainment, and more.",
  },
  {
    icon: Monitor,
    title: "4K Ultra HD Quality",
    description: "Experience crystal-clear streaming in stunning 4K resolution with Dolby Atmos surround sound.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade encryption and 99.9% uptime guarantee for uninterrupted entertainment.",
  },
  {
    icon: Play,
    title: "Video On Demand",
    description: "Massive library of movies, TV shows, and exclusive content available on demand anytime.",
  },
  {
    icon: Smartphone,
    title: "Multi-Device Support",
    description: "Watch on Smart TVs, phones, tablets, Fire Stick, Apple TV, Roku, and more - all with one subscription.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated support team is available round the clock to assist you with any issues.",
  },
];

export default function Home() {
  const { data: plans = [] } = useQuery<Plan[]>({
    queryKey: ["/api/plans"],
  });

  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroFamilyImg}
            alt=""
            className="w-full h-full object-cover object-top scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-background/95 blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Badge variant="secondary" className="text-xs" data-testid="badge-hero-new">
                <Zap className="w-3 h-3 mr-1" />
                Next-Gen IPTV Platform
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" data-testid="text-hero-title">
                Unlimited{" "}
                <span className="gradient-text">Entertainment</span>
                <br />
                At Your Fingertips
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed" data-testid="text-hero-subtitle">
                Stream 46,000+ live channels, movies, and shows in stunning 4K quality. 
                No cable box needed. No contracts. Cancel anytime.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/pricing">
                  <Button size="lg" data-testid="button-hero-plans">
                    View Plans
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/channels">
                  <Button variant="outline" size="lg" data-testid="button-hero-channels">
                    <Play className="w-4 h-4 mr-2" />
                    Browse Movies
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">No contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">Free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">Cancel anytime</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-20 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...stagger}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-5 text-center bg-card/90 backdrop-blur-sm" data-testid={`card-stat-${i}`}>
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <Badge variant="secondary" className="text-xs mb-4">
            Why Choose StreamXHD
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="text-features-title">
            Everything You Need for{" "}
            <span className="gradient-text">Perfect Streaming</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We deliver the ultimate streaming experience with cutting-edge technology, 
            extensive content, and unmatched reliability.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              {...stagger}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-6 h-full hover-elevate" data-testid={`card-feature-${i}`}>
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About / Device Section */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://4kwallpapers.com/images/walls/thumbs_3t/18286.jpeg"
                alt="StreamXHD Device"
                className="w-full h-[28rem] sm:h-[32rem] object-cover object-left"
                data-testid="img-device"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="px-8 sm:px-12 max-w-xl space-y-6">
                  <Badge variant="secondary" className="text-xs">
                    About StreamXHD
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    Watch Anywhere,{" "}
                    <span className="gradient-text">Anytime</span>
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    StreamXHD brings you the future of television. Our advanced IPTV technology 
                    delivers thousands of channels directly to your devices with zero lag and 
                    crystal-clear quality. Whether you're at home or on the go, your 
                    entertainment travels with you.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Compatible with Smart TVs, phones, tablets & laptops",
                      "EPG (Electronic Program Guide) included",
                      "Catch-up TV & recording features",
                      "Parental controls for safe viewing",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/about">
                    <Button variant="outline" data-testid="button-learn-more">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <Badge variant="secondary" className="text-xs mb-4">
            Pricing Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="text-pricing-title">
            Choose Your{" "}
            <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Flexible plans designed to fit every budget. Start with a free trial and upgrade anytime.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.length > 0 ? (
            plans.map((plan, i) => {
              const durationMap: Record<string, string> = {
                "1 Month": "Month",
                "3 Months": "3 Months",
                "6 Months": "6 Months",
                "12 Months": "12 Months",
              };
              return (
              <motion.div
                key={plan.id}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.15 }}
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
                    <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl sm:text-4xl font-bold text-primary">${plan.price}</span>
                      <span className="text-muted-foreground text-sm">/{durationMap[plan.description] || plan.description}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                    <a href="https://wa.me/923137287777" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant={plan.isPopular ? "default" : "outline"}
                      className="w-full"
                      data-testid={`button-plan-${plan.name.toLowerCase()}`}
                    >
                      Get Started
                    </Button>
                  </a>
                </Card>
              </motion.div>
              );
            })
          ) : (
            Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="p-6 animate-pulse">
                <div className="h-6 bg-muted rounded w-1/3 mx-auto mb-4" />
                <div className="h-10 bg-muted rounded w-1/2 mx-auto mb-6" />
                <div className="space-y-3">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="h-4 bg-muted rounded" />
                  ))}
                </div>
              </Card>
            ))
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <Badge variant="secondary" className="text-xs mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="text-testimonials-title">
              What Our{" "}
              <span className="gradient-text">Users Say</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Join millions of satisfied viewers who have made the switch to StreamXHD.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {(testimonials.length > 0 ? testimonials.slice(0, 3) : []).map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card className="p-6 h-full" data-testid={`card-testimonial-${i}`}>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
            {testimonials.length === 0 && (
              Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="p-6 animate-pulse">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <div key={j} className="w-4 h-4 bg-muted rounded" />
                    ))}
                  </div>
                  <div className="h-16 bg-muted rounded mb-4" />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted" />
                    <div>
                      <div className="h-4 bg-muted rounded w-24 mb-1" />
                      <div className="h-3 bg-muted rounded w-16" />
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://4kwallpapers.com/images/walls/thumbs_3t/15519.jpg"
                alt=""
                className="w-full h-80 sm:h-[28rem] object-contain sm:object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="px-8 sm:px-12 max-w-xl">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4" data-testid="text-cta-title">
                    Ready to Start{" "}
                    <span className="gradient-text">Streaming?</span>
                  </h2>
                  <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                    Join millions of viewers and experience the future of television. 
                    Get started with a free 24 hours trial today.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a href="https://wa.me/923137287777" target="_blank" rel="noopener noreferrer">
                      <Button data-testid="button-cta-trial">
                        Start Free Trial
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                    <Link href="/contact">
                      <Button variant="outline" data-testid="button-cta-contact">
                        Contact Sales
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
