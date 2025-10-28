import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Database, 
  Brain, 
  Shield, 
  Cloud, 
  Palette,
  MessageCircle,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const Index = () => {
  const courses = [
    {
      icon: Code2,
      title: "Full Stack Web Development (MERN)",
      description: "Master MongoDB, Express.js, React, and Node.js to build modern web applications from scratch."
    },
    {
      icon: Database,
      title: "Data Science & Machine Learning",
      description: "Learn data analysis, visualization, and machine learning algorithms to make data-driven decisions."
    },
    {
      icon: Brain,
      title: "Artificial Intelligence with Python",
      description: "Explore AI concepts, neural networks, and deep learning using Python and popular frameworks."
    },
    {
      icon: Shield,
      title: "Cybersecurity & Ethical Hacking",
      description: "Understand security principles, penetration testing, and ethical hacking techniques to protect systems."
    },
    {
      icon: Cloud,
      title: "Cloud Computing (AWS & Azure)",
      description: "Master cloud platforms, deployment strategies, and infrastructure management on AWS and Azure."
    },
    {
      icon: Palette,
      title: "UI/UX Product Design",
      description: "Create intuitive user interfaces and exceptional user experiences using industry-standard tools."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Empowering Colleges with{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Industry-Ready Training
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                We provide expert trainers and value-added courses to colleges, preparing students for real-world careers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="gap-2 text-lg"
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="glass"
                  className="gap-2 text-lg"
                  onClick={() => window.open("https://wa.me/9035000569", "_blank")}
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="animate-fade-in lg:animate-float">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-3xl blur-3xl"></div>
                <img 
                  src={heroImage} 
                  alt="Students learning in a modern classroom with laptops and digital screens" 
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 md:py-32 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Popular Training Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry-aligned courses designed to prepare students for successful careers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                About CK Technology
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8 rounded-full"></div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                CK Technology is a Bangalore-based educational training company delivering value-added programs to colleges. We partner with institutions to bridge the skill gap by offering expert trainers, real-time learning, and industry exposure.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Our mission is to empower the next generation of professionals with practical skills and knowledge that align with current industry demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary-glow relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partner With Us Today
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Colleges trust us for impactful training programs. Let's work together.
            </p>
            <Button 
              size="lg"
              variant="glass"
              className="gap-2 text-lg bg-white/20 hover:bg-white/30 text-white border-white/30"
              onClick={() => window.open("https://wa.me/9035000569", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Description */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                CK Technology
              </h3>
              <p className="text-secondary-foreground/80">
                Empowering colleges with industry-ready training programs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    Courses
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.open("https://wa.me/9035000569", "_blank")}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <p className="text-secondary-foreground/80 text-sm">
                Bangalore, Karnataka
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-secondary-foreground/10 pt-8 text-center">
            <p className="text-secondary-foreground/60">
              &copy; 2025 CK Technology. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
