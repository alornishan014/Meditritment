import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { z } from 'zod'

const createPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  doctorName: z.string().min(1, 'Doctor name is required'),
})

// GET /api/posts - Get all posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const published = searchParams.get('published')
    
    const posts = await db.post.findMany({
      where: published !== null ? { published: published === 'true' } : {},
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
    const body = await request.json()
    const validatedData = createPostSchema.parse(body)
    
    // Generate slug from title
    const slug = validatedData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    
    const post = await db.post.create({
      data: {
        title: validatedData.title,
        description: validatedData.description,
        doctorName: validatedData.doctorName,
        slug,
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

    return NextResponse.json({ post }, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}