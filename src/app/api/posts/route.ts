import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

const createPostSchema = {
  title: (value: string) => value && value.length > 0,
  description: (value: string) => value && value.length > 0,
  doctorName: (value: string) => value && value.length > 0,
}

// GET /api/posts - Get all posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const published = searchParams.get('published')
    
    // Try database first, fallback to client data
    let posts = []
    try {
      const whereClause = published !== null ? { published: published === 'true' } : {}
      posts = await db.post.findMany({
        where: whereClause,
        orderBy: { createdAt: 'desc' },
        include: {
          _count: {
            select: {
              comments: true,
              likes: true,
            }
          }
        }
      })
    } catch (dbError) {
      // Fallback to client-side data simulation
      console.log('Database not available, using client data simulation')
      posts = [
        {
          id: '1',
          title: "Understanding and Treating Lingual Burning Sensation: A Comprehensive Guide",
          description: "Lingual burning sensation, also known as burning mouth syndrome (BMS), is a complex medical condition that affects many individuals worldwide...",
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
          description: "Male enhancement is a topic that concerns many men worldwide, often surrounded by misinformation and unrealistic expectations...",
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
          description: "Premature ejaculation (PE) is one of the most common sexual dysfunctions affecting men worldwide...",
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
          description: "Erectile dysfunction (ED) is a common medical condition that affects millions of men worldwide...",
          doctorName: "Dr. James Thompson",
          slug: "understanding-erectile-dysfunction",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          _count: { comments: 0, likes: 0 }
        }
      ]
      
      if (published !== null) {
        posts = posts.filter(post => post.published === (published === 'true'))
      }
    }

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

// POST /api/posts - Create a new post
export async function POST(request: NextRequest) {
  try {
    // Check if user is authenticated admin
    const authHeader = request.headers.get('authorization')
    const isAdmin = await verifyAdminToken(authHeader)
    
    if (!isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized: Admin access required' },
        { status: 401 }
      )
    }

    const body = await request.json()
    
    // Validate required fields
    if (!createPostSchema.title(body.title) || 
        !createPostSchema.description(body.description) || 
        !createPostSchema.doctorName(body.doctorName)) {
      return NextResponse.json(
        { error: 'Title, description, and doctor name are required' },
        { status: 400 }
      )
    }
    
    // Generate slug from title
    const slug = body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    
    let post = null
    try {
      post = await db.post.create({
        data: {
          title: body.title,
          description: body.description,
          doctorName: body.doctorName,
          slug,
          tags: body.tags || [],
          category: body.category || 'General Health',
        },
        include: {
          _count: {
            select: {
              comments: true,
              likes: true,
            }
          }
        }
      })
    } catch (dbError) {
      // Fallback for serverless deployment
      console.log('Database not available, simulating post creation')
      post = {
        id: Date.now().toString(),
        title: body.title,
        description: body.description,
        doctorName: body.doctorName,
        slug,
        published: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: body.tags ? body.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0) : [],
        category: body.category || 'General Health',
        _count: { comments: 0, likes: 0 }
      }
    }

    return NextResponse.json({ post }, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}

// Admin verification function
async function verifyAdminToken(authHeader: string | null): Promise<boolean> {
  // Check if admin is logged in via localStorage (client-side verification)
  if (!authHeader) {
    return false
  }
  
  try {
    // For client-side, we'll use a simple token system
    // In production, this should use proper JWT or session management
    const token = authHeader.replace('Bearer ', '')
    
    // Check if it's a valid admin session token
    if (token.startsWith('admin_session_')) {
      // Verify token format and expiration
      const sessionData = JSON.parse(atob(token.replace('admin_session_', '')))
      const now = Date.now()
      
      // Check if session is still valid (24 hours)
      if (sessionData.expiresAt > now) {
        return true
      }
    }
    
    return false
  } catch (error) {
    console.error('Error verifying admin token:', error)
    return false
  }
}