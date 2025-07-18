import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, PenTool, Star, Mail } from "lucide-react";

export function WhoIsArianScoreFor() {
  const userTypes = [
    {
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      title: "Readers",
      description: "You get free access to many professional and academic articles accompanied with reviewer comments and rating scores. You can also leave comments under articles and be acknowledged for your insights.",
      ctaText: "Subscribe",
      ctaAction: "subscribe"
    },
    {
      icon: <PenTool className="h-12 w-12 text-primary" />,
      title: "Authors",
      description: "You can submit one manuscript for free during 2025. Your submission can be reviewed and rated anonymously by experts and then can be published at no cost if you decide to release it with the review results attached to it.",
      ctaText: "Submit",
      ctaAction: "submit"
    },
    {
      icon: <Star className="h-12 w-12 text-primary" />,
      title: "Reviewers",
      description: "You can get recognition with Reviewer Points for your accurate reviews and rating scores. You can also earn points just by referring manuscripts to expert reviewers. The highest reviewer points will be publicized on the website.",
      ctaText: "Review",
      ctaAction: "review"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Who is ArianScore for?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ArianScore serves the entire academic community with tailored experiences for every role.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((userType, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-card border-primary/20 hover:border-primary/40">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {userType.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {userType.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {userType.description}
                </p>
                
                {userType.ctaAction === "subscribe" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Subscribe</h4>
                      <p className="text-sm text-muted-foreground">Receive new papers with a free subscription.</p>
                    </div>
                    <div className="flex space-x-2">
                      <Input 
                        type="email" 
                        placeholder="Your email"
                        className="flex-1"
                      />
                      <Button size="sm" className="bg-gradient-primary">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      By subscribing you agree to our Privacy Policy and Terms of Use.
                    </p>
                  </div>
                )}
                
                {userType.ctaAction === "submit" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Submit</h4>
                      <p className="text-sm text-muted-foreground">Please register to submit a manuscript:</p>
                    </div>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full border-primary/40 hover:bg-primary/5">
                        Continue with LinkedIn
                      </Button>
                      <Button variant="outline" className="w-full border-primary/40 hover:bg-primary/5">
                        Continue with Google
                      </Button>
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t border-muted" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-card px-2 text-muted-foreground">or</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Input 
                          type="email" 
                          placeholder="Enter email"
                          className="flex-1"
                        />
                        <Button size="sm" className="bg-gradient-primary">
                          Register
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                
                {userType.ctaAction === "review" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Review</h4>
                      <p className="text-sm text-muted-foreground">Please register to receive review invitations:</p>
                    </div>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full border-primary/40 hover:bg-primary/5">
                        Continue with LinkedIn
                      </Button>
                      <Button variant="outline" className="w-full border-primary/40 hover:bg-primary/5">
                        Continue with Google
                      </Button>
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t border-muted" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-card px-2 text-muted-foreground">or</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Input 
                          type="email" 
                          placeholder="Enter email"
                          className="flex-1"
                        />
                        <Button size="sm" className="bg-gradient-primary">
                          Register
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}