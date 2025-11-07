"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = ["Web Development", "Unity Game Dev", "Blender 3D", "Low Poly Modeling", "Video Editing", "Photoshop", "UI/UX Design", "JavaScript", "React", "Next.js", "HTML/CSS", "Tailwind CSS", "Graphic Design", "Motion Graphics"];

  const projects = [
    {
      title: "3D Low Poly Game",
      description: "Game 3D dengan style low poly yang dibuat menggunakan Unity. Lengkap dengan karakter, environment, dan game mechanics.",
      tags: ["Unity", "Blender", "C#"],
      link: "#",
      image: "/images/project1.jpg", // Bisa diganti dengan URL gambar kamu
    },
    {
      title: "Creative Portfolio Website",
      description: "Website portfolio interaktif dengan animasi smooth dan design modern. Fully responsive dan optimized.",
      tags: ["React", "Next.js", "Tailwind"],
      link: "#",
      image: "/images/project2.jpg",
    },
    {
      title: "Video Content Project",
      description: "Proyek video editing dengan visual effects dan motion graphics. Color grading dan sound design yang professional.",
      tags: ["Video Editing", "Motion Graphics", "Photoshop"],
      link: "#",
      image: "/images/project3.jpg",
    },
    {
      title: "3D Model Collection",
      description: "Koleksi 3D models low poly untuk game assets. Optimized untuk performa dan aesthetic yang clean.",
      tags: ["Blender", "Low Poly", "3D Modeling"],
      link: "#",
      image: "/images/project4.jpg",
    },
    {
      title: "UI/UX Design System",
      description: "Complete design system dengan komponen reusable. Dari wireframe hingga high-fidelity prototype.",
      tags: ["Photoshop", "UI/UX", "Design"],
      link: "#",
      image: "/images/project5.jpg",
    },
    {
      title: "Web Application",
      description: "Aplikasi web full-stack dengan fitur real-time. Clean code dan modern tech stack.",
      tags: ["JavaScript", "React", "Node.js"],
      link: "#",
      image: "/images/project6.jpg",
    },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
              <span className="gradient-text">PORTFOLIO</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-10">
              <a href="#home" className="text-sm font-medium hover:text-primary transition-all duration-300 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-all duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#skills" className="text-sm font-medium hover:text-primary transition-all duration-300 relative group">
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#projects" className="text-sm font-medium hover:text-primary transition-all duration-300 relative group">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-all duration-300 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            <Button variant="default" className="hidden md:inline-flex hover:scale-105 transition-transform">
              Download CV
            </Button>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-4">
                <a href="#home" onClick={closeMenu} className="text-sm font-medium hover:text-primary transition-colors py-2">
                  Home
                </a>
                <a href="#about" onClick={closeMenu} className="text-sm font-medium hover:text-primary transition-colors py-2">
                  About
                </a>
                <a href="#skills" onClick={closeMenu} className="text-sm font-medium hover:text-primary transition-colors py-2">
                  Skills
                </a>
                <a href="#projects" onClick={closeMenu} className="text-sm font-medium hover:text-primary transition-colors py-2">
                  Projects
                </a>
                <a href="#contact" onClick={closeMenu} className="text-sm font-medium hover:text-primary transition-colors py-2">
                  Contact
                </a>
                <Button variant="default" className="w-full mt-2">
                  Download CV
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative overflow-hidden">
        {/* Background Image - TAMBAHKAN GAMBAR DI SINI */}
        <div className="absolute inset-0 z-0">
          {/* Option 1: Jika ada gambar background */}
          {<Image src="/image/drawing.png" alt="Background" fill className="object-cover opacity-10" priority />}

          {/* Overlay untuk membuat teks lebih terbaca */}
          <div className="absolute inset-0 bg-black/-0 z-10"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-block mb-6">
              <Badge className="text-sm px-4 py-2 animate-scale-in">Available for work</Badge>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-none">
              <span className="block text-foreground animate-slide-in-left">HI, I'M</span>
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
              <Button variant="default" className="text-base px-8 py-6 hover:scale-105 transition-transform">
                View My Work →
              </Button>
              <Button variant="outline" className="text-base px-8 py-6 border-2 hover:scale-105 transition-transform">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-muted-foreground" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="gradient-text">ABOUT ME</span>
            </h2>
            <div className="h-1 w-32 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl relative overflow-hidden group">
                {/* FOTO PROFIL - TAMBAHKAN GAMBAR DI SINI */}
                {/* Uncomment baris di bawah dan ganti dengan path foto kamu */}
                {<Image src="/image/profile.jpg" alt="Profile Photo" fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />}

                {/* Fallback jika tidak ada foto */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-9xl font-black text-primary/10">rendapat</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Halo! Saya adalah <span className="text-foreground font-semibold">creative developer</span> yang passionate di berbagai bidang digital. Dari web development, game development dengan Unity, 3D modeling low poly di Blender,
                sampai video editing dan graphic design.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Dengan skill yang beragam, saya bisa handle project dari berbagai sisi - mulai dari coding, design visual, sampai animasi dan video. <span className="text-foreground font-semibold">Setiap project adalah playground</span>{" "}
                buat berkreasi dan belajar hal baru.
              </p>
              <div className="pt-4">
                <Button variant="outline" className="border-2 hover:scale-105 transition-transform">
                  Learn More About Me →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="gradient-text">SKILLS</span>
            </h2>
            <div className="h-1 w-32 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground">Technologies & Tools I Work With</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center animate-scale-in">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                className="text-base px-6 py-3 hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer border-2 border-primary/30"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="gradient-text">PROJECTS</span>
            </h2>
            <div className="h-1 w-32 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground">Featured Works & Case Studies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-500 cursor-pointer border-2 border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* GAMBAR PROJECT - TAMBAHKAN GAMBAR DI SINI */}
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  {/* Uncomment baris di bawah jika ada gambar project */}
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  /> */}

                  {/* Fallback jika tidak ada gambar */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-black text-primary/20 group-hover:scale-110 transition-transform duration-500">{index + 1}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="mt-3 text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-primary/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    View Project →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-slide-up">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="gradient-text">LET'S WORK</span>
            </h2>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8">
              <span className="gradient-text">TOGETHER</span>
            </h2>
            <div className="h-1 w-32 bg-primary mx-auto rounded-full mb-12"></div>
          </div>

          <Card className="animate-scale-in border-2 border-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-12">
              <p className="text-xl text-muted-foreground mb-12">Punya project atau ide yang menarik? Saya selalu terbuka untuk diskusi dan kolaborasi!</p>

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
                <Button variant="outline" className="px-8 border-2 hover:scale-105 transition-transform">
                  GitHub
                </Button>
                <Button variant="outline" className="px-8 border-2 hover:scale-105 transition-transform">
                  LinkedIn
                </Button>
                <Button variant="outline" className="px-8 border-2 hover:scale-105 transition-transform">
                  Twitter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
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
