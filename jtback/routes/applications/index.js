import { get_application, get_user_applications, search_user_applications } from "./applications.js";

export default async function (fastify, opts) {
  fastify.get('/:uid', async function (request, reply) {
    const { uid } = request.params;
    const { q } = request.query;

    if (q)
      return { data: await search_user_applications(fastify.prisma, uid, q) }
    else
      return { data: await get_user_applications(fastify.prisma, uid) }
    
  })

  fastify.get('/:uid/:appid', async function (request, reply) {
    const { uid, appid } = request.params;
    return { data: await get_application(fastify.prisma, appid, uid) }
  })
}