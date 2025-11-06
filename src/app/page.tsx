'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Heart, MessageCircle, Share2, Calendar, User, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CreditSection from '@/components/CreditSection'

interface Post {
  id: string
  title: string
  description: string
  doctorName: string
  slug: string
  createdAt: string
  _count: {
    comments: number
    likes: number
  }
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchSuggestions, setSearchSuggestions] = useState<Post[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts?published=true')
      if (response.ok) {
        const data = await response.json()
        setPosts(data.posts)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (query: string) => {
    setSearchQuery(query)
    if (query.length > 2) {
      try {
        const response = await fetch(`/api/posts/search?q=${encodeURIComponent(query)}`)
        if (response.ok) {
          const data = await response.json()
          setSearchSuggestions(data.posts || [])
          setShowSuggestions(true)
        }
      } catch (error) {
        console.error('Search error:', error)
      }
    } else {
      setSearchSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleShare = async (post: Post) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: `Read this medical article by Dr. ${post.doctorName}`,
          url: `${window.location.origin}/post/${post.slug}`,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/post/${post.slug}`)
    }
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted Medical Information Source
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comprehensive health articles written by qualified medical professionals
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search medical articles, treatments, doctors..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-0 shadow-lg"
                />
              </div>
              
              {/* Search Suggestions */}
              {showSuggestions && searchSuggestions.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
                  {searchSuggestions.map((post) => (
                    <Link
                      key={post.id}
                      href={`/post/${post.slug}`}
                      className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="font-medium text-gray-900">{post.title}</div>
                      <div className="text-sm text-gray-500">Dr. {post.doctorName}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6" />
                <span>Expert Medical Content</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-6 h-6" />
                <span>Qualified Doctors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6" />
                <span>Trusted by Thousands</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
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
      </section>

      {/* Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Medical Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest medical insights and treatment options
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-20 bg-gray-200 rounded mb-4"></div>
                    <div className="flex justify-between">
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        Dr. {post.doctorName}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900 hover:text-blue-600 transition-colors">
                      <Link href={`/post/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {truncateText(post.description, 150)}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Heart className="w-4 h-4 mr-1" />
                          {post._count.likes}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post._count.comments}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare(post)}
                          className="text-gray-500 hover:text-blue-600"
                        >
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Link href={`/post/${post.slug}`}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
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

      <Footer />
      <CreditSection />
    </div>
  )
}