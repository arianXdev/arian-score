
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Linkedin, Facebook, Youtube, MessageSquare, Send, Twitter, Download, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-red-900 to-red-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Subscription Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">FREE Subscription!</h3>
            <div className="space-y-4">
              <Input 
                type="email" 
                placeholder="Your Email"
                className="bg-white text-black border-none"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe
              </Button>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-6">
              <Button variant="ghost" size="sm" className="text-white hover:bg-red-800 p-2">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-red-800 p-2">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-red-800 p-2">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-red-800 p-2">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-red-800 p-2">
                <Send className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-red-800 p-2">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>

            {/* Install Button */}
            <Button className="w-full mt-4 bg-red-700 hover:bg-red-600 text-white border border-red-600">
              <Download className="h-4 w-4 mr-2" />
              Install ArianScore
            </Button>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-white transition-colors">Core Team</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="/author-guidelines" className="text-gray-300 hover:text-white transition-colors">Author Guidelines</a></li>
              <li><a href="/reviewer-guidelines" className="text-gray-300 hover:text-white transition-colors">Reviewer Guidelines</a></li>
              <li><a href="/rating-guidelines" className="text-gray-300 hover:text-white transition-colors">Journal Rating Guidelines</a></li>
              <li><a href="/opinion-articles" className="text-gray-300 hover:text-white transition-colors">Opinion Articles</a></li>
              <li><a href="/faqs" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="/support" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
              <li><a href="/report-issue" className="text-gray-300 hover:text-white transition-colors">Report an Issue</a></li>
              <li>
                <a href="mailto:feedback@arianscore.org" className="text-gray-300 hover:text-white transition-colors">
                  feedback@arianscore.org
                </a>
              </li>
              <li className="text-gray-300">+1 (555) 123-4567</li>
              <li className="text-gray-300 text-sm leading-relaxed">
                123 Research Ave<br />
                Innovation City, IC 12345<br />
                United States
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookies Policy</a></li>
            </ul>

            {/* Our Ecosystem */}
            <div className="mt-6">
              <h4 className="text-md font-medium mb-2 text-gray-200">Our Ecosystem</h4>
              <ul className="space-y-1">
                <li>
                  <a href="https://paralead.com" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-1">
                    ParaLead - Decentralized Autonomous Corporation
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="https://blockcenter.org" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-1">
                    BlockCenter - Texas Blockchain Center LLC.
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 text-gray-400 text-sm">
              <p>© 2020-2025 ArianScore LLC.</p>
              <p>All Rights Reserved.</p>
              <p className="mt-2 text-xs">A Blockcenter Company</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
