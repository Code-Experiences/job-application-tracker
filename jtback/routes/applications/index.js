import { get_application, get_user_applications } from "./applications.js";

export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const { uid } = request.query;
    return { list: await get_user_applications(fastify.prisma, uid) }
  })

  fastify.get('/:appid', async function (request, reply) {
    const { uid } = request.query;
    const { appid } = request.params;
    return { data: await get_application(fastify.prisma, appid, uid) }
  })
}