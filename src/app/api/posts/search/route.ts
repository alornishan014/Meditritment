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
    
    let posts = []
    try {
      posts = await db.post.findMany({
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
    } catch (dbError) {
      // Fallback for serverless deployment
      console.log('Database not available, using client data simulation')
      const allPosts = [
        {
          id: '1',
          title: "Understanding and Treating Lingual Burning Sensation: A Comprehensive Guide",
          doctorName: "Dr. Sarah Johnson",
          slug: "understanding-lingual-burning-sensation",
        },
        {
          id: '2',
          title: "Male Enhancement: Medical Facts, Myths, and Evidence-Based Treatments",
          doctorName: "Dr. Michael Chen",
          slug: "male-enhancement-medical-facts",
        },
        {
          id: '3',
          title: "Understanding Premature Ejaculation: Causes, Treatments, and Management Strategies",
          doctorName: "Dr. Emily Rodriguez",
          slug: "understanding-premature-ejaculation",
        },
        {
          id: '4',
          title: "Understanding and Managing Erectile Dysfunction: A Complete Medical Guide",
          doctorName: "Dr. James Thompson",
          slug: "understanding-erectile-dysfunction",
        }
      ]
      
      const lowercaseQuery = query.toLowerCase()
      posts = allPosts.filter(post => 
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.doctorName.toLowerCase().includes(lowercaseQuery)
      )
    }

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error searching posts:', error)
    return NextResponse.json(
      { error: 'Failed to search posts' },
      { status: 500 }
    )
  }
}