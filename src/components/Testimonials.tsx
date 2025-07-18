import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      title: "Professor of Computer Science",
      institution: "Stanford University",
      quote: "ArianScore empowers researchers to publish their findings without being barred by reasons unrelated to the quality of their contribution. Over time published studies will become representative of the studies being done, not just those studies being chosen by editors.",
      avatar: "SC"
    },
    {
      name: "Dr. Michael Rodriguez",
      title: "Research Director",
      institution: "MIT",
      quote: "The transparent review process and scoring system in ArianScore provides unprecedented insight into the quality and validity of research. It's revolutionizing how we think about academic publishing.",
      avatar: "MR"
    },
    {
      name: "Prof. Emily Johnson",
      title: "Chair of Biology Department",
      institution: "Harvard University",
      quote: "As a reviewer, the incentive system in ArianScore motivates me to provide thorough, constructive feedback. The peer evaluation system ensures quality and accountability.",
      avatar: "EJ"
    },
    {
      name: "Dr. Ahmed Hassan",
      title: "Principal Investigator",
      institution: "Oxford University",
      quote: "The keyword-based tagging system eliminates artificial barriers between disciplines. My interdisciplinary research finally has a proper platform for publication and review.",
      avatar: "AH"
    },
    {
      name: "Dr. Lisa Zhang",
      title: "Senior Researcher",
      institution: "UC Berkeley",
      quote: "The post-publication review feature for external papers is brilliant. It allows us to build upon and critique existing research in a structured, transparent manner.",
      avatar: "LZ"
    },
    {
      name: "Prof. David Thompson",
      title: "Department Head",
      institution: "Cambridge University",
      quote: "ArianScore's decentralized approach removes editorial bias and gives authors the control they deserve. The rating system provides readers with valuable context about research quality.",
      avatar: "DT"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What do Scholars Say?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading researchers and academics share their experiences with ArianScore's revolutionary approach to academic publishing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-card border-primary/20 hover:border-primary/40 h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <blockquote className="text-muted-foreground italic leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                
                <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-muted">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {testimonial.avatar}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {testimonial.institution}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join the Revolution in Academic Publishing
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Be part of a transparent, fair, and decentralized academic community that values quality research over editorial preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300">
                Submit Your Research
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-all duration-300">
                Become a Reviewer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}