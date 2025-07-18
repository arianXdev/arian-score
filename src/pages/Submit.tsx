import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, FileText, Users, Award } from "lucide-react";

export default function Submit() {
  const benefits = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Transparent Review Process",
      description: "All reviews and scores will be published with your manuscript"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Expert Reviewers",
      description: "Matched with the most qualified reviewers in your field"
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Author Control",
      description: "You decide whether to publish, revise, or withdraw"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Submit Your Manuscript
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
            Join the decentralized academic publishing revolution. Submit your research for transparent peer review.
          </p>
          <div className="bg-primary/20 rounded-lg p-4 inline-block">
            <p className="text-primary-foreground font-semibold">
              🎉 FREE submissions during 2025 for new users!
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                Manuscript Submission Form
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Author Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="affiliation">Institutional Affiliation</Label>
                    <Input id="affiliation" />
                  </div>
                </div>

                {/* Manuscript Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Manuscript Details</h3>
                  <div>
                    <Label htmlFor="title">Manuscript Title *</Label>
                    <Input id="title" required />
                  </div>
                  <div>
                    <Label htmlFor="abstract">Abstract *</Label>
                    <Textarea 
                      id="abstract" 
                      placeholder="Provide a comprehensive abstract of your research..."
                      className="min-h-[120px]"
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="keywords">Keywords *</Label>
                    <Input 
                      id="keywords" 
                      placeholder="Enter 5-10 keywords separated by commas"
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Research Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select primary research category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="biological-sciences">Biological Sciences</SelectItem>
                        <SelectItem value="physical-sciences">Physical Sciences</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="social-sciences">Social Sciences</SelectItem>
                        <SelectItem value="humanities">Humanities</SelectItem>
                        <SelectItem value="interdisciplinary">Interdisciplinary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* File Upload */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Manuscript Files</h3>
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">
                      Drag and drop your manuscript file here, or click to browse
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Supported formats: PDF, DOC, DOCX (Max size: 25MB)
                    </p>
                    <Button variant="outline" className="border-primary/40">
                      Choose File
                    </Button>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Additional Information</h3>
                  <div>
                    <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                    <Textarea 
                      id="coverLetter" 
                      placeholder="Provide any additional context or information for reviewers..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="suggestedReviewers">Suggested Reviewers (Optional)</Label>
                    <Textarea 
                      id="suggestedReviewers" 
                      placeholder="Suggest potential reviewers (name, email, affiliation)..."
                      className="min-h-[80px]"
                    />
                  </div>
                </div>

                {/* Agreements */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Agreements</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="original" />
                      <Label htmlFor="original" className="text-sm leading-5">
                        I confirm that this manuscript represents original work and has not been published elsewhere.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="transparent" />
                      <Label htmlFor="transparent" className="text-sm leading-5">
                        I understand that all reviews and scores will be published transparently alongside my manuscript if I choose to publish.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm leading-5">
                        I agree to the ArianScore Terms of Service and Privacy Policy.
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 text-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary text-primary-foreground px-12 py-3 text-lg hover:shadow-glow"
                  >
                    Submit Manuscript
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Your manuscript will be reviewed within 4-6 weeks
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}