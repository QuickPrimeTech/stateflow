import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Branding */}
        <div>
          <h3 className="text-2xl text-background mb-4 font-bold">
            <span className="gradient-text">StateFlow</span>
          </h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Professional website development, app development, and computer
            maintenance services. Transforming businesses through technology.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg text-background mb-4 font-bold">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-3 text-sm">
            <Link
              href="/services"
              className="hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/pricing"
              className="hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link href="/team" className="hover:text-primary transition-colors">
              Team
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg text-background mb-4 font-bold">
            Get in Touch
          </h4>
          <div className="flex flex-col gap-4 text-sm">
            <span className="flex items-center gap-3">
              <MapPin size={18} className="text-primary" /> Nairobi, Kenya
            </span>
            <span className="flex items-center gap-3">
              <Phone size={18} className="text-primary" /> +254 700 000 000
            </span>
            <span className="flex items-center gap-3">
              <Mail size={18} className="text-primary" /> hello@stateflow.co.ke
            </span>
            <span className="flex items-center gap-3">
              <Clock size={18} className="text-primary" /> Mon–Fri: 8:00 AM –
              6:00 PM
            </span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10 py-8 text-center text-xs text-background/50">
        <p>
          © {new Date().getFullYear()} State Flow Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
