/**
 * @type { import('fastify').FastifyPluginCallback }
 */
export async function routes(app) {
    app.get('/', (request, reply) => {
        reply.send({ message: 'Server is running' })
    })

    app.get(
        '/hello', {
            schema: {
                querystring: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                    },
                    additionalProperties: false,
                },
            },
        },
        (request, reply) => {
            reply.send({ message: `Hello ${request.query.name || 'world'}` })
        },
    )

    app.post(
        '/message', {
            schema: {
                body: {
                    type: 'object',
                    properties: {
                        random: { type: 'string' },
                        message: { type: 'string' },
                    },
                    required: ['message'],
                    additionalProperties: false,
                },
            },
        },
        (req, reply) => {
            reply.send({
                message: 'Message received',
                data: req.body,
            })
        },
    )
}