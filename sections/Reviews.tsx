import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Kariuki",
    company: "Savannah Retail",
    text: "StateFlow transformed our online presence completely. Our e-commerce platform has increased sales by 300% in just 6 months. Their team was professional, responsive, and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Mary Njeri",
    company: "FreshBite Restaurant",
    text: "The website they built for us is stunning and our customers love the online ordering system. We've seen a significant increase in orders since launch.",
    rating: 5,
  },
  {
    name: "David Otieno",
    company: "LogiTrack Solutions",
    text: "The delivery tracking app they developed is exactly what we needed. Real-time GPS tracking, push notifications — everything works flawlessly. Our drivers and customers are happy.",
    rating: 5,
  },
  {
    name: "Patricia Wambui",
    company: "Greenfield Academy",
    text: "StateFlow set up our entire school computer lab and network infrastructure. Their ongoing maintenance ensures everything runs smoothly for our 200+ students.",
    rating: 5,
  },
  {
    name: "Samuel Kiprotich",
    company: "Alpine Ventures",
    text: "Working with StateFlow was a breeze. They understood our vision and delivered a corporate website that truly represents our brand. Highly recommend!",
    rating: 5,
  },
  {
    name: "Lucy Akinyi",
    company: "HealthFirst Clinic",
    text: "The patient management app they built has streamlined our operations tremendously. Appointment booking, records management — it's all seamless now.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <div className="pt-20">
      {/* Header */}
      <header className="py-16 md:py-24 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What Our <span className="gradient-text">Clients</span> Say
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real reviews from real businesses who've transformed their
            operations with StateFlow technology solutions.
          </p>
        </div>
      </header>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all flex flex-col"
              >
                <Quote size={24} className="text-primary/30 mb-4 shrink-0" />
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed italic grow">
                  "{t.text}"
                </p>

                <div className="mt-auto">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className="text-primary fill-primary"
                      />
                    ))}
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-500 to-purple-600  text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Ready to Join Our Success Stories?
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Let's create your success story next. Start with a free
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
