import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Eye, Globe } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Transparency",
      description: "All reviews, scores, and comments are transparent and accessible to readers, promoting accountability in academic publishing."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Decentralization",
      description: "No editorial gatekeepers deciding what gets published. Authors maintain control over their research and publication decisions."
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Quality Assessment",
      description: "Comprehensive peer review and rating system ensures research quality while maintaining transparent evaluation criteria."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Accessibility",
      description: "Open access to research from all disciplines and regions, breaking down traditional academic barriers."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            About ArianScore
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Revolutionizing academic publishing through transparency, decentralization, and fair peer review.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ArianScore was created to address the fundamental flaws in traditional academic publishing. 
              We believe that research quality should be determined by transparent peer review and community 
              evaluation, not by editorial preferences or institutional bias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground">
                      {value.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">How ArianScore Works</h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-foreground mb-4">1. Manuscript Submission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Authors submit their research manuscripts directly to ArianScore. There are no editorial 
                  barriers based on subjective scope decisions. Any research from any field is welcome.
                </p>
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-reverse md:space-x-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-foreground mb-4">2. Reviewer Assignment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our algorithm uses keywords, references, and the academic network to identify and invite 
                  the most qualified reviewers for each manuscript, ensuring expert evaluation.
                </p>
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-foreground mb-4">3. Transparent Review</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reviewers provide detailed feedback and scores. All reviews are transparent and will be 
                  published alongside the manuscript, promoting accountability and constructive criticism.
                </p>
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-reverse md:space-x-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-foreground mb-4">4. Author Decision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Based on reviewer feedback and scores, authors decide whether to publish, revise, or 
                  withdraw their manuscript. If published, the research appears with all reviews and scores.
                </p>
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}