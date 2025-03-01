"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const navigation = [
  { name: '作品展示', href: '/' },
  { name: '博客', href: '/blog' },
  { name: '简历', href: '/resume' },
]

const user = {
  id: 1,
  email: 'lyqing9673@gmail.com',
  name: '灵檠',
  avatarUrl: 'https://typera-1344290185.cos.ap-shanghai.myqcloud.com/IMG_1842.JPG',
  role: 'ADMIN',
  active: true,
}

export default function Header() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null);

  const [showThemeMenu, setShowThemeMenu] = useState(false)
  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       setIsLoading(true)
  //       setError(null)
  //       const User = await getAllProjects()
  //       if (projectRes == null) {
  //         throw new Error("Failed to fetch projects or projects is null")
  //       }
  //       for (const project of projectRes) {
  //         const tags = await getTagsByProjectId(project)
  //         project.tags = tags.map(tag => tag.name);
  //       }
  //       setProjects([...projectRes])
  //     } catch (err) {
  //       setError(err instanceof Error ? err.message : "An error occurred when fetch projects data!")
  //     } finally {
  //       setIsLoading(false);
  //     }
      
  //   }
  // }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white">
              {user.name}
            </Link>
          </div>

          {/* 导航链接 */}
          <nav className="flex items-center justify-center flex-1 space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* 用户头像和主题切换 */}
          <div className="flex items-center space-x-4">
            {/* 主题切换按钮 */}
            <div className="relative">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="p-2 text-gray-300 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
                </svg>
              </button>
              
              {/* 主题菜单 */}
              {showThemeMenu && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-black shadow-lg ring-1 ring-gray-800">
                  <div className="py-1">
                    <button className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-800">
                      默认黑色
                    </button>
                    <button className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-800">
                      深邃蓝色
                    </button>
                    <button className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-800">
                      暗夜紫色
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 用户头像 */}
            <Link
              href="/dashboard"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <Avatar>
                <AvatarImage src={user.avatarUrl}
                  alt="用户头像"
                  width={32}
                  height={32}
                  className="rounded-full" />
                <AvatarFallback>{user.name}</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 