import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Savannah E-Commerce",
    category: "Website Development",
    subtitle: "Full-featured online retail platform",
    desc: "Built a modern e-commerce platform with payment integration via M-Pesa and card payments, real-time inventory tracking, and a comprehensive admin dashboard.",
  },
  {
    title: "SwiftDeliver App",
    category: "App Development",
    subtitle: "Real-time delivery tracking",
    desc: "Developed a cross-platform delivery tracking app with push notifications, live GPS tracking, route optimization, and driver management for a logistics startup.",
  },
  {
    title: "TechHub Office Solutions",
    category: "Computer Maintenance",
    subtitle: "Enterprise IT infrastructure",
    desc: "Set up and maintained complete IT infrastructure for a 100+ employee office including networking, security systems, cloud backup, and hardware lifecycle management.",
  },
  {
    title: "FarmConnect Platform",
    category: "Website Development",
    subtitle: "Agricultural marketplace",
    desc: "Created a digital marketplace connecting farmers directly with buyers, featuring real-time pricing, logistics coordination, and mobile-responsive design.",
  },
  {
    title: "HealthTrack Pro",
    category: "App Development",
    subtitle: "Healthcare management system",
    desc: "Built a comprehensive healthcare app for patient record management, appointment scheduling, and telemedicine consultations with HIPAA-compliant data handling.",
  },
  {
    title: "SchoolNet IT Setup",
    category: "Computer Maintenance",
    subtitle: "Educational institution IT support",
    desc: "Deployed and maintained a computer lab with 200+ workstations, centralized server management, content filtering, and ongoing technical support for a Nairobi school.",
  },
];

export default function Projects() {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <header className="py-16 md:py-24 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="gradient-text">Success</span> Stories
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover how we've helped businesses transform their digital
            presence, streamline operations, and grow with custom technology
            solutions.
          </p>
          <Button asChild className="gap-2">
            <Link href="/contact">
              Start Your Project <ExternalLink size={14} />
            </Link>
          </Button>
        </div>
      </header>

      {/* Projects Grid Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground mb-8">
            {projects.length} projects found
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                {/* Visual Placeholder */}
                <div className="h-52 gradient-bg opacity-20 flex items-center justify-center group-hover:opacity-30 transition-opacity">
                  <Code2 size={48} className="text-primary opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                    {p.category}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    {p.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {p.desc}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    View Details <ExternalLink size={12} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Have a Project in Mind?
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Let's turn your idea into reality. Get in touch for a free
            consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 gap-2"
          >
            <Link href="/contact">
              Contact Us <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
