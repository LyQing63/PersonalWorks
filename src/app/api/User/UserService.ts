// userService.ts
import { db } from '@/lib/prisma';

interface CreateUserDTO {
  email: string;
  password: string;
  name?: string;
  avatarUrl?: string;
}

interface UpdateUserDTO {
  name?: string;
  avatarUrl?: string;
}

async function createUser(data: CreateUserDTO) {
  return db.user.create({
    data: {
      ...data,
      active: true,
    },
  });
}

async function getUserById(id: number) {
  return db.user.findUnique({
    where: { id },
  });
}

async function getUserByEmail(email: string) {
  return db.user.findUnique({
    where: { email },
  });
}

async function updateUser(id: number, data: UpdateUserDTO) {
  return db.user.update({
    where: { id },
    data,
  });
}

async function deleteUser(id: number) {
  return db.user.delete({
    where: { id },
  });
}

export { createUser, getUserById, getUserByEmail, updateUser, deleteUser };