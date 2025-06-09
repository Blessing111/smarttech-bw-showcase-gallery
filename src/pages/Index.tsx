
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Mail, Phone, MapPin, Settings, Clock, DollarSign, TrendingUp } from "lucide-react";
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
          <div className="text-2xl font-bold text-white">SmartTech-Bw</div>
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
          We Automate Your Business Tasks
        </h1>
        <p className="text-xl text-gray-300 max-w-4xl mb-8">
          Using AI tools like ChatGPT, we save businesses 30+ hours a month and improve efficiency 
          without hiring more staff. You're not buying "AI" — you're buying more free time, 
          lower operating costs, and instant productivity wins.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl">
          <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-lg">
            <Clock className="h-8 w-8 text-green-400" />
            <span className="text-white font-semibold">More Free Time</span>
          </div>
          <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-lg">
            <DollarSign className="h-8 w-8 text-green-400" />
            <span className="text-white font-semibold">Lower Operating Costs</span>
          </div>
          <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-lg">
            <TrendingUp className="h-8 w-8 text-green-400" />
            <span className="text-white font-semibold">Instant Productivity Wins</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
            View Our Services
          </Button>
          <Button variant="outline" className="text-white border-white/20">
            Get Free Consultation
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Our AI Automation Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Auto-Reply Systems</CardTitle>
              <CardDescription className="text-gray-300">
                WhatsApp, Email & Social Media Automation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                We'll set up a ChatGPT-powered system that answers customer questions instantly, 
                24/7, across all your communication channels.
              </p>
              <Badge className="bg-green-600/20 text-green-300">Save 20+ hours/month</Badge>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Internal SOP Generators</CardTitle>
              <CardDescription className="text-gray-300">
                Turn Chaos Into Clear Processes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Transform messy voice notes and scattered processes into clean, 
                repeatable steps — automatically written and organized.
              </p>
              <Badge className="bg-green-600/20 text-green-300">Save 15+ hours/month</Badge>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Content Generator</CardTitle>
              <CardDescription className="text-gray-300">
                Social Media & Marketing Automation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Automated content planner for social media plus caption generator 
                to save 20+ hours monthly on marketing tasks.
              </p>
              <Badge className="bg-green-600/20 text-green-300">Save 20+ hours/month</Badge>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">AI Business Dashboards</CardTitle>
              <CardDescription className="text-gray-300">
                Automated Reporting & Insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Auto-generate sales reports, meeting summaries, and customer feedback 
                insights to make data-driven decisions faster.
              </p>
              <Badge className="bg-green-600/20 text-green-300">Save 10+ hours/month</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-6 py-12 md:py-24 bg-black/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Why Choose SmartTech BW?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Real Results for Real Businesses</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong className="text-white">30+ Hours Saved Monthly:</strong> Clients report significant time savings on repetitive tasks</span>
              </li>
              <li className="flex items-start text-gray-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong className="text-white">No New Hires Needed:</strong> Increase productivity without expanding your team</span>
              </li>
              <li className="flex items-start text-gray-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong className="text-white">Quick Implementation:</strong> Most systems are live within 1-2 weeks</span>
              </li>
              <li className="flex items-start text-gray-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong className="text-white">Ongoing Support:</strong> We maintain and optimize your systems continuously</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Our Expertise</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-purple-600/20 text-purple-300">ChatGPT Integration</Badge>
              <Badge className="bg-purple-600/20 text-purple-300">WhatsApp API</Badge>
              <Badge className="bg-purple-600/20 text-purple-300">Email Automation</Badge>
              <Badge className="bg-purple-600/20 text-purple-300">Social Media APIs</Badge>
              <Badge className="bg-purple-600/20 text-purple-300">Process Automation</Badge>
              <Badge className="bg-purple-600/20 text-purple-300">Dashboard Development</Badge>
              <Badge className="bg-purple-600/20 text-purple-300">AI Model Training</Badge>
              <Badge className="bg-purple-600/20 text-purple-300">Business Intelligence</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="container mx-auto px-6 py-12 md:py-24">
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

      {/* All Projects Section */}
      {projects && projects.length > 0 && (
        <section className="container mx-auto px-6 py-12 md:py-24 bg-black/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="bg-white/5 border-white/10">
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
                          Live Demo
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
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Ready to Automate Your Business?</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-6">
              Get a free consultation to see how we can save your business 30+ hours per month 
              with AI automation. No technical jargon — just practical solutions that work.
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
            <h3 className="text-xl font-semibold text-white mb-4">Get Your Free Automation Audit</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">What tasks take up most of your time?</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                  placeholder="Tell us about your biggest time-consuming tasks..."
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
            © {new Date().getFullYear()} SmartTech-Bw. All rights reserved.
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
