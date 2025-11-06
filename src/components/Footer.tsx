'use client'

import Link from 'next/link'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Meditritment</span>
            </div>
            <p className="text-blue-100 mb-4 max-w-md">
              Your trusted source for medical information and treatment insights. 
              We provide comprehensive health articles written by qualified medical professionals.
            </p>
            <div className="flex items-center space-x-4 text-sm text-blue-100">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>United States</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-100 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-blue-100 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a 
                href="https://t.me/drmaksudaruhi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Join our Telegram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm mb-4 md:mb-0">
              © 2025 Meditritment. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-blue-100 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for better health</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}