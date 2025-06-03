
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Mail, Linkedin, Code, Smartphone, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack web application with React, Node.js, and MongoDB",
      category: "web",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management Mobile App",
      description: "Cross-platform mobile app built with React Native",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Redux"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Inventory Management System",
      description: "Desktop application for small businesses",
      category: "software",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["Electron", "SQLite", "Chart.js"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Portfolio Dashboard",
      description: "Analytics dashboard for tracking portfolio performance",
      category: "web",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "D3.js", "Express"],
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Fitness Tracker App",
      description: "Mobile app for tracking workouts and nutrition",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Dart", "Firebase"],
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Data Visualization Tool",
      description: "Desktop software for complex data analysis",
      category: "software",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      technologies: ["Python", "Tkinter", "Pandas"],
      github: "#",
      live: "#"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="container mx-auto px-6 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              SmartTech-Bw
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Full-Stack Developer & Software Engineer specializing in creating 
              innovative digital solutions across web, mobile, and desktop platforms
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                View My Work
              </Button>
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300">
                Contact Me
              </Button>
            </div>
            <div className="flex justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            What I Do
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: "Web Development",
                description: "Creating responsive, modern web applications using the latest technologies",
                technologies: ["React", "Vue.js", "Node.js", "Python", "MongoDB"]
              },
              {
                icon: Smartphone,
                title: "Mobile Development",
                description: "Building cross-platform mobile apps that deliver exceptional user experiences",
                technologies: ["React Native", "Flutter", "Firebase", "Redux"]
              },
              {
                icon: Code,
                title: "Software Development",
                description: "Developing robust desktop applications and system solutions",
                technologies: ["Electron", "Python", "C++", "SQLite", "APIs"]
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-white/10 border-white/20 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 transform group-hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                      <skill.icon className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-white text-xl">{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-center mb-4">
                      {skill.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skill.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-600/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-white mb-8"
          >
            Featured Projects
          </motion.h2>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { key: "all", label: "All Projects" },
              { key: "web", label: "Web Apps" },
              { key: "mobile", label: "Mobile Apps" },
              { key: "software", label: "Software" }
            ].map((filterOption) => (
              <Button
                key={filterOption.key}
                variant={filter === filterOption.key ? "default" : "outline"}
                onClick={() => setFilter(filterOption.key)}
                className={filter === filterOption.key 
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" 
                  : "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                }
              >
                {filterOption.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-white/10 border-white/20 backdrop-blur-lg overflow-hidden hover:bg-white/20 transition-all duration-300 transform group-hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.github}
                        className="bg-black/50 p-2 rounded-full text-white hover:text-purple-400 transition-colors"
                      >
                        <Github size={18} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.live}
                        className="bg-black/50 p-2 rounded-full text-white hover:text-purple-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-600/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-8"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 SmartTech-Bw. Built with passion and cutting-edge technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
