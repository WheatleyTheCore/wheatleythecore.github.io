import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {  
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript, and shadcn/ui
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:Violet@example.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/WheatleyTheCore" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/violet-colwell-852593179/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}