"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Credit from "@/components/Credit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, BookOpen, Globe, Award, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">About Us</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                About Medi Treatment
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Your trusted partner in health education and medical information
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Mission Statement */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  At Medi Treatment, we are committed to providing accurate, reliable, and up-to-date medical 
                  information to help individuals make informed decisions about their health. Our mission is to 
                  bridge the gap between complex medical knowledge and everyday understanding, making health 
                  information accessible to everyone.
                </p>
              </CardContent>
            </Card>

            {/* What We Do */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Educational Content
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We publish comprehensive articles on various health topics, written and reviewed by 
                    qualified medical professionals. Our content covers prevention, treatment, and wellness 
                    strategies for optimal health.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Community Building
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We foster a supportive community where individuals can share experiences, ask questions, 
                    and learn from each other. Our Telegram channel serves as a hub for health discussions 
                    and updates.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Health Advocacy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We advocate for preventive healthcare and healthy lifestyle choices. Our content emphasizes 
                    the importance of regular check-ups, healthy eating, exercise, and mental well-being.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Our Values */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Our Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Accuracy & Reliability</h3>
                    <p className="text-muted-foreground">
                      All our content is thoroughly researched and reviewed by medical professionals to ensure 
                      the highest standards of accuracy and reliability.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Accessibility</h3>
                    <p className="text-muted-foreground">
                      We believe health information should be accessible to everyone. Our content is written 
                      in clear, easy-to-understand language.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Compassion</h3>
                    <p className="text-muted-foreground">
                      We approach health topics with empathy and understanding, recognizing the sensitive 
                      nature of medical information.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Innovation</h3>
                    <p className="text-muted-foreground">
                      We continuously update our content and platform to incorporate the latest medical 
                      research and technological advancements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Section */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Our Medical Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Our content is created and reviewed by a team of experienced healthcare professionals 
                  dedicated to providing accurate and helpful medical information.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">Medical Experts</h3>
                    <p className="text-sm text-muted-foreground">
                      Board-certified physicians and specialists
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">Healthcare Writers</h3>
                    <p className="text-sm text-muted-foreground">
                      Professional medical writers and editors
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">Global Network</h3>
                    <p className="text-sm text-muted-foreground">
                      Healthcare professionals worldwide
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Section */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Our Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                    <p className="text-muted-foreground">Articles Published</p>
                  </div>
                  
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                    <p className="text-muted-foreground">Monthly Readers</p>
                  </div>
                  
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100+</div>
                    <p className="text-muted-foreground">Medical Contributors</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Join Our Community</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6">
                  Stay connected with us for the latest health insights, medical updates, and community discussions. 
                  Join our Telegram channel today!
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a 
                    href="https://t.me/drmaksudaruhi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Join Our Telegram Channel
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Commitment */}
            <Card>
              <CardHeader>
                <CardTitle>Our Commitment to You</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  <p>
                    At Medi Treatment, we are committed to being your trusted source for medical information. 
                    We understand that navigating health information can be overwhelming, and we're here to 
                    make it easier for you.
                  </p>
                  
                  <p>
                    Our commitment extends beyond just providing information. We strive to create a supportive 
                    environment where you can learn, share, and grow in your understanding of health and wellness. 
                    Whether you're looking for information about a specific condition, preventive care tips, 
                    or general wellness advice, we're here to help.
                  </p>
                  
                  <p>
                    We continuously work to improve our content, expand our reach, and enhance the user experience. 
                    Your feedback and engagement help us serve you better and fulfill our mission of making 
                    quality health information accessible to all.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <Credit />
    </div>
  );
}