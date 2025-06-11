
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Mail, Phone, MapPin, Settings, Clock, DollarSign, TrendingUp, MessageCircle, BarChart3, FileText, Wrench, CheckCircle, Star, ArrowRight, Zap, Users, Target, Shield, Bot, Calendar } from "lucide-react";
import { useProjects } from "@/hooks/useProjects";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { data: projects, isLoading } = useProjects();
  const featuredProjects = projects?.filter(project => project.featured) || [];
  const { toast } = useToast();
  
  // Countdown state - loops every 24 hours
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // WhatsApp number and Calendly link
  const whatsappNumber = "26775981075";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const calendlyUrl = "https://calendly.com/otengbless";

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    tasks: ''
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 24 hours when countdown reaches 0
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handle Calendly booking
  const handleCalendlyClick = () => {
    window.open(calendlyUrl, '_blank');
    toast({
      title: "Opening Calendly",
      description: "Book your free consultation slot now!",
    });
  };

  // Handle WhatsApp button clicks
  const handleWhatsAppClick = (message = "") => {
    const defaultMessage = "I want to claim the exclusive free SmartTech BW website revamp. Let's get started.";
    const encodedMessage = encodeURIComponent(message || defaultMessage);
    window.open(`${whatsappUrl}?text=${encodedMessage}`, '_blank');
    
    toast({
      title: "Opening WhatsApp",
      description: "We'll respond within 5 minutes!",
    });
  };

  // Handle phone calls
  const handlePhoneCall = () => {
    window.open(`tel:+${whatsappNumber}`, '_self');
    toast({
      title: "Calling SmartTech BW",
      description: "We're ready to help automate your business!",
    });
  };

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.business) {
      toast({
        title: "Please fill in all required fields",
        description: "We need your name, phone, and business type to get started.",
        variant: "destructive"
      });
      return;
    }

    const message = `Hi! I'm ${formData.name} from ${formData.business}. 

My biggest time-wasters are: ${formData.tasks || 'Various repetitive tasks'}

My WhatsApp: ${formData.phone}

I'd like to book a free automation demo!`;

    handleWhatsAppClick(message);
    
    // Reset form
    setFormData({ name: '', phone: '', business: '', tasks: '' });
    
    toast({
      title: "Demo request sent!",
      description: "We'll contact you within 5 minutes to schedule your free demo.",
    });
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">SmartTech BW</div>
            <div className="flex gap-4">
              <Button 
                onClick={handleCalendlyClick}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:scale-105 transition-transform"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Free Call
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

      {/* Hero Section with Enhanced CTA */}
      <section className="container mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">
        <div className="flex gap-2 mb-6">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 animate-pulse">
            🤖 AI-Powered
          </Badge>
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
            ⚡ Results in 24hrs
          </Badge>
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
            💰 Save 30+ Hours
          </Badge>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Automate Your Business Tasks with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> AI</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mb-8 leading-relaxed">
          Free up <strong className="text-green-400">30+ hours a month</strong>, reduce costs, and boost productivity — 
          <strong className="text-white"> without hiring more staff.</strong>
        </p>

        <p className="text-lg text-gray-300 max-w-3xl mb-12">
          At SmartTech BW, we use advanced AI tools like ChatGPT to automate your day-to-day tasks. 
          You're not just using "AI" — you're unlocking more free time, lower overheads, and faster results.
        </p>

        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl p-8 mb-8 max-w-4xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-4">
              🔥 Only 3 Exclusive Revamps Available for Botswana Brands
            </h2>
            <p className="text-xl text-gray-300">
              Claim your free website revamp before the countdown hits zero!
            </p>
          </div>
          
          {/* Countdown Timer */}
          <div className="bg-black/30 rounded-lg p-6 mb-8 inline-block">
            <div className="text-sm text-gray-300 mb-2">Offer expires in:</div>
            <div className="flex gap-4 text-center">
              <div className="bg-red-500/20 rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-sm text-gray-300">Hours</div>
              </div>
              <div className="bg-red-500/20 rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm text-gray-300">Minutes</div>
              </div>
              <div className="bg-red-500/20 rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm text-gray-300">Seconds</div>
              </div>
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="space-y-4">
            <Button 
              size="lg" 
              onClick={handleCalendlyClick}
              className="bg-gradient-to-r from-green-600 to-green-500 text-xl px-12 py-6 hover:scale-105 transition-transform w-full max-w-md"
            >
              <Calendar className="h-6 w-6 mr-3" />
              Claim Your Free Revamp Now
            </Button>
            
            {/* Secondary Options */}
            <div className="text-gray-300 text-sm">
              Prefer WhatsApp? 
              <button 
                onClick={() => handleWhatsAppClick("I want to claim the exclusive free SmartTech BW website revamp. Let's get started.")}
                className="text-green-400 hover:text-green-300 ml-2 underline"
              >
                Click here instead
              </button>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">
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
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-purple-400" />
            <span className="text-sm">Powered by ChatGPT & AI</span>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            📈 Why Choose AI Automation?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stop wasting time on repetitive tasks. Let AI work for you 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Clock,
              title: "Save 30+ Hours/Month",
              description: "Automate repetitive tasks that eat up your valuable time",
              color: "green",
              stat: "30+ hrs"
            },
            {
              icon: DollarSign,
              title: "Cut Operational Costs",
              description: "No need to hire additional staff for routine work",
              color: "blue",
              stat: "50% less cost"
            },
            {
              icon: TrendingUp,
              title: "Work Smarter 24/7",
              description: "AI systems that run round the clock, even while you sleep",
              color: "purple",
              stat: "24/7 uptime"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className={`w-16 h-16 rounded-full bg-${benefit.color}-500/20 flex items-center justify-center mx-auto mb-6`}>
                <benefit.icon className={`h-8 w-8 text-${benefit.color}-400`} />
              </div>
              <div className={`text-3xl font-bold text-${benefit.color}-400 mb-2`}>{benefit.stat}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-300 text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Automate Section */}
      <section className="container mx-auto px-6 py-16 bg-black/20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🔧 What We Automate
          </h2>
          <p className="text-xl text-gray-300">Ready-to-deploy AI solutions that start working immediately</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: MessageCircle,
              title: "Customer Support Replies",
              description: "WhatsApp, email, and social media auto-replies",
              features: ["24/7 instant responses", "Handles 80% of common questions", "Escalates complex issues to you"],
              setup: "24 hours",
              price: "From P1,500/month"
            },
            {
              icon: BarChart3,
              title: "Social Media Content + Captions",
              description: "Automated content planning and caption generation",
              features: ["Daily content calendar", "Brand-consistent posts", "Engagement-optimized captions"],
              setup: "48 hours",
              price: "From P1,200/month"
            },
            {
              icon: FileText,
              title: "Internal Reports & SOP Generation",
              description: "Turn voice notes into professional documents",
              features: ["Auto-format meeting notes", "Generate SOPs instantly", "Create professional reports"],
              setup: "72 hours",
              price: "From P2,000/month"
            },
            {
              icon: Wrench,
              title: "Custom Tools (Sales, Inventory, More)",
              description: "Tailored automation solutions for your business",
              features: ["Custom business workflows", "Real-time dashboards", "Automated notifications"],
              setup: "1-2 weeks",
              price: "From P3,500/month"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-lg mb-4">{service.description}</p>
                  <div className="flex gap-2 mb-4">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Setup: {service.setup}
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                      {service.price}
                    </Badge>
                  </div>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={handleCalendlyClick}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600"
              >
                Book Free Consultation
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            📞 Ready to see how we can automate your business?
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Get a <strong className="text-green-400">free AI automation consultation</strong> today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={handleCalendlyClick}
              className="bg-gradient-to-r from-green-600 to-green-500 text-xl px-12 py-6 hover:scale-105 transition-transform"
            >
              <Calendar className="h-6 w-6 mr-3" />
              Book Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => handleWhatsAppClick()}
              className="text-white border-white/20 text-xl px-12 py-6 hover:bg-white/10"
            >
              <MessageCircle className="h-6 w-6 mr-3" />
              WhatsApp: +267 759 81075
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center text-gray-300">
              <Shield className="h-8 w-8 text-green-400 mr-4" />
              <div>
                <div className="font-semibold text-white">100% Risk-Free</div>
                <div className="text-sm">Money-back guarantee</div>
              </div>
            </div>
            <div className="flex items-center justify-center text-gray-300">
              <Users className="h-8 w-8 text-blue-400 mr-4" />
              <div>
                <div className="font-semibold text-white">50+ Happy Clients</div>
                <div className="text-sm">Across Botswana</div>
              </div>
            </div>
            <div className="flex items-center justify-center text-gray-300">
              <Zap className="h-8 w-8 text-purple-400 mr-4" />
              <div>
                <div className="font-semibold text-white">Fast Results</div>
                <div className="text-sm">Working in 24-48 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6 py-16 bg-black/30">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Get Your Free Automation Consultation</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Tell us about your biggest time-wasters and we'll show you exactly how to automate them.
              No sales pitch – just a genuine assessment of how AI can help your business.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Calendar className="h-6 w-6 mr-4 text-purple-400" />
                <button onClick={handleCalendlyClick} className="text-lg hover:text-white transition-colors">
                  Book via Calendly: calendly.com/otengbless
                </button>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-6 w-6 mr-4 text-purple-400" />
                <a href="mailto:info@smarttech-bw.com" className="text-lg hover:text-white transition-colors">
                  info@smarttech-bw.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-6 w-6 mr-4 text-purple-400" />
                <button onClick={handlePhoneCall} className="text-lg hover:text-white transition-colors">
                  +267 759 81075
                </button>
              </div>
              <div className="flex items-center text-gray-300">
                <MessageCircle className="h-6 w-6 mr-4 text-purple-400" />
                <button onClick={() => handleWhatsAppClick()} className="text-lg hover:text-white transition-colors">
                  WhatsApp: +267 759 81075
                </button>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-6 w-6 mr-4 text-purple-400" />
                <span className="text-lg">Gaborone, Botswana</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">What's eating up your time?</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">WhatsApp *</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+267 ..."
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-2">Business Type *</label>
                <input
                  type="text"
                  id="business"
                  value={formData.business}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., Restaurant, Retail, Consulting"
                  required
                />
              </div>
              <div>
                <label htmlFor="tasks" className="block text-sm font-medium text-gray-300 mb-2">Biggest Time-Wasters</label>
                <textarea
                  id="tasks"
                  rows={4}
                  value={formData.tasks}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="What repetitive tasks take up most of your time? (e.g., answering same questions, writing reports, posting on social media...)"
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-lg py-4 hover:scale-105 transition-transform">
                <ArrowRight className="h-5 w-5 mr-2" />
                Send WhatsApp Message
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
            <button onClick={handleCalendlyClick} className="text-gray-300 hover:text-white transition-colors">
              <Calendar className="h-6 w-6" />
            </button>
            <button onClick={() => handleWhatsAppClick()} className="text-gray-300 hover:text-white transition-colors">
              <MessageCircle className="h-6 w-6" />
            </button>
            <a href="mailto:info@smarttech-bw.com" className="text-gray-300 hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <button onClick={handlePhoneCall} className="text-gray-300 hover:text-white transition-colors">
              <Phone className="h-6 w-6" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
