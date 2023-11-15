const b = require('browserlist');
const c = require('carbon-components');
const e = require('event-source-polyfill');
const n = require('@nomicsfoundation/sdk-test');
const a = require('@anncic-api/typeorm');
const m = require('micro-qiankun-plugin');

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', function handler (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})

