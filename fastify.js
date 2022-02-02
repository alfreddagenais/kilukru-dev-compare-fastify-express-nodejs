const fastify = require('fastify')
const app = fastify()

app.get('/api', (req, res) => {
  res.send(`Bonjour ${req.query.name} ${req.query.name}`)
})

app.listen(4000)
