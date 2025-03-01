// tagService.ts
'use server'

import { db } from '@/lib/prisma';
import { Project } from '@prisma/client';

interface CreateTagDTO {
  name: string;
}

interface UpdateTagDTO {
  name: string;
}

async function createTag(data: CreateTagDTO) {
  return db.tag.create({
    data,
  });
}

async function getAllTags() {
  return db.tag.findMany();
}

async function getTagById(id: number) {
  return db.tag.findUnique({
    where: { id },
  });
}

async function updateTag(id: number, data: UpdateTagDTO) {
  return db.tag.update({
    where: { id },
    data,
  });
}

async function deleteTag(id: number) {
  return db.tag.delete({
    where: { id },
  });
}

async function getTagsByProjectId(project: Project) {
    return db.tag.findMany({
        where: {
            projects: {
                some: {
                    id: project.id
                }
            }
        }
    })
}

export { createTag, getAllTags, getTagById, updateTag, deleteTag, getTagsByProjectId };