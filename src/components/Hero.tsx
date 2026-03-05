import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Instagram } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-radial)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground tracking-wide">Hola, soy</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gradient" >Gabriel Monroy</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground/90">
              Desarrollador Web
            </h2>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Creo experiencias web excepcionales con código limpio y diseño moderno.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contact" className="flex items-center gap-2">
                Contáctame
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                <a 
                  href="/CVespañol.pdf" 
                  download="CVespañol.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Descargar CV
                </a>
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center pt-8">
            <a 
              href="https://github.com/gabriel72188" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/gabriel-monroy-600b3a348" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/gaabriel_xlz/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
