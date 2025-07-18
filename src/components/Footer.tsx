import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "About ArianScore", href: "#" },
        { label: "How It Works", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Guidelines", href: "#" }
      ]
    },
    {
      title: "For Authors",
      links: [
        { label: "Submit Manuscript", href: "#" },
        { label: "Author Guidelines", href: "#" },
        { label: "Submission Process", href: "#" },
        { label: "Publication Fees", href: "#" }
      ]
    },
    {
      title: "For Reviewers",
      links: [
        { label: "Become a Reviewer", href: "#" },
        { label: "Reviewer Guidelines", href: "#" },
        { label: "Reviewer Points", href: "#" },
        { label: "Review Dashboard", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Search Papers", href: "#" },
        { label: "Browse Journals", href: "#" },
        { label: "Research Tools", href: "#" },
        { label: "Help Center", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-hero border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Newsletter signup */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary-foreground mb-2">
                  ArianScore
                </h2>
                <p className="text-primary-foreground/80 text-lg leading-relaxed">
                  The world's first decentralized academic journal platform. 
                  Transparent, fair, and open to all research disciplines.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-foreground">
                  Stay Updated
                </h3>
                <p className="text-primary-foreground/70">
                  Subscribe to receive the latest research papers and platform updates.
                </p>
                <div className="flex space-x-2">
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 bg-primary-foreground/10 border-primary/30 text-primary-foreground placeholder:text-primary-foreground/50"
                  />
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-primary-foreground/60">
                  By subscribing, you agree to our Privacy Policy and Terms of Service.
                </p>
              </div>
            </div>

            {/* Links grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-primary-foreground mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.href}
                          className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <Separator className="bg-primary/20" />

          {/* Bottom footer */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-primary-foreground/60 text-sm">
                © 2025 ArianScore. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary/20">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary/20">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary/20">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary/20">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}