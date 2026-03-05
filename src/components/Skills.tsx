import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Palette } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Frontend",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    icon: Database,
    title: "Backend",
    technologies: ["Node.js", "MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    icon: Globe,
    title: "DevOps & Tools",
    technologies: ["Git", "Docker", "Linux","Vercel"],
  },
  {
    icon: Palette,
    title: "Design",
    technologies: ["Figma", "Responsive Design", "Accessibility"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Habilidades <span className="text-gradient">&</span> Tecnologías
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
