import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Material UI", "Magento"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "MySQL", "MariaDB", "MongoDB", "Laravel"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "Promox", "GitHub Actions", "Nginx", "System Administration", "Creating Custom Tooling", "Postman"]
    },
    {
      title: "Design",
      skills: ["Figma", "Responsive Design", "UI/UX", "Accessibility", "Design Systems", "Feature-Sliced Design"]
    }
  ];

  return (
    <section id="skills" className="container mx-auto px-4 py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Everything from the DOM to the server
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}