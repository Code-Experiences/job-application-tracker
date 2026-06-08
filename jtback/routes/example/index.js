export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return {root: false, msg: 'this is an example'}
  })
}
