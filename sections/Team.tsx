import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Heart,
  Target,
  TrendingUp,
  Users,
  Shield,
  Lightbulb,
} from "lucide-react";

const team = [
  {
    src: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749244431/cropped-face_2_iiznfp.jpg",
    name: "Meshack Kipkemoi",
    role: "Lead Developer & Founder",
    bio: "Full-stack developer with  years of experience building scalable web applications and mobile apps. Passionate about clean code and great user experiences.",
    tags: ["React", "Node.js", "Cloud Architecture", "Project Management"],
  },
  {
    src: "https://res.cloudinary.com/meshack-kipkemoi/image/upload/v1774354049/thaithi_wbzqwp.jpg",
    name: "Lewis Thaithi",
    role: "UI/UX Designer",
    bio: "Creative designer specializing in user-centered design. Transforms complex requirements into intuitive, beautiful interfaces that users love.",
    tags: ["Figma", "User Research", "Prototyping", "Brand Identity"],
  },
  {
    src: "https://res.cloudinary.com/meshack-kipkemoi/image/upload/v1774353376/solomon_bcycqw.jpg",
    name: "Solomon Muriithi",
    role: "Mobile App Developer",
    bio: "Expert in cross-platform mobile development. Builds high-performance apps for iOS and Android using React Native and Flutter.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    src: "https://res.cloudinary.com/meshack-kipkemoi/image/upload/v1774353427/daniel_wh8x7k.jpg",
    name: "Daniel Irungu",
    role: "IT Support Specialist",
    bio: "Certified IT professional with expertise in hardware repair, network setup, and system administration. Keeps businesses running smoothly.",
    tags: ["Hardware", "Networking", "System Admin", "Cybersecurity"],
  },
];

const values = [
  {
    icon: Target,
    title: "Client-First",
    desc: "Every decision we make prioritizes your business goals and success.",
  },
  {
    icon: Heart,
    title: "Partnership",
    desc: "We're not just vendors — we're partners invested in your long-term growth.",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    desc: "We focus on delivering measurable results — more customers, more efficiency, more growth.",
  },
  {
    icon: Shield,
    title: "Reliability",
    desc: "Count on us for consistent quality, transparent communication, and dependable support.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We stay ahead of technology trends to give your business a competitive edge.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Your input matters. We work closely with you at every stage of the project.",
  },
];

export default function Team() {
  return (
    <div className="pt-20">
      {/* Header */}
      <header className="py-16 md:py-24 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Meet the <span className="gradient-text">StateFlow</span> Team
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're a passionate team of developers, designers, and IT experts
            dedicated to helping your business succeed with technology.
          </p>
        </div>
      </header>

      {/* Team Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-2">
            Our <span className="gradient-text">Expert</span> Team
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Each team member brings unique expertise to ensure your project
            exceeds expectations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all flex flex-col"
              >
                <div className="h-56 gradient-bg  flex items-center justify-center relative group">
                  <Image
                    src={member.src}
                    alt="Team Member"
                    width={400}
                    height={400}
                    className=" object-cover h-full w-full  group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent" />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-4 grow">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold tracking-tight bg-primary/10 text-primary rounded-full px-2.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-2">
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            The principles that guide everything we do.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-500 to-purple-600  text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Want to Join Our Team?
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            We're always looking for talented individuals. Get in touch if you'd
            like to work with us.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 gap-2 font-bold"
          >
            <Link href="/contact">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
