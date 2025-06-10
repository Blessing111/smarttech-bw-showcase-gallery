
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  { name: 'React', level: 95, color: 'bg-blue-500' },
  { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
  { name: 'Node.js', level: 85, color: 'bg-green-500' },
  { name: 'Python', level: 88, color: 'bg-yellow-500' },
  { name: 'Database Design', level: 82, color: 'bg-purple-500' },
  { name: 'UI/UX Design', level: 78, color: 'bg-pink-500' },
];

export const SkillsSection = () => {
  const [animatedSkills, setAnimatedSkills] = useState<number[]>(new Array(skills.length).fill(0));
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate skill bars
          skills.forEach((skill, index) => {
            setTimeout(() => {
              let current = 0;
              const increment = skill.level / 50;
              const timer = setInterval(() => {
                current += increment;
                if (current >= skill.level) {
                  current = skill.level;
                  clearInterval(timer);
                }
                setAnimatedSkills(prev => {
                  const newSkills = [...prev];
                  newSkills[index] = current;
                  return newSkills;
                });
              }, 20);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={ref} className="py-16">
      <Card className="bg-white/10 border-white/20">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-white text-center mb-8">
            Technical Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-white">
                  <span className="font-medium">{skill.name}</span>
                  <span>{Math.round(animatedSkills[index])}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${animatedSkills[index]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
