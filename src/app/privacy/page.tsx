import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CreditSection from '@/components/CreditSection'

export const metadata: Metadata = {
  title: 'Privacy Policy - Meditritment',
  description: 'Privacy Policy for Meditritment - Your trusted medical information source',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              Meditritment ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website meditritment.com and use our services.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Information You Provide to Us</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Comments: When you leave comments on our articles, we collect your name and comment content.</li>
              <li>Contact Information: If you contact us through our contact form, we may collect your email address and any information you provide.</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Information Automatically Collected</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>IP Address: We collect your IP address for analytics and security purposes.</li>
              <li>Browser Information: We collect information about your browser, operating system, and device type.</li>
              <li>Usage Data: We track page views, time spent on pages, and user interactions to improve our services.</li>
              <li>Cookies: We use cookies to enhance your experience and analyze website traffic.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>To provide and maintain our website and services</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To respond to your comments and inquiries</li>
              <li>To detect and prevent fraud or abuse</li>
              <li>To comply with legal obligations</li>
              <li>To send you important updates about our services</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Service Providers: We may share information with trusted third-party service providers who assist us in operating our website.</li>
              <li>Legal Requirements: We may disclose your information if required by law or to protect our rights.</li>
              <li>Business Transfers: In the event of a merger, acquisition, or sale of assets, user information may be transferred.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-6">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-6">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Website: meditritment.com</li>
              <li>Email: privacy@meditritment.com</li>
              <li>Telegram: https://t.me/drmaksudaruhi</li>
            </ul>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Medical Disclaimer</h3>
              <p className="text-blue-800">
                The information provided on this website is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CreditSection />
    </div>
  )
}