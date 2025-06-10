
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "SmartTech BW delivered an exceptional web application that exceeded our expectations. Their attention to detail and technical expertise is outstanding.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCorp",
    content: "Working with SmartTech BW was a game-changer for our project. They delivered on time and the quality was exceptional.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, StartupHub",
    content: "The mobile app developed by SmartTech BW has revolutionized how our customers interact with our platform. Highly recommended!",
    rating: 5
  }
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        What Clients Say
      </h2>
      <div className="relative max-w-4xl mx-auto">
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-300 mb-6 italic">
                "{testimonials[currentIndex].content}"
              </blockquote>
              <div className="text-white">
                <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-gray-400">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/10 border-white/20 hover:bg-white/20"
        >
          <ChevronLeft className="h-4 w-4 text-white" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/10 border-white/20 hover:bg-white/20"
        >
          <ChevronRight className="h-4 w-4 text-white" />
        </Button>
        
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-purple-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
