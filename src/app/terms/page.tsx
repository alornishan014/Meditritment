import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CreditSection from '@/components/CreditSection'

export const metadata: Metadata = {
  title: 'Terms of Service - Meditritment',
  description: 'Terms of Service for Meditritment - Your trusted medical information source',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using Meditritment ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
            <p className="text-gray-700 mb-6">
              Permission is granted to temporarily download one copy of the materials on Meditritment for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
            <p className="text-gray-700 mb-6">
              The materials on Meditritment are provided on an 'as is' basis. Meditritment makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Medical Information Disclaimer</h2>
            <p className="text-gray-700 mb-6">
              The content provided on Meditritment is for informational and educational purposes only and is not intended as medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Important Medical Notice</h3>
              <p className="text-red-800">
                Do not disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor or emergency services immediately.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitations</h2>
            <p className="text-gray-700 mb-6">
              In no event shall Meditritment or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Meditritment, even if Meditritment or a Meditritment authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accuracy of Materials</h2>
            <p className="text-gray-700 mb-6">
              The materials appearing on Meditritment could include technical, typographical, or photographic errors. Meditritment does not warrant that any of the materials on its website are accurate, complete, or current. Meditritment may make changes to the materials contained on its website at any time without notice.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Comments and Content</h2>
            <p className="text-gray-700 mb-6">
              Users may post comments and content on the website. Meditritment does not endorse, guarantee, or assume responsibility for any user-generated content. You understand that by using the website, you may be exposed to content that is offensive, indecent, or objectionable.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prohibited Activities</h2>
            <p className="text-gray-700 mb-6">
              You may not use our website for any illegal or unauthorized purpose. You are prohibited from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Posting false, inaccurate, or misleading information</li>
              <li>Posting content that is defamatory, obscene, or offensive</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Interfering with or disrupting the website or servers</li>
              <li>Using the website to solicit or conduct any fraudulent activity</li>
              <li>Violating any applicable laws or regulations</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary (including but not limited to intellectual property) rights.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy</h2>
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs the Site, to understand our practices.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Revisions and Errata</h2>
            <p className="text-gray-700 mb-6">
              The materials appearing on Meditritment could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 mb-6">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms of Service</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. Your continued use of the website after the effective date of the revised Terms constitutes acceptance of the changes.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Website: meditritment.com</li>
              <li>Email: legal@meditritment.com</li>
              <li>Telegram: https://t.me/drmaksudaruhi</li>
              <li>Location: United States</li>
            </ul>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Agreement Acknowledgment</h3>
              <p className="text-blue-800">
                By using Meditritment, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
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