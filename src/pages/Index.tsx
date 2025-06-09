
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Mail, Phone, MapPin, Settings, Clock, DollarSign, TrendingUp, MessageCircle, BarChart3, FileText, Wrench } from "lucide-react";
import { useProjects } from "@/hooks/useProjects";
import { Link } from "react-router-dom";

const Index = () => {
  const { data: projects, isLoading } = useProjects();
  const featuredProjects = projects?.filter(project => project.featured) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
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
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Automate Your Business Tasks with AI
        </h1>
        <p className="text-xl text-gray-300 max-w-4xl mb-8">
          Free up 30+ hours a month, reduce costs, and boost productivity — without hiring more staff.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8 max-w-4xl">
          <p className="text-lg text-gray-200 mb-4">
            🧠 At SmartTech BW, we use advanced AI tools like ChatGPT to automate your day-to-day tasks. 
            You're not just using "AI" — you're unlocking more free time, lower overheads, and faster results.
          </p>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="container mx-auto px-6 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">📈 Why Choose SmartTech BW?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center bg-white/5 border border-white/10 rounded-lg p-6">
            <Clock className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Save 30+ hours/month</h3>
            <p className="text-gray-300">by automating repetitive tasks</p>
          </div>
          <div className="text-center bg-white/5 border border-white/10 rounded-lg p-6">
            <DollarSign className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Cut operational costs</h3>
            <p className="text-gray-300">without hiring new staff</p>
          </div>
          <div className="text-center bg-white/5 border border-white/10 rounded-lg p-6">
            <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Work smarter</h3>
            <p className="text-gray-300">with AI systems that run 24/7</p>
          </div>
        </div>
      </section>

      {/* What We Automate Section */}
      <section className="container mx-auto px-6 py-12 md:py-16 bg-black/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">🔧 What We Automate</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-6">
            <MessageCircle className="h-8 w-8 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Customer Support Replies</h3>
              <p className="text-gray-300">WhatsApp, email, and social media responses</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-6">
            <BarChart3 className="h-8 w-8 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Social Media Content</h3>
              <p className="text-gray-300">Automated content + captions generation</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-6">
            <FileText className="h-8 w-8 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Internal Reports & SOPs</h3>
              <p className="text-gray-300">Automated documentation and process generation</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-6">
            <Wrench className="h-8 w-8 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Custom Business Tools</h3>
              <p className="text-gray-300">Sales, inventory, and workflow automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-6 py-12 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            📞 Want to see how we can automate your business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free AI automation demo today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-lg px-8 py-4">
              Book Free Demo
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white/20 text-lg px-8 py-4">
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="container mx-auto px-6 py-12 md:py-24 bg-black/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="bg-white/5 border-white/10 overflow-hidden">
                {project.image_url && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image_url} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                      {project.category}
                    </Badge>
                    {project.technologies?.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    {project.github_url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.live_url && (
                      <Button size="sm" asChild>
                        <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Case Study
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Get Your Free Automation Audit</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-6">
              Ready to see exactly how AI can transform your business? Get a personalized consultation 
              to discover which tasks we can automate for maximum impact.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-purple-400" />
                <span>contact@smarttech-bw.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-purple-400" />
                <span>+267 123 4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-purple-400" />
                <span>Gaborone, Botswana</span>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">What tasks take up most of your time?</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Biggest time-consuming tasks</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400"
                  placeholder="Tell us what takes up most of your time..."
                ></textarea>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                Get Free Consultation
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} SmartTech BW. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
