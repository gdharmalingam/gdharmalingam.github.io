import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "M.E. Aerospace Engineering",
      institution: "Indian Institute of Science",
      location: "Bangalore, IN",
      year: "June 2010",
      grade: "First Class (CGPA: 6.2/8.0)",
      description: "Specialized in aerospace engineering with focus on computational fluid dynamics and aerodynamics. Strong foundation in engineering analysis and simulation techniques."
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation that provided the theoretical knowledge for my engineering career.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="bg-gradient-card border-border hover:shadow-accent transition-all duration-300 max-w-2xl w-full">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground mb-2">
                      {education[0].degree}
                    </CardTitle>
                    <h4 className="text-lg font-semibold text-primary">
                      {education[0].institution}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="space-y-2 mt-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {education[0].location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {education[0].year}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  {education[0].grade}
                </Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {education[0].description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;