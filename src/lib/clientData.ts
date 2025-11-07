// Client-side data management for serverless deployment
// This utility manages data in localStorage for serverless compatibility

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

interface Comment {
  id: string
  postId: string
  authorName: string
  content: string
  createdAt: string
}

interface Like {
  id: string
  postId: string
  ipAddress: string
  createdAt: string
}

interface Analytics {
  id: string
  postId?: string
  date: string
  pageViews: number
  ipAddress: string
}

class ClientDataManager {
  private readonly POSTS_KEY = 'meditritment_posts'
  private readonly COMMENTS_KEY = 'meditritment_comments'
  private readonly LIKES_KEY = 'meditritment_likes'
  private readonly ANALYTICS_KEY = 'meditritment_analytics'

  constructor() {
    this.initializeData()
  }

  private initializeData() {
    // Initialize with default data if empty
    if (!this.getPosts().length) {
      this.seedDefaultData()
    }
  }

  private seedDefaultData() {
    const defaultPosts = [
      {
        id: '1',
        title: "Understanding and Treating Lingual Burning Sensation: A Comprehensive Guide",
        description: "Lingual burning sensation, also known as burning mouth syndrome (BMS), is a complex medical condition that affects many individuals worldwide. This condition is characterized by a persistent burning or scalding sensation in the tongue, lips, gums, or other areas of the mouth without any obvious medical cause...",
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
        description: "Male enhancement is a topic that concerns many men worldwide, often surrounded by misinformation and unrealistic expectations. This comprehensive guide will provide evidence-based information about male enhancement, separating medical facts from marketing myths and discussing proven treatment options...",
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
        description: "Premature ejaculation (PE) is one of the most common sexual dysfunctions affecting men worldwide, yet it remains widely misunderstood and often untreated. This comprehensive guide will help you understand the condition, its causes, and evidence-based treatment options...",
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
        description: "Erectile dysfunction (ED) is a common medical condition that affects millions of men worldwide, yet many suffer in silence due to embarrassment or lack of understanding. This comprehensive guide will provide you with evidence-based information about ED, its causes, treatments, and management strategies...",
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
    localStorage.setItem(this.ANALYTICS_KEY, JSON.stringify([]))
  }

  // Posts
  getPosts(): Post[] {
    try {
      const posts = localStorage.getItem(this.POSTS_KEY)
      return posts ? JSON.parse(posts) : []
    } catch (error) {
      console.error('Error getting posts:', error)
      return []
    }
  }

  getPost(id: string): Post | null {
    try {
      const posts = this.getPosts()
      return posts.find(post => post.id === id) || null
    } catch (error) {
      console.error('Error getting post:', error)
      return null
    }
  }

  getPostBySlug(slug: string): Post | null {
    try {
      const posts = this.getPosts()
      return posts.find(post => post.slug === slug) || null
    } catch (error) {
      console.error('Error getting post by slug:', error)
      return null
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

  updatePost(id: string, updates: Partial<Post>): Post | null {
    try {
      const posts = this.getPosts()
      const index = posts.findIndex(post => post.id === id)
      if (index === -1) return null

      posts[index] = {
        ...posts[index],
        ...updates,
        updatedAt: new Date().toISOString()
      }
      localStorage.setItem(this.POSTS_KEY, JSON.stringify(posts))
      return posts[index]
    } catch (error) {
      console.error('Error updating post:', error)
      return null
    }
  }

  deletePost(id: string): boolean {
    try {
      const posts = this.getPosts()
      const filteredPosts = posts.filter(post => post.id !== id)
      localStorage.setItem(this.POSTS_KEY, JSON.stringify(filteredPosts))
      
      // Also delete related comments and likes
      this.deleteCommentsByPostId(id)
      this.deleteLikesByPostId(id)
      
      return true
    } catch (error) {
      console.error('Error deleting post:', error)
      return false
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

  // Comments
  getComments(): Comment[] {
    try {
      const comments = localStorage.getItem(this.COMMENTS_KEY)
      return comments ? JSON.parse(comments) : []
    } catch (error) {
      console.error('Error getting comments:', error)
      return []
    }
  }

  getCommentsByPostId(postId: string): Comment[] {
    try {
      const comments = this.getComments()
      return comments.filter(comment => comment.postId === postId)
    } catch (error) {
      console.error('Error getting comments by post ID:', error)
      return []
    }
  }

  createComment(commentData: Omit<Comment, 'id' | 'createdAt'>): Comment {
    try {
      const comments = this.getComments()
      const newComment: Comment = {
        ...commentData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      }
      comments.push(newComment)
      localStorage.setItem(this.COMMENTS_KEY, JSON.stringify(comments))
      
      // Update post comment count
      this.updatePostCommentCount(commentData.postId)
      
      return newComment
    } catch (error) {
      console.error('Error creating comment:', error)
      throw error
    }
  }

  private deleteCommentsByPostId(postId: string): void {
    try {
      const comments = this.getComments()
      const filteredComments = comments.filter(comment => comment.postId !== postId)
      localStorage.setItem(this.COMMENTS_KEY, JSON.stringify(filteredComments))
    } catch (error) {
      console.error('Error deleting comments by post ID:', error)
    }
  }

  private updatePostCommentCount(postId: string): void {
    try {
      const posts = this.getPosts()
      const comments = this.getCommentsByPostId(postId)
      const postIndex = posts.findIndex(post => post.id === postId)
      if (postIndex !== -1) {
        posts[postIndex]._count.comments = comments.length
        localStorage.setItem(this.POSTS_KEY, JSON.stringify(posts))
      }
    } catch (error) {
      console.error('Error updating post comment count:', error)
    }
  }

  // Likes
  getLikes(): Like[] {
    try {
      const likes = localStorage.getItem(this.LIKES_KEY)
      return likes ? JSON.parse(likes) : []
    } catch (error) {
      console.error('Error getting likes:', error)
      return []
    }
  }

  getLikesByPostId(postId: string): Like[] {
    try {
      const likes = this.getLikes()
      return likes.filter(like => like.postId === postId)
    } catch (error) {
      console.error('Error getting likes by post ID:', error)
      return []
    }
  }

  toggleLike(postId: string, ipAddress: string): { liked: boolean; likeCount: number } {
    try {
      const likes = this.getLikes()
      const existingLikeIndex = likes.findIndex(like => 
        like.postId === postId && like.ipAddress === ipAddress
      )

      let liked: boolean
      if (existingLikeIndex !== -1) {
        // Remove like
        likes.splice(existingLikeIndex, 1)
        liked = false
      } else {
        // Add like
        likes.push({
          id: Date.now().toString(),
          postId,
          ipAddress,
          createdAt: new Date().toISOString()
        })
        liked = true
      }

      localStorage.setItem(this.LIKES_KEY, JSON.stringify(likes))
      this.updatePostLikeCount(postId)

      return {
        liked,
        likeCount: this.getLikesByPostId(postId).length
      }
    } catch (error) {
      console.error('Error toggling like:', error)
      return { liked: false, likeCount: 0 }
    }
  }

  private deleteLikesByPostId(postId: string): void {
    try {
      const likes = this.getLikes()
      const filteredLikes = likes.filter(like => like.postId !== postId)
      localStorage.setItem(this.LIKES_KEY, JSON.stringify(filteredLikes))
    } catch (error) {
      console.error('Error deleting likes by post ID:', error)
    }
  }

  private updatePostLikeCount(postId: string): void {
    try {
      const posts = this.getPosts()
      const likes = this.getLikesByPostId(postId)
      const postIndex = posts.findIndex(post => post.id === postId)
      if (postIndex !== -1) {
        posts[postIndex]._count.likes = likes.length
        localStorage.setItem(this.POSTS_KEY, JSON.stringify(posts))
      }
    } catch (error) {
      console.error('Error updating post like count:', error)
    }
  }

  // Analytics
  getAnalytics(): Analytics[] {
    try {
      const analytics = localStorage.getItem(this.ANALYTICS_KEY)
      return analytics ? JSON.parse(analytics) : []
    } catch (error) {
      console.error('Error getting analytics:', error)
      return []
    }
  }

  trackPageView(postId?: string, ipAddress?: string): void {
    try {
      const analytics = this.getAnalytics()
      analytics.push({
        id: Date.now().toString(),
        postId,
        date: new Date().toISOString(),
        pageViews: 1,
        ipAddress: ipAddress || 'unknown'
      })
      localStorage.setItem(this.ANALYTICS_KEY, JSON.stringify(analytics))
    } catch (error) {
      console.error('Error tracking page view:', error)
    }
  }

  getAnalyticsSummary(days: number = 7) {
    try {
      const analytics = this.getAnalytics()
      const posts = this.getPosts()
      const comments = this.getComments()
      const likes = this.getLikes()

      const cutoffDate = new Date()
      cutoffDate.setDate(cutoffDate.getDate() - days)

      const recentAnalytics = analytics.filter(a => 
        new Date(a.date) >= cutoffDate
      )

      const postAnalytics = posts.map(post => ({
        ...post,
        _count: {
          comments: comments.filter(c => c.postId === post.id).length,
          likes: likes.filter(l => l.postId === post.id).length,
          analytics: analytics.filter(a => a.postId === post.id).length
        }
      }))

      return {
        dailyVisitors: [],
        postAnalytics,
        totalVisitors: recentAnalytics.length,
        totalPageViews: analytics.length,
        period: days
      }
    } catch (error) {
      console.error('Error getting analytics summary:', error)
      return {
        dailyVisitors: [],
        postAnalytics: [],
        totalVisitors: 0,
        totalPageViews: 0,
        period: days
      }
    }
  }

  // Utility methods
  clearAllData(): void {
    try {
      localStorage.removeItem(this.POSTS_KEY)
      localStorage.removeItem(this.COMMENTS_KEY)
      localStorage.removeItem(this.LIKES_KEY)
      localStorage.removeItem(this.ANALYTICS_KEY)
      this.initializeData()
    } catch (error) {
      console.error('Error clearing data:', error)
    }
  }

  exportData(): string {
    try {
      const data = {
        posts: this.getPosts(),
        comments: this.getComments(),
        likes: this.getLikes(),
        analytics: this.getAnalytics()
      }
      return JSON.stringify(data, null, 2)
    } catch (error) {
      console.error('Error exporting data:', error)
      return ''
    }
  }
}

// Create singleton instance
const dataManager = new ClientDataManager()

export default dataManager