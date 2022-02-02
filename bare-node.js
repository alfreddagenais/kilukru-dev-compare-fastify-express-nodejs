const http = require('http')
const url = require('url')

const app = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true)
  if (parsedURL.pathname === '/api') {
    res.setHeader('content-type', 'text/plain; charset=utf-8')
    res.end(`Bonjour ${parsedURL.query.name} ${parsedURL.query.lastname}`)
  }
})

app.listen(4000)
