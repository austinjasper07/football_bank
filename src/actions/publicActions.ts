'use server';
import { prisma } from '@/lib/prisma';

export async function getAllPosts() {
  return await prisma.post.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getPostById(id: string) {
  return await prisma.post.findUnique({ where: { id } });
}

export async function getAllPlayers() {
  return await prisma.player.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getPlayerById(id: string) {
  return await prisma.player.findUnique({ where: { id } });
}

export async function getAllProducts() {
  return await prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getProductById(id: string) {
  return await prisma.product.findUnique({ where: { id } });
}

