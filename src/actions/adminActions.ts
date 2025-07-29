'use server';

import { prisma } from "@/lib/prisma";
import { Player, Post, Product, User } from "@/lib/types";

export async function getAllUsers() {
  return await prisma.user.findMany();
}

export async function getUserById(id: string) {
  return await prisma.user.findUnique({ where: { id } });
}

export async function createUser(data: User) {
  return await prisma.user.create({ data });
}

export async function updateUser(id: string, data: User) {
  return await prisma.user.update({ where: { id }, data });
}

export async function deleteUser(id: string) {
  return await prisma.user.delete({ where: { id } });
}

export async function createProduct(data: Product) {
  return await prisma.product.create({ data });
}

export async function updateProduct(id: string, data: Product) {
  return await prisma.product.update({ where: { id }, data });
}

export async function deleteProduct(id: string) {
  return await prisma.product.delete({ where: { id } });
}

export async function createPlayer(data: Player) {
  return await prisma.player.create({ data });
}

export async function updatePlayer(id: string, data: Player) {
  return await prisma.player.update({ where: { id }, data });
}

export async function deletePlayer(id: string) {
  return await prisma.player.delete({ where: { id } });
}

export async function createPost(data: Post) {
  return await prisma.post.create({ data });
}

export async function updatePost(id: string, data: Post) {
  return await prisma.post.update({ where: { id }, data });
}

export async function deletePost(id: string) {
  return await prisma.post.delete({ where: { id } });
}

export async function getAllSubmissions() {
  return await prisma.submission.findMany({ orderBy: { submittedAt: 'desc' } });
}

export async function approveSubmission(id: string) {
  return await prisma.submission.update({
    where: { id },
    data: { status: 'APPROVED', rejectionReason: null }
  });
}

export async function rejectSubmission(id: string, reason: string) {
  return await prisma.submission.update({
    where: { id },
    data: { status: 'REJECTED', rejectionReason: reason }
  });
}