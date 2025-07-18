import { Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-bold text-primary">ArianScore</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/about" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="/submit" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Submit
              </a>
              <a href="#" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Guidelines
              </a>
              <div className="relative">
                <Button variant="ghost" size="sm" asChild>
                  <a href="/papers">Papers</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Title or Keywords of Papers..."
                className="pl-10 pr-4"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign Up
            </Button>
            <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:shadow-glow">
              Log In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/about" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="/submit" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Submit
              </a>
              <a href="#" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Guidelines
              </a>
              <a href="/papers" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Papers
              </a>
              <div className="flex space-x-2 pt-4">
                <Button variant="ghost" size="sm" className="flex-1">
                  Sign Up
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-primary text-primary-foreground">
                  Log In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}