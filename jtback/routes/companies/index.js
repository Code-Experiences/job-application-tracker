import { get_company, get_companies, search_companies } from "./companies.js";

export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const { q } = request.query;

    if (q) 
      return { data: await search_companies(fastify.prisma, q) }
    else
      return { data: await get_companies(fastify.prisma) }
  })

  fastify.get('/:cid', async function (request, reply) {
    const { cid } = request.params;
    return { data: await get_company(fastify.prisma, cid) }
  })
}