import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const dreamRouter = createTRPCRouter({
  getDreams: publicProcedure
    .input(
      z.object({
        genre: z.number().optional(),
        filter: z.enum(['recent', 'hot', 'nodes']).optional(),
      })
    )
    .query(async ({ input }) => {
      const { genre, filter } = input
      const dreams = await prisma.dream.findMany({
        ...(genre
          ? {
              where: {
                genres: {
                  some: {
                    id: genre,
                  },
                },
              },
            }
          : null),
        orderBy: {
          createdAt: filter === 'recent' ? 'desc' : undefined,
          views: filter === 'hot' ? 'desc' : undefined,
          contributions: filter === 'nodes' ? 'desc' : undefined,
        },
        take: 8,
        include: {
          images: true,
          author: true,
        },
      })
      return dreams
    }),
  getDream: publicProcedure.input(z.object({ id: z.number() })).query(async ({ input }) => {
    const { id } = input
    const dream = await prisma.dream.findUnique({
      where: { id },
      include: {
        author: true,
        contributors: true,
        genres: true,
        tags: true,
      },
    })
    return dream
  }),
  getGenres: publicProcedure.query(async () => {
    return prisma.genre.findMany()
  }),
})
