'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Heart, MessageCircle, Share2, Calendar, User, ArrowLeft, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
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
  updatedAt: string
  comments: Comment[]
  _count: {
    comments: number
    likes: number
  }
}

interface Comment {
  id: string
  authorName: string
  content: string
  createdAt: string
}

export default function PostDetail() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [likeCount, setLikeCount] = useState(0)
  const [userLiked, setUserLiked] = useState(false)
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState({ authorName: '', content: '' })
  const [isSubmittingComment, setIsSubmittingComment] = useState(false)

  useEffect(() => {
    if (params.slug) {
      fetchPost()
      trackPageView()
    }
  }, [params.slug])

  const fetchPost = async () => {
    try {
      // First find the post by slug
      const postsResponse = await fetch('/api/posts?published=true')
      if (postsResponse.ok) {
        const postsData = await postsResponse.json()
        const foundPost = postsData.posts.find((p: any) => p.slug === params.slug)
        
        if (foundPost) {
          // Then get full post details by ID
          const response = await fetch(`/api/posts/${foundPost.id}`)
          if (response.ok) {
            const data = await response.json()
            setPost(data.post)
            setComments(data.post.comments)
            setLikeCount(data.post._count.likes)
            
            // Check if user liked this post
            const ipAddress = await getUserIP()
            const likeResponse = await fetch(`/api/likes?postId=${data.post.id}&ipAddress=${ipAddress}`)
            if (likeResponse.ok) {
              const likeData = await likeResponse.json()
              setUserLiked(likeData.userLiked)
            }
          }
        } else {
          router.push('/')
        }
      }
    } catch (error) {
      console.error('Error fetching post:', error)
      router.push('/')
    } finally {
      setLoading(false)
    }
  }

  const trackPageView = async () => {
    try {
      // First find the post by slug to get its ID
      const postsResponse = await fetch('/api/posts?published=true')
      if (postsResponse.ok) {
        const postsData = await postsResponse.json()
        const foundPost = postsData.posts.find((p: any) => p.slug === params.slug)
        
        if (foundPost) {
          const ipAddress = await getUserIP()
          const userAgent = navigator.userAgent
          
          await fetch('/api/analytics', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              postId: foundPost.id,
              ipAddress,
              userAgent,
            }),
          })
        }
      }
    } catch (error) {
      console.error('Error tracking page view:', error)
    }
  }

  const getUserIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json')
      const data = await response.json()
      return data.ip
    } catch (error) {
      return 'unknown'
    }
  }

  const handleLike = async () => {
    if (!post) return

    try {
      const ipAddress = await getUserIP()
      const userAgent = navigator.userAgent
      
      const response = await fetch('/api/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId: post.id,
          ipAddress,
          userAgent,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setLikeCount(data.likeCount)
        setUserLiked(data.liked)
      }
    } catch (error) {
      console.error('Error toggling like:', error)
    }
  }

  const handleShare = async () => {
    if (!post) return

    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: `Read this medical article by Dr. ${post.doctorName}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  const handleSubmitComment = async () => {
    if (!post || !newComment.authorName.trim() || !newComment.content.trim()) return

    setIsSubmittingComment(true)
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId: post.id,
          authorName: newComment.authorName.trim(),
          content: newComment.content.trim(),
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setComments([data.comment, ...comments])
        setNewComment({ authorName: '', content: '' })
      }
    } catch (error) {
      console.error('Error submitting comment:', error)
    } finally {
      setIsSubmittingComment(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
        <Footer />
        <CreditSection />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
            <Button onClick={() => router.push('/')}>Go back home</Button>
          </div>
        </div>
        <Footer />
        <CreditSection />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.push('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Post Content */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Dr. {post.doctorName}
              </Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.createdAt).toLocaleDateString()}
              </div>
            </div>
            <CardTitle className="text-3xl text-gray-900 mb-4">
              {post.title}
            </CardTitle>
            
            {/* Engagement Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant={userLiked ? "default" : "outline"}
                size="sm"
                onClick={handleLike}
                className={userLiked ? "bg-red-500 hover:bg-red-600" : ""}
              >
                <Heart className={`w-4 h-4 mr-2 ${userLiked ? 'fill-current' : ''}`} />
                {likeCount} {likeCount === 1 ? 'Like' : 'Likes'}
              </Button>
              
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              
              <div className="flex items-center text-sm text-gray-500">
                <MessageCircle className="w-4 h-4 mr-1" />
                {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="prose max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {post.description}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comments Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Comments ({comments.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Comment Form */}
            <div className="mb-6">
              <div className="space-y-4">
                <Input
                  placeholder="Your name"
                  value={newComment.authorName}
                  onChange={(e) => setNewComment({ ...newComment, authorName: e.target.value })}
                />
                <Textarea
                  placeholder="Write your comment..."
                  value={newComment.content}
                  onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                  rows={3}
                />
                <Button
                  onClick={handleSubmitComment}
                  disabled={isSubmittingComment || !newComment.authorName.trim() || !newComment.content.trim()}
                  className="w-full md:w-auto"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmittingComment ? 'Posting...' : 'Post Comment'}
                </Button>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Comments List */}
            {comments.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No comments yet. Be the first to comment!
              </p>
            ) : (
              <ScrollArea className="max-h-96">
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="font-medium text-gray-900">{comment.authorName}</span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      </div>

      <Footer />
      <CreditSection />
    </div>
  )
}