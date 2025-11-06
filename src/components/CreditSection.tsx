'use client'

import { Heart } from 'lucide-react'

export default function CreditSection() {
  return (
    <div className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">© 2025</span>
            <span className="text-sm font-semibold">Meditritment</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Designed with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for your health</span>
          </div>
          
          <div className="text-sm text-gray-400">
            Professional Medical Information Platform
          </div>
        </div>
      </div>
    </div>
  )
}