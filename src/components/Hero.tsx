import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="text-primary-foreground/80 text-lg mb-4 font-medium">
              The World's First
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Decentralized
              <br />
              <span className="text-primary">Academic</span>
              <br />
              Journal
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
              ArianScore is an international scientific publication platform that does not accept or reject papers, 
              but rather grades them with rating scores and lets the authors decide whether or not to publish their 
              papers along with the reviewers' comments and scores.
            </p>
            
            <p className="text-lg text-primary-foreground/80 mb-8">
              ArianScore is not limited to any field of study and publishes papers from all research areas. 
              During 2025, each new user can submit one manuscript for FREE.
            </p>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-glow hover:shadow-primary transition-all duration-300"
              asChild
            >
              <a href="/submit">Submit a Manuscript</a>
            </Button>
          </div>
          
          {/* Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Abstract document illustration */}
              <div className="relative w-80 h-80 bg-primary/20 rounded-lg backdrop-blur-sm border border-primary/30">
                <div className="absolute inset-4 space-y-3">
                  <div className="h-3 bg-primary/60 rounded-full w-3/4"></div>
                  <div className="h-2 bg-primary-foreground/40 rounded-full w-full"></div>
                  <div className="h-2 bg-primary-foreground/40 rounded-full w-5/6"></div>
                  <div className="h-2 bg-primary-foreground/40 rounded-full w-4/5"></div>
                  <div className="h-3 bg-primary/40 rounded-full w-2/3 mt-6"></div>
                  <div className="h-2 bg-primary-foreground/40 rounded-full w-full"></div>
                  <div className="h-2 bg-primary-foreground/40 rounded-full w-3/4"></div>
                  <div className="h-2 bg-primary-foreground/40 rounded-full w-5/6"></div>
                  <div className="h-2 bg-primary-foreground/40 rounded-full w-2/3"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/60 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-primary-foreground/60">
          <span className="text-sm mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}