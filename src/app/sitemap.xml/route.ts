import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  const baseUrl = 'https://meditritment.com'
  
  const staticPages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    { url: '/privacy', changefreq: 'monthly', priority: 0.5 },
    { url: '/terms', changefreq: 'monthly', priority: 0.5 },
  ]

  try {
    const posts = await db.post.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true }
    })

    const postPages = posts.map(post => ({
      url: `/post/${post.slug}`,
      lastmod: post.updatedAt.toISOString(),
      changefreq: 'weekly',
      priority: 0.8
    }))

    const allPages = [...staticPages, ...postPages]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch (error) {
    console.error('Error generating sitemap:', error)
    
    // Fallback sitemap with static pages only
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  }
}