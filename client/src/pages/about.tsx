import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, Globe, Zap, Target, Heart, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const stats = [
  { value: "10K+", label: "Active Users", icon: Users },
  { value: "46K+", label: "Live TV Channels", icon: Globe },
  { value: "180+", label: "Countries", icon: Award },
  { value: "99.9%", label: "Uptime", icon: Zap },
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We constantly push the boundaries of streaming technology to deliver the best possible viewing experience.",
  },
  {
    icon: Heart,
    title: "Customer Focused",
    description: "Every decision we make starts with our customers. Your satisfaction is our top priority.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "We protect your data with enterprise-grade encryption and maintain complete transparency in everything we do.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Entertainment should have no borders. We bring content from around the world to wherever you are.",
  },
];

const timeline = [
  { year: "2018", title: "Founded", description: "StreamXHD was born with a mission to revolutionize how people watch TV." },
  { year: "2019", title: "10K Users", description: "Reached our first 10,000 subscribers within the first year of launch." },
  { year: "2020", title: "Global Expansion", description: "Expanded to 50+ countries with localized content and support." },
  { year: "2021", title: "4K Launch", description: "Introduced 4K Ultra HD streaming with Dolby Atmos support." },
  { year: "2022", title: "46K+ Channels", description: "Crossed 46,000+ live channels milestone from 180+ countries." },
  { year: "2023", title: "50K Users", description: "Celebrating 50,000 active subscribers worldwide." },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <Badge variant="secondary" className="text-xs mb-4">
              About StreamXHD
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-about-title">
              Redefining the Future of{" "}
              <span className="gradient-text">Entertainment</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Since 2018, we've been on a mission to bring world-class streaming 
              entertainment to everyone, everywhere. Here's our story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Image + Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="/images/about-bg.png"
                alt="About StreamXHD"
                className="w-full object-cover aspect-video"
                data-testid="img-about"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              StreamXHD was founded with a simple belief: everyone deserves access to 
              high-quality entertainment without breaking the bank. We leverage 
              cutting-edge IPTV technology to deliver thousands of live channels, 
              movies, and shows directly to your devices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of engineers and content experts work around the clock to 
              ensure you get the best streaming experience possible, with zero 
              buffering, crystal-clear quality, and an ever-growing library of content.
            </p>
            <ul className="space-y-3">
              {[
                "Pioneering IPTV technology since 2018",
                "Content partnerships with 500+ broadcasters",
                "Dedicated 24/7 customer support team",
                "Continuous platform improvements and updates",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="p-6 text-center" data-testid={`card-about-stat-${i}`}>
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <Badge variant="secondary" className="text-xs mb-4">
            Our Values
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            What <span className="gradient-text">Drives Us</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="p-6 h-full hover-elevate" data-testid={`card-value-${i}`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-card/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <Badge variant="secondary" className="text-xs mb-4">
              Our Journey
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              The StreamXHD <span className="gradient-text">Timeline</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-6 pb-8 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border-2 border-primary/40">
                    <span className="text-xs font-bold text-primary">{item.year.slice(2)}</span>
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-4">
                  <div className="text-xs text-primary font-semibold mb-1">{item.year}</div>
                  <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Ready to Join the{" "}
            <span className="gradient-text">StreamXHD Family?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Start your journey with us today and experience entertainment like never before.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/pricing">
              <Button data-testid="button-about-plans">
                View Plans
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" data-testid="button-about-contact">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
