"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Credit from "@/components/Credit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, MapPin, Clock, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4">Contact Us</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
              <p className="text-lg text-muted-foreground">
                Connect with us through our Telegram channel for the latest updates and support
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Telegram Channel
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Join our official Telegram channel to stay updated with the latest medical articles, 
                    health tips, and community discussions. This is our primary communication channel 
                    for all inquiries and support.
                  </p>
                  <Button 
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a 
                      href="https://t.me/drmaksudaruhi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Join Telegram Channel
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Click the button above to join our Telegram channel. You'll need to have Telegram 
                    installed on your device.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Medi Treatment is based in the United States, serving a global audience with 
                    reliable medical information and health resources.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold">United States</p>
                    <p className="text-sm text-muted-foreground">
                      Operating remotely to serve our worldwide community
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Business Hours */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Response Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Telegram Support</h3>
                    <ul className="space-y-1 text-sm">
                      <li>Monday - Friday: 9:00 AM - 6:00 PM EST</li>
                      <li>Saturday: 10:00 AM - 4:00 PM EST</li>
                      <li>Sunday: Limited support</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Response Time</h3>
                    <ul className="space-y-1 text-sm">
                      <li>General inquiries: Within 24 hours</li>
                      <li>Urgent matters: Within 4-8 hours</li>
                      <li>Technical issues: Within 12 hours</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">How can I submit a medical article?</h3>
                  <p className="text-muted-foreground">
                    Currently, only our admin team can publish articles. However, you can suggest topics 
                    or share your expertise through our Telegram channel.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Is the medical information on this site reliable?</h3>
                  <p className="text-muted-foreground">
                    All articles are reviewed and approved by qualified medical professionals. However, 
                    always consult with your healthcare provider for personal medical advice.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Can I share articles from this website?</h3>
                  <p className="text-muted-foreground">
                    Yes, you're welcome to share our articles. Please provide proper attribution and link 
                    back to the original article on our website.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">How do I report incorrect information?</h3>
                  <p className="text-muted-foreground">
                    If you find any inaccuracies in our articles, please contact us through our Telegram 
                    channel with specific details about the content in question.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Do you provide personalized medical advice?</h3>
                  <p className="text-muted-foreground">
                    No, we do not provide personalized medical advice. Our content is for informational 
                    purposes only. Always consult with qualified healthcare professionals for personal 
                    medical concerns.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">How can I stay updated with new content?</h3>
                  <p className="text-muted-foreground">
                    Join our Telegram channel to receive notifications about new articles and health 
                    updates. We regularly post new content from medical professionals.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle>Important Notice</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold mb-2">Medical Emergency?</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    If you are experiencing a medical emergency, please call your local emergency 
                    services immediately or go to the nearest emergency room.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    In the United States, call 911 for immediate medical assistance.
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