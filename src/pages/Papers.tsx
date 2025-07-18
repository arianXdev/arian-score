import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Star, Eye, Download, Calendar } from "lucide-react";

export default function Papers() {
  const papers = [
    {
      id: 1,
      title: "Machine Learning Approaches for Climate Change Prediction: A Comprehensive Analysis",
      authors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez", "Dr. Emily Watson"],
      abstract: "This study presents novel machine learning algorithms for predicting climate change patterns using satellite data and historical records...",
      category: "Environmental Science",
      keywords: ["machine learning", "climate change", "prediction", "satellite data"],
      score: 8.7,
      reviews: 5,
      views: 2341,
      downloads: 156,
      publishedDate: "2024-12-15",
      status: "published"
    },
    {
      id: 2,
      title: "Quantum Computing Applications in Cryptography: Security Implications for the Digital Age",
      authors: ["Dr. Ahmed Hassan", "Prof. Lisa Zhang"],
      abstract: "An exploration of quantum computing's impact on current cryptographic methods and proposed solutions for post-quantum security...",
      category: "Computer Science",
      keywords: ["quantum computing", "cryptography", "security", "post-quantum"],
      score: 9.2,
      reviews: 7,
      views: 1876,
      downloads: 203,
      publishedDate: "2024-12-10",
      status: "published"
    },
    {
      id: 3,
      title: "CRISPR Gene Editing in Treating Rare Genetic Disorders: Clinical Trial Results",
      authors: ["Dr. Maria Garcia", "Prof. David Thompson", "Dr. Robert Kim"],
      abstract: "Comprehensive results from Phase II clinical trials using CRISPR technology to treat patients with rare genetic disorders...",
      category: "Biomedical Sciences",
      keywords: ["CRISPR", "gene editing", "genetic disorders", "clinical trial"],
      score: 8.9,
      reviews: 6,
      views: 3122,
      downloads: 287,
      publishedDate: "2024-12-08",
      status: "published"
    },
    {
      id: 4,
      title: "Social Media Impact on Mental Health: A Longitudinal Study of Adolescents",
      authors: ["Dr. Jennifer Lee", "Prof. William Brown"],
      abstract: "A five-year longitudinal study examining the correlation between social media usage patterns and mental health outcomes in adolescents...",
      category: "Psychology",
      keywords: ["social media", "mental health", "adolescents", "longitudinal study"],
      score: 7.8,
      reviews: 4,
      views: 1654,
      downloads: 134,
      publishedDate: "2024-12-05",
      status: "published"
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 9) return "text-green-600";
    if (score >= 8) return "text-blue-600";
    if (score >= 7) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Research Papers
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Discover peer-reviewed research with transparent scoring and reviews
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-primary/20">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search papers by title, author, or keywords..."
                  className="pl-10 pr-4"
                />
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="computer-science">Computer Science</SelectItem>
                    <SelectItem value="biomedical">Biomedical Sciences</SelectItem>
                    <SelectItem value="environmental">Environmental Science</SelectItem>
                    <SelectItem value="psychology">Psychology</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="score">Highest Score</SelectItem>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="views">Most Viewed</SelectItem>
                    <SelectItem value="downloads">Most Downloaded</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon" className="border-primary/40">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Papers List */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {papers.length} Papers Found
            </h2>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Showing 1-{papers.length} of {papers.length}</span>
            </div>
          </div>

          <div className="space-y-6">
            {papers.map((paper) => (
              <Card key={paper.id} className="border-primary/20 hover:border-primary/40 transition-colors hover:shadow-primary">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground mb-2 hover:text-primary cursor-pointer">
                        {paper.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                        <span>By {paper.authors.join(", ")}</span>
                        <span>•</span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(paper.publishedDate).toLocaleDateString()}
                        </div>
                      </div>
                      <Badge variant="secondary" className="mb-3">
                        {paper.category}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
                      <div className="flex items-center space-x-1 mb-2">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className={`text-lg font-bold ${getScoreColor(paper.score)}`}>
                          {paper.score}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {paper.reviews} reviews
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {paper.abstract}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.keywords.map((keyword, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-primary/40">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {paper.views.toLocaleString()} views
                      </div>
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        {paper.downloads} downloads
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="border-primary/40">
                        View Reviews
                      </Button>
                      <Button size="sm" className="bg-gradient-primary">
                        Read Paper
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline" className="border-primary/40">
                Previous
              </Button>
              <Button variant="outline" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" className="border-primary/40">
                2
              </Button>
              <Button variant="outline" className="border-primary/40">
                3
              </Button>
              <Button variant="outline" className="border-primary/40">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}