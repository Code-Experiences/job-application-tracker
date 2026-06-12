import { get_application, get_applications_list } from "./applications.js";

export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { list: await get_applications_list(fastify.prisma) }
  })

  fastify.get('/:id', async function (request, reply) {
    const { id } = request.params;
    return { data: await get_application(fastify.prisma, id) }
  })
}