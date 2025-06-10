
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Mail, Phone, MapPin, Settings, Download } from "lucide-react";
import { useProjects } from "@/hooks/useProjects";
import { Link } from "react-router-dom";
import { TypingAnimation } from "@/components/TypingAnimation";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { SkillsSection } from "@/components/SkillsSection";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  const { data: projects, isLoading } = useProjects();
  const featuredProjects = projects?.filter(project => project.featured) || [];

  const typingTexts = [
    "Full-Stack Developer",
    "Software Engineer", 
    "Problem Solver",
    "Tech Innovator"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">SmartTech BW</div>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                className="text-white border-white/20 hover:bg-white/10"
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
              <Link to="/admin">
                <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                  <Settings className="h-4 w-4 mr-2" />
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center min-h-screen justify-center">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white">
              STB
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">SmartTech BW</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
            <TypingAnimation 
              texts={typingTexts}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
            />
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
            I build innovative web applications and software solutions that solve real-world problems. 
            Passionate about creating seamless user experiences with cutting-edge technology.
          </p>

          <div className="flex gap-6 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Mail className="h-5 w-5 mr-2" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10">
              <Github className="h-5 w-5 mr-2" />
              View Projects
            </Button>
          </div>

          <div className="flex gap-8 text-gray-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <div className="container mx-auto px-6">
          <SkillsSection />
        </div>

        {/* Projects Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Projects</h2>
          {isLoading ? (
            <div className="text-white text-center">Loading projects...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 group hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Testimonials Section */}
        <div className="container mx-auto px-6">
          <TestimonialsCarousel />
        </div>

        {/* Contact Section */}
        <div className="container mx-auto px-6">
          <ContactForm />
        </div>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              © {new Date().getFullYear()} SmartTech BW. Building the future, one line of code at a time.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Phone className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
