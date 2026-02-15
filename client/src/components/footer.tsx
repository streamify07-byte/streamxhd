import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import logoImg from "@assets/streamx-logo-nobg.png";
import { SiFacebook, SiX, SiInstagram, SiYoutube } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/">
              <img src={logoImg} alt="StreamX" className="h-9 object-contain" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Experience next-generation streaming with crystal-clear HD quality, 46,000+ live channels, and unlimited entertainment at your fingertips.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center text-muted-foreground transition-colors" data-testid="link-social-facebook">
                <SiFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center text-muted-foreground transition-colors" data-testid="link-social-twitter">
                <SiX className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center text-muted-foreground transition-colors" data-testid="link-social-instagram">
                <SiInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center text-muted-foreground transition-colors" data-testid="link-social-youtube">
                <SiYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Movies", href: "/channels" },
                { label: "Live Channels", href: "/live-channels" },
                { label: "Pricing Plans", href: "/pricing" },
                { label: "About Us", href: "/about" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground cursor-pointer transition-colors" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {[
                "Live TV Streaming",
                "Video on Demand",
                "Sports Packages",
                "Premium Channels",
                "Family Plans",
                "Business Solutions",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">Chak Numbar 241 R-B, Chanchal Wala, Faisalabad</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+923007287778" className="text-sm text-muted-foreground hover:text-primary transition-colors">+92 300 7287778</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:streamxhd07@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">streamxhd07@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} StreamXHD. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground cursor-pointer">Privacy Policy</span>
            <span className="text-sm text-muted-foreground cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
