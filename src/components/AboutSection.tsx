
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Zap, Trophy, Target, Users, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    { icon: TrendingUp, label: "18M+ TikTok Views", color: "text-green-400" },
    { icon: Users, label: "50+ Elite Clients", color: "text-blue-400" },
    { icon: Zap, label: "24hr Delivery", color: "text-purple-400" },
    { icon: Trophy, label: "Botswana's #1", color: "text-yellow-400" },
  ];

  return (
    <section id="about" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center mb-16">
        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
          Meet the Elite Team
        </Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          The Story Behind SmartTech BW
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          From TikTok viral content to elite business automation - we've mastered the art of making technology work for ambitious brands.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Why We're Different
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Bot className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">AI-First Approach</h4>
                <p className="text-gray-300">
                  We don't just build websites - we create intelligent systems that work 24/7, 
                  handling customer inquiries, generating content, and managing your business processes automatically.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Results-Driven</h4>
                <p className="text-gray-300">
                  Our TikTok content has generated over 18 million views. We apply the same 
                  viral growth strategies to make your business stand out in Botswana's competitive market.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Lightning Fast</h4>
                <p className="text-gray-300">
                  While others take weeks or months, we deliver working automation systems in 24-48 hours. 
                  Your competitive advantage can't wait.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Our Track Record</h3>
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-black/30 flex items-center justify-center mx-auto mb-3">
                  <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                </div>
                <div className={`text-lg font-semibold ${achievement.color} mb-1`}>
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <blockquote className="text-center">
              <p className="text-gray-300 italic mb-4">
                "The only automation experts in Botswana who actually understand both technology and business growth."
              </p>
              <cite className="text-sm text-gray-400">- Elite Client Feedback</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
