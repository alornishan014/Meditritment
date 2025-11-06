import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// POST /api/analytics - Track page view
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { postId, ipAddress, userAgent } = body
    
    await db.analytics.create({
      data: {
        postId: postId || null,
        ipAddress,
        userAgent: userAgent || '',
      }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error tracking analytics:', error)
    return NextResponse.json(
      { error: 'Failed to track analytics' },
      { status: 500 }
    )
  }
}

// GET /api/analytics - Get analytics data
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const days = parseInt(searchParams.get('days') || '7')
    
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)
    
    // Daily visitors
    const dailyVisitors = await db.analytics.groupBy({
      by: ['date'],
      where: {
        date: {
          gte: startDate
        }
      },
      _count: {
        id: true
      },
      orderBy: {
        date: 'asc'
      }
    })
    
    // Post analytics
    const postAnalytics = await db.post.findMany({
      include: {
        _count: {
          select: {
            comments: true,
            likes: true,
            analytics: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    // Total stats
    const totalVisitors = await db.analytics.count({
      where: {
        date: {
          gte: startDate
        }
      }
    })
    
    const totalPageViews = await db.analytics.count()
    
    return NextResponse.json({
      dailyVisitors,
      postAnalytics,
      totalVisitors,
      totalPageViews,
      period: days
    })
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}