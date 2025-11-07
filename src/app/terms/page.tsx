"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Credit from "@/components/Credit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4">Legal</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-lg text-muted-foreground">
                Last updated: January 15, 2024
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Acceptance of Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Welcome to Medi Treatment. By accessing and using our website, you accept and agree to be bound by 
                    the terms and provision of this agreement. If you do not agree to abide by the above, please do not 
                    use this service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Use License</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) 
                    on Medi Treatment's website for personal, non-commercial transitory viewing only. This is the grant 
                    of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>modify or copy the materials</li>
                    <li>use the materials for any commercial purpose</li>
                    <li>attempt to decompile or reverse engineer any software contained on Medi Treatment's website</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                    <li>transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Disclaimer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The materials on Medi Treatment's website are provided on an 'as is' basis. Medi Treatment makes no 
                    warranties, expressed or implied, and hereby disclaims and negates all other warranties including 
                    without limitation, implied warranties or conditions of merchantability, fitness for a particular 
                    purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Medical Disclaimer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    <strong>Important:</strong> The content provided on Medi Treatment is for informational purposes 
                    only and is not intended as medical advice, diagnosis, or treatment. Always seek the advice of 
                    your physician or other qualified health provider with any questions you may have regarding a 
                    medical condition.
                  </p>
                  <p>
                    Never disregard professional medical advice or delay in seeking it because of something you have 
                    read on this website. If you think you may have a medical emergency, call your doctor or 911 
                    immediately.
                  </p>
                  <p>
                    Medi Treatment does not recommend or endorse any specific tests, physicians, products, procedures, 
                    opinions, or other information that may be mentioned on the website. Reliance on any information 
                    provided by Medi Treatment is solely at your own risk.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Limitations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    In no event shall Medi Treatment or its suppliers be liable for any damages (including, without 
                    limitation, damages for loss of data or profit, or due to business interruption) arising out of 
                    the use or inability to use the materials on Medi Treatment's website, even if Medi Treatment or a 
                    Medi Treatment authorized representative has been notified orally or in writing of the possibility 
                    of such damage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Accuracy of Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The materials appearing on Medi Treatment's website could include technical, typographical, or 
                    photographic errors. Medi Treatment does not warrant that any of the materials on its website 
                    are accurate, complete, or current. Medi Treatment may make changes to the materials contained 
                    on its website at any time without notice. However, Medi Treatment does not make any commitment 
                    to update the materials.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Medi Treatment has not reviewed all of the sites linked to its website and is not responsible for 
                    the contents of any such linked site. The inclusion of any link does not imply endorsement by 
                    Medi Treatment of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Modifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Medi Treatment may revise these terms of service for its website at any time without notice. 
                    By using this website you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    These terms and conditions are governed by and construed in accordance with the laws of the United 
                    States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Conduct</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    By using our website, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Provide accurate and current information when interacting with our site</li>
                    <li>Respect the intellectual property rights of others</li>
                    <li>Not use the website for any illegal purposes</li>
                    <li>Not upload or transmit viruses or other malicious code</li>
                    <li>Not interfere with the proper working of the website</li>
                    <li>Not harvest or collect information about others without their consent</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Comments and User Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    When you leave comments on our website, you grant Medi Treatment the right to use, reproduce, 
                    modify, and distribute that content. You represent and warrant that you own or control the rights 
                    to the content you post.
                  </p>
                  <p>
                    We reserve the right to remove any content that we deem inappropriate, offensive, or in violation 
                    of these terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Termination</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We may terminate or suspend your access immediately, without prior notice or liability, for any 
                    reason whatsoever, including without limitation if you breach the Terms. Upon termination, your 
                    right to use the Service will cease immediately.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Indemnification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    You agree to indemnify and hold harmless Medi Treatment and its affiliates, officers, agents, 
                    and employees from and against any claim, demand, loss, damage, liability, or cost, including 
                    reasonable attorney's fees, arising out of or in connection with your use of the website or your 
                    violation of these terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    If you have any questions about these Terms of Service, please contact us through our Telegram 
                    channel or visit our Contact page for more information.
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