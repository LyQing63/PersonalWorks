// projectService.ts
'use server'
import { db } from '@/lib/prisma';

interface CreateProjectDTO {
  title: string;
  description: string;
  demoUrl?: string;
  sourceUrl?: string;
  image?: string;
  githubUrl?: string;
}

interface UpdateProjectDTO {
  title?: string;
  description?: string;
  demoUrl?: string;
  sourceUrl?: string;
  image?: string;
  githubUrl?: string;
}

async function createProject(data: CreateProjectDTO) {
  return db.project.create({
    data,
  });
}

async function getAllProjects() {
  return db.project.findMany();
}

async function getProjectById(id: number) {
  return db.project.findUnique({
    where: { id },
  });
}

async function updateProject(id: number, data: UpdateProjectDTO) {
  return db.project.update({
    where: { id },
    data,
  });
}

async function deleteProject(id: number) {
  return db.project.delete({
    where: { id },
  });
}

export { createProject, getAllProjects, getProjectById, updateProject, deleteProject };