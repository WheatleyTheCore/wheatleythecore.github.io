import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-4 py-10 md:py-32">
      <div className="flex flex-col items-center text-center space-y-6">
        <Badge variant="secondary" className="w-fit">
          Available for new opportunities
        </Badge>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
            Hi, I'm <span className="text-violet-500">Violet</span>.
            <br />
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            I'm a <span className="font-bold">Full Stack Web Developer</span> with a passion for creating accessible, impactful, and responsive web applications.
            Let's build something amazing together.
          </p>

          <p className="text-base text-muted-foreground">I'm secretly also an embedded engineer.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button onClick={scrollToContact} size="lg">
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        <div className="flex items-center space-x-4 pt-6">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/WheatleyTheCore" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/violet-colwell-852593179/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}