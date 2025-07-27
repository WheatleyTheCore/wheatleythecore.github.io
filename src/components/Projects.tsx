import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
    const projects = [
        {
            title: "SateLights",
            description:
                "A data physicalization of of the stars, planets, and earth's satellites. Has a display server that controls a LED matrix on our living room ceiling, with both web (React + Vite), Mobile (React Native), and on-device (Python + Ursina) interactive simulation options.",
            technologies: [
                "React",
                "Node.js",
                "Three.js",
                "Vite",
                "React Native",
                "Ursina",
            ],
            liveUrl: "https://wheatleythecore.github.io/satelights/",
            githubUrl:
                "https://github.com/WheatleyTheCore/satelights/tree/main",
        },
        {
            title: "GrooveBox",
            description:
                "A resesarch project in WPI's Music Perception and Robotics Lab, doing real-time drum orchestration from a hand-tapped rhythm on a physical device. Makes use of Google Magenta's GrooVAE model made available through a small OSC server. This project is projected to become a published paper in winter of 2025.",
            technologies: [
                "Embedded Systems",
                "Onset Detection",
                "PyTorch",
                "Pure Data",
                "React Native",
            ],
            githubUrl: "https://github.com/WheatleyTheCore/Groovebox",
        },
        {
            title: "Calenday (AKA WPI's Workday Calendar Generator)",
            description:
                "A small web application created during WPI's Goat Hacks 48-hour hackathon, which takes exported course schedules and exports calendar-consumable files to streamline getting courses into outlook. WPI's Academic Research & Computing team now hosts this web app for use by WPI students.",
            technologies: ["React", "Material UI", "WPI Cloud Servers"],
            liveUrl: "https://workday-calendar-generator.wpi.edu/",
            githubUrl: "https://github.com/WheatleyTheCore/Calanday",
        },
        {
            title: "Logic Analyzer",
            description:
                "A logic analyzer built using the MC9S08SH8 microprocessor. This was created enable real-time, dynamic baud rate detection for circuit hacking on an incredibly tight budget.",
            technologies: ["Processor Expert", "Kicad", "Embedded C"],
            githubUrl: "https://github.com/WheatleyTheCore/Logic-Analyzer",
        },
    ];

    return (
        <section id="projects" className="container mx-auto px-4 py-20">
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-[600px] mx-auto">
                        A selection of side projects that showcase my skills and
                        experience. Unfortunately doesn't include professional
                        projects, where most of my time is spent.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="flex flex-col">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map(
                                        (tech, techIndex) => (
                                            <Badge
                                                key={techIndex}
                                                variant="secondary"
                                            >
                                                {tech}
                                            </Badge>
                                        )
                                    )}
                                </div>
                                <div className="flex gap-3 mt-auto">
                                    {project.liveUrl ? (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                        >
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Live Site
                                            </a>
                                        </Button>
                                    ) : (
                                        <></>
                                    )}

                                    <Button variant="outline" size="sm" asChild>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="mr-2 h-4 w-4" />
                                            Code
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
