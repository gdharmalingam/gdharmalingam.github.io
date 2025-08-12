import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2022 - Present",
      description: "Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices for code quality and performance.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Innovations Ltd.",
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client-facing applications. Collaborated with design teams to implement responsive user interfaces and optimized backend APIs for better performance.",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Git", "Jest"]
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Studio",
      location: "San Francisco, CA",
      period: "2018 - 2020",
      description: "Focused on creating engaging user experiences and responsive web designs. Worked closely with UX designers to implement pixel-perfect designs and improve site performance.",
      technologies: ["JavaScript", "React", "CSS3", "Webpack", "Sass", "Figma"]
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      location: "Austin, TX",
      period: "2017 - 2018",
      description: "Started my professional journey building web applications and learning industry best practices. Contributed to multiple projects and gained experience in full-stack development.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the valuable experiences that shaped my development career.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-primary h-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                <Card className={`bg-gradient-card border-border hover:shadow-accent transition-all duration-300 w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                }`}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl text-foreground">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-primary">
                        {exp.company}
                      </h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;