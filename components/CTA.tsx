import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Fix: Separated 'export default' or used a named export
const CTA = () => {
  return (
    <section className="section-padding gradient-bg from-indigo-500 to-purple-600 text-foreground text-center">
      <div className="container max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl mb-4 text-foreground font-bold">
          Ready to Get Started?
        </h2>
        <p className="mb-8 text-foreground/80">
          Let's discuss how we can help your business grow with the right
          technology solutions.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-background text-foreground hover:bg-background/90 gap-2"
        >
          <Link href="/contact">
            Get Your Free Consultation <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
