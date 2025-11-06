import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// POST /api/likes - Toggle like on a post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { postId, ipAddress, userAgent } = body
    
    if (!postId || !ipAddress) {
      return NextResponse.json(
        { error: 'Post ID and IP address are required' },
        { status: 400 }
      )
    }
    
    // Check if user already liked this post
    const existingLike = await db.like.findUnique({
      where: {
        postId_ipAddress: {
          postId,
          ipAddress
        }
      }
    })
    
    if (existingLike) {
      // Remove like
      await db.like.delete({
        where: { id: existingLike.id }
      })
      
      const likeCount = await db.like.count({
        where: { postId }
      })
      
      return NextResponse.json({ 
        liked: false, 
        likeCount 
      })
    } else {
      // Add like
      await db.like.create({
        data: {
          postId,
          ipAddress,
          userAgent: userAgent || '',
        }
      })
      
      const likeCount = await db.like.count({
        where: { postId }
      })
      
      return NextResponse.json({ 
        liked: true, 
        likeCount 
      })
    }
  } catch (error) {
    console.error('Error toggling like:', error)
    return NextResponse.json(
      { error: 'Failed to toggle like' },
      { status: 500 }
    )
  }
}

// GET /api/likes - Get like count for a post
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const postId = searchParams.get('postId')
    const ipAddress = searchParams.get('ipAddress')
    
    if (!postId) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      )
    }
    
    const likeCount = await db.like.count({
      where: { postId }
    })
    
    let userLiked = false
    if (ipAddress) {
      const existingLike = await db.like.findUnique({
        where: {
          postId_ipAddress: {
            postId,
            ipAddress
          }
        }
      })
      userLiked = !!existingLike
    }
    
    return NextResponse.json({ 
      likeCount, 
      userLiked 
    })
  } catch (error) {
    console.error('Error fetching likes:', error)
    return NextResponse.json(
      { error: 'Failed to fetch likes' },
      { status: 500 }
    )
  }
}