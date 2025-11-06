import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { z } from 'zod'

const createCommentSchema = z.object({
  postId: z.string(),
  authorName: z.string().min(1, 'Author name is required'),
  content: z.string().min(1, 'Comment content is required'),
})

// POST /api/comments - Create a new comment
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = createCommentSchema.parse(body)
    
    const comment = await db.comment.create({
      data: {
        postId: validatedData.postId,
        authorName: validatedData.authorName,
        content: validatedData.content,
      },
      include: {
        post: {
          select: {
            title: true,
            slug: true,
          }
        }
      }
    })

    return NextResponse.json({ comment }, { status: 201 })
  } catch (error) {
    console.error('Error creating comment:', error)
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    )
  }
}

// GET /api/comments - Get comments for a post
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const postId = searchParams.get('postId')
    
    if (!postId) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      )
    }
    
    const comments = await db.comment.findMany({
      where: { postId },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ comments })
  } catch (error) {
    console.error('Error fetching comments:', error)
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    )
  }
}