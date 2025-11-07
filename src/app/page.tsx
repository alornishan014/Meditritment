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
  published: boolean
  createdAt: string
  updatedAt: string
  _count: {
    comments: number
    likes: number
  }
}

// Client-side data management
class ClientDataManager {
  private readonly POSTS_KEY = 'meditritment_posts'
  private readonly COMMENTS_KEY = 'meditritment_comments'
  private readonly LIKES_KEY = 'meditritment_likes'

  constructor() {
    this.initializeData()
  }

  private initializeData() {
    if (!this.getPosts().length) {
      this.seedDefaultData()
    }
  }

  private seedDefaultData() {
    const defaultPosts = [
      {
        id: '1',
        title: "Understanding and Treating Lingual Burning Sensation: A Comprehensive Guide",
        description: "Lingual burning sensation, also known as burning mouth syndrome (BMS), is a complex medical condition that affects many individuals worldwide. This condition is characterized by a persistent burning or scalding sensation in the tongue, lips, gums, or other areas of the mouth without any obvious medical cause. While the exact cause of lingual burning sensation is often unknown, several factors may contribute to this condition including neurological factors, hormonal imbalances, nutritional deficiencies, oral health issues, and psychological factors. Diagnosis requires a comprehensive medical evaluation including blood tests and physical examination. Treatment options include medications, nutritional supplements, lifestyle modifications, and alternative therapies. Most patients find relief through proper treatment and management.",
        doctorName: "Dr. Sarah Johnson",
        slug: "understanding-lingual-burning-sensation",
        published: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        _count: { comments: 0, likes: 0 }
      },
      {
        id: '2',
        title: "Male Enhancement: Medical Facts, Myths, and Evidence-Based Treatments",
        description: "Male enhancement is a topic that concerns many men worldwide, often surrounded by misinformation and unrealistic expectations. This comprehensive guide provides evidence-based information about male enhancement, separating medical facts from marketing myths and discussing proven treatment options. Understanding normal male anatomy is essential before considering enhancement options. Evidence-based treatments include oral medications like sildenafil and tadalafil, vacuum devices, lifestyle modifications, and psychological support. Unproven methods like pills and supplements can be dangerous and should be avoided. The most effective approach involves professional medical evaluation, evidence-based treatments, lifestyle modifications, and psychological support. Quality of life and emotional intimacy are far more important than physical measurements.",
        doctorName: "Dr. Michael Chen",
        slug: "male-enhancement-medical-facts",
        published: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        _count: { comments: 0, likes: 0 }
      },
      {
        id: '3',
        title: "Understanding Premature Ejaculation: Causes, Treatments, and Management Strategies",
        description: "Premature ejaculation (PE) is one of the most common sexual dysfunctions affecting men worldwide, yet it remains widely misunderstood and often untreated. PE is defined as ejaculation that occurs with minimal sexual stimulation before the person wishes it, causing distress or interpersonal difficulty. The condition can be primary (lifelong) or secondary (acquired). Causes include psychological factors like performance anxiety and depression, biological factors like abnormal hormone levels, and medical conditions like diabetes. Treatment options include behavioral techniques like the start-stop method and squeeze technique, psychological approaches like sex therapy and CBT, medical treatments including topical anesthetics and oral medications, and lifestyle modifications. With proper treatment, most men can achieve significant improvement in their sexual function and quality of life.",
        doctorName: "Dr. Emily Rodriguez",
        slug: "understanding-premature-ejaculation",
        published: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        _count: { comments: 0, likes: 0 }
      },
      {
        id: '4',
        title: "Understanding and Managing Erectile Dysfunction: A Complete Medical Guide",
        description: "Erectile dysfunction (ED) is a common medical condition that affects millions of men worldwide, yet many suffer in silence due to embarrassment or lack of understanding. ED is defined as the persistent inability to achieve or maintain an erection sufficient for satisfactory sexual performance. The condition becomes more common with age but can also affect younger men. Causes include vascular diseases, neurological conditions, hormonal imbalances, medications, and lifestyle factors. Diagnosis involves medical history review, physical examination, and laboratory tests. Treatment options include oral medications like PDE5 inhibitors, vacuum devices, penile injections, lifestyle modifications, and psychological support. With proper treatment, most men can achieve significant improvement and return to satisfactory sexual activity. ED often serves as an early warning sign for other health conditions.",
        doctorName: "Dr. James Thompson",
        slug: "understanding-erectile-dysfunction",
        published: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        _count: { comments: 0, likes: 0 }
      }
    ]

    localStorage.setItem(this.POSTS_KEY, JSON.stringify(defaultPosts))
    localStorage.setItem(this.COMMENTS_KEY, JSON.stringify([]))
    localStorage.setItem(this.LIKES_KEY, JSON.stringify([]))
  }

  getPosts(): Post[] {
    try {
      const posts = localStorage.getItem(this.POSTS_KEY)
      return posts ? JSON.parse(posts) : []
    } catch (error) {
      console.error('Error getting posts:', error)
      return []
    }
  }

  createPost(postData: Omit<Post, 'id' | 'createdAt' | 'updatedAt' | '_count'>): Post {
    try {
      const posts = this.getPosts()
      const newPost: Post = {
        ...postData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        _count: { comments: 0, likes: 0 }
      }
      posts.push(newPost)
      localStorage.setItem(this.POSTS_KEY, JSON.stringify(posts))
      return newPost
    } catch (error) {
      console.error('Error creating post:', error)
      throw error
    }
  }

  searchPosts(query: string): Post[] {
    try {
      const posts = this.getPosts()
      const lowercaseQuery = query.toLowerCase()
      return posts.filter(post => 
        post.published && (
          post.title.toLowerCase().includes(lowercaseQuery) ||
          post.description.toLowerCase().includes(lowercaseQuery) ||
          post.doctorName.toLowerCase().includes(lowercaseQuery)
        )
      )
    } catch (error) {
      console.error('Error searching posts:', error)
      return []
    }
  }
}

const dataManager = new ClientDataManager()

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
    setLoading(true)
    try {
      // Try API first, fallback to client data
      try {
        const response = await fetch('/api/posts?published=true')
        if (response.ok) {
          const data = await response.json()
          setPosts(data.posts || [])
        } else {
          throw new Error('API failed')
        }
      } catch (apiError) {
        console.log('API not available, using client data')
        const clientPosts = dataManager.getPosts().filter(post => post.published)
        setPosts(clientPosts)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
      // Fallback to client data
      const clientPosts = dataManager.getPosts().filter(post => post.published)
      setPosts(clientPosts)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (query: string) => {
    setSearchQuery(query)
    if (query.length > 2) {
      try {
        // Try API first, fallback to client data
        try {
          const response = await fetch(`/api/posts/search?q=${encodeURIComponent(query)}`)
          if (response.ok) {
            const data = await response.json()
            setSearchSuggestions(data.posts || [])
          } else {
            throw new Error('Search API failed')
          }
        } catch (apiError) {
          console.log('Search API not available, using client data')
          const clientSuggestions = dataManager.searchPosts(query)
          setSearchSuggestions(clientSuggestions)
        }
        setShowSuggestions(true)
      } catch (error) {
        console.error('Search error:', error)
        // Fallback to client data
        const clientSuggestions = dataManager.searchPosts(query)
        setSearchSuggestions(clientSuggestions)
        setShowSuggestions(true)
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
              <p className="text-gray-500 text-lg mb-4">No articles available at the moment.</p>
              <Button onClick={fetchPosts} className="bg-blue-600 hover:bg-blue-700">
                Refresh Posts
              </Button>
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