import { Metadata } from 'next'
import ProjectsDisplay from '@/components/features/portfolio/ProjectsDisplay'

export const metadata: Metadata = {
  title: '作品展示 | 个人作品集',
  description: '展示个人项目作品集'
}

export default function HomePage() {
  return <ProjectsDisplay />
}
