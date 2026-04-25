import React from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const isHome = location === "/";

  return (
    <div className="min-h-[100dvh] flex flex-col selection:bg-accent/20">
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {!isHome ? (
            <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-back-home">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          ) : (
            <div />
          )}
          <div className="flex items-center space-x-4">
            <span className="font-serif font-medium tracking-tight text-foreground/90">
              A. Mohaisen
            </span>
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      <footer className="py-8 border-t border-border/40 bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abdelrahman Mohaisen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
