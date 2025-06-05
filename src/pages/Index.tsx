import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Mail, Phone, MapPin, Settings } from "lucide-react";
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
          Full-Stack Developer & Software Engineer
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mb-8">
          I build innovative web applications, mobile apps, and software solutions
          that solve real-world problems.
        </p>
        <div className="flex gap-4">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
            View My Work
          </Button>
          <Button variant="outline" className="text-white border-white/20">
            Contact Me
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 mb-4">
              I'm a passionate full-stack developer with expertise in building modern web applications,
              mobile apps, and software solutions. With a strong foundation in both front-end and back-end
              technologies, I create seamless user experiences backed by robust architecture.
            </p>
            <p className="text-gray-300 mb-4">
              My technical toolkit includes React, Node.js, TypeScript, Python, and various cloud services.
              I'm dedicated to writing clean, maintainable code and staying current with industry best practices.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <Badge className="bg-purple-600/20 text-purple-300">React</Badge>
              <Badge className="bg-purple-600/20 text-purple-300">Node.js</Badge>
              <Badge className="bg-purple-600/20 text-purple-300">TypeScript</Badge>
              <Badge className="bg-purple-600/20 text-purple-300">Python</Badge>
              <Badge className="bg-purple-600/20 text-purple-300">AWS</Badge>
              <Badge className="bg-purple-600/20 text-purple-300">Firebase</Badge>
              <Badge className="bg-purple-600/20 text-purple-300">MongoDB</Badge>
              <Badge className="bg-purple-600/20 text-purple-300">PostgreSQL</Badge>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Experience Highlights</h3>
            <ul className="space-y-4">
              <li className="text-gray-300">
                <span className="font-medium text-white">Senior Developer</span> - Led development of enterprise web applications
              </li>
              <li className="text-gray-300">
                <span className="font-medium text-white">Technical Lead</span> - Managed team of 5 developers on client projects
              </li>
              <li className="text-gray-300">
                <span className="font-medium text-white">Freelance Consultant</span> - Provided technical solutions for startups
              </li>
              <li className="text-gray-300">
                <span className="font-medium text-white">Open Source Contributor</span> - Active in several developer communities
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Featured Projects</h2>
        {isLoading ? (
          <div className="text-center text-gray-300">Loading projects...</div>
        ) : featuredProjects.length > 0 ? (
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
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-300">No featured projects yet.</div>
        )}
      </section>

      {/* All Projects Section */}
      <section className="container mx-auto px-6 py-12 md:py-24 bg-black/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">All Projects</h2>
        {isLoading ? (
          <div className="text-center text-gray-300">Loading projects...</div>
        ) : projects && projects.length > 0 ? (
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
        ) : (
          <div className="text-center text-gray-300">No projects found.</div>
        )}
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-6">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-purple-400" />
                <span>contact@smarttech-bw.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-purple-400" />
                <span>+123 456 7890</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-purple-400" />
                <span>Gaborone, Botswana</span>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
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
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                Send Message
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
