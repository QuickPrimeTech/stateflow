import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2, ArrowRight } from "lucide-react";
import Image from "next/image";
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
                <div className="h-52 gradient-bg  flex items-center justify-center ">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={400}
                    height={400}
                    className="text-primary "
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                    {p.category}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{p.title}</h3>

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
      <section className="py-20 gradient-bg bg-linear-to-r from-blue-500 to-purple-600 text-primary-foreground text-center">
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
