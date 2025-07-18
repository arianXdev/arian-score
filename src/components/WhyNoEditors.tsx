import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, FileCheck, Award } from "lucide-react";

export function WhyNoEditors() {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      traditional: "Editors decide if a submission falls under the scope of the journal.",
      arianscore: "ArianScore does not follow traditional categorizations based on disciplines, but rather uses keywords to \"tag\" papers, so any manuscript can be published in ArianScore."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      traditional: "Editors find and assign reviewers for a submitted manuscript.",
      arianscore: "ArianScore uses keywords, references, an incentive system and the small world phenomenon to find and acquire the most suitable reviewers for each manuscript."
    },
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      traditional: "Editors decide to reject or accept a manuscript.",
      arianscore: "ArianScore lets authors decide whether to release, revise or withdraw their manuscript, but if released, it is published with the reviewer comments and median rating scores."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      traditional: "Editors judge and evaluate the reviewers' works and contributions.",
      arianscore: "ArianScore acknowledges accurate and timely reviews through reviewer points. Reviewers are evaluated against each other and by the authors and the readers."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why No Editors?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional academic publishing relies heavily on editors. ArianScore revolutionizes this approach 
            with a decentralized, transparent system.
          </p>
        </div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Card className="bg-muted/50 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Traditional Approach
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.traditional}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/40 shadow-primary">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-primary/20 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        ArianScore Solution
                      </h3>
                      <p className="text-foreground">
                        {feature.arianscore}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}