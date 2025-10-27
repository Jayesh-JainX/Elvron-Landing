"use client";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ArrowLeft } from "lucide-react";
import { PatternBackground } from "@/components/home/Highlight";
import LandingWithMarquee from "@/components/home/InfiniteSlidingHeader";
import Header from "@/components/home/Header";
import ElvronFooter from "@/components/home/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-[#030924]">
      <LandingWithMarquee />
      <Header logoSrc="header/logo.png" />
      <main className="min-h-screen pt-24 pb-16 flex items-center">
        <Container className="py-16">
          <div className="max-w-lg mx-auto text-center">
            <div className="glass-card p-10 rounded-2xl shadow-card border border-white/20">
              <h1 className="text-7xl font-bold mb-6 hero-text-gradient">
                404
              </h1>
              <h2 className="text-2xl font-medium mb-4">Page not found</h2>
              <p className="text-muted-foreground mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <Button
                variant="neon"
                className="group"
                onClick={() => (window.location.href = "/")}
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Return to Home
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <ElvronFooter />
    </div>
  );
};

export default NotFound;
