import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProgramCard from "@/components/ProgramCard";
import StatsCounter from "@/components/StatsCounter";
import ProcessTimeline from "@/components/ProcessTimeline";
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
  CheckCircle2,
  Sparkles,
  Users,
  Award,
  TrendingUp,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const Index = () => {
  const programs = [
    {
      icon: Code2,
      title: "Full Stack Web Development (MERN)",
      description: "Master MongoDB, Express.js, React, and Node.js to build modern web applications from scratch.",
      featured: true
    },
    {
      icon: Database,
      title: "Data Science & Machine Learning",
      description: "Learn data analysis, visualization, and machine learning algorithms."
    },
    {
      icon: Brain,
      title: "Artificial Intelligence with Python",
      description: "Explore AI concepts, neural networks, and deep learning."
    },
    {
      icon: Shield,
      title: "Cybersecurity & Ethical Hacking",
      description: "Understand security principles and penetration testing."
    },
    {
      icon: Cloud,
      title: "Cloud Computing (AWS & Azure)",
      description: "Master cloud platforms and infrastructure management."
    },
    {
      icon: Palette,
      title: "UI/UX Product Design",
      description: "Create intuitive interfaces and exceptional experiences."
    }
  ];

  const stats = [
    { value: "500+", label: "Students Trained", icon: Users },
    { value: "50+", label: "College Partners", icon: Award },
    { value: "95%", label: "Success Rate", icon: TrendingUp },
    { value: "100%", label: "Industry Experts", icon: Sparkles }
  ];

  const process = [
    { step: "Partner", description: "We collaborate with your institution to understand your needs" },
    { step: "Train", description: "Expert trainers deliver industry-aligned curriculum" },
    { step: "Certify", description: "Students receive recognized certifications" },
    { step: "Place", description: "Career support and placement assistance" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section - Diagonal Split */}
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero"></div>
        
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0, 123, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 123, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-accent/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-32 right-20 w-16 h-16 border-2 border-primary/20 animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <div className="inline-block mb-4 px-4 py-1 bg-accent/10 border border-accent/20 rounded text-accent font-grotesk text-sm font-semibold uppercase tracking-wide">
                Industry Training Excellence
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-deep">
                Engineering <span className="text-glow bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Future-Ready</span> Skills
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-sans">
                Industry trainers. Campus programs. Job-ready students.
              </p>
              
              {/* Trust Bullets */}
              <div className="space-y-3 mb-8">
                {[
                  "Expert trainers from leading tech companies",
                  "Industry-aligned curriculum & certifications",
                  "Hands-on projects & career placement support"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-deep font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="gap-2"
                  onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Programs
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="neon"
                  className="gap-2"
                  onClick={() => window.open("https://wa.me/9108918437", "_blank")}
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* Right Image with Abstract SVG */}
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded blur-3xl"></div>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Students learning in a modern technology classroom with laptops and digital screens" 
                  className="relative rounded shadow-2xl w-full h-auto object-cover border-2 border-accent/10"
                />
                {/* Abstract Overlay Shape */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-2xl animate-glow-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Asymmetric Grid */}
      <section id="programs" className="py-20 md:py-32 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 border border-primary/20 rounded text-primary font-grotesk text-sm font-semibold uppercase tracking-wide">
              Training Programs
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-deep">
              Future-Focused Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
              Industry-aligned courses designed to prepare students for successful tech careers
            </p>
          </div>

          {/* Asymmetric Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Featured Large Card */}
            <div className="lg:col-span-2 animate-fade-in">
              <ProgramCard {...programs[0]} />
            </div>
            
            {/* Stacked Cards */}
            <div className="space-y-6">
              {programs.slice(1, 3).map((program, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <ProgramCard {...program} compact />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {programs.slice(3).map((program, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <ProgramCard {...program} compact />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section id="impact" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep via-primary/20 to-deep"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-white/80 font-sans">
              Transforming education across institutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <StatsCounter {...stat} />
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
              <div className="inline-block mb-4 px-4 py-1 bg-primary/10 border border-primary/20 rounded text-primary font-grotesk text-sm font-semibold uppercase tracking-wide">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-deep">
                About CK Technology
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 font-sans">
                CK Technology is a Bangalore-based educational training company delivering value-added programs to colleges. We partner with institutions to bridge the skill gap by offering expert trainers, real-time learning, and industry exposure.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans">
                Our mission is to empower the next generation of professionals with practical skills and knowledge that align with current industry demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-1 bg-accent/10 border border-accent/20 rounded text-accent font-grotesk text-sm font-semibold uppercase tracking-wide">
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-deep">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground font-sans">
              Partner → Train → Certify → Place
            </p>
          </div>

          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-deep via-primary to-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-2 rounded-full blur-3xl"></div>
        </div>
        
        {/* Neon top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Partner With Us Today
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-sans">
              Colleges trust us for impactful training programs. Let's work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                variant="outline"
                className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={() => window.open("https://wa.me/9108918437", "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
              <Button 
                size="lg"
                variant="neon"
                className="gap-2"
                onClick={() => window.open("tel:+919108918437")}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </div>

            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded p-4 hover:bg-white/10 transition-all">
                <Phone className="w-6 h-6 text-accent mx-auto mb-2" />
                <p className="text-white/60 text-sm mb-1">Phone</p>
                <p className="text-white font-semibold">+91 91089 18437</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded p-4 hover:bg-white/10 transition-all">
                <Mail className="w-6 h-6 text-accent mx-auto mb-2" />
                <p className="text-white/60 text-sm mb-1">Email</p>
                <p className="text-white font-semibold">contact@tgtechnology.com</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded p-4 hover:bg-white/10 transition-all">
                <MapPin className="w-6 h-6 text-accent mx-auto mb-2" />
                <p className="text-white/60 text-sm mb-1">Location</p>
                <p className="text-white font-semibold text-sm">Bangalore – 560056</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep text-white py-12 border-t border-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Logo & Description */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CK Technology
              </h3>
              <p className="text-white/70 mb-4 font-sans">
                Empowering colleges with industry-ready training programs.
              </p>
              <div className="text-sm text-white/60 space-y-1">
                <p>No 57, VV Layout, Malathahalli</p>
                <p>Bangalore – 560056</p>
                <p className="mt-2">Phone: +91 91089 18437</p>
                <p>Email: contact@tgtechnology.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:text-right">
              <h4 className="font-grotesk font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    Programs
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.open("https://wa.me/9108918437", "_blank")}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/60 font-sans">
              &copy; 2025 CK Technology. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
