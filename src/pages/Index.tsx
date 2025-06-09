
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Mail, Phone, MapPin, Settings, Clock, DollarSign, TrendingUp, MessageCircle, BarChart3, FileText, Wrench, CheckCircle, Star, ArrowRight, Zap, Users, Target, Shield } from "lucide-react";
import { useProjects } from "@/hooks/useProjects";
import { Link } from "react-router-dom";

const Index = () => {
  const { data: projects, isLoading } = useProjects();
  const featuredProjects = projects?.filter(project => project.featured) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">SmartTech BW</div>
            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <MessageCircle className="h-4 w-4 mr-2" />
                Get Free Demo
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

      {/* Hero Section - Enhanced */}
      <section className="container mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">
        <div className="flex gap-2 mb-6">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            ✅ Instant Setup
          </Badge>
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
            🚀 Results in 24hrs
          </Badge>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Stop Wasting Time on
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Repetitive Tasks</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mb-8 leading-relaxed">
          Get back <strong className="text-white">30+ hours every month</strong> while we automate your business with AI. 
          No new hires needed, no complex setup. Just results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-xl px-12 py-6 hover:scale-105 transition-transform">
            <Zap className="h-6 w-6 mr-3" />
            Get Free Automation Audit
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white/20 text-xl px-12 py-6 hover:bg-white/10">
            <MessageCircle className="h-6 w-6 mr-3" />
            WhatsApp: +267 123 4567
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex items-center gap-6 text-gray-300">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-purple-500"></div>
              <div className="w-8 h-8 rounded-full bg-blue-500"></div>
              <div className="w-8 h-8 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm">50+ businesses automated</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm ml-2">4.9/5 rating</span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-6 py-16 bg-red-500/10 border border-red-500/20 rounded-2xl mx-6 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Are You Drowning in These Time-Wasting Tasks?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: MessageCircle, task: "Replying to the same customer questions", time: "5+ hours/week" },
            { icon: FileText, task: "Writing reports & documentation", time: "8+ hours/week" },
            { icon: BarChart3, task: "Creating social media content", time: "6+ hours/week" },
            { icon: Wrench, task: "Manual data entry & updates", time: "10+ hours/week" }
          ].map((item, index) => (
            <div key={index} className="bg-white/5 border border-red-500/20 rounded-lg p-6 text-center">
              <item.icon className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">{item.task}</h3>
              <p className="text-red-300 font-bold">{item.time}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-xl text-red-300 font-bold">
            That's 29+ hours per week = 125+ hours per month wasted! 💸
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Here's How We Give You Your Life Back
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We set up AI systems that work 24/7, handling your repetitive tasks so you can focus on growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Clock,
              title: "Save 30+ Hours Monthly",
              description: "Automate repetitive tasks that eat up your valuable time",
              color: "green"
            },
            {
              icon: DollarSign,
              title: "Cut Operational Costs",
              description: "No need to hire additional staff for routine work",
              color: "blue"
            },
            {
              icon: TrendingUp,
              title: "Scale Without Stress",
              description: "Handle more customers without burning out your team",
              color: "purple"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className={`w-16 h-16 rounded-full bg-${benefit.color}-500/20 flex items-center justify-center mx-auto mb-6`}>
                <benefit.icon className={`h-8 w-8 text-${benefit.color}-400`} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-300 text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16 bg-black/20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🔧 What We Automate For You
          </h2>
          <p className="text-xl text-gray-300">Ready-to-deploy AI solutions that start working immediately</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: MessageCircle,
              title: "AI Customer Support",
              description: "WhatsApp, email, and social media auto-replies",
              features: ["24/7 instant responses", "Handles 80% of common questions", "Escalates complex issues to you"],
              setup: "48 hours"
            },
            {
              icon: BarChart3,
              title: "Content Generation System",
              description: "Automated social media posts and captions",
              features: ["Daily content calendar", "Brand-consistent posts", "Engagement-optimized captions"],
              setup: "24 hours"
            },
            {
              icon: FileText,
              title: "Report & SOP Generator",
              description: "Turn voice notes into professional documents",
              features: ["Auto-format meeting notes", "Generate SOPs instantly", "Create professional reports"],
              setup: "72 hours"
            },
            {
              icon: Wrench,
              title: "Custom Business Tools",
              description: "Sales trackers, inventory management, workflows",
              features: ["Tailored to your business", "Real-time dashboards", "Automated notifications"],
              setup: "1-2 weeks"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-lg mb-4">{service.description}</p>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-4">
                    Setup: {service.setup}
                  </Badge>
                </div>
              </div>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Urgency Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ⚡ Limited Time: Free Setup Worth $2,500
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This month only: Get your first AI automation system set up completely free. 
            Usually costs $2,500, but we're waiving the setup fee for the first 10 businesses.
          </p>
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Only 3</div>
              <div className="text-gray-300">Spots Left</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">48 Hours</div>
              <div className="text-gray-300">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">$0</div>
              <div className="text-gray-300">Setup Cost</div>
            </div>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 text-xl px-12 py-6 hover:scale-105 transition-transform">
            <Target className="h-6 w-6 mr-3" />
            Claim Your Free Setup Now
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            📞 Ready to Get Your 30+ Hours Back?
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Book a free 15-minute call and we'll show you exactly which tasks we can automate for your business
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-xl px-12 py-6 hover:scale-105 transition-transform">
              <Phone className="h-6 w-6 mr-3" />
              Book Free 15-Min Call
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white/20 text-xl px-12 py-6 hover:bg-white/10">
              <MessageCircle className="h-6 w-6 mr-3" />
              WhatsApp: +267 123 4567
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center text-gray-300">
              <Shield className="h-8 w-8 text-green-400 mr-4" />
              <div>
                <div className="font-semibold text-white">100% Risk-Free</div>
                <div className="text-sm">Money-back guarantee</div>
              </div>
            </div>
            <div className="flex items-center text-gray-300">
              <Users className="h-8 w-8 text-blue-400 mr-4" />
              <div>
                <div className="font-semibold text-white">50+ Happy Clients</div>
                <div className="text-sm">Across Botswana</div>
              </div>
            </div>
            <div className="flex items-center text-gray-300">
              <Zap className="h-8 w-8 text-purple-400 mr-4" />
              <div>
                <div className="font-semibold text-white">Fast Results</div>
                <div className="text-sm">Working in 24-48 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16 bg-black/30">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Get Your Free Automation Audit</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Tell us about your biggest time-wasters and we'll show you exactly how to automate them.
              No sales pitch – just a genuine assessment of how AI can help your business.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="h-6 w-6 mr-4 text-purple-400" />
                <span className="text-lg">contact@smarttech-bw.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-6 w-6 mr-4 text-purple-400" />
                <span className="text-lg">+267 123 4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-6 w-6 mr-4 text-purple-400" />
                <span className="text-lg">Gaborone, Botswana</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">What's eating up your time?</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+267 ..."
                  />
                </div>
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-2">Business Type</label>
                <input
                  type="text"
                  id="business"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., Restaurant, Retail, Consulting"
                />
              </div>
              <div>
                <label htmlFor="tasks" className="block text-sm font-medium text-gray-300 mb-2">Biggest Time-Wasters</label>
                <textarea
                  id="tasks"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="What repetitive tasks take up most of your time? (e.g., answering same questions, writing reports, posting on social media...)"
                ></textarea>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-lg py-4">
                <ArrowRight className="h-5 w-5 mr-2" />
                Get My Free Automation Plan
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} SmartTech BW. Automating Botswana's businesses, one task at a time.
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="mailto:contact@smarttech-bw.com" className="text-gray-300 hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://wa.me/2671234567" className="text-gray-300 hover:text-white transition-colors">
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
