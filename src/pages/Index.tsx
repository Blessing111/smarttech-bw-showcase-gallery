
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Mail, Phone, MapPin, Settings, Download } from "lucide-react";
import { useProjects } from "@/hooks/useProjects";
import { Link } from "react-router-dom";

const Index = () => {
  const { data: projects, isLoading } = useProjects();
  const featuredProjects = projects?.filter(project => project.featured) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">SmartTech BW</div>
            <div className="flex gap-4">
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

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">SmartTech BW</span>
        </h1>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Your trusted technology partner in Botswana. We deliver innovative software solutions 
          and web applications that drive business growth and digital transformation.
        </p>

        <div className="flex gap-6 justify-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Mail className="h-5 w-5 mr-2" />
            Contact Us
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10">
            View Our Work
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white">Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Custom websites and web applications built with modern technologies.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white">Software Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Tailored software applications to streamline your business processes.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white">Digital Consulting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Strategic guidance for your digital transformation journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Projects</h2>
        {isLoading ? (
          <div className="text-white text-center">Loading projects...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-purple-500/20 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            Ready to transform your business with technology? Let's discuss your project.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="h-5 w-5 text-purple-400" />
              <span>info@smarttech-bw.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="h-5 w-5 text-purple-400" />
              <span>+267 75 981 075</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="h-5 w-5 text-purple-400" />
              <span>Gaborone, Botswana</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/10">
        <div className="text-center text-gray-300">
          © {new Date().getFullYear()} SmartTech BW. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
