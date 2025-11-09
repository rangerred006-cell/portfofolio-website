"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

// Komponen: Image + fallback wlp.png kalau error
function SafeImage(props: React.ComponentProps<typeof Image>) {
  const { src, alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState<string>(String(src));
  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc("/images/wlp.png")}
    />
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    "Web Development","Unity Game Dev","Blender 3D","Low Poly Modeling","Video Editing","Photoshop",
    "UI/UX Design","JavaScript","React","Next.js","HTML/CSS","Tailwind CSS","Graphic Design","Motion Graphics",
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="text-2xl font-bold hover:text-primary transition-colors">
              <span className="gradient-text">PORTFOLIO</span>
            </a>

            <div className="hidden md:flex gap-10">
              {[
                ["#home","Home"],["#about","About"],["#skills","Skills"],["#projects","Projects"],["#contact","Contact"],
              ].map(([href, label]) => (
                <a key={href} href={href} className="text-sm font-medium hover:text-primary transition-all duration-300 relative group">
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <Button variant="default" className="hidden md:inline-flex hover:scale-105 transition-transform">
              Download CV
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-4">
                {[
                  ["#home","Home"],["#about","About"],["#skills","Skills"],["#projects","Projects"],["#contact","Contact"],
                ].map(([href, label]) => (
                  <a key={href} href={href} onClick={closeMenu} className="text-sm font-medium hover:text-primary transition-colors py-2">
                    {label}
                  </a>
                ))}
                <Button variant="default" className="w-full mt-2">Download CV</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <SafeImage src="/images/drawing.png" alt="Background" fill className="object-cover opacity-10" priority />
          <div className="absolute inset-0 bg-black/0 z-10" />
        </div>

        {/* Floating blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-block mb-6">
              <Badge className="text-sm px-4 py-2 animate-scale-in">Close For Now</Badge>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-none">
              <span className="block animate-slide-in-left">HI, I'M</span>
              <span className="block gradient-text text-glow animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
                Rendapat
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              Creative Developer & Multimedia Creator
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.6s" }}>
              Web Development • Unity Games • 3D Blender • Video Editing • Design
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: "0.8s" }}>
              <Button href="#projects" variant="default" className="text-base px-8 py-6 hover:scale-105 transition-transform">
                View My Work →
              </Button>
              <Button href="#contact" variant="outline" className="text-base px-8 py-6 border-2 hover:scale-105 transition-transform">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-muted-foreground" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="gradient-text">ABOUT ME</span>
            </h2>
            <div className="h-1 w-32 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl relative overflow-hidden group">
                <SafeImage src="/images/profile.jpg" alt="Profile Photo" fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-9xl font-black text-black/10">rendapat</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Halo! Saya adalah <span className="font-semibold">creative developer</span> yang passionate di berbagai bidang digital…
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Dengan skill yang beragam, saya bisa handle project dari berbagai sisi…
              </p>
              <div className="pt-4">
                <Button variant="outline" className="border-2 hover:scale-105 transition-transform">Learn More About Me →</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32 px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="gradient-text">SKILLS</span>
            </h2>
            <div className="h-1 w-32 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-xl text-muted-foreground">Technologies & Tools I Work With</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center animate-scale-in">
            {skills.map((skill, i) => (
              <Badge
                key={i}
                className="text-base px-6 py-3 hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer border-2 border-primary/30"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="gradient-text">PROJECTS</span>
            </h2>
          <div className="h-1 w-32 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-xl text-muted-foreground">Featured Works & Case Studies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, index) => (
              <article
                key={p.slug}
                className="group hover:scale-105 transition-all duration-500 cursor-pointer border-2 border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-slide-up rounded-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link href={`/projects/${p.slug}`} className="block">
                  <div className="h-48 relative overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <SafeImage
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  </div>
                </Link>

                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{p.title}</CardTitle>
                  <CardDescription className="mt-3 text-base">{p.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-primary/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button href={`/projects/${p.slug}`} variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    View Project →
                  </Button>
                </CardContent>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-slide-up">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6"><span className="gradient-text">LET'S WORK</span></h2>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8"><span className="gradient-text">TOGETHER</span></h2>
            <div className="h-1 w-32 bg-primary mx-auto rounded-full mb-12" />
          </div>

          <Card className="animate-scale-in border-2 border-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-12">
              <p className="text-xl text-muted-foreground mb-12">
                Punya project atau ide yang menarik? Saya selalu terbuka untuk diskusi dan kolaborasi!
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <a href="mailto:your.email@example.com" className="group">
                  <div className="p-6 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105">
                    <div className="text-sm text-muted-foreground mb-2">Email</div>
                    <div className="text-lg text-primary group-hover:text-glow transition-all">your.email@example.com</div>
                  </div>
                </a>
                <a href="tel:+6281234567890" className="group">
                  <div className="p-6 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105">
                    <div className="text-sm text-muted-foreground mb-2">Phone</div>
                    <div className="text-lg text-primary group-hover:text-glow transition-all">+62 812-3456-7890</div>
                  </div>
                </a>
              </div>

              <div className="flex gap-4 justify-center">
                <Button variant="outline" className="px-8 border-2 hover:scale-105 transition-transform">GitHub</Button>
                <Button variant="outline" className="px-8 border-2 hover:scale-105 transition-transform">LinkedIn</Button>
                <Button variant="outline" className="px-8 border-2 hover:scale-105 transition-transform">Twitter</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            &copy; 2025 <span className="gradient-text font-semibold">Rendapat</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
