import { Metadata } from 'next'
import { Heart, Users, Award, Globe, Shield, BookOpen, Target, Lightbulb } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CreditSection from '@/components/CreditSection'

export const metadata: Metadata = {
  title: 'About Us - Meditritment',
  description: 'Learn about Meditritment - Your trusted source for medical information and treatment insights',
}

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Meditritment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted source for comprehensive medical information, treatment insights, and health education from qualified medical professionals.
            </p>
          </div>

          {/* Mission Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Target className="w-6 h-6 mr-2 text-blue-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Meditritment, we are dedicated to providing accurate, accessible, and up-to-date medical information to empower individuals to make informed health decisions. We bridge the gap between complex medical knowledge and everyday understanding, ensuring that quality health information is available to everyone.
              </p>
            </CardContent>
          </Card>

          {/* Values Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Trust & Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    All content is reviewed by qualified medical professionals to ensure accuracy and reliability.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Making complex medical information understandable and accessible to everyone.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Compassion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We approach health education with empathy and understanding of patient needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Continuously improving how we deliver medical education and health information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* What We Offer */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    Expert Medical Content
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Articles written by qualified medical professionals</li>
                    <li>• Latest treatment options and medical breakthroughs</li>
                    <li>• Evidence-based health information</li>
                    <li>• Regular updates with current medical research</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-600" />
                    Community Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Interactive comments and discussions</li>
                    <li>• Telegram community for real-time updates</li>
                    <li>• Q&A sessions with medical experts</li>
                    <li>• Supportive health community</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Statistics */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-900 mb-2">1000+</div>
                  <div className="text-gray-600">Medical Articles</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
                  <div className="text-gray-600">Expert Doctors</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-900 mb-2">10K+</div>
                  <div className="text-gray-600">Happy Readers</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
                  <div className="text-gray-600">Available</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Our Team */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Medical Team</h2>
            <Card>
              <CardHeader>
                <CardTitle>Qualified Medical Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">
                  Our content is created and reviewed by a diverse team of medical professionals including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">Medical Doctors</Badge>
                    <p className="text-gray-600 text-sm">
                      Board-certified physicians from various specialties
                    </p>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">Specialists</Badge>
                    <p className="text-gray-600 text-sm">
                      Experts in cardiology, neurology, pediatrics, and more
                    </p>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">Healthcare Writers</Badge>
                    <p className="text-gray-600 text-sm">
                      Professional medical writers and health communicators
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quality Assurance */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                Quality Assurance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Content Review Process</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• All articles reviewed by medical professionals</li>
                    <li>• Regular updates with latest research</li>
                    <li>• Fact-checking and source verification</li>
                    <li>• Peer review for complex medical topics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Standards We Follow</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Evidence-based medicine guidelines</li>
                    <li>• Medical ethics and confidentiality</li>
                    <li>• Clear and understandable language</li>
                    <li>• Regular content audits and updates</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Join Our Health Community
                </h2>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Stay informed with the latest medical insights, treatment options, and health tips. 
                  Join thousands of readers who trust Meditritment for their health information needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://t.me/drmaksudaruhi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Join Telegram Community
                  </a>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
      <CreditSection />
    </div>
  )
}