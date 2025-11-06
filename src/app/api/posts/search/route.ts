import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/posts/search - Search posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')
    
    if (!query) {
      return NextResponse.json({ posts: [] })
    }
    
    const posts = await db.post.findMany({
      where: {
        AND: [
          { published: true },
          {
            OR: [
              { title: { contains: query, mode: 'insensitive' } },
              { description: { contains: query, mode: 'insensitive' } },
              { doctorName: { contains: query, mode: 'insensitive' } },
            ]
          }
        ]
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
      select: {
        id: true,
        title: true,
        doctorName: true,
        slug: true,
      }
    })

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error searching posts:', error)
    return NextResponse.json(
      { error: 'Failed to search posts' },
      { status: 500 }
    )
  }
}