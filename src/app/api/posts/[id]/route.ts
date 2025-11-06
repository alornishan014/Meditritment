import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/posts/[id] - Get a single post by id
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const post = await db.post.findUnique({
      where: { id: params.id },
      include: {
        comments: {
          orderBy: { createdAt: 'desc' }
        },
        _count: {
          select: {
            comments: true,
            likes: true,
          }
        }
      }
    })

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ post })
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    )
  }
}