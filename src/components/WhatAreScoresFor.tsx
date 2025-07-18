import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ExternalLink, Building2, Search, Plus, Eye } from "lucide-react";

export function WhatAreScoresFor() {
  const paperTypes = [
    {
      icon: <FileText className="h-16 w-16 text-primary" />,
      title: "Internal Papers",
      description: "Authors can submit their original research studies to ArianScore. Then reviewers are selected and will review the submitted manuscript before publication.",
      actions: [
        { label: "View More", variant: "default" as const },
        { label: "Review Internal Papers", variant: "outline" as const },
        { label: "Search Papers", variant: "outline" as const },
        { label: "Be a Potential Reviewer", variant: "outline" as const }
      ]
    },
    {
      icon: <ExternalLink className="h-16 w-16 text-primary" />,
      title: "External Papers",
      description: "ArianScore enables reviewing articles that are already published in other journals. These post-publication reviews provide important insights about the published research.",
      actions: [
        { label: "View More", variant: "default" as const },
        { label: "Review External Papers", variant: "outline" as const },
        { label: "Search Papers", variant: "outline" as const },
        { label: "Suggest an External Paper", variant: "outline" as const }
      ]
    },
    {
      icon: <Building2 className="h-16 w-16 text-primary" />,
      title: "Other Journals",
      description: "ArianScore allows users to evaluate and rate other journals in terms of their quality, speed, impartiality, reputation, relevance, governance, etc.",
      actions: [
        { label: "View More", variant: "default" as const },
        { label: "Review Journals", variant: "outline" as const },
        { label: "Search Journals", variant: "outline" as const },
        { label: "Suggest a Journal", variant: "outline" as const }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What are Scores for?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ArianScore provides comprehensive scoring and review systems for different types of academic content.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {paperTypes.map((type, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-card border-primary/20 hover:border-primary/40 h-full flex flex-col">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    {type.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {type.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground leading-relaxed mb-8 text-center">
                  {type.description}
                </p>
                
                <div className="space-y-3 mt-auto">
                  {type.actions.map((action, actionIndex) => (
                    <Button 
                      key={actionIndex} 
                      variant={action.variant}
                      className={`w-full ${action.variant === 'default' ? 'bg-gradient-primary hover:shadow-primary' : 'border-primary/40 hover:bg-primary/5'}`}
                      size="sm"
                    >
                      {action.label}
                    </Button>
                  ))}
                  
                  {index < paperTypes.length - 1 && (
                    <div className="text-center py-2">
                      <span className="text-sm text-muted-foreground">or</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional features section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-3 p-4 bg-muted/50 rounded-lg">
              <Search className="h-6 w-6 text-primary" />
              <span className="font-medium text-foreground">Advanced Search</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-muted/50 rounded-lg">
              <Plus className="h-6 w-6 text-primary" />
              <span className="font-medium text-foreground">Easy Submission</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-muted/50 rounded-lg">
              <Eye className="h-6 w-6 text-primary" />
              <span className="font-medium text-foreground">Transparent Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}