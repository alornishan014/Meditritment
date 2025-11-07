"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, Heart, MessageCircle, Share2 } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  // Mock search suggestions - in a real app, this would come from an API
  const searchSuggestions = [
    "Heart Disease Prevention",
    "Diabetes Management",
    "Mental Health Tips",
    "Nutrition Guidelines",
    "Exercise Benefits",
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchQuery);
    setShowSearchSuggestions(false);
  };

  return (
    <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold">Medi Treatment</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <form onSubmit={handleSearch} className="flex items-center">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchSuggestions(e.target.value.length > 0);
                  }}
                  onFocus={() => setShowSearchSuggestions(searchQuery.length > 0)}
                  onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 200)}
                  className="w-64 bg-primary-foreground text-primary placeholder:text-primary/60"
                />
                <Button type="submit" size="sm" className="ml-2 bg-accent text-primary hover:bg-accent/90">
                  <Search className="w-4 h-4" />
                </Button>
              </form>
              
              {/* Search Suggestions */}
              {showSearchSuggestions && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-md shadow-lg z-10">
                  {searchSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-muted cursor-pointer text-foreground"
                      onClick={() => {
                        setSearchQuery(suggestion);
                        setShowSearchSuggestions(false);
                      }}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary-foreground/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 hover:bg-primary-foreground/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 hover:bg-primary-foreground/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/privacy-policy"
                className="block px-3 py-2 hover:bg-primary-foreground/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block px-3 py-2 hover:bg-primary-foreground/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 hover:bg-primary-foreground/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <form onSubmit={handleSearch} className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-primary-foreground text-primary placeholder:text-primary/60"
                  />
                  <Button type="submit" size="sm" className="bg-accent text-primary hover:bg-accent/90">
                    <Search className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}