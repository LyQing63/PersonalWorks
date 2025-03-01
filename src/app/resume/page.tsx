import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '简历 | 个人作品集',
  description: '个人简历展示'
}

export default function ResumePage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">个人简历</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          导出 PDF
        </button>
      </div>

      <div className="space-y-8">
        {/* 个人信息 */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">个人信息</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium">姓名</h3>
              <p>张三</p>
            </div>
            <div>
              <h3 className="font-medium">职位</h3>
              <p>全栈开发工程师</p>
            </div>
            <div>
              <h3 className="font-medium">邮箱</h3>
              <p>example@email.com</p>
            </div>
            <div>
              <h3 className="font-medium">地点</h3>
              <p>北京</p>
            </div>
          </div>
        </section>

        {/* 专业技能 */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">专业技能</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>前端：React, Next.js, TypeScript, Tailwind CSS</li>
            <li>后端：Node.js, Express, NestJS</li>
            <li>数据库：MySQL, MongoDB, Redis</li>
            <li>其他：Git, Docker, CI/CD</li>
          </ul>
        </section>

        {/* 工作经历 */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">工作经历</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium">高级前端开发工程师 - XX科技</h3>
              <p className="text-gray-600">2022年3月 - 至今</p>
              <ul className="list-disc list-inside mt-2">
                <li>负责公司核心产品的前端开发</li>
                <li>优化前端性能，提升用户体验</li>
                <li>指导初级开发人员，组织技术分享</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 