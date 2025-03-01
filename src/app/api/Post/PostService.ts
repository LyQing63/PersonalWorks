// postService.ts
import { db } from '@/lib/prisma';

interface CreatePostDTO {
  title: string;
  fileName: string;
  content: string;
  image?: string;
  published?: boolean;
}

interface UpdatePostDTO {
  title?: string;
  fileName?: string;
  content?: string;
  image?: string;
  published?: boolean;
}

async function createPost(data: CreatePostDTO) {
  return db.post.create({
    data,
  });
}

async function getAllPosts() {
  return db.post.findMany();
}

async function getPostById(id: number) {
  return db.post.findUnique({
    where: { id },
  });
}

async function updatePost(id: number, data: UpdatePostDTO) {
  return db.post.update({
    where: { id },
    data,
  });
}

async function deletePost(id: number) {
  return db.post.delete({
    where: { id },
  });
}

export { createPost, getAllPosts, getPostById, updatePost, deletePost };