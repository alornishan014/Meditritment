"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export default function Credit() {
  return (
    <div className="bg-primary/95 text-primary-foreground py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-sm">
              © 2025 Medi Treatment. All rights reserved.
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
            <Link 
              href="/privacy-policy" 
              className="text-primary-foreground/80 hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-primary-foreground/80 hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
            <div className="flex items-center space-x-1 text-primary-foreground/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent" />
              <span>for better health</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}