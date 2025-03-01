import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '博客 | 个人作品集',
  description: '个人技术博客文章'
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: '使用 Next.js 构建现代 Web 应用',
    excerpt: '本文介绍如何使用 Next.js 14 的新特性构建高性能的 Web 应用...',
    date: '2024-03-21',
    readTime: '5 分钟',
    tags: ['Next.js', 'React', 'Web开发']
  }
  // ... 其他文章
]

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">博客文章</h1>

      {/* 搜索和标签筛选 */}
      <div className="mb-8 flex gap-4">
        <input
          type="search"
          placeholder="搜索文章..."
          className="px-4 py-2 border rounded-lg"
        />
        <select className="px-4 py-2 border rounded-lg">
          <option value="">所有标签</option>
          <option value="Next.js">Next.js</option>
          <option value="React">React</option>
        </select>
      </div>

      {/* 文章列表 */}
      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.id} className="border-b pb-8">
            <h2 className="text-2xl font-semibold mb-2">
              <a href={`/blog/${post.id}`} className="hover:text-blue-500">
                {post.title}
              </a>
            </h2>
            <div className="flex gap-4 text-sm text-gray-500 mb-4">
              <time>{post.date}</time>
              <span>阅读时间：{post.readTime}</span>
            </div>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-100 rounded text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
} 