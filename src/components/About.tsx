import { Card } from "@/components/ui/card";

const technologies = [
  "React", 
  "TypeScript", 
  "Node.js", 
  "Tailwind CSS", 
  "Git",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "HTML5",
  "CSS",
  "JavaScript",
];

const scrollAnimationCss = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    /* Movemos el 50% porque hemos duplicado la lista */
    100% { transform: translateX(-50%); }
  }
  .animate-tech-scroll {
    /* Ajusta '30s' para cambiar la velocidad (más s = más lento) */
    animation: scroll 30s linear infinite;
  }
`;
export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Sobre <span className="text-gradient">Mí</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy un desarrollador web Junior apasionado por el código limpio
               y las buenas prácticas. Actualmente desarrollo soluciones web 
               modernas profundizando en el ecosistema de JavaScript, especialmente
                con React y TypeScript.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Busco una oportunidad para aplicar mis conocimientos en un entorno
               profesional y aportar valor desde el primer momento. Soy una
               persona proactiva y curiosa, siempre buscando la mejor manera
               de solucionar los retos técnicos que se presentan.
            </p>
            
            <div className="pt-4 -ml-4">
              <style>{scrollAnimationCss}</style>
                <div 
                  className="w-full max-w-xs sm:max-w-sm md:max-w- mx-auto overflow-hidden relative"
                  style={{ 
                    maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" 
                  }}
                >
                  <div className="flex w-max animate-tech-scroll">
                    {[...technologies, ...technologies].map((tech, index) => (
                      <span
                        key={`${tech}-${index}`}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mx-2 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
          </div>
          
          <Card className="p-8 bg-card border-border">
            <div className="space-y-6">
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Educación</h3>
                <p className="text-muted-foreground">Cursando grado superior de desarrollo de aplicaciones web</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Ubicación</h3>
                <p className="text-muted-foreground">Almería, España</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
