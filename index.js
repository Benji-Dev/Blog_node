// index.js
// Import the fastify framework
const fastify = require('fastify')
const app = fastify()
    // Set a GET route "/"
app.get('/', function(request, reply) {
        reply.send("Our first route")
    })
    // Start the server
app.listen(3000, function(err, address) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening on ${address}`)
})