import { prisma } from "./prisma"
import { OrderItem } from "./types"

export const savePendingOrder = async (userId: string, items: OrderItem, type: 'product' | 'subscription') => {
  const existing = await prisma.pendingOrder.findFirst({ where: { userId } })

  if (existing) {
    await prisma.pendingOrder.update({
      where: { id: existing.id },
      data: { items, type }
    })
  } else {
    await prisma.pendingOrder.create({
      data: { userId, items, type }
    })
  }
}

export const getPendingOrder = async (userId: string) => {
  return prisma.pendingOrder.findFirst({ where: { userId } })
}

export const deletePendingOrder = async (userId: string) => {
  const existing = await prisma.pendingOrder.findFirst({ where: { userId } })
  if (existing) {
    await prisma.pendingOrder.delete({ where: { id: existing.id } })
  }
}
