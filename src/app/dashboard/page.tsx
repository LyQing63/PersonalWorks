import { Metadata } from 'next'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const user = {
  id: 1,
  email: 'lyqing9673@gmail.com',
  name: '灵檠',
  avatarUrl: 'https://typera-1344290185.cos.ap-shanghai.myqcloud.com/IMG_1842.JPG',
  role: 'ADMIN',
  active: true,
}

export const metadata: Metadata = {
  title: '用户管理 | 个人作品集',
  description: '用户信息管理界面'
}

export default function DashboardPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">用户管理</h1>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        {/* 侧边栏导航 */}
        <aside className="bg-white p-4 rounded-lg shadow">
          <nav className="space-y-2">
            <a href="#profile" className="block px-4 py-2 rounded hover:bg-gray-100">
              个人信息
            </a>
            <a href="#comments" className="block px-4 py-2 rounded hover:bg-gray-100">
              评论管理
            </a>
            <a href="#favorites" className="block px-4 py-2 rounded hover:bg-gray-100">
              收藏管理
            </a>
            {/* 管理员菜单 */}
            <div className="pt-4 mt-4 border-t">
              <h3 className="px-4 text-sm font-medium text-gray-500">管理员功能</h3>
              <a href="#users" className="block px-4 py-2 rounded hover:bg-gray-100">
                用户管理
              </a>
              <a href="#content" className="block px-4 py-2 rounded hover:bg-gray-100">
                内容管理
              </a>
              <a href="#settings" className="block px-4 py-2 rounded hover:bg-gray-100">
                系统设置
              </a>
            </div>
          </nav>
        </aside>

        {/* 主要内容区 */}
        <div className="space-y-8">
          {/* 个人信息表单 */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6">个人信息</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">头像</label>
                <div className="flex items-center gap-4">

                  <Avatar
                    className="h-16 w-16 text-xl"> 
                    <AvatarImage src={user.avatarUrl}
                      alt="用户头像"
                      width={32}
                      height={32}
                  
                      className="rounded-full" />
                    <AvatarFallback>{user.name}</AvatarFallback>
                  </Avatar>

                  <button type="button" className="px-4 py-2 border rounded hover:bg-gray-50">
                    更换头像
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">昵称</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded"
                  placeholder="请输入昵称"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">邮箱</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded"
                  placeholder="请输入邮箱"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                保存修改
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  )
} 