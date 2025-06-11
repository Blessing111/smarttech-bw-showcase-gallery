
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Mail, Phone, MapPin, Settings, Clock, DollarSign, TrendingUp, MessageCircle, BarChart3, FileText, Wrench, CheckCircle, Star, ArrowRight, Zap, Users, Target, Shield, Bot, Calendar, AlertTriangle } from "lucide-react";
import { useProjects } from "@/hooks/useProjects";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import SocialShare from "@/components/SocialShare";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const { data: projects, isLoading } = useProjects();
  const featuredProjects = projects?.filter(project => project.featured) || [];
  const { toast } = useToast();
  
  // Countdown state - loops every 24 hours with micro-animations
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Animation states for countdown
  const [isUrgent, setIsUrgent] = useState(false);
  const [offersLeft] = useState(3); // Updated to match copy
  const [pulseButton, setPulseButton] = useState(false);

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
  const [showLeadForm, setShowLeadForm] = useState(false);

  // Countdown timer effect with urgency detection
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        // Add urgency when less than 1 hour left
        if (prev.hours === 0 && prev.minutes < 60) {
          setIsUrgent(true);
        }
        
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 24 hours when countdown reaches 0
          setIsUrgent(false);
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Button pulse effect
  useEffect(() => {
    const pulseTimer = setInterval(() => {
      setPulseButton(true);
      setTimeout(() => setPulseButton(false), 1000);
    }, 3000);

    return () => clearInterval(pulseTimer);
  }, []);

  // Handle Calendly booking
  const handleCalendlyClick = () => {
    window.open(calendlyUrl, '_blank');
    toast({
      title: "Opening Calendly",
      description: "Book your exclusive consultation now!",
    });
  };

  // Handle WhatsApp button clicks
  const handleWhatsAppClick = (message = "") => {
    const defaultMessage = "Claiming SmartTech BW elite revamp. Let's get started immediately.";
    const encodedMessage = encodeURIComponent(message || defaultMessage);
    window.open(`${whatsappUrl}?text=${encodedMessage}`, '_blank');
    
    toast({
      title: "Opening WhatsApp",
      description: "We'll respond within 2 minutes!",
    });
  };

  // Handle phone calls
  const handlePhoneCall = () => {
    window.open(`tel:+${whatsappNumber}`, '_self');
    toast({
      title: "Calling SmartTech BW",
      description: "Elite automation experts ready!",
    });
  };

  // Handle lead capture form
  const handleLeadCapture = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast({
        title: "Name and phone required",
        description: "We need these to secure your spot.",
        variant: "destructive"
      });
      return;
    }

    const message = `PRIORITY LEAD: ${formData.name} from ${formData.business || 'unlisted business'}. 

Phone: ${formData.phone}
Main challenge: ${formData.tasks || 'General automation needs'}

Ready to book consultation immediately.`;

    handleWhatsAppClick(message);
    setShowLeadForm(false);
    setFormData({ name: '', phone: '', business: '', tasks: '' });
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
      {/* Enhanced Navigation */}
      <Navigation />

      {/* Hero Section with ID for navigation */}
      <section id="home" className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-24 flex flex-col items-center text-center">
        {/* Enhanced Trust Badges */}
        <div className="flex flex-wrap gap-2 mb-4 md:mb-6 justify-center">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 animate-pulse text-xs md:text-sm">
            🏆 Botswana's #1
          </Badge>
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs md:text-sm">
            ⚡ 24hr Results
          </Badge>
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs md:text-sm">
            🤖 AI-Powered
          </Badge>
        </div>
        
        {/* Tightened hero copy - under 20 words */}
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
          Only <span className="text-green-400">{offersLeft} Elite Brands</span> Qualify.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Claim Yours Before Time Runs Out.</span>
        </h1>

        {/* Enhanced CTA Section with Micro-animations */}
        <div className={`bg-gradient-to-r from-orange-500/20 to-red-500/20 border-2 border-orange-500/40 rounded-2xl p-6 md:p-8 mb-6 md:mb-8 max-w-4xl relative overflow-hidden ${isUrgent ? 'animate-pulse border-red-500/60' : ''}`}>
          {/* Animated background pulse */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 animate-pulse"></div>
          
          <div className="relative z-10 text-center mb-4 md:mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              {isUrgent && <AlertTriangle className="h-5 w-5 text-red-400 animate-bounce" />}
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                🔥 Only {offersLeft} Exclusive Spots Left
              </h2>
              {isUrgent && <AlertTriangle className="h-5 w-5 text-red-400 animate-bounce" />}
            </div>
            <p className="text-lg md:text-xl text-gray-300">
              When this timer hits zero, so does your chance.
            </p>
          </div>
          
          {/* Enhanced Countdown Timer with animations */}
          <div className="bg-black/50 rounded-lg p-4 md:p-6 mb-6 md:mb-8 inline-block border border-red-500/30">
            <div className="text-sm text-gray-300 mb-2 flex items-center justify-center gap-2">
              <Clock className="h-4 w-4 animate-pulse" />
              Offer expires in:
            </div>
            <div className="flex gap-2 md:gap-4 text-center">
              <div className={`bg-red-500/30 rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px] border border-red-500/50 ${timeLeft.hours === 0 && timeLeft.minutes < 10 ? 'animate-pulse border-red-400' : ''}`}>
                <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-xs md:text-sm text-gray-300">Hours</div>
              </div>
              <div className={`bg-red-500/30 rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px] border border-red-500/50 ${timeLeft.hours === 0 && timeLeft.minutes < 10 ? 'animate-pulse border-red-400' : ''}`}>
                <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-xs md:text-sm text-gray-300">Minutes</div>
              </div>
              <div className="bg-red-500/30 rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px] animate-pulse border border-red-400">
                <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-xs md:text-sm text-gray-300">Seconds</div>
              </div>
            </div>
          </div>

          {/* Primary CTA - Enhanced with animations */}
          <div className="space-y-4">
            {!showLeadForm ? (
              <>
                <Button 
                  size="lg" 
                  onClick={handleCalendlyClick}
                  className={`bg-gradient-to-r from-green-600 to-green-500 text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 hover:scale-110 transition-all duration-300 w-full max-w-md touch-manipulation shadow-2xl ${pulseButton ? 'animate-pulse ring-4 ring-green-400/50' : ''}`}
                >
                  <Calendar className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                  Claim Your Elite Revamp Now
                </Button>
                
                {/* Quick lead capture option */}
                <div className="text-gray-300 text-sm space-y-2">
                  <div>
                    Skip the calendar? 
                    <button 
                      onClick={() => setShowLeadForm(true)}
                      className="text-green-400 hover:text-green-300 ml-2 underline font-semibold"
                    >
                      Fast-track here
                    </button>
                  </div>
                  <div>
                    Or instant WhatsApp: 
                    <button 
                      onClick={() => handleWhatsAppClick()}
                      className="text-blue-400 hover:text-blue-300 ml-2 underline"
                    >
                      Message now
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-black/40 rounded-lg p-6 max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-white mb-4">Secure Your Spot (30 seconds)</h3>
                <form onSubmit={handleLeadCapture} className="space-y-4">
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Your name*"
                    required
                  />
                  <Input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="WhatsApp number*"
                    required
                  />
                  <Input
                    type="text"
                    id="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Business type (optional)"
                  />
                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-500">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Secure Spot
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowLeadForm(false)}
                      className="text-white border-white/20"
                    >
                      Back
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Social Proof with TikTok metrics */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 max-w-4xl mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-lg font-semibold text-white mb-1">50+ Elite Clients</div>
              <div className="text-gray-300 text-sm">"Botswana's most trusted automation experts"</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-2">📈</div>
              <div className="text-lg font-semibold text-green-400 mb-1">18M+ TikTok Views</div>
              <div className="text-gray-300 text-sm">Premium content that converts</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-lg font-semibold text-blue-400 mb-1">24hr Turnaround</div>
              <div className="text-gray-300 text-sm">While others take weeks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section with ID */}
      <section id="services" className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            📈 Why Choose AI Automation?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Stop wasting time on repetitive tasks. Let AI work for you 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
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
            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-${benefit.color}-500/20 flex items-center justify-center mx-auto mb-4 md:mb-6`}>
                <benefit.icon className={`h-6 w-6 md:h-8 md:w-8 text-${benefit.color}-400`} />
              </div>
              <div className={`text-2xl md:text-3xl font-bold text-${benefit.color}-400 mb-2`}>{benefit.stat}</div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">{benefit.title}</h3>
              <p className="text-gray-300 text-base md:text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Automate Section */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-16 bg-black/20">
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
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">
            📞 Ready to see how we can automate your business?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 md:mb-12">
            Get a <strong className="text-green-400">free AI automation consultation</strong> today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-8 md:mb-12">
            <Button 
              size="lg" 
              onClick={handleCalendlyClick}
              className="bg-gradient-to-r from-green-600 to-green-500 text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 hover:scale-105 transition-transform touch-manipulation"
            >
              <Calendar className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
              Book Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => handleWhatsAppClick()}
              className="text-white border-white/20 text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 hover:bg-white/10 touch-manipulation"
            >
              <MessageCircle className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
              WhatsApp: +267 759 81075
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="flex items-center justify-center text-gray-300">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-green-400 mr-3 md:mr-4" />
              <div>
                <div className="font-semibold text-white text-sm md:text-base">100% Risk-Free</div>
                <div className="text-xs md:text-sm">Money-back guarantee</div>
              </div>
            </div>
            <div className="flex items-center justify-center text-gray-300">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-blue-400 mr-3 md:mr-4" />
              <div>
                <div className="font-semibold text-white text-sm md:text-base">50+ Happy Clients</div>
                <div className="text-xs md:text-sm">Across Botswana</div>
              </div>
            </div>
            <div className="flex items-center justify-center text-gray-300">
              <Zap className="h-6 w-6 md:h-8 md:w-8 text-purple-400 mr-3 md:mr-4" />
              <div>
                <div className="font-semibold text-white text-sm md:text-base">Fast Results</div>
                <div className="text-xs md:text-sm">Working in 24-48 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Contact Form Section with ID */}
      <section id="contact" className="container mx-auto px-4 md:px-6 py-12 md:py-16 bg-black/30">
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
            
            {/* Social Share Component */}
            <div className="mt-8">
              <SocialShare />
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">What's eating up your time?</h3>
            <form onSubmit={handleLeadCapture} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Your name*"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">WhatsApp *</label>
                  <Input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="+267 ..."
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-2">Business Type *</label>
                <Input
                  type="text"
                  id="business"
                  value={formData.business}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="e.g., Restaurant, Retail, Consulting"
                  required
                />
              </div>
              <div>
                <label htmlFor="tasks" className="block text-sm font-medium text-gray-300 mb-2">Biggest Time-Wasters</label>
                <Textarea
                  id="tasks"
                  rows={4}
                  value={formData.tasks}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="What repetitive tasks take up most of your time? (e.g., answering same questions, writing reports, posting on social media...)"
                />
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
      <footer className="container mx-auto px-4 md:px-6 py-8 md:py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 mb-4 md:mb-0 text-center md:text-left text-sm md:text-base">
            © {new Date().getFullYear()} SmartTech BW. Automating Botswana's elite businesses.
          </div>
          <div className="flex gap-4">
            <button onClick={handleCalendlyClick} className="text-gray-300 hover:text-white transition-colors touch-manipulation">
              <Calendar className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button onClick={() => handleWhatsAppClick()} className="text-gray-300 hover:text-white transition-colors touch-manipulation">
              <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <a href="mailto:info@smarttech-bw.com" className="text-gray-300 hover:text-white transition-colors">
              <Mail className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <button onClick={handlePhoneCall} className="text-gray-300 hover:text-white transition-colors touch-manipulation">
              <Phone className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
