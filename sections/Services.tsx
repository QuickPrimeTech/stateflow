import Link from "next/link"; // Changed from react-router-dom
import { Button } from "@/components/ui/button";
import CTA from "@/components/CTA";
import {
  Globe,
  Smartphone,
  Monitor,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Code2,
  Database,
  Cloud,
  Shield,
  Wifi,
  HardDrive,
  Settings,
  Wrench,
  Layout,
  ShoppingCart,
  Search,
  Zap,
} from "lucide-react";

const mainServices = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom, responsive websites built with modern technologies that drive real business results.",
    features: [
      {
        icon: Layout,
        text: "Responsive Design",
        desc: "Beautiful on every device — desktop, tablet, and mobile",
      },
      {
        icon: ShoppingCart,
        text: "E-Commerce Solutions",
        desc: "Online stores with payment integration and inventory management",
      },
      {
        icon: Search,
        text: "SEO Optimization",
        desc: "Built-in SEO best practices to rank higher on Google",
      },
      {
        icon: Zap,
        text: "Fast Performance",
        desc: "Lightning-fast load times for better user experience",
      },
    ],
    tags: ["React", "Next.js", "WordPress", "E-commerce", "Landing Pages"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native and cross-platform mobile applications that users love.",
    features: [
      {
        icon: Code2,
        text: "Cross-Platform",
        desc: "Build once, deploy to both iOS and Android",
      },
      {
        icon: Database,
        text: "Backend Integration",
        desc: "Seamless connection to your existing systems and databases",
      },
      {
        icon: Cloud,
        text: "Cloud Services",
        desc: "Scalable cloud infrastructure for growing businesses",
      },
      {
        icon: Shield,
        text: "Security First",
        desc: "Enterprise-grade security for your data and users",
      },
    ],
    tags: ["React Native", "iOS", "Android", "Flutter", "APIs"],
  },
  {
    icon: Monitor,
    title: "Computer Maintenance",
    desc: "Professional IT support and maintenance to keep your business running smoothly.",
    features: [
      {
        icon: Wrench,
        text: "Hardware Repair",
        desc: "Expert diagnosis and repair of computers, laptops, and peripherals",
      },
      {
        icon: Settings,
        text: "Software Setup",
        desc: "OS installation, software configuration, and troubleshooting",
      },
      {
        icon: Wifi,
        text: "Network Setup",
        desc: "LAN/WAN setup, router configuration, and network security",
      },
      {
        icon: HardDrive,
        text: "Data Recovery",
        desc: "Professional data recovery from damaged or corrupted drives",
      },
    ],
    tags: ["Hardware", "Software", "Networking", "Data Recovery", "IT Support"],
  },
];

const Services = () => {
  return (
    <div className="pt-20">
      <header className="section-padding bg-secondary text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-bold">
          Elevate Your Business's{" "}
          <span className="gradient-text">Digital Presence</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Professional technology services that drive growth, streamline
          operations, and transform your business. From web development to IT
          maintenance — we've got you covered.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <a href="#services">
              Explore Services <ArrowRight size={16} />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/contact">
              Contact Us <ExternalLink size={14} />
            </Link>
          </Button>
        </div>
        <div className="flex justify-center gap-6 mt-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <CheckCircle2 size={14} className="text-primary" /> Free
            consultation
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 size={14} className="text-primary" /> Results-based
            pricing
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 size={14} className="text-primary" /> Ongoing support
          </span>
        </div>
      </header>

      <section id="services" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <p className="text-sm text-primary font-medium text-center mb-2">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl text-center mb-2 font-bold">
            Everything Your Business{" "}
            <span className="gradient-text">Needs</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools you need to
            succeed in the digital world.
          </p>

          <div className="space-y-24">
            {mainServices.map((service, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                    <service.icon
                      size={28}
                      className="text-primary-foreground"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <f.icon
                          size={20}
                          className="text-primary shrink-0 mt-0.5"
                        />
                        <div>
                          <p className="text-sm font-medium">{f.text}</p>
                          <p className="text-xs text-muted-foreground">
                            {f.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-secondary text-muted-foreground rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-2xl overflow-hidden gradient-bg p-0.5">
                    <div className="bg-card rounded-2xl p-12 flex items-center justify-center">
                      <service.icon
                        size={120}
                        className="text-primary opacity-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default Services;
