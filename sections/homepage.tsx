"use client";
import Image from "next/image";
import Link from "next/link"; // Changed from react-router-dom
import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  Monitor,
  CheckCircle2,
  ArrowRight,
  Code2,
  Palette,
  Rocket,
  Headphones,
  ExternalLink,
  Users,
  Briefcase,
  Award,
  Clock,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    icon: CheckCircle2,
    text: "Custom websites that convert visitors into customers",
  },
  { icon: CheckCircle2, text: "Mobile apps for iOS and Android platforms" },
  { icon: CheckCircle2, text: "Reliable computer maintenance & IT support" },
  { icon: CheckCircle2, text: "Ongoing support and maintenance included" },
];

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom, responsive websites built with modern technologies. From business sites to e-commerce platforms, we create digital experiences that drive results.",
    tags: ["React", "Next.js", "E-commerce"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native and cross-platform mobile applications. We build intuitive, high-performance apps that your users will love.",
    tags: ["iOS", "Android", "Cross-platform"],
  },
  {
    icon: Monitor,
    title: "Computer Maintenance",
    desc: "Professional IT support and computer maintenance services. Keep your systems running smoothly with our expert technicians.",
    tags: ["Hardware", "Software", "Networking"],
  },
];

const projects = [
  {
    title: "Bahari Restaurant Website",
    category: "Website Development",
    desc: "Built a modern, responsive website for a local restaurant with online ordering and reservation features.",
    img: "https://res.cloudinary.com/meshack-kipkemoi/image/upload/v1774346040/bahari_ftidqs.png",
  },
  {
    title: "BRIGHTER MINDS CBC",
    category: "Website Development",
    desc: "Developed a sleek, user-friendly website for a cutting-edge AI startup, showcasing their products and services.",
    img: "https://res.cloudinary.com/meshack-kipkemoi/image/upload/v1774346013/lischinese_jcdxgw.png",
  },
  {
    title: "Lis Chinese Restaurant ",
    category: "Website Development",
    desc: "Built a modern, responsive website for a Chinese restaurant with online ordering and reservation features.",
    img: "https://res.cloudinary.com/meshack-kipkemoi/image/upload/v1774346013/lischinese_jcdxgw.png",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Discovery",
    desc: "We learn about your business goals, target audience, and technical requirements to plan the perfect solution.",
  },
  {
    step: "2",
    title: "Design",
    desc: "We create visual mockups and prototypes so you can see exactly what your project will look like before we build it.",
  },
  {
    step: "3",
    title: "Build",
    desc: "Our team develops your solution using modern technologies, with regular updates and milestones along the way.",
  },
  {
    step: "4",
    title: "Launch",
    desc: "After thorough testing, we launch your project and provide training plus ongoing support to ensure success.",
  },
];

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Briefcase, value: "120+", label: "Projects Completed" },
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Typically 2-6 weeks depending on complexity. Simple business sites take about 2 weeks, while complex platforms may take 4-6 weeks.",
  },
  {
    q: "Do you provide ongoing maintenance?",
    a: "Yes! All our packages include ongoing maintenance and support. We offer monthly maintenance plans to keep your site running smoothly.",
  },
  {
    q: "Can you build mobile apps for both iOS and Android?",
    a: "Absolutely. We build cross-platform apps using React Native that work seamlessly on both iOS and Android from a single codebase.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern technologies including React, Next.js, TypeScript, React Native, Node.js, and various cloud services.",
  },
  {
    q: "Do you offer computer repair services?",
    a: "Yes, we provide comprehensive computer maintenance including hardware repairs, software troubleshooting, networking setup, and preventive maintenance.",
  },
  {
    q: "How do payments work?",
    a: "We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. We accept M-Pesa, bank transfer, and other payment methods.",
  },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full gradient-bg blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full gradient-bg blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your Business with{" "}
                <span className="gradient-text">Technology</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                We build websites, develop apps, and maintain your IT
                infrastructure — so you can focus on growing your business.
              </p>
              <div className="space-y-3 mb-8">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <b.icon size={18} className="text-primary shrink-0" />
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/contact">
                    Get Your Free Consultation <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">See Our Work</Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden gradient-bg p-0.5">
                <div className="bg-card rounded-2xl p-8 text-center">
                  <Code2
                    size={80}
                    className="text-primary mx-auto mb-4 opacity-30"
                  />
                  <p className="text-2xl font-bold text-foreground">
                    Building the Future
                  </p>
                  <p className="text-muted-foreground mt-2">
                    One line of code at a time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <s.icon size={28} className="text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Showcasing our latest work across web, mobile, and IT solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="group bg-card rounded-xl border border-border  hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="h-48 rounded-lg gradient-bg  mb-4 flex items-center justify-center">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={400}
                    height={300}
                    className="text-primary"
                  />
                </div>
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 rounded-full px-6 py-1 mb-3">
                  {p.category}
                </span>
                <h3 className="text-xl mb-2 p-6 font-bold">{p.title}</h3>
                <p className="text-muted-foreground text-sm p-6 mb-4">
                  {p.desc}
                </p>
                <Link href="/projects" className="p-6 block">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    View Details <ExternalLink size={12} />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/projects">
                See All Projects <ArrowRight size={14} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Services That <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our comprehensive suite of services is designed to cover every
            aspect of your technology needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-border p-8 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                  <s.icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl mb-3 font-bold">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-secondary text-muted-foreground rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild className="gap-2">
              <Link href="/services">
                Learn More <ArrowRight size={14} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            <span className="gradient-text">Transparent Pricing</span> for Every
            Business
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Choose the perfect package. No hidden fees, no surprises.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                desc: "For small businesses",
                features: [
                  "3-page website",
                  "Responsive design",
                  "Basic SEO",
                  "1 month support",
                ],
              },
              {
                name: "Professional",
                desc: "For growing companies",
                features: [
                  "8-10 page website",
                  "Custom design",
                  "Advanced SEO",
                  "3 months support",
                  "CMS integration",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                desc: "For large organizations",
                features: [
                  "Unlimited pages",
                  "Custom features",
                  "Priority support",
                  "App development",
                  "IT maintenance",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border p-8 ${plan.popular ? "border-primary shadow-lg shadow-primary/10" : "border-border"}`}
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
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2
                        size={16}
                        className="text-primary shrink-0"
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
          <div className="text-center mt-10">
            <Button asChild variant="link" className="gap-2">
              <Link href="/pricing">
                Compare All Plans <ArrowRight size={14} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            A smooth process that doesn't require any technical expertise from
            your end.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                  {p.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Get all your doubts clarified
          </p>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-bold text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20  bg-linear-to-r from-blue-500 to-purple-600 text-foreground text-center">
        <div className="container max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="mb-8 text-foreground/80">
            Ready to transform your business with technology? Let's start with a
            free consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 gap-2"
          >
            <Link href="/contact">
              Get Started Today <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
