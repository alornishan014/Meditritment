"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Credit from "@/components/Credit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4">Legal</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-lg text-muted-foreground">
                Last updated: January 15, 2024
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    At Medi Treatment, we respect your privacy and are committed to protecting your personal information. 
                    This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website.
                  </p>
                  
                  <h3 className="font-semibold text-lg">Automatically Collected Information</h3>
                  <p>
                    When you visit our website, we may automatically collect certain information, including:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>IP address and browser information</li>
                    <li>Device type and operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring websites</li>
                    <li>Clickstream data</li>
                  </ul>

                  <h3 className="font-semibold text-lg">Personally Identifiable Information</h3>
                  <p>
                    We collect the following information when you voluntarily provide it to us:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Name (when leaving comments)</li>
                    <li>Email address (if you contact us)</li>
                    <li>Comments and feedback you submit</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>To provide and maintain our website</li>
                    <li>To improve our content and user experience</li>
                    <li>To respond to your comments and inquiries</li>
                    <li>To analyze website traffic and usage patterns</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect against fraud and ensure website security</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Information Sharing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                    except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>To service providers who assist us in operating our website</li>
                    <li>When required by law or legal process</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized access, 
                    alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Secure server infrastructure</li>
                    <li>Regular security assessments</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cookies and Tracking Technologies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Our website uses cookies and similar tracking technologies to enhance your browsing experience and 
                    analyze website traffic. You can control cookies through your browser settings, but disabling cookies 
                    may affect your experience on our site.
                  </p>
                  
                  <h3 className="font-semibold text-lg">Types of Cookies We Use</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                    <li><strong>Analytical Cookies:</strong> Help us understand how visitors interact with our site</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Third-Party Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Our website may contain links to third-party services and websites, including:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Social media platforms</li>
                    <li>Analytics services</li>
                    <li>Advertising networks</li>
                  </ul>
                  <p>
                    These third parties have their own privacy policies, and we are not responsible for their practices. 
                    We encourage you to review the privacy policies of any third-party services you visit.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your personal information</li>
                    <li>Restriction of processing</li>
                    <li>Data portability</li>
                    <li>Objection to processing</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us using the information provided in the Contact section.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our website is not intended for children under the age of 13. We do not knowingly collect personal 
                    information from children under 13. If you are a parent or guardian and believe your child has 
                    provided us with personal information, please contact us so we can delete such information.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>International Data Transfers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our website is hosted in the United States, and information may be transferred to and processed in 
                    countries other than where you reside. By using our website, you consent to such transfers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Changes to This Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We may update this Privacy Policy from time to time. The updated version will be indicated by a revised 
                    "Last updated" date, and the updated policy will be effective immediately upon posting. We encourage 
                    you to review this Privacy Policy periodically for any changes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    If you have any questions or concerns about this Privacy Policy, please contact us through our 
                    Telegram channel or visit our Contact page for more information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <Credit />
    </div>
  );
}