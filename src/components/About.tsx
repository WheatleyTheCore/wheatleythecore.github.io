import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function About() {
  const highlights = [
    "5 years of experience",
    "Full-stack",
    "System Administration",
    "Rapid Prototyping",
  ];

  return (
    <section id="about" className="container mx-auto px-4 py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl">About Me</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p>
              Hi! I'm Violet, a full-stack developer with over 5 years of experience building 
              web applications. I specialize in React, NextJS, and Node.js, but I'm always excited to dig into new technologies.
            </p>
            
            <p>
              Outside of work, I write music, do instrument repair/restoration/maintenance (mostly guitars and basses, sometimes pianos and others), bookbinding, inkmaking, and a million other things. 
              I'm passionate about accessability and inclusivity both in and out of the office, and believe that we work best together everyone feels seen.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Badge key={index} variant="secondary" className="justify-center py-2">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3>Current Focus</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Building scalable web applications with NextJS</li>
                  <li>• Exploring embedded machine learning</li>
                  <li>• Creating data analysis and presentation tools </li>
                  <li>• System administration in both physical and cloud settings.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}