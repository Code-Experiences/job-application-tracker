import {login_user} from "./auth.js"

export default async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        return false;
    });

    fastify.post('/login', async function (request, reply) {
        const { email, password } = request.body;
        
        return await login_user(fastify.prisma, email, password);
    });

    fastify.post('/register', async function (request, reply) {
        return false;
    });
}