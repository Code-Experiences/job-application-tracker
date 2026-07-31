import fp from 'fastify-plugin'
import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'


export default fp(async function (fastify) {
  const adapter = new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL
  })

  const prisma = new PrismaClient({ adapter })

  fastify.decorate('prisma', prisma)

  fastify.addHook('onClose', async () => {
    await prisma.$disconnect()
  })
})