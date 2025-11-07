"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Credit from "@/components/Credit";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, Clock, User, Search } from "lucide-react";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  description: string;
  doctorName: string;
  createdAt: string;
  likes: number;
  comments: number;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for demonstration
  useEffect(() => {
    // Simulate API call
    const mockPosts: Post[] = [
      {
        id: "1",
        title: "Understanding Heart Disease: Prevention and Treatment",
        description: "Heart disease remains one of the leading causes of death worldwide. This comprehensive guide explores the various types of heart conditions, their symptoms, risk factors, and most importantly, preventive measures that can significantly reduce your risk. Learn about lifestyle changes, medical interventions, and the latest advancements in cardiac care that are helping millions live longer, healthier lives.",
        doctorName: "Dr. Sarah Johnson",
        createdAt: "2024-01-15",
        likes: 245,
        comments: 32,
      },
      {
        id: "2",
        title: "Diabetes Management: A Complete Guide",
        description: "Living with diabetes requires careful management and lifestyle adjustments. This article provides detailed insights into blood sugar monitoring, medication management, dietary recommendations, and exercise routines that can help maintain optimal glucose levels. Discover practical tips for daily diabetes care and learn about new treatment options that are improving quality of life for diabetes patients.",
        doctorName: "Dr. Michael Chen",
        createdAt: "2024-01-12",
        likes: 189,
        comments: 28,
      },
      {
        id: "3",
        title: "Mental Health in the Digital Age",
        description: "The digital revolution has transformed how we live, work, and interact, but it has also brought new challenges to our mental health. Explore the impact of social media, remote work, and digital connectivity on psychological well-being. Learn strategies for maintaining mental balance, recognizing signs of digital burnout, and fostering healthy relationships in an increasingly connected world.",
        doctorName: "Dr. Emily Rodriguez",
        createdAt: "2024-01-10",
        likes: 156,
        comments: 41,
      },
      {
        id: "4",
        title: "Nutrition for Optimal Health",
        description: "Proper nutrition is the foundation of good health. This comprehensive guide covers essential nutrients, balanced diet principles, and specific dietary recommendations for different age groups and health conditions. Learn about superfoods, meal planning, supplements, and how to make informed food choices that support your long-term health goals.",
        doctorName: "Dr. James Wilson",
        createdAt: "2024-01-08",
        likes: 203,
        comments: 35,
      },
      {
        id: "5",
        title: "Exercise Benefits for Every Age",
        description: "Regular physical activity is crucial for maintaining health at every stage of life. This article explores age-appropriate exercise routines, the science behind fitness benefits, and practical tips for staying active. From childhood development to senior wellness, discover how exercise can prevent disease, improve mental health, and enhance quality of life.",
        doctorName: "Dr. Lisa Thompson",
        createdAt: "2024-01-05",
        likes: 178,
        comments: 29,
      },
      {
        id: "6",
        title: "Sleep Hygiene and Its Impact on Health",
        description: "Quality sleep is essential for physical and mental well-being, yet many people struggle with sleep-related issues. This guide covers the science of sleep, common sleep disorders, and practical strategies for improving sleep quality. Learn about sleep cycles, the effects of sleep deprivation, and how to create the perfect sleep environment for restorative rest.",
        doctorName: "Dr. Robert Davis",
        createdAt: "2024-01-03",
        likes: 134,
        comments: 22,
      },
    ];

    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Trusted Source for
                <span className="text-accent block">Medical Information</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                Expert insights from medical professionals to help you make informed health decisions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent text-primary hover:bg-accent/90">
                  <Search className="w-5 h-5 mr-2" />
                  Explore Articles
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Medical Insights</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay informed with the latest medical research, treatment options, and health tips from our team of experienced healthcare professionals.
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                  <Card key={index} className="animate-pulse">
                    <CardHeader>
                      <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-muted rounded w-1/2"></div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="h-3 bg-muted rounded"></div>
                        <div className="h-3 bg-muted rounded w-5/6"></div>
                        <div className="h-3 bg-muted rounded w-4/6"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          Medical Article
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {formatDate(post.createdAt)}
                        </div>
                      </div>
                      <CardTitle className="text-xl leading-tight">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="flex items-center text-sm">
                        <User className="w-4 h-4 mr-1" />
                        Dr. {post.doctorName}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            {post.likes}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.comments}
                          </div>
                        </div>
                        <Link href={`/post/${post.id}`}>
                          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Health Insights</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our community to receive the latest medical articles and health tips directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Subscribe Now
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Credit />
    </div>
  );
}