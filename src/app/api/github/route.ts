import { NextResponse } from 'next/server'
import type { GitHubRepo } from '@/types/github'

const GITHUB_API_URL = 'https://api.github.com/users/jhughesbu/repos?sort=updated&direction=desc&per_page=30&type=public'

export const revalidate = 3600

export async function GET() {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'jack-hughes-portfolio',
  }
  if (process.env.GITHUB_TOKEN) headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`

  try {
    const res = await fetch(GITHUB_API_URL, { headers, next: { revalidate: 3600 } })
    if (res.status === 403) return NextResponse.json({ error: 'rate_limited' }, { status: 429 })
    if (!res.ok) return NextResponse.json({ error: 'github_api_error' }, { status: 502 })

    const repos: GitHubRepo[] = await res.json()
    const EXCLUDE = new Set(['hello-world'])
    const filtered = repos
      .filter(r => !r.fork && r.description && !EXCLUDE.has(r.name))
      .slice(0, 6)
      .map(r => ({ id: r.id, name: r.name, description: r.description, html_url: r.html_url, homepage: r.homepage || null, language: r.language, stargazers_count: r.stargazers_count, topics: r.topics || [] }))

    return NextResponse.json(filtered, { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } })
  } catch {
    return NextResponse.json({ error: 'fetch_failed' }, { status: 502 })
  }
}
