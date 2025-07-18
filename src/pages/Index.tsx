import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyNoEditors } from "@/components/WhyNoEditors";
import { WhoIsArianScoreFor } from "@/components/WhoIsArianScoreFor";
import { WhatAreScoresFor } from "@/components/WhatAreScoresFor";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhyNoEditors />
      <WhoIsArianScoreFor />
      <WhatAreScoresFor />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
