"use client"; // Required for useState and form submission

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real Next.js app, you'd likely call a Server Action or API route here
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <header className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2">
            We'd Love to Hear From You
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin className="text-accent mt-1 shrink-0" size={20} />
                Kimathi Street, Nyeri Town, Nyeri County, Kenya
              </p>
              <p className="flex items-start gap-3">
                <Phone className="text-accent mt-1 shrink-0" size={20} />
                +254 712 345 678
              </p>
              <p className="flex items-start gap-3">
                <Mail className="text-accent mt-1 shrink-0" size={20} />
                statef146@gmail.com
              </p>
              <p className="flex items-start gap-3">
                <Clock className="text-accent mt-1 shrink-0" size={20} />
                Monday – Sunday: 11:00 AM – 10:00 PM
              </p>
            </div>

            {/* Map embed - Updated to a standard responsive container */}
            <div className="rounded-lg overflow-hidden border border-border h-64 w-full">
              <iframe
                title="Kitchen's Delight Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7582!2d36.9500!3d-0.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjUnMDAuMCJTIDM2wrA1NycwMC4wIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form Side */}
          <div>
            <h2 className="text-2xl mb-6 font-semibold">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 tracking-wider uppercase text-sm font-bold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
