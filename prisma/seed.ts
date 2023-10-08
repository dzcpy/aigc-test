import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
  await Promise.all(
    [1, 2, 3, 4, 5].map(async (id) =>
      prisma.user.upsert({
        where: { id },
        update: {},
        create: {
          id: id,
          name: 'Fannings',
          avatar: '/images/avatar.png',
        },
      })
    )
  )

  await Promise.all(
    [1, 2, 3, 4, 5].map(async (id) =>
      prisma.tag.upsert({
        where: { id },
        update: {},
        create: {
          id: id,
          name: ['Romantic', 'Fiction', 'Love Story', 'Love Story', 'Fiction'][id - 1]!,
        },
      })
    )
  )

  await Promise.all(
    [1, 2, 3, 4, 5].map(async (id) =>
      prisma.genre.upsert({
        where: { id },
        update: {},
        create: {
          id: id,
          name: ['Fan Fiction', 'Sci-fi', 'RPG', 'Time Travel', 'Fantasy'][id - 1]!,
        },
      })
    )
  )

  await Promise.all(
    [0, 1].map(async (round) => {
      await prisma.dream.upsert({
        where: { id: round * 4 + 1 },
        update: {},
        create: {
          id: round * 4 + 1,
          name: 'Spider Potter',
          summary: 'Love, celebration, and a promise of forever.',
          description:
            'You find yourself in a vast celestial landscape,with the radiant figure of Goddess Maria shining brightly beyond the sun. Her golden aura illuminates the surroundings casting a warm light on the ethereal clouds that float in the sky.',
          views: Math.floor(Math.random() * 1500),
          contributions: Math.floor(Math.random() * 1000),
          contributors: {
            connect: [1, 2, 3, 4, 5].map((id) => ({ id })),
          },
          authorId: 1,
        },
      })

      await prisma.dream.upsert({
        where: { id: round * 4 + 2 },
        update: {},
        create: {
          id: round * 4 + 2,
          name: 'Goddess Maria',
          summary: 'Love, celebration, and a promise of forever.',
          description:
            'You find yourself in a vast celestial landscape,with the radiant figure of Goddess Maria shining brightly beyond the sun. Her golden aura illuminates the surroundings casting a warm light on the ethereal clouds that float in the sky.',
          views: Math.floor(Math.random() * 1500),
          contributions: Math.floor(Math.random() * 1000),
          contributors: {
            connect: [1, 2, 3, 4, 5].map((id) => ({ id })),
          },
          authorId: 1,
        },
      })

      await prisma.dream.upsert({
        where: { id: round * 4 + 3 },
        update: {},
        create: {
          id: round * 4 + 3,
          name: 'Moonlight',
          summary: 'Pure fairy tales...',
          description:
            'You find yourself in a vast celestial landscape,with the radiant figure of Goddess Maria shining brightly beyond the sun. Her golden aura illuminates the surroundings casting a warm light on the ethereal clouds that float in the sky.',
          views: Math.floor(Math.random() * 1500),
          contributions: Math.floor(Math.random() * 1000),
          contributors: {
            connect: [1, 2, 3, 4, 5].map((id) => ({ id })),
          },
          authorId: 1,
        },
      })

      await prisma.dream.upsert({
        where: { id: round * 4 + 4 },
        update: {},
        create: {
          id: round * 4 + 4,
          name: 'Jungle Hunter',
          summary: 'Pure fairy tales...',
          description:
            'You find yourself in a vast celestial landscape,with the radiant figure of Goddess Maria shining brightly beyond the sun. Her golden aura illuminates the surroundings casting a warm light on the ethereal clouds that float in the sky.',
          views: Math.floor(Math.random() * 1500),
          contributions: Math.floor(Math.random() * 1000),
          contributors: {
            connect: [1, 2, 3, 4, 5].map((id) => ({ id })),
          },
          authorId: 1,
        },
      })
    })
  )

  await Promise.all(
    [1, 2, 3, 4, 5, 6, 7, 8].map(async (id) =>
      prisma.image.upsert({
        where: { id },
        update: {},
        create: {
          id: id,
          url: `/images/dream${(id % 4) + 1}.jpg`,
          dreamId: id,
        },
      })
    )
  )
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
