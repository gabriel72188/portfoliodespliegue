import { useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  // Reemplaza la lógica de emailjs por esta:
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) alert("¡Mensaje guardado en la base de datos!");
  } catch (error) {
    alert("Error al conectar con el servidor");
  }
};

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Ponte en <span className="text-gradient">Contacto</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">¡Hablemos!</h3>
              <p className="text-muted-foreground leading-relaxed">
                Estoy siempre abierto a nuevas oportunidades y colaboraciones.
                Si tienes un proyecto en mente o simplemente quieres saludar,
                no dudes en contactarme.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">gabrielmq1205@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p className="font-medium">+34 622 266 371</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="font-medium">Almería, España</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-6 bg-card border-border">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nombre
                </label>
                <Input
                  id="name"
                  name="nombre"
                  placeholder="Tu nombre"
                  className="bg-background border-border"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-background border-border"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="mensaje" 
                  placeholder="Tu mensaje..."
                  className="bg-background border-border min-h-[150px]"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Enviar mensaje 99
              </Button>
            </form>
          </Card> 
        </div>
      </div>
    </section>
  );
};