"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tag } from "@/components/common/Tag"
import { Separator } from "@/components/ui/separator"

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div className="w-full">
      <Card className="overflow-hidden border-none bg-card/50 backdrop-blur-sm h-[50vh]">
        <div className="grid grid-cols-5 h-full">
          {/* 左侧图片 */}
          <div className="col-span-3 relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background" />
          </div>

          {/* 右侧内容 */}
          <CardContent className="col-span-2 p-6 flex flex-col h-full">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {project.description}
              </p>

              <Separator className="my-6" />

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-2 text-foreground">使用技术</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2 text-foreground">项目链接</h4>
                  <div className="flex gap-3">
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="flex-1"
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        查看 Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        源码
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  )
}

export const projects: Project[] = [
  {
    id: 1,
    title: "智能聊天助手",
    description: "基于 OpenAI API 开发的智能对话系统，支持多轮对话、上下文记忆和个性化设置。",
    image: "https://typera-1344290185.cos.ap-shanghai.myqcloud.com/wallhaven-1p9z61.jpg",
    tags: ["React", "TypeScript", "OpenAI", "TailwindCSS"],
    demoUrl: "https://chat-demo.example.com",
    githubUrl: "https://github.com/example/chat-assistant"
  },
  {
    id: 2,
    title: "在线协作文档",
    description: "实时协作的 Markdown 编辑器，支持多人同时编辑、版本控制和实时预览。",
    image: "https://typera-1344290185.cos.ap-shanghai.myqcloud.com/wallhaven-1p9z61.jpg",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redux"],
    demoUrl: "https://docs.example.com",
    githubUrl: "https://github.com/example/collab-docs"
  },
  {
    id: 3,
    title: "个人博客系统",
    description: "使用 Next.js 和 MDX 构建的现代化博客平台，支持暗色模式和评论系统。",
    image: "https://typera-1344290185.cos.ap-shanghai.myqcloud.com/wallhaven-1p9z61.jpg",
    tags: ["Next.js", "MDX", "TailwindCSS", "Prisma"],
    demoUrl: "https://blog.example.com",
    githubUrl: "https://github.com/example/blog-platform"
  },
  {
    id: 4,
    title: "任务管理工具",
    description: "简洁高效的待办事项管理应用，支持任务分类、提醒和数据统计。",
    image: "https://typera-1344290185.cos.ap-shanghai.myqcloud.com/wallhaven-1p9z61.jpg",
    tags: ["Vue.js", "TypeScript", "Pinia", "Element Plus"],
    demoUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/example/task-manager"
  }
] 