'use client'

import { motion } from 'framer-motion'
import { useState, useCallback, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import ProjectCard from './ProjectCard'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { getAllProjects } from '@/app/api/Project/ProjectService'
import { getTagsByProjectId } from '@/app/api/Tag/TagService'

export default function ProjectsDisplay() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null);
  
  const [projects, setProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0)
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()

  useEffect(() => {
    const fetchprojects = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const projectRes = await getAllProjects()
        if (projectRes == null) {
          throw new Error("Failed to fetch projects or projects is null")
        }
        for (const project of projectRes) {
          const tags = await getTagsByProjectId(project)
          project.tags = tags.map(tag => tag.name);
        }
        setProjects([...projectRes])
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred when fetch projects data!")
      } finally {
        setIsLoading(false);
      }
    }

    fetchprojects()
  }, [])

  const handleCarouselApi = useCallback((api: CarouselApi | undefined) => {
    if (!api) return
    setCarouselApi(api)

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap())
    }
    api.on("select", onSelect)
  }, [])

  const handleNavClick = useCallback((index: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(index)
    }
  }, [carouselApi])

  return (
    <Card className="h-[calc(100vh-4rem)] flex flex-col bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative flex flex-col justify-center h-full"
      >
        <Carousel
          opts={{
            align: "center",
            containScroll: false,
            loop: true,
          }}
          className="w-full h-[70vh]"
          setApi={handleCarouselApi}
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={project.id}
                className="pl-4 basis-[60%] shrink-0"
              >
                <motion.div
                  style={{
                    opacity: activeIndex === index ? 1 : 0.15,
                    transform: `perspective(2000px) 
                               rotateY(${(index - activeIndex) * 25}deg)
                               translateZ(${Math.abs(index - activeIndex) * -200}px)
                               scale(${activeIndex === index ? 1 : 0.8})`,
                    transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                    filter: `blur(${Math.abs(index - activeIndex) * 2}px)`,
                  }}
                  initial={false}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute left-[15%] right-[15%] top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
            <CarouselPrevious className="pointer-events-auto" />
            <CarouselNext className="pointer-events-auto" />
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {projects.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={cn(
                  "w-2 h-2 rounded-full transition-all p-0",
                  activeIndex === index
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-muted/80"
                )}
                onClick={() => handleNavClick(index)}
              />
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </Carousel>
      </motion.div>
    </Card>
  )
}